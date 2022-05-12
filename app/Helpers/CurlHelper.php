<?php

namespace App\Helpers;

use BizFellaUSA\Status;
use Illuminate\Support\Facades\Log;
use RuntimeException;

class CurlHelper
{


    public function curl($url, $data, $timeout)
    {
            $ch = curl_init();

            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLINFO_HEADER_OUT, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                'Accept: application/json, text/javascript, *.*',
                'Content-type: application/json; charset=utf-8',
                'Expect:'
            ));


            $server_output = curl_exec($ch);
            Log::debug('BizFellaUSA::', (array) $server_output);
            $info = curl_getinfo($ch);

//            if (!is_null($this->logger)) {
//                $this->logger->info("got response with code " . $info['http_code'] . ': ' . $server_output);
//            }

            curl_close($ch);
            return $server_output;
            $this->connection_status = $info;
//            return new Status($info['http_code'], $server_output, null, $this->logger);
//        } else {
            //echo "APPLI no valido";
//            return false;
//        }
    }


    /**
     * Curl for iframe to post to U-PING
     *
     * @param $url
     * @param $fields_string
     * @param string[] $headers
     * @param int $t1
     * @param string $userpwd
     * @param string $postDataFormat
     * @return array
     */
    public function curl_iframe(
        $url,
        $fields_string,
        $headers = ['Authorization: Bearer 5|S3FbPhhXGvLwiEbULe8lsAGiGhgbeG8jXHje0ptJ'],
        $t1 = 210,
        $userpwd = '',
        $postDataFormat = 'url-encoded'
    )
    {

        $response = array();
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);

        // POST or GET request
        if (!empty($fields_string)) {
            curl_setopt($ch, CURLOPT_POST, 1);
        } else {
            curl_setopt($ch, CURLOPT_POST, 0);
        }

        // Parameters
        if (is_array($fields_string)) {
            if ($postDataFormat === 'json') {
                $fields_string = json_encode($fields_string);
            } else {
                $fields_string = http_build_query($fields_string);
            }
        } else {
            $fields_string = trim($fields_string);
        }
        if (!empty($fields_string)) {
            curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
        }

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, $t1);
        if (!empty($headers)) curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        if (!empty($userpwd)) curl_setopt($ch, CURLOPT_USERPWD, $userpwd);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLINFO_HEADER_OUT, true);
        $result = curl_exec($ch);


        $p_time = curl_getinfo($ch);
        logger('DEBUG: CURL request details: ' . print_r($p_time, true));
        logger('DEBUG: CURL payload details: ' . print_r($fields_string, true));

        if (curl_errno($ch)) {
            $result = "CURL ERROR: " . curl_error($ch);
        } else if (empty($result)) {
            $result = "Time out - ($t1 secs)"; // Timeout in $t1 secs
        }
        curl_close($ch);

        logger('DEBUG: CURL response details: ' . print_r($result, true));
        $response['res'] = $result;
        $response['post_time'] = $p_time['total_time'];


//    dd($response);

        return $response;
    }


    /**
     *  Curl IP Quality Score
     * @param $url
     * @param $timeout
     * @return mixed
     */
    public static function ipqs_ip(
        $url,
        $timeout
    )
    {

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        $json = curl_exec($ch);
        curl_close($ch);

        // Decode the result into an array.
        $result = json_decode($json, true);

        // Check to see if our query was successful.
        if (isset($result['success']) && $result['success'] === true) {
            return $result;

//        - Example 1: We'd like to allow all valid email addresses.
//        if($result['valid'] === true){
//       		echo "Email is valid.";
//        } else {
//        	echo "Email is NOT valid.";
//        }

//        *- Example 2: We'd like to allow valid emails that haven't
//        *- been reported as abusive.

//        if ($result['valid'] === true && $result['recent_abuse'] === false) {
//            return $result;
//
//        } else {
//            echo "Email is NOT valid.";
//        }


            /*
            *- Example 3: We'd like to allow valid emails or allow
            *- emails that timed out, but passed other quality checks
            *- and not allow emails reported as abusive
            *- Note: Timeouts occur when the mail provider does not respond fast enough to verify the email inbox.
            *
            * if(
            *		$result['recent_abuse'] === false &&
            *		($result['valid'] === true || $result['timed_out'] === true && $result['disposable'] === false && $result['dns_valid'] === true)
            *	){
            *		echo "Email is valid.";
            * } else {
            * 	echo "Email is NOT valid.";
            * }

            /*
            *- Example 3: We'd like to block only visitors with a fraud score,
            *- over 80, but allow crawlers such as Google:
            *
            * if($result['fraud_score'] >= 80 && $result['is_crawler'] === false){
            *		exit(header("Location: https://www.ipqualityscore.com/disable-your-proxy-vpn-connection"));
            * }
            */

            /*
            *- Example 4: We'd like to block only visitors which are a proxy with a
            *- fraud score over 80, but allow crawlers such as Google:
            *
            * if(
            * 	$result['proxy'] === true &&
            * 	$result['fraud_score'] >= 80 &&
            *		$result['is_crawler'] === false
            *	){
            *		exit(header("Location: https://www.ipqualityscore.com/disable-your-proxy-vpn-connection"));
            * }
            */
            /*
            *- Example 5: We'd like to block only visitors which are using tor.
            *
            * if($result['tor'] === true){
            *		exit(header("Location: https://www.ipqualityscore.com/disable-your-proxy-vpn-connection"));
            * }
            */

            /*
            * If you are confused with these examples or simply have a use case
            * not covered here, please feel free to contact IPQualityScore's support
            * team. We'll craft a custom piece of code to meet your requirements.
            */




        }
        return $result;
    }

    /**
     * @param $user
     * @param $country
     * @param $apiKey
     * @return mixed
     */
    public static function getIPQAVG($user, $country, $apiKey) {

        // Create the URL depending on if country is passed or not.
        if(!empty($country) && $country !== 'all') {
            $json_string = "https://www.ipqualityscore.com/api/".$apiKey."/proxy/average?userID=".$user."&country=".$country;
        } else {
            $json_string = "https://www.ipqualityscore.com/api/".$apiKey."/proxy/average?userID=".$user;
        }

        $jsondata = file_get_contents($json_string);
        $obj = json_decode($jsondata, true);
        return $obj;
    }


    /**
     * Curl post functionality, GET | POST
     *
     * @param $url
     * @param $fields_string
     * @param $header
     * @param $timeout
     * @param string $userpwd
     * @return array
     */
    public  function curl_post(
        $url,
        $fields_string,
        $header,
        $timeout,
        string $userpwd = ''
    )
    {

        $response = array();
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);

        if (!empty($fields_string)) {
            curl_setopt($ch, CURLOPT_POST, 1);
        }
        else {
            curl_setopt($ch, CURLOPT_POST, 0);
        }

//        if (is_object($fields_string)) {
//            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($fields_string));
//        }
//        else {
//        $payload = json_encode( array( $fields_string ) );
        Log::debug('CURL DATA::', (array)$fields_string);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields_string));
//        }

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);

        if (!empty($header) && is_array($header))
            curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        elseif
        (!empty($header))
            curl_setopt($ch, CURLOPT_HTTPHEADER, array($header));

        if (!empty($userpwd))
            curl_setopt($ch, CURLOPT_USERPWD, $userpwd);

        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);

        $result = curl_exec($ch);
        $p_time = curl_getinfo($ch);

        if (curl_errno($ch)) {
            $result = "CURL ERROR: " . curl_error($ch);
        } elseif (empty($result)) {
            $result = "Time out - ($timeout secs)"; // Timeout in $timeout secs
        }
        curl_close($ch);
        $response['res'] = $result;
        $response['post_time'] = $p_time['total_time'];

        return $response;
    }

    /**
     * Curl post functionality, GET | POST
     *
     * @param $url
     * @param $fields_string
     * @param $header
     * @param int $t1
     * @param string $userpwd
     * @return array
     */
    public  function http_post(
        $url,
        $fields_string,
        $header,
        $timeout,
        string $userpwd = ''
    )
    {

//        dd($url);
//        dd($fields_string);
//        logger($fields_string->toArray());
//        die();

        $response = array();
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);

        if (!empty($fields_string)) {
            curl_setopt($ch, CURLOPT_POST, 1);
        }
        else {
            curl_setopt($ch, CURLOPT_POST, 0);
        }

//        if (is_object($fields_string)) {
//            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($fields_string));
//        }
//        else {
//        $payload = json_encode( array( $fields_string ) );
        Log::debug('CURL DATA::', (array)$fields_string);
//        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields_string));
//        }

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);

        if (!empty($header) && is_array($header))
            curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        elseif
        (!empty($header))
            curl_setopt($ch, CURLOPT_HTTPHEADER, array($header));

        if (!empty($userpwd))
            curl_setopt($ch, CURLOPT_USERPWD, $userpwd);

        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);

        $result = curl_exec($ch);
        $p_time = curl_getinfo($ch);

        if (curl_errno($ch)) {
            $result = "CURL ERROR: " . curl_error($ch);
        } elseif (empty($result)) {
            $result = "Time out - ($timeout secs)"; // Timeout in $timeout secs
        }
        curl_close($ch);
        $response['res'] = $result;
        $response['post_time'] = $p_time['total_time'];

        return $response;
    }

    /**
     * Curl post functionality, GET | POST
     *
     * @param $url
     * @param $fields_string
     * @param $header
     * @param int $t1
     * @param string $userpwd
     * @return array
     */
    public function curl_postback(
        $url,
        $header,
        $t1 = 60,
        $userpwd = ''
    )
    {
//        dd($url);
//        dd($fields_string);

        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HTTPHEADER, array(
            'Accept: application/json, text/javascript, *.*',
            'Content-Type: application/json; charset=utf-8',
            'Expect:'
        ));

        //for debug only!
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

        $result = curl_exec($curl);
        Log::debug('POSTBACK RESP::', (array) $result);
        $p_time = curl_getinfo($curl);

        if (curl_errno($curl)) {
            $result = "CURL ERROR: " . curl_error($curl);
        } elseif (empty($result)) {
            $result = "Time out - ($t1 secs)"; // Timeout in $t1 secs
        }
        curl_close($curl);
        $response['res'] = $result;
        $response['post_time'] = $p_time['total_time'];

        return $response;
    }

    public function status_curl_post($application)
    {

        /**
         * upon response from first url - it should curl ( GET ) and check for application status
        /application/status/{ID}  url with the correlationid retreived from first url
         *
         * e.g. "CorrelationId":"6a7a1bef-c66f-4a78-abe4-f853413c9d74
         *
         * /application/status/6a7a1bef-c66f-4a78-abe4-f853413c9d74
         */

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, "https://leads.pingyo.co.uk/application/submit");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $application);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLINFO_HEADER_OUT, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Accept: application/json, text/javascript, *.*',
            'Content-Type: application/json; charset=utf-8',
            'Expect:'
        ));

        $server_output = curl_exec($ch);
        Log::debug('POST::', (array) $application);
        Log::debug('PingYo::', (array) $server_output);
        $info = curl_getinfo($ch);

        curl_close($ch);

        $connection_status = $info;

        return new Status($info['http_code'], $server_output, null, $this->logger);
    }
}
