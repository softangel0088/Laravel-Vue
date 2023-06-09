<?php

namespace App\Models\IPQS;

use App\Helpers\CurlHelper;
use App\Http\Requests\LeadPostRequestUS;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class IPQS extends Model
{
    use HasFactory;

    /**
     * @param $request_id
     * @param $transaction_id
     * @return IPQS
     */
    public static function store($request_id, $transaction_id)
    {
        $ipqs = new IPQS();
        $ipqs->transaction_id = $transaction_id;
        $ipqs->request_id = $request_id;
        $ipqs->save();

        return $ipqs;
    }


    /**
     * @param LeadPostRequestUS $request
     * @return bool
     */
    public static function quality_score(LeadPostRequestUS $request)
    {
        $ipqs = config('ipqs');
        $key = $ipqs[0];
        $abuse_strictness = $ipqs[3];

        $ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['REMOTE_ADDR'];

        $params = array(
            'strictness' => $abuse_strictness,
            'allow_public_access_points' => '1',
            'userID' => $request->aff_id,
            'partner_id' => $request->partner_id,
            'offer_id' => $request->offer_id,
            'aff_sub' => $request->aff_sub,
            'aff_sub2' => $request->aff_sub2,
            'aff_sub3' => $request->aff_sub3,
            'aff_sub4' => $request->aff_sub4,
            'aff_sub5' => $request->aff_sub5,
            'billing_address_1' => $request->applicant['addressStreet1'] ?? '',
            'billing_address_2' => $request->applicant['addressStreet2'] ?? '',
            'billing_city' => $request->applicant['city'] ?? '',
            'billing_region' => $request->applicant['state'] ?? '',
            'billing_postcode' => $request->applicant['zip'] ?? '',
            'billing_country' => $request->applicant['country'] ?? '',
            'user_agent' => $request->source['userAgent'] ?? $request->server('HTTP_USER_AGENT'),
            'user_language' => $request->server('HTTP_ACCEPT_LANGUAGE'),
            'gclid' => $request->gclid,
            'google_aid' => $request->google_aid,
            'ios_ifa' => $request->ios_ifa,
        );


        $url = sprintf(
            'https://www.ipqualityscore.com/api/json/ip/%s/%s?',
            $key,
            $ip,
        );

        try {
            $res = Http::post($url, $params);
            $response = $res->object();

            if ($response->success == true) {
                return $response->fraud_score;
            } else {
                Log::debug('Lead Quality::', (array)$response);
                return $lead_quality = '0';
            }
        } catch (\Exception $e) {
            Log::debug($e);
        }
    }

    /**
     * @param $email
     * @return bool
     */
    public static function verify_email($email)
    {

        $url = sprintf('https://ipqualityscore.com/api/json/email/ghrOADvR3dnwdcIqeaGeo58ocwS4ExYK/' . $email);
        $res = Http::post($url);
        $response = $res->object();

        if ($response->success == true && $response->valid == true) {
            return true;
        } else {
            return $response->message;
        }
    }

    /**
     * @param $phone
     * @return bool
     */
    public static function verify_phone($phone)
    {


        $url = sprintf('https://ipqualityscore.com/api/json/email/ghrOADvR3dnwdcIqeaGeo58ocwS4ExYK/' . $phone);
        $res = Http::post($url);
        $response = $res->object();

        if ($response->success == true && $response->valid == true) {
            return true;
        } else {
            return $response->message;
        }
    }

    /**
     * Get the Average Fraud Score from IPQS
     */
    public function ipqs_average()
    {
        // Set example variables.
        $user = 1;
        $apiKey = 'ghrOADvR3dnwdcIqeaGeo58ocwS4ExYK';

        $IPQstats = CurlHelper::getIPQAVG($user, 'all', $apiKey);
        if($IPQstats['fraud_average'] !== null) {
            $fraud_avg = $IPQstats['fraud_average'];
        } else {
            $fraud_avg = '0.00';
        }

        // Print average.
        echo $fraud_avg;
    }

    /**
     * Curl IPQS IP Reputation & Proxy
     * @param $request
     * @return mixed
     */
    public static function ipqs_ip($request, $click_log)
    {
        $transaction_id = $click_log->transaction_id;

        $data = IPQS::ip_url($request);

        $url = $data['url'];
        $timeout = $data['timeout'];

        $response = CurlHelper::ipqs_ip($url, $timeout);
        $response = (object) $response;

//        $verify_device = IPQS::verify_device($request);
//        dd($verify_device);

        $result = IPQS::store($response->request_id, $transaction_id);

        return $response;
    }

    /**
     *
     */
    public static function verify_device($request)
    {
        // Get the end user's IP.
        $user_ip = $request->server('REMOTE_ADDR'); // $_SERVER['HTTP_CF_CONNECTING_IP'] if using cloudflare.
//        dd($user_ip);

        // Get the device ID from our device tracker request.
        $device_id = isset($request->id) ? $request->id : null;

        // Generate our URL.
        $url = sprintf('https://www.ipqualityscore.com/api/tracker/results/%s/%s', $user_ip, $device_id);

        // Get JSON result.
        $json = file_get_contents($url);

        // Decode the result
        $result = json_decode($json, true);

        if(isset($result['success']) && $result['success'] === true){
            if(isset($result['id'])){
                if($device_id === $result['id']){
                    // Request was valid. You can also use $request['fraud_chance'] here.
//                    return $re
                }
            }
        } else {
            // Something went wrong.
        }
    }


    /**
     * @param $data
     * @return false|string
     */
    public static function ipqs_update_conversion( $data )
    {
        $ipqs = IPQS::where('transaction_id', $data->transaction_id)->first();

        $request_id = $ipqs->request_id;

        $ipqs = \config('ipqs');
        $key = $ipqs[0];

        // Base URL
        $url = 'https://ipqualityscore.com/api/json/postback/%s?%s';
        $conversion_status = 'true'; // TODO
        $conversion_date = '2017-10-21 17:16:18'; // TODO

        // Parameters
        $parameters = array(
            'request_id' => $request_id,
            'ConversionStatus' => 'update[ConversionStatus]='. $conversion_status,
            'ConversionDate' => 'update[ConversionDate]=' . $conversion_date
//            'ClickDate' => $click_date,
//            'user_agent' => $user_agent,
//            'request_id' => $request_id
        );
        // Build our query.
        $query = http_build_query($parameters);

        // Finish assembling the URL and make the request.
        $json = file_get_contents(sprintf($url, $key, $query));

        return $json;
    }
}
