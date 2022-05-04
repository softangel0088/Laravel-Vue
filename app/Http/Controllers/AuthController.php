<?php

namespace App\Http\Controllers;

use App\Mail\ResetPassword;
use App\Mail\ResetPasswordSuccess;
use App\Mail\Welcome;
use App\Models\User;
use App\Models\User\Company;
use App\Models\User\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Auth\Events\PasswordReset;


class AuthController extends Controller
{
    public $successStatus = 200;


    public function validatePasswordRequest(Request $request)
    {
        $user = DB::table('users')->where('email', '=', $request->email)->first();


        //Check if the user exists
        if (count((array)$user) == 0) {
            return response()->json(['email' => trans('User does not exist')]);
        }


        //Create Password Reset Token
        $query = DB::table('password_resets');

            $res = $query->insert([
            'email' => $request->email,
            'token' => Str::uuid(),
            'created_at' => Carbon::now()
        ]);


        //Get the token just created above
        $tokenData = DB::table('password_resets')->where('email', $request->email)->first();


        if ($this->sendResetEmail($request->email, $tokenData->token)) {
            return response()->json( 'A reset link has been sent to your email address.');
        } else {
            return response()->json(['error' => 'A Network Error occurred. Please try again.']);
        }

    }

    private function sendResetEmail($email, $token)
    {
        //Retrieve the user from the database
        $user = DB::table('users')->where('email', $email)->select('name', 'email')->first();
        //Generate, the password reset link. The token generated is embedded in the link
        $link = 'https://portal.uping.co.uk' . '/reset-password/' . $token . '/' . $user->email;

        try {

            Log::debug('Reset Email Sent::', (array) $user->email);
            //Here send the link with CURL with an external email API
             Mail::to($user->email)->send(new ResetPassword($token, $link, $user));

             return true;
        } catch (\Exception $e) {
            return false;
        }
    }
    private function sendSuccessEmail($email)
    {
        //Retrieve the user from the database
        $user = DB::table('users')->where('email', $email)->select('name', 'email')->first();


        try {

            //Here send the link with CURL with an external email API
            Mail::to($user->email)->send(new ResetPasswordSuccess($user));

            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    public function resetPassword(Request $request)
    {
        Log::debug('REQ::', (array)$request->input());
        //Validate input
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
            'cPassword' => 'required',
            'token' => 'required']);

        //check if payload is valid before moving on
        if ($validator->fails()) {
            Log::debug('here');

            return redirect()->back()->withErrors(['email' => 'Please complete the form']);
        }
        Log::debug('DEBUG::', (array)$request->password);

        $password = $request->password;
        // Validate the token
        $tokenData = DB::table('password_resets')->where('token', $request->token)->first();
//        Log::debug('DEBUG::', (array)$tokenData);
        // Redirect the user back to the password reset request form if the token is invalid
        if (!$tokenData) return response()->json('Invalid Token');

        $user = User::where('email', $tokenData->email)->first();
//        Log::debug('DEBUG::', (array)$user);
        // Redirect the user back if the email is invalid
        if (!$user) return response()->json(['email' => 'Email not found']);

        //Hash and update the new password
        $user->password = Hash::make($password);
        $res = $user->update(); //or $user->save();
//        Log::debug('DEBUG::', (array)$res);

        //login the user immediately they change password successfully
//        Auth::login($user);

        //Delete the token
        DB::table('password_resets')->where('email', $user->email)->delete();

        //Send Email Reset Success Email
        if ($this->sendSuccessEmail($tokenData->email)) {
            return response()->json('Successfully changed password', 200);
        }
    }

        /**
         * Send the password reset notification.
         *
         * @param  string  $token
         * @return void
         */
        public function sendPasswordResetNotification($token)
    {
        $this->notify(new PasswordReset($token));
    }









    //register api
    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'username' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'confirmation_password' => 'required|same:password',
        ]);


        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()],401);
        }

        try {
            $user = new User();
            $user->name = $request['name'];
            $user->username = $request['username'];
            $user->email = $request['email'];
            $user->password = bcrypt($request['password']);
            $user->status = 1;
            $user->is_admin = 0;
            $user->role = 'Partner';
            $user->save();


            $company = new Company();
            $company->user_id = $user->id;
            $company->save();

            $payment = new Payment();
            $payment->user_id = $user->id;
            $payment->save();

//            Event::dispatch(Welcome)
//            Mail::to($user->email)->send(new Welcome($user));

            return response()->json([
                'message'=> 'Account Successfully registered',
                'user'=>$user,
            ], $this->successStatus);

        } catch(\Exception $e) {
            Log::debug($e);
            return response()->json(['message' => 'Error creating account'], 400);

        }
    }

    /**
     * Get a JWT via given credentials.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);

        }
        if (! $token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return $this->createNewToken($token);
    }


    // user logout api
    public function logout()
    {
        $this->guard()->logout();
        return response()->json([
            'status' => 'success',
            'msg' => 'Logged out Successfully.'
        ], 200);
    }
    public function user(Request $request)
    {
        $user = User::find(Auth::user()->id);
        return response()->json([
            'status' => 'success',
            'data' => $user
        ]);
    }
    /**
     * Refresh JWT token
     */
    public function refresh()
    {
        return $this->createNewToken(auth()->refresh());
    }
    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userProfile() {
        return response()->json(auth()->user());
    }
    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
    /**
     * Return auth guard
     */
//    private function guard()
//    {
//        return Auth::guard();
//    }


}
