<?php

namespace App\Http\Controllers\Partner;

use App\Models\Lead\UKLead;
use App\Models\Lead\USLead;
use App\Models\Partner\Partner;
use App\Models\User;
use App\Models\User\Company;
use App\Rules\MatchOldPassword;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;

class PartController extends Controller
{
    /**
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function getPartnerStatusUK(Request $request, $id): JsonResponse
    {
        $partner = Partner::where('user_id', $id)->where('lead_type', 1)->get();

        if($partner->isNotEmpty()) {
            return Response::json('Partner Active');
        } else {
            return Response::json('Partner Inactive');
        }
    }

    /**
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function getPartnerStatusUS(Request $request, $id): JsonResponse
    {
        $partner = Partner::where('user_id', $id)->where('lead_type', 2)->get();

        if($partner->isNotEmpty()) {
            return Response::json('Partner Active');
        } else {
            return Response::json('Partner Inactive');
        }
    }

    /**
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function getPartnerReferralLink(Request $request, $id): JsonResponse
    {
        $partner = Partner::where('user_id', $id)->first();


        if($partner !== null) {
            return Response::json($partner->vendor_id, 200);
        } else {
            return Response::json(['Not Active']);
        }
    }

    /**
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function getFilterDataUK(Request $request, $id): JsonResponse
    {
        $partner = Partner::where('user_id', $id)->first();
        $vendor_id = $partner->vendor_id;

        $filterData= [];
        $filterData['subIds'] = UKLead::where('vid', $vendor_id)->groupBy('subid')->whereNotNull('subid')->get(['subid']);
        $filterData['tierIds'] = UKLead::where('vid', $vendor_id)->groupBy('tier')->whereNotNull('tier')->get(['tier']);
        $filterData['vidPriceIds'] = UKLead::where('vid', $vendor_id)->groupBy('vidLeadPrice')->whereNotNull('vidLeadPrice')->get(['vidLeadPrice']);

        return Response::json(['filterData' => $filterData], 200);
    }

    /**
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function getFilterDataUS(Request $request, $id): JsonResponse
    {
        $partner = Partner::where('user_id', $id)->first();
        $vendor_id = $partner->vendor_id;

        $filterData= [];
        $filterData['subIds'] = USLead::where('vid', $vendor_id)->groupBy('subid')->whereNotNull('subid')->get(['subid']);
        $filterData['tierIds'] = USLead::where('vid', $vendor_id)->groupBy('tier')->whereNotNull('tier')->get(['tier']);
        $filterData['vidPriceIds'] = USLead::where('vid', $vendor_id)->groupBy('vidLeadPrice')->whereNotNull('vidLeadPrice')->get(['vidLeadPrice']);

        return Response::json(['filterData' => $filterData], 200);
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function getUserData($id): JsonResponse
    {
        $user = User::find($id);
        $user['company'] = Company::where('user_id', $id)->first();

        return Response::json(['user' => $user], 200);
    }

    /**
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function updateAccountInfo(Request $request, $id): JsonResponse
    {
        $user = User::find($id);
        $user->name = $request['user']['name'];
        $user->avatar = $request['user']['avatar'] ?? 'default.jpg';
        $user->username = $request['user']['username'];
        $user->email = $request['user']['email'];
        $user->is_admin =  0;
        $user->status = $request['user']['status'] ?? 1;
        $res = $user->save();

        return Response::json('Account updated successfully.', 200);
    }

    /**
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function updateAccountPassword(Request $request, $id): JsonResponse
    {
        //
//            $request->validate([
//                'current_password' => ['required', new MatchOldPassword],
//                'new_password' => ['required'],
//                'new_confirm_password' => ['same:new_password'],
//            ]);
        $user = User::find($id);
        $res = $user->update(['password' => Hash::make($request['value'])]);

        return Response::json('Password changed', 200);


    }

    /**
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function updateCompany(Request $request, $id): JsonResponse
    {
        $user_id = User::findOrFail($id)->id;
        $company_info = Company::where('user_id', $user_id)->first();
        $company_info->phone = $request['phone'] ?? '';
        $company_info->website = $request['website'] ?? '';
        $company_info->skype = $request['skype'] ?? '';
        $company_info->contact_options = $request['contact_options'] ?? '';
        $company_info->address1 = $request['address1'] ?? '';
        $company_info->address2 = $request['address2'] ?? '';
        $company_info->postcode = $request['postcode'] ?? '';
        $company_info->city = $request['city'] ?? '';
        $company_info->state = $request['state'] ?? '';
        $company_info->country = $request['country'] ?? '';
        $company_info->save();

        return Response::json('User Information updated successfully.', 200);
    }

}
