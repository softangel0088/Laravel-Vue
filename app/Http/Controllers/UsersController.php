<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Buyer\Buyer;
use App\Models\Buyer\BuyerSetup;
use App\Models\Mapping\Mapping;
use App\Models\Partner\Partner;
use App\Models\User;
use App\Models\User\Company;
use App\Models\User\Payment;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;

class UsersController extends Controller
{

//    /**
//     * Handle reset password
//     * @param Request $request
//     * @return
//     */
//    public function callResetPassword(Request $request)
//    {
//        return $this->reset($request);
//    }
//    /**
//     * Reset the given user's password.
//     *
//     * @param  \Illuminate\Contracts\Auth\CanResetPassword  $user
//     * @param  string  $password
//     * @return void
//     */
//    protected function resetPassword($user, $password)
//    {
//        $user->password = Hash::make($password);
//        $user->save();
//
//        event(new PasswordReset($user));
//    }
//    /**
//     * Get the response for a successful password reset.
//     *
//     * @param  \Illuminate\Http\Request  $request
//     * @param  string  $response
//     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
//     */
//    protected function sendResetResponse(Request $request, $response)
//    {
//        return response()->json(['message' => 'Password reset successfully.']);
//    }

//    /**
//     * Get the response for a failed password reset.
//     *
//     * @param  \Illuminate\Http\Request  $request
//     * @param  string  $response
//     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
//     */
//    protected function sendResetFailedResponse(Request $request, $response)
//    {
//        return response()->json(['message' => 'Failed, Invalid Token.']);
//    }

    /**
     * Send password reset link.
//     * @param Request $request
//     * @return
//     */
//    public function sendPasswordResetLink(Request $request)
//    {
//        return $this->sendResetLinkEmail($request);
//    }

    public function index(Request $request) {

        $perPage = $request->input("perPage");
        $role = $request->input("role");
        $status = $request->input("status");


        $wherelist = array();
        if ($role != null) {
            $wherelist[] = ['is_admin', '=', $role];
        }
        if ($status != null) {
            $wherelist[] = ['status', '=', $status];
        }

        $users = User::with(['partner', 'company', 'payment'])->where($wherelist)->paginate($perPage);

        return Response::json(['users' => $users]);
    }

    public function edit(Request $request, $id)
    {
        $user = User::with(['partner', 'company',  'payment'])->where('id',$id)->first();


        return Response::json(['user' => $user]);
    }
    public function update(Request $request, $id)
    {
//        dd($request->input());
        $user = User::find($id);
        $user->name = $request['name'];
        $user->username = $request['username'];
        $user->avatar = $request['avatar'] ?? 'default.jpg';
        $user->email = $request['email'];
        $user->is_admin = $request['is_admin'] ?? 0;
        $user->status = $request['status'];
        $user->role = $request['role'] ?? 1;

        $data = $user->toArray();
        $res = $user->save($data);
//        dd($res);

        return response()->json('User updated successfully.');
    }
    public function store(Request $request) {


        $user = new User();
        $user->name = $request['user']['name'];
        $user->username = $request['user']['username'];
        $user->email = $request['user']['email'];
        $user->password = Hash::make('12345');
        $user->is_admin = '0';
        $user->status =  1;
        $user->role = $request['user']['role']  ?? 1;;
        $user->save();

        $company = new Company();
        $company->user_id = $user->id;
        $company->name = $request['user']['company_name'];
        $res = $company->save();

        $payment = new Payment();
        $payment->user_id =$user->id;
        $payment->save();

        return $user;
    }
    public  function show(Request $request, $id){
        $user = User::with(['partner', 'company', 'payment'])->where('id',$id)->first();


        return Response::json(['user' => $user]);

    }
    public function destroy($id){

        $user = User::find($id);

        $res = $user->delete();

        return response()->json('User deleted successfully.');

    }

    public function getUserData($id)
    {
        $user = User::find($id)->with('company')->first();

//        $user['company'] = Company::where('user_id', $id)->first();


        return Response::json(['user' => $user], 200);

    }


    public function updateAccountInfo(Request $request, $id)
    {

//        dd($request->input());
        $user = User::find($id);
        $user->name = $request['user']['name'];
        $user->avatar = $request['user']['avatar'] ?? 'default.jpg';
        $user->username = $request['user']['username'];
        $user->email = $request['user']['email'];
        $user->is_admin =  0;
        $user->status = $request['user']['status'];

//        $company_info = Company::where('user_id', $user->id)->first();
//        $company_info->phone = $request['phone'] ?? '';
//        $company_info->country = $request['country'] ?? '';

//        $data = $company_info->toArray();
//        $res = $company_info->save($data);

        $data = $user->toArray();
        $res = $user->save($data);


        return Response::json('Account updated successfully.', 200);
    }

    public function UpdateAccountPassword(Request $request, $id)
    {
        $user = User::find($id);
        $res = $user->update(['password' => Hash::make($request['value'])]);

        return Response::json('Password changed', 200);

//
//            $request->validate([
//                'current_password' => ['required', new MatchOldPassword],
//                'new_password' => ['required'],
//                'new_confirm_password' => ['same:new_password'],
//            ]);
    }


    public function updateCompany(Request $request, $id)
    {

//        dd($request->input());
        $company_info = Company::find($id);
        $company_info->name = $request['name'] ?? '';
        $company_info->phone = $request['phone'] ?? '';
//        $company_info->birth_date = $request['birth_date'] ?? '';
        $company_info->website = $request['website'] ?? '';
        $company_info->skype = $request['skype'] ?? '';
        $company_info->contact_options = $request['contact_options'] ?? '';
        $company_info->address1 = $request['address1'] ?? '';
        $company_info->address2 = $request['address2'] ?? '';
        $company_info->postcode = $request['postcode'] ?? '';
        $company_info->city = $request['city'] ?? '';
        $company_info->state = $request['state'] ?? '';
        $company_info->country = $request['country'] ?? '';

        $data = $company_info->toArray();
        $res = $company_info->save($data);
//        dd($res);

        return response()->json('User Information updated successfully.');

    }



}
