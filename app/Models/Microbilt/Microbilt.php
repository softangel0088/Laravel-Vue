<?php

namespace App\Models\Microbilt;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use DateInterval;
use DateTime;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use function Symfony\Component\String\slice;

class Microbilt extends Model
{
    use HasFactory;

    public string $table_name;
    public string $access_token = 'UPING-BANK-USA';
    public string $access_token_id;
    public string $bank_account_number;
    public string $bank_routing_number;
    public string $dlnumber;
    public string $dlnumberstate;
    public string $firstname;
    public string $lastname;
    public string $state;
    public string $ssn;


    /**
     * @param $bank_account_number
     * @param $bank_routing_number
     * @return bool
     */
    public function verify($bank_account_number, $bank_routing_number)
    {
        $this->bank_account_number = $bank_account_number;
        $this->bank_routing_number = $bank_routing_number;

        $this->generate_new_access_token();

        return $this->verify_bank_account_and_routing_number();
    }

    /**
     * @param $dlnumber
     * @param $dlnumberstate
     * @param string $firstname
     * @param string $lastname
     * @return bool
     */
    public function verify_driving_license_number($dlnumber, $dlnumberstate, $firstname, $lastname)
    {

        $this->dlnumber = $dlnumber;
        $this->dlnumberstate = $dlnumberstate;
        $this->firstname = $firstname;
        $this->lastname = $lastname;

        $this->generate_new_access_token();

        $res = $this->verify_dl_number();


        return $res;
    }

    /**
     * @param $ssn
     * @return bool
     */
    public function verify_ssn($ssn)
    {

        $ssn1 = substr($ssn, 0,3);
        $ssn2 = substr($ssn, 3,2);
        $ssn3 = substr($ssn, 5, 4);

        $this->ssn = $ssn1 . '-' .  $ssn2 . '-' . $ssn3;
//        dd($this->ssn);

        $this->generate_new_access_token();

        $res = $this->verify_social_security_number();


        return $res;
    }

    /*
    @Description: Returns the last unexpired microbilt access token from the database.
    @Return: False if no access token is present or if the last access has expired. (String) Access token otherwise.
    */
//    private function get_latest_unexpired_access_token()
//    {
//
//        $query = DB::table($this->table_name)->orderBy('id', 'desc')->get();
//
//
//        if ($query->isNotEmpty()) {
////            $row = $row->row();
////            $row->generated_at = new DateTime($row->generated_at);
////            $row->generated_at->add(new DateInterval('PT' . $row->expires_in . 'S'));
////            $five_seconds_after_now = new DateTime();
////            $five_seconds_after_now->add(new DateInterval('PT5S'));
//            Log::debug('DEBUG:: Microbilt API: Token expiry time: ' . $row->generated_at->format('Y-m-d H:i:s'));
//            Log::debug('DEBUG:: Microbilt API: Five seconds after now: ' . $five_seconds_after_now->format('Y-m-d H:i:s'));
//            if ($row->generated_at >= $five_seconds_after_now) {
//                $this->access_token = $row->access_token;
//                $this->access_token_id = $row->id;
//                Log::debug('DEBUG:: Microbilt API: Reusing access token: ' . print_r($this->access_token, true));
//                return true;
//            } else {
//                $query->where('id', $row->id);
////                $query->set('expired', 'true', false);
////                $query->update($this->table_name);
//            }
//        }
//        Log::debug('DEBUG:: Microbilt API: Access token expired');
//        return false;
//    }

    /*
    @Description: Generates new oAuth 2.0 access token for microbilt API. Saves the token to the database.
    @Return: (String) Access token. False on failure.
    @Dependencies: Depends on curl_post helper function.
    */
    private function generate_new_access_token()
    {
        $MICROBILT_API_OAUTH_URL = 'https://apitest.microbilt.com/OAuth/GetAccessToken';
        $MICROBILT_API_CLIENT_ID = 'ZFQZ72bOyKOzNwy4MKL2FRC1VO47RLEJ';
        $MICROBILT_API_CLIENT_SECRET = 'Qub5ILQvw9WLAW4R';

        $params = [
            'grant_type' => 'client_credentials',
            'client_id' => $MICROBILT_API_CLIENT_ID,
            'client_secret' => $MICROBILT_API_CLIENT_SECRET
        ];
        $oauth = Http::post($MICROBILT_API_OAUTH_URL, $params);
//        Log::debug('DEBUG:: Microbilt API: oAuth response: ' . print_r($oauth, true));

        $result = $oauth->object();

        if (isset($result->access_token)) {
//            $this->_CI->db->set('generated_at', 'NOW()', false);
//            $this->_CI->db->set('expired', 'false', false);
//            $this->_CI->db->insert($this->table_name, [
//                'access_token' => $oauth['res']->access_token,
//                'expires_in' => $oauth['res']->expires_in,
//                'token_type' => $oauth['res']->token_type,
//                'status' => $oauth['res']->status
//            ]);
            $this->access_token = $result->access_token;
            return true;
        } else {
            Log::debug('ERROR:: Microbilt API: oAuth error response');
        }
        return false;
    }

    private function verify_bank_account_and_routing_number()
    {
        $MICROBILT_API_VERIFICATION_URL = 'https://apitest.microbilt.com/ABAAcctVerification/';

        $bank = [
            'BankRoutingNumber' => $this->bank_routing_number,
            'BankAccountNumber' => $this->bank_account_number
        ];

        $response = Http::withToken($this->access_token)->post($MICROBILT_API_VERIFICATION_URL, $bank);
//        Log::debug('DEBUG:: Microbilt API: ABAAcctVerification response: ', (array)$response);
        $result = $response->object();

        if ($result->MsgRsHdr->Status->StatusCode == 0) {
            if ($result->DecisionInfo->Decision[0]->DecisionCode == 'A') {

                // Valid bank account and routing number
                return true;
            } else {
                Log::error('ERROR:: Microbilt API: Verification API response status code not 0');
                $result = $result->DecisionInfo->VariableInfo[0]->VariableValue;
                return $result;
            }
        } else {
            Log::debug('VERIFY BANK RESP::', (array) $result);
        }
    }
    private function verify_dl_number()
    {
        $MICROBILT_API_VERIFICATION_URL = 'https://apitest.microbilt.com/DLVerify/GetReport';


        $license = [
            'PersonName' => [
                'FirstName' => $this->firstname,
                'LastName' => $this->lastname,
                ],
            'DriversLicense' => [
                'LicenseNum' => $this->dlnumber,
                'StateProv' => $this->dlnumberstate
            ]
        ];

//        dd($license);

        $response = Http::withToken($this->access_token)->post($MICROBILT_API_VERIFICATION_URL, $license);
        Log::debug('DEBUG:: Microbilt API: Driving License response: ', (array)$response);
        $result = $response->object();
//        dd($result);

        if ($result->MsgRsHdr->Status->StatusCode == 0) {
            if ($result->Subject[0]->DLValidation->Text == 'VALID') {

                // Valid driivng license number
                return true;
            } else {
                Log::debug('VERIFY Driving License RESP::', (array) $result);
                $result = 'Invalid Driving License ';
                return $result;
            }
        } else {
                Log::error('ERROR:: Microbilt API: Verification API response status code not 0');
        }
    }
    private function verify_social_security_number()
    {
        $MICROBILT_API_VERIFICATION_URL = 'https://apitest.microbilt.com/SSNValidation/GetReport';

        $ssn = [
                'SSN' => $this->ssn,
        ];

        $response = Http::withToken($this->access_token)->post($MICROBILT_API_VERIFICATION_URL, $ssn);
        Log::debug('DEBUG:: Microbilt API: SSN Verify response: ', (array)$response);
        $result = $response->object();

        if ($result->MsgRsHdr->Status->StatusCode == 0) {
                return true;
            } else {
            dd(333);
                Log::debug('VERIFY SSN RESP::', (array) $result);
                $result = $result->Status->StatusDesc;
                return $result;
            }
    }
}
