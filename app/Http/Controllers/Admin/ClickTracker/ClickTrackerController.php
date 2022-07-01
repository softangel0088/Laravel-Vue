<?php

namespace App\Http\Controllers\Admin\ClickTracker;

use App\Http\Controllers\Controller;
use App\Models\ClickTracker\ClickTracker;
use App\Models\IPQS;
use App\Models\Offer\Offer;
use App\Models\Offer\OfferCap;
use App\Models\Partner\Partner;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ClickTrackerController extends Controller
{

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function tracker(Request $request)
    {
        $tracker = $this->track($request);
        $tracker = $tracker->original;

        return Redirect::to($tracker);
    }

    /**
     * Track all parameters and create click ID
     * @param Request $request
     * @return JsonResponse
     */
    public function track(Request $request)
    {
        if($request->aff_id == null) {
            die();
        }

        try {
            $affiliateId = Partner::where('vendor_id', $request->aff_id)->first();
        } catch (\Exception $e) {
            Log::debug($e);
            echo 'Affiliate ID Not Active';
            die();
        }



//        // Check For Offer Caps
//        $request = (new OfferCap)->check_offer_caps($request);
//        // Check if affiliate is not blocked for the offer.
//        $request = (new ClickTracker)->block_affiliates($request);

        // Store the $request
        $data = $this->store($request);

        // Create Click ID & Transaction ID
        $click_log = Offer::OfferLog($data);
        Log::debug('CLICKTRACKER::', (array)$click_log);

        // Curl IP Quality Score
//        $ipqs_response = IPQS::ipqs_ip($request, $click_log);
        $ipqs_response = 'OFF';

        // Update ClickTracker Log
        $data = $this->update($click_log, $ipqs_response);
        $offer_id = $data->offer_id;

        // Get Offer Data
        $offer_data = $this->get_offer_data($offer_id);

        $offer_url = $this->internal_offer_check($offer_data);

        // Get landing page redirect url
//        $offer_url = $this->get_affiliate_data($affiliate_id, $offer_data);

        // Replace landing page parameters with partner/click info
        $redirect_url = $this->parameter_replace($data, $offer_url, $offer_data);

        return Response::json($redirect_url);
    }

    /**
     * @param $offer_data
     * @return mixed
     */
    public function internal_offer_check( $offer_data )
    {
//        dd($offer_data['landers'][0]->lander_internal_tracking_url);
        // Internal Offer
        if ($offer_data->internal === '1') {
            $redirect_url = $offer_data['landers'][0]->lander_internal_tracking_url;
            return $redirect_url;

        // External Offer
        } else {
            $redirect_url = $offer_data['landers'][0]->lander_tracking_url;

            return $redirect_url;
        }
    }

//     * https://portal.uping.co.uk/api/click/tracker?offer_id=1&aff_id=1

    /**
     * @param Request $request
     * @return ClickTracker
     */
    public function store(Request $request)
    {
//        $vendor_id = Partner::where('vendor_id', '=', $request->aff_id)->first()->id;

        $data = new ClickTracker;


        $data->offer_id = $request->offer_id;
        $data->aff_click_id = $request->aff_click_id;
        $data->aff_id = $request->aff_id;
        $data->aff_sub = $request->aff_sub;
        $data->aff_sub2 = $request->aff_sub2;
        $data->aff_sub3 = $request->aff_sub3;
        $data->aff_sub4 = $request->aff_sub4;
        $data->aff_sub5 = $request->aff_sub5;

        $data->advertiser_id = $request->advertiser_id;
        $data->advertiser_ref = $request->advertiser_ref;
        $data->aff_unique1 = $request->aff_unique1;
        $data->aff_unique2 = $request->aff_unique2;
        $data->aff_unique3 = $request->aff_unique3;
        $data->aff_unique4 = $request->aff_unique4;
        $data->aff_unique5 = $request->aff_unique5;
        $data->affiliate_name = $request->affiliate_name;
        $data->affiliate_ref = $request->affiliate_ref;

        $data->city = $request->city;
        $data->country_code = $request->country_code;
        $data->date = $request->date;
        $data->datetime = $request->datetime;
        $data->file_id = $request->file_id;
        $data->file_name = $request->file_name;

        $data->ip = $request->server('REMOTE_ADDR');
        $data->mobile_carrier = $request->mobile_carrier;

        $data->offer_file_id = $request->offer_file_id;
        $data->offer_id = $request->offer_id;
        $data->offer_name = $request->offer_name;
        $data->offer_ref = $request->offer_ref;
        $data->offer_url_id = $request->offer_url_id;

        $data->payout = $request->payout;
        $data->ran = $request->ran;
        $data->region_code = $request->region_code;
        $data->revenue = $request->revenue;
        $data->source = $request->source;
        $data->time = $request->time;
        $data->transaction_id = $request->transaction_id;

        $data->user_agent = $request->server('HTTP_USER_AGENT');
        $data->device_brand = $request->device_brand;
        $data->device_model = $request->device_model;
        $data->device_os_version = $request->device_os_version;
        $data->google_aid = $request->google_aid;
        $data->google_aid_sha1 = $request->google_aid_sha1;
        $data->ios_ifa = $request->ios_ifa;
        $data->ios_ifa_sha1 = $request->ios_ifa_sha1;
        $data->ios_ifv = $request->ios_ifv;
        $data->unid = $request->unid;
        $data->guid = $request->guid;
        $data->windows_aid = $request->windows_aid;
        $data->windows_aid_sha1 = $request->windows_aid_sha1;
        $data->save();

        return $data;
    }

    public function show($id)
    {
        $datas = ClickTracker::find($id);

        echo json_encode(['data' => $datas]);
    }

    /**
     * @param $response
     * @param $ipqs
     * @return mixed
     */
    public function update($response, $ipqs)
    {

//        dd($response);
        $data = ClickTracker::find($response->id);
//        $data->city = $ipqs->city ?? '';
//        $data->country_code = $ipqs->country_code ?? '';
//        $data->region_code = $ipqs->region ?? '';
//        $data->user_agent = $ipqs->browser ?? '';
//        $data->device_brand = $ipqs->device_brand ?? '';
//        $data->device_model = $ipqs->device_model ?? '';
//        $data->device_os_version = $ipqs->operating_system ?? '';
//        $data->device_os = $ipqs->operating_system ?? '';
//        $data->time = $ipqs->timezone ?? '';
        $data->city = 'London';
        $data->country_code = $response->country_code;
        $data->region_code = '111';
        $data->user_agent = '111';
        $data->device_brand = '111';
        $data->device_model = $response->device_model;
        $data->device_os_version = '111';
        $data->device_os = '111';
        $data->time = '111';
        $data->save();

        return $data;

    }


    /**
     * @param $offer_id
     */
    public function get_offer_data($offer_id)
    {
        try {
            $offer_data = Offer::with(
                [
//                    'tracking',
////                    'campaigns',
//                    'advertiser',
////                    'target_group',
////                    'traffic_sources',
                    'landers',
//                    'offer_cap',
//                    'offer_metric',
             ])
                ->where('id', $offer_id)
                ->first();
//            Log::debug('Offer Fetched::', (array) $offer_data);
//            dd($offer_data);
            $offerStatus = $offer_data->status;
            $expiresDate = $offer_data->expiresDate;
//            dd($expiresDate);

        } catch (\Exception $e) {
            Log::debug($e);
            echo 'Offer Not Found';
            // Rotate to similar offer
            die;
        }

        if ($offerStatus != '1') {
            echo 'Offer Not Active';
            die;
        } elseif ($offer_data->created_at > $expiresDate) {
            echo 'Offer Expired';
            die;
        }

        return $offer_data;
    }

    /**
     * @param $affiliate_id
     * @param $offer_data
     * @return mixed
     */
    public function get_affiliate_data($affiliate_id, $offer_data)
    {
        try {
            $affiliate_data = Lmscallcenter::findOrFail($affiliate_id);
        } catch (\Exception $e) {
            echo 'get_affiliate_data';
            die;
        }



        if ($offer_data->landers->lander_tracking_url != null) { // internal
            $redirect_url = $offer_data->siteLink;

        } elseif ($affiliate_data->offerDestinationURL == 2) { //external
            $redirect_url = $offer_data->offerLink;

        }
//        else {
//            $redirect_url = $offer_data->siteFromLink;
//        }

        return $redirect_url;
    }

    /**
     * @param $data
     * @param $request
     */
    public function get_column_names($data, $request)
    {
        $table = 'click_trackers';
        $tracker_params = DB::getSchemaBuilder()->getColumnListing($table);
//        dd($tracker_params);

        $params = collect($tracker_params);
//        dd($params);
        foreach ($params as $key => $value) {
            $keyColumn[] = $value;
//            dd($keyColumn);
            foreach ($keyColumn as $k => $v) {
                var_dump($data->$v = $request->$v);
                die;
            }
        }
    }

    /**
     * @param $data
     * @param $redirect_url
     * @param $offer_data
     * @return array|string|string[]
     */
    public function parameter_replace($data, $redirect_url, $offer_data)
    {
//        $fallback_url = $data->

        $lander_url = $redirect_url ?? 'URL Not Active';

        $lander_url = str_replace("{advertiser_id}", $data->advertiser_id, $lander_url);
        $lander_url = str_replace("{advertiser_ref}", $data->advertiser_ref, $lander_url);


        if (Str::contains($redirect_url, 'vid={aff_id}')) {
            $partner = Partner::where('vendor_id', '=', $data->aff_id)->first();
            $vendor_id = $partner->vendor_id;
            $lander_url = str_replace("{aff_id}", $vendor_id, $lander_url);
        }


        $lander_url = str_replace("{aff_id}", $data->aff_id, $lander_url);
        $lander_url = str_replace("{aff_sub}", $data->aff_sub, $lander_url);
        $lander_url = str_replace("{aff_sub2}", $data->aff_sub2, $lander_url);
        $lander_url = str_replace("{aff_sub3}", $data->aff_sub3, $lander_url);
        $lander_url = str_replace("{aff_sub4}", $data->aff_sub4, $lander_url);
        $lander_url = str_replace("{aff_sub5}", $data->aff_sub5, $lander_url);
        $lander_url = str_replace("{fbpix}", $data->fbpix, $lander_url);

        if (Str::contains($redirect_url, '&aff_click_id={aff_click_id}')) {
            $lander_url = str_replace("{aff_click_id}", $data->aff_click_id, $lander_url);
        } elseif (Str::contains($redirect_url, '&aff_sub={aff_click_id}')) {
            $lander_url = str_replace("{aff_click_id}", $data->aff_click_id, $lander_url);
        } elseif (Str::contains($redirect_url, '&aff_sub2={aff_click_id}')) {
            $lander_url = str_replace("{aff_click_id}", $data->aff_click_id, $lander_url);
        } elseif (Str::contains($redirect_url, '&aff_sub3={aff_click_id}')) {
            $lander_url = str_replace("{aff_click_id}", $data->aff_click_id, $lander_url);
        }

        $lander_url = str_replace("{aff_unique1}", $data->aff_unique1, $lander_url);
        $lander_url = str_replace("{aff_unique2}", $data->aff_unique2, $lander_url);
        $lander_url = str_replace("{aff_unique3}", $data->aff_unique3, $lander_url);
        $lander_url = str_replace("{aff_unique4}", $data->aff_unique4, $lander_url);
        $lander_url = str_replace("{aff_unique5}", $data->aff_unique5, $lander_url);

        $lander_url = str_replace("{affiliate_id}", $data->affiliate_id, $lander_url);
        $lander_url = str_replace("{affiliate_name}", $data->affiliate_name, $lander_url);
        $lander_url = str_replace("{affiliate_ref}", $data->affiliate_ref, $lander_url);

        $lander_url = str_replace("{city}", $data->city, $lander_url);
        $lander_url = str_replace("{country_code}", $data->country_code, $lander_url);
        $lander_url = str_replace("{currency}", $data->currency, $lander_url);
        $lander_url = str_replace("{date}", $data->date, $lander_url);
        $lander_url = str_replace("{datetime}", $data->datetime, $lander_url);
        $lander_url = str_replace("{file_id}", $data->file_id, $lander_url);

        $lander_url = str_replace("{ip}", $data->ip, $lander_url);
        $lander_url = str_replace("{mobile_carrier}", $data->mobile_carrier, $lander_url);
        $lander_url = str_replace("{offer_file_id}", $data->offer_file_id, $lander_url);
        $lander_url = str_replace("{offer_id}", $data->offer_id, $lander_url);
        $lander_url = str_replace("{offer_name}", $data->offer_name, $lander_url);
        $lander_url = str_replace("{offer_ref}", $data->offer_ref, $lander_url);
        $lander_url = str_replace("{offer_url_id}", $data->offer_url_id, $lander_url);
        $lander_url = str_replace("{payout}", $data->payout, $lander_url);

        $lander_url = str_replace("{ran}", $data->ran, $lander_url);
        $lander_url = str_replace("{region_code}", $data->region_code, $lander_url);
        $lander_url = str_replace("{revenue}", $data->revenue, $lander_url);
        $lander_url = str_replace("{source}", $data->source, $lander_url);
        $lander_url = str_replace("{time}", $data->time, $lander_url);
        $lander_url = str_replace("{region_code}", $data->region_code, $lander_url);

        if ($offer_data->internal === '1') {
            $lander_url = str_replace("{transaction_id}", $data->transaction_id, $lander_url);
        }

        $lander_url = str_replace("{user_agent}", $data->user_agent, $lander_url);

        $lander_url = str_replace("{device_brand}", $data->device_brand, $lander_url);
        $lander_url = str_replace("{device_model}", $data->device_model, $lander_url);
        $lander_url = str_replace("{device_os}", $data->device_os, $lander_url);
        $lander_url = str_replace("{device_os_version}", $data->device_os_version, $lander_url);

        $lander_url = str_replace("{google_aid}", $data->google_aid, $lander_url);
        $lander_url = str_replace("{google_aid_sha1}", $data->google_aid_sha1, $lander_url);
        $lander_url = str_replace("{ios_ifa}", $data->ios_ifa, $lander_url);
        $lander_url = str_replace("{ios_ifa_sha1}", $data->ios_ifa_sha1, $lander_url);
        $lander_url = str_replace("{unid}", $data->unid, $lander_url);
        $lander_url = str_replace("{guid}", $data->guid, $lander_url);
        $lander_url = str_replace("{windows_aid}", $data->windows_aid, $lander_url);
        $lander_url = str_replace("{windows_aid_sha1}", $data->windows_aid_sha1, $lander_url);

        return $lander_url;
    }
}
