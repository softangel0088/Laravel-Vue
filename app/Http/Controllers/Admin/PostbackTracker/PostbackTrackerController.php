<?php

namespace App\Http\Controllers\Admin\PostbackTracker;

use App\Helpers\CurlHelper;
use App\Http\Controllers\Controller;
use App\Models\ClickTracker;
use App\Models\IPQS;
use App\Models\Lead\USLead;
use App\Models\Offer\ConversionTracker;
use App\Models\Offer\Offer;
use App\Models\Partner\Partner;
use App\Models\Partner\PartnerLeadType;
use App\Models\Postback;
use App\Models\Postback\PostbackLogs;
use App\Models\PostbackTracker\PostbackTracker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;
use Mockery\Exception;

class PostbackTrackerController extends Controller
{

    var $leadtype = 'offer';


    public function store(Request $request)
    {
        $request->validate([
            'offer_id' => 'required',
            'partner_id' => 'required',
            'postback_name' => 'required',
            'affiliatePostbackUrl' => 'required',
            'global' => 'required'
        ]);

        $postback = new PostbackTracker;
        $postback->offer_id = $request->offer_id;
        $postback->partner_id = $request->partner_id;
        $postback->postback_name = $request->postback_name;
//        $postback->aff_sub = $request->aff_sub;
//        $postback->aff_sub2 = $request->aff_sub2;
//        $postback->aff_sub3 = $request->aff_sub3;
//        $postback->aff_sub4 = $request->aff_sub4;
//        $postback->aff_sub5 = $request->aff_sub5;
        $postback->affiliatePostbackUrl = $request->affiliatePostbackUrl;
        $postback->global = $request->global;
        $postback->save();

        return Response::json($postback);
    }
    public function update(Request $request, $id)
    {
        $request = json_decode(json_encode($request->input()));

        $postback = PostbackTracker::find($id);
        $postback->offer_id = $request->postback->offer_id2;
        $postback->partner_id = $request->postback->partner_id2;
        $postback->postback_name = $request->postback->postback_name2;
        $postback->affiliatePostbackUrl = $request->postback->affiliatePostbackUrl2;
        $postback->global = $request->postback->global2;

        $data = $postback->toArray();
        $postback->save($data);

        return Response::json($postback);
    }
    public function show($id)
    {
        $tracker = PostbackTracker::find($id)->with('company');

        return Response::json($tracker);
    }
    public function destroy($id)
    {
        $tracker = PostbackTracker::find($id);
        $tracker->delete();

        return response()->json([
            'message' => 'PostbackTracker deleted successfully!'
        ]);
    }
    public function edit($id)
    {
        $datas = PostbackTracker::find($id);

        echo json_encode(['data' => $datas]);
    }
    public function postbackTrackerExport()
    {
        return Excel::download(new exportPostbackTracker(), 'tracking-export' . now() . '.xlsx');

    }

    public function adv_postback(Request $request)
    {

        // Get Offer ID
        try {
            $offer = Offer::get($request->offer_id);
            Log::debug('ADV Postback DEBUG::', (array)$request->input());

            if ($offer->multiple_conversions === "1") {
                // Check IF multiple conversions are allowed.
                $request = $this->check_multiple_conversions($request);
            }

        } catch (\Exception $e) {
            Log::debug('ADV PB::  Invalid Offer ID');
            echo 'ADV PB:: Invalid Offer ID';
            die();
        }

        // Get Click ID
        try {
            $transaction_id = $request->transaction_id;
        } catch (Exception $e) {
            Log::debug('ADV PB:: No Transaction ID');
            echo 'ADV PB:: No Transaction ID';
            die();
        }

        // Get Click Log
        try {
            $click_log = ClickTracker::where('aff_click_id', '=', $transaction_id)->first();
        } catch (\Exception $e) {
            Log::debug('ADV PB:: No Click ID Found');
            echo 'ADV PB:: Click ID is invalid';
            die();
        }

        // Get Partner Details
        try {
            $partner_detail = Partner::where('id', '=', $click_log->aff_id)->first();
            Log::debug('ADV PB:: Partner ID::', (array)$partner_detail->id);
        } catch (\Exception $e) {
            Log::debug($e);
            echo 'ADV PB:: Invalid Partner ID';
            die();
        }


        // Store the Postback Request
        $data = PostbackLog::store_adv_postback($request, $transaction_id, $offer);
        Log::debug('ADV PB:: Received');

        // Add revenue
        $newData = (new ConversionTracker)->add_revenue($data, $offer, $partner_detail);
        Log::debug('ADV PB::', (array)$newData);

        $partner_postback_url = $this->get_partner_postback_data($request, $partner_detail);

        // Replace Postback Parameters with relevant values
        if ($partner_postback_url !== null) {
            $postbackUrl = $this->replace_postback_params($data, $partner_postback_url);
        } else {
            echo 'ADV PB:: Postback Received:: Success';
            Log::debug('ADV PB:: Postback Received:: Partner Has No Postback Setup');
            die();
        }

//         Update IP Quality Score Conversion
//        $ipqs = IPQS::ipqs_update_conversion($data);

        // Get conversion rate
//        $data = Offer::get_conversion_rate($partner_detail, $data);


        $this->fire_postback($postbackUrl);
        Log::debug('ADV Postback:: Fired');


    }

    /**
     * Check if multiple conversions are allowed on the offer for the same transaction ID
     * @param $request
     * @return string|void
     */
    public function check_multiple_conversions($request)
    {

        $postback_log = DB::table('postback_logs')->where('transaction_id', '=', $request->transaction_id)
            ->get();

        $multiple = Offer::where('id', '=', $request->offer_id)
            ->where('multiple_conversions', '=', 1)
            ->get();


        if ($postback_log->count() === 1 && $multiple === 0) {
            echo 'Multiple Conversions with the same Transaction ID are not allowed for this offer.';
            die();
        } else {
            return $request;
        }


    }

    /**
     * Get Partner Postback URL
     * @param $request
     * @param $partner_detail
     * @return mixed
     */
    public function get_partner_postback_data($request, $partner_detail)
    {
        $partner_id = $partner_detail->id ?? $request->partner_id;
        $offer_id = $request->offer_id;


        try {
            $postback_data = PostbackTracker::where('partner_id', $partner_id)->where('global', '=', 1)->first();

        } catch (\Exception $e) {

            $postback_data = PostbackTracker::where('partner_id', '=', $partner_id)->where('offer_id', '=', $offer_id)->first();
        }

        return $postback_data;
    }

    /**
     * @param $data
     * @param $partner_postback_url
     * @return array|string|string[]
     */
    public function replace_postback_params($data, $partner_postback_url)
    {
        $postbackUrl = $partner_postback_url->affiliatePostbackUrl ?? '';

        $postbackUrl = str_replace("{aff_id}", $data->aff_id, $postbackUrl);
        $postbackUrl = str_replace("{offer_id}", $data->offer_id, $postbackUrl);
        $postbackUrl = str_replace("{aff_sub}", $data->aff_sub, $postbackUrl);
        $postbackUrl = str_replace("{aff_sub2}", $data->aff_sub2, $postbackUrl);
        $postbackUrl = str_replace("{aff_sub3}", $data->aff_sub3, $postbackUrl);
        $postbackUrl = str_replace("{aff_sub4}", $data->aff_sub4, $postbackUrl);
        $postbackUrl = str_replace("{aff_sub5}", $data->aff_sub5, $postbackUrl);
        $postbackUrl = str_replace("{transaction_id}", $data->transaction_id, $postbackUrl);

        if (Str::contains($postbackUrl, '&aff_click_id={aff_click_id}')) {
            $postbackUrl = str_replace("{aff_click_id}", $data->click_log->aff_click_id, $postbackUrl);
        } elseif (Str::contains($postbackUrl, '&aff_sub={aff_click_id}&')) {
            $postbackUrl = str_replace("{aff_sub}", $data->click_log->aff_click_id, $postbackUrl);
        } elseif (Str::contains($postbackUrl, '&aff_sub2={aff_click_id}&')) {
            $postbackUrl = str_replace("{aff_sub2}", $data->click_log->aff_click_id, $postbackUrl);
        } elseif (Str::contains($postbackUrl, '&aff_sub3={aff_click_id}&')) {
            $postbackUrl = str_replace("{aff_sub3}", $data->click_log->aff_click_id, $postbackUrl);
        }

        if (isset($data->amount)) {
            $postbackUrl = str_replace("{amount}", $data->amount, $postbackUrl ?? '');
        }


        Log::debug('POSTBACK URL::', (array)$postbackUrl);
        return $postbackUrl;
    }

    /**
     * @param $postbackUrl
     * @param $params
     * @return void
     */
    public function fire_postback($postbackUrl, $params)
    {

        if ($postbackUrl !== null) {
            try {
                $get_res = Http::post($postbackUrl, $params);
                Log::debug('PB RES::', (array) $get_res);
                Log::debug('PB RES::', (array) $get_res->object());
                Log::debug('PB RES::', (array) $get_res->body());


                if ($get_res->status() == 200) {
                    echo 'Success:: Postback Fired';
                    Log::debug('Success:: Postback Fired');
                    die();
                } else {
                    Log::debug('Error:: Postback Failed' . (array) $get_res);
                    echo 'Error:: Invalid Postback';
                    die();
                }
            } catch (Exception $e) {
                echo 'Error::  Invalid Postback';
                Log::debug('Invalid Postback:: Error');
                die();

            }
        } else {
            echo 'Success:: Conversion Received';
            Log::debug('Success:: Conversion Received');
            die();

        }
    }

    /**
     * Post-back Logs
     * @param Request $request
     */
    public function postback(Request $request)
    {
        Log::debug('POSTBACK RECEIVED:::', (array)$request->input());
        Log::debug('OFFER ID:::', (array)$request->offer_id);

        try {
            $offer = Offer::get($request->offer_id);
            Log::debug('Postback DEBUG::', (array)$request->input());
            // Check for duplicate transaction ID.
//          $request = $this->duplicate_postback_checker($request);

//            if ($offer->multiple_conversions === "1") {
//                // Check IF multiple conversions are allowed.
//                $request = $this->check_multiple_conversions($request);
//            }

        } catch (\Exception $e) {
            Log::debug($e);
            echo 'Invalid Offer ID';
            die();
        }

        // Check valid post-back
        if ($offer->id == 2 || $offer->id == 3 || $offer->id == 4 ) {
            $duplicate = PostbackLogs::where('lead_id', $request->lead_id)->first();
            $valid_lead = USLead::where('lead_id', $request->lead_id)->first();

//            $duplicate = collect($duplicate);
//            if ($duplicate->isNotEmpty()) {
//                echo 'Duplicate Postback';
//                Log::debug('DUPLICATE', (array) $duplicate);
//                die();
//            }

            $valid_lead = collect($valid_lead);
            if ($valid_lead->isEmpty()) {
                echo 'Invalid Lead ID';
                Log::debug('Lead ID', (array) $duplicate);
                die();
            }
        }

        Log::debug('DEBUG::', (array)$request->input());
        $transaction_id = $request->input('transaction_id');
        if (empty($transaction_id)) {
            echo 'No Transaction ID provided';
            die();
        }

        try {
            $partner_detail = Partner::where('vendor_id', '=', $request->partner_id)->first();
            Log::debug('Partner Vendor ID::', (array)$partner_detail->id);
        } catch (\Exception $e) {
            Log::debug($e);
            echo 'Invalid Partner ID';
            die();
        }

        // Store the Postback Request
        $data = (new Postback\PostbackLogs)->store($request, $transaction_id, $offer);
        Log::debug('Postback:: Received');

        // Add revenue
        $newData = (new ConversionTracker)->add_revenue($data, $offer, $partner_detail);
        Log::debug('DEBUG::', (array)$newData);

        $partner_postback_url = $this->get_partner_postback_data($request, $partner_detail);

        // Replace Postback Parameters with relevant values
        if ($partner_postback_url !== null) {
            $postbackUrl = $this->replace_postback_params($data, $partner_postback_url);
        } else {
            echo 'Postback Received:: Success';
            Log::debug('Postback Received:: Partner Has No Postback Setup');
            die();
        }

//         Update IP Quality Score Conversion
//        $ipqs = IPQS::ipqs_update_conversion($data);

        // Get conversion rate
//        $data = Offer::get_conversion_rate($partner_detail, $data);
//        $internal_offer = $this->check_internal_offer($offer, $partner_detail);

//        if ($internal_offer === false) {
//            Log::debug('INTERNAL OFFER::', (array) $internal_offer);
//            die();
//        }
        $params = array(
            'offer_id' => $data->oid,
            'partner_id' => $data->vid,
            'amount' => $data->amount ?? '',
            'transaction_id' => $data->transaction_id,
            'aff_sub' => $data->aff_sub ?? '',
            'aff_sub2' => $data->aff_sub2 ?? '',
            'aff_sub3' => $data->aff_sub3 ?? '',
            'aff_sub4' => $data->aff_sub4 ?? '',
            'aff_sub5' => $data->aff_sub5 ?? ''
        );

//        $this->fire_postback($postbackUrl, $params);
//        Log::debug('Postback:: Fired');


    }


    /**
     * @param $offer
     * @param $partner_detail
     * @return bool|void
     */
    public function check_internal_offer($offer, $partner_detail)
    {
        if ($offer->internal === 1 || $offer->internal === '1') {
            try {
                $thresholdAmount = $offer->payout->revenueAmount;
                $thresholdAmount = round($thresholdAmount, 2);
                $internal_offers = [1, 2, 3];
                $offer_id = $offer->id;

                Log::debug('THRES::', (array) $thresholdAmount);

                $partner_lead_type = PartnerLeadType::where('vendor_id', '=', $partner_detail->vendor_id)->first();


                if ($offer_id === 1) {
                    return true;
                }
                if ($thresholdAmount > 0 && in_array($offer_id, $internal_offers)) {
                    if ($offer_id === 3 || $offer_id === 7 || $offer_id === 10) {
                        $accumulatorAmount = 0 + $partner_lead_type->accuCPLus20;
                        $accumulatorAmount = round($accumulatorAmount, 2);
                    } elseif ($offer_id === 2 || $offer_id === 8 || $offer_id === 11) {
                        $accumulatorAmount = 0 + $partner_lead_type->accuCPAus100;
                        $accumulatorAmount = round($accumulatorAmount, 2);

                    }

                    if ($accumulatorAmount > $thresholdAmount) {
                        Log::debug('Accu true::', (array) $accumulatorAmount);
                        return true;
                    } else {
                        Log::debug('Accu false::', (array) $accumulatorAmount);
                        return false;
                    }

                }
            } catch (Exception $e) {
                Log::debug('Offer Not Internal');
            }
        }
        return true;
    }

    /**
     * Get Click Log
     *
     * @param $request
     * @param $offer
     * @param $transaction_id
     * @return void
     */
    public function get_click_log($request, $offer, $transaction_id)
    {
        if ($offer['internal'] === '1') {
            if ($transaction_id === 'DIRECT') {
                echo 'DIRECT';
                die();
            } else {
                try {
                    $click_log = ClickTracker::where('transaction_id', '=', $request->transaction_id)->first();
                    $transaction_id = $click_log->transaction_id;

                    return $click_log;
                } catch (\Exception $e) {
                    Log::debug($e);
                }
            }
        } else {
            try {
                $click = $request->aff_sub ?? $request->aff_sub2;
                $click_log = ClickTracker::where('transaction_id', '=', $click)->first();

                return $click_log;
//                $transaction_id = $click_log->transaction_id;
            } catch (\Exception $e) {
                Log::debug($e);
            }
        }

    }

    /**
     * Check for duplicate transaction IDs
     * @param $request
     * @return string
     */
    public function duplicate_postback_checker($request)
    {

        $response = PostbackLog::where('transaction_id', $request->transaction_id)->get();

        if (count($response) !== 1) {
            return $request;
        } else {
            echo 'Invalid/Expired Transaction ID';
            die();
        }

    }
}
