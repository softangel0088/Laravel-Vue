<?php

use App\Helpers\CurlHelper;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Monolog\Handler\StreamHandler;
use Monolog\Logger;

class stopgonetworks
{
    var $response = array();

    function __construct($client_detail, $post)
    {
        $dob_day = $post->Applicant->dateOfBirthDay;
        $dob_month = $post->Applicant->dateOfBirthMonth;
        $dob_year = $post->Applicant->dateOfBirthYear;
        $dateOfBirth = $dob_year . '-' . $dob_month . '-' . $dob_day;

        $next_pay_date_day = $post->Employer->nextPayDateDay;
        $next_pay_date_month = $post->Employer->nextPayDateMonth;
        $next_pay_date_year = $post->Employer->nextPayDateYear;
        $nextPayDate = $next_pay_date_year . '-' . $next_pay_date_month . '-' . $next_pay_date_day;

        $following_pay_date_day = $post->Employer->followingPayDateDay;
        $following_pay_date_month = $post->Employer->followingPayDateMonth;
        $following_pay_date_year = $post->Employer->followingPayDateYear;
        $followingPayDate = $following_pay_date_year . '-' . $following_pay_date_month . '-' . $following_pay_date_day;


        $post->Loan->loanPurpose = 'oneoffPurchase';
        $creditScore = 'good';
        $bankruptcy = 'N';

        switch ($post->Employer->incomeSource) {
            case 'SelfEmployed':
                $post->Employer->incomeSource = 'selfEmployed';
            case 'EmployedFullTime':
                $post->Employer->incomeSource = 'employed';
            case 'EmployedPartTime':
                $post->Employer->incomeSource = 'employed';
            case 'EmployedTemporary':
                $post->Employer->incomeSource = 'employed';
            case 'Pension':
                $post->Employer->incomeSource = 'pension';
            case 'DisabilityBenefits':
                $post->Employer->incomeSource = 'disability';
            case 'Benefits':
                $post->Employer->incomeSource = 'benefits';
        }
        switch ($post->Employer->incomeCycle) {
            case 'Weekly':
                $post->Employer->incomeCycle = 'weekly';
            case 'BiWeekly':
                $post->Employer->incomeCycle = 'biWeekly';
            case 'Fortnightly':
                $post->Employer->incomeCycle = 'biWeekly';
            case 'TwiceMonthly':
                $post->Employer->incomeCycle = 'twiceMonthly';
            case 'FourWeekly':
                $post->Employer->incomeCycle = 'monthly';
            case 'Monthly':
                $post->Employer->incomeCycle = 'monthly';
            case 'LastDayMonth':
                $post->Employer->incomeCycle = 'monthly';
            case 'LastWorkingDayMonth':
                $post->Employer->incomeCycle = 'monthly';
            case 'LastFriday':
                $post->Employer->incomeCycle = 'monthly';
            case 'LastThursday':
                $post->Employer->incomeCycle = 'monthly';
            case 'LastWednesday':
                $post->Employer->incomeCycle = 'monthly';
            case 'LastTuesday':
                $post->Employer->incomeCycle = 'monthly';
            case 'LastMonday':
                $post->Employer->incomeCycle = 'monthly';
            case 'SpecificDayOfMonth':
                $post->Employer->incomeCycle = 'monthly';
        }

        switch ($post->Employer->incomePaymentType) {
            case 'Cash':
                $post->Employer->incomePaymentType = 'N';
            case 'Cheque':
                $post->Employer->incomePaymentType = 'N';
            case 'RegionalDirectDeposit':
                $post->Employer->incomePaymentType = 'Y';
        }
        switch ($post->Applicant->inMilitary) {
            case 'None':
                $post->Applicant->inMilitary = 'N';
            case 'Veteran':
                $post->Applicant->inMilitary = 'Y';
            case 'Reserves':
                $post->Applicant->inMilitary = 'Y';
            case 'ActiveDuty':
                $post->Applicant->inMilitary = 'Y';
        }
        switch ($post->Residence->residentialStatus) {
            case 'HomeOwner':
                $post->Residence->residentialStatus = 'own';
            case 'PrivateTenant':
                $post->Residence->residentialStatus = 'rent';
            case 'CouncilTenant':
                $post->Residence->residentialStatus = 'rent';
            case 'LivingWithParents':
                $post->Residence->residentialStatus = 'rent';
            case 'LivingWithFriends':
                $post->Residence->residentialStatus = 'rent';
            case 'LivingWithFamily':
                $post->Residence->residentialStatus = 'rent';
            case 'Other':
                $post->Residence->residentialStatus = 'rent';

        }
        switch ($post->Bank->bankAccountType) {
            case 'Checking':
                $post->Bank->bankAccountType = 'checking';
            case 'Savings':
                $post->Bank->bankAccountType = 'savings';
        }

        switch ((string)$post->Consent->consentThirdParty) {
            case 'true':
                $post->Consent->consentThirdParty = 'Y';
                break;
            case 'false':
                $post->Consent->consentThirdParty = 'N';
                break;
        }

        if (Str::startsWith($post->Source->referringUrl, 'http')) {
            $input = $post->Source->referringUrl;
            $new_input = preg_replace("#^[^:/.]*[:/]+#i", "", $input);
            $referringUrl = $new_input;
        } else {
            $referringUrl = $post->Source->referringUrl;
        }

        $lead = array(
            "aff" => (string)$client_detail->parameter1,
            "apiToken" => (string)$client_detail->parameter2,
            'subAff' => (string)$post->subid ?? 'UPING',
            'timeAllowed' => (integer) $post->timeout ?? '120',
            'minPrice' => (integer) $post->minCommissionAmount ?? '0.00',

            'amount' => (integer) $post->Loan->loanAmount,
            'purpose' => (string) $post->Loan->loanPurpose,

            'firstName' => (string) $post->Applicant->firstName,
            'lastName' =>(string) $post->Applicant->lastName,
            'email' => (string) $post->Applicant->email,
            'SSN' => (string)$post->Applicant->ssn,
            'driverLicense' =>  (string)$post->Applicant->drivingLicenseNumber,
            'driverState' =>  (string)$post->Applicant->drivingLicenseState, // ENUM
            'mobilePhone' => (string)$post->Applicant->cellPhoneNumber,
            'homePhone' =>  (string)$post->Applicant->homePhoneNumber,
            'workPhone' => (string)$post->Applicant->workPhoneNumber,
            'military' =>  (string)$post->Applicant->inMilitary, //ENUM
            'dob' => (string) $dateOfBirth,

            'streetAddress' => (string)$post->Residence->addressStreet1,
            'postalCode' => (string)$post->Residence->zip,
            'locality' => (string)$post->Residence->city,
            'region' => (string)$post->Residence->state, //ENUM
            'homeOwner' => (string)$post->Residence->residentialStatus, // ENUM
            'timeAddress' => (integer)$post->Residence->monthsAtAddress,

            'incomeSource' => (string)$post->Employer->incomeSource, // ENUM
            'jobTitle' => (string)$post->Employer->jobTitle,
            'company' => (string)$post->Employer->employerName,
            'income' =>  (int)$post->Employer->monthlyIncome,
            'directDeposit' =>  $post->Employer->incomePaymentType, //ENUM
            'frequency' => (string)$post->Employer->incomeCycle, //ENUM
            'payDate' => (string)$nextPayDate,
            'payDateNext' => (string)$followingPayDate,
            'timeJob' => (integer) $post->Employer->monthsAtEmployer,

            'accountABA' =>  (string)$post->Bank->bankRoutingNumber,
            'bankName' => (string)$post->Bank->bankName,
            'accountNumber' => (string)$post->Bank->bankAccountNumber,
            'accountType' => (string)$post->Bank->bankAccountType,
            'accountLength' => (integer)$post->Bank->monthsAtBank,
            'bankruptcy' => (integer) $bankruptcy, //ENUM

            'userAgent' => (string) $post->Source->userAgent,
            'ipAddress' => (string)$post->Source->ipAddress,

            'termsAgreed' => (string) 'Y',
            'mailing' => (string) $post->Consent->consentThirdParty ? 'Y' : 'N', //ENUM

            "domain" => (string)$referringUrl,
            'creditScore' => (string) $creditScore,
        );

        Log::debug('POST DATA::', (array)$lead);

        $this->response['post_data'] = $lead;
        $this->response['timeout'] = $client_detail->timeout;
        $this->response['post_url'] = ($client_detail->mode == '0') ? $client_detail->post_url_test : $client_detail->post_url_live;


        $validation_result = true;
        if ($validation_result == true) {

            $url = $this->response['post_url'];
            $timeout = $this->response['timeout'];

            $response = Http::asForm()->post($url, $lead);
            Log::debug('RESP SGN POST1::', (array)$response);
            $xml = $response->body();
            Log::debug('RESP SGN  POST2::', (array)$xml);
            $res = simplexml_load_string($xml);
            Log::debug('RESP SGN POST3::', (array)$res);

            Log::debug('RESP SGN POST::', (array)$res);
            $this->response['application_response'] = (array)$res;
            $this->response['post_time'] = (string)$res->post_time ?? '0';

        } else {
            $this->response['application_response'] = $validation_result;
            $this->response['validated'] = false;
        }
    }

    public function returnresponse()
    {

        $appResponse = $this->response['application_response'];
        Log::debug('APP RESP::', (array)$appResponse);

        $this->response['post_res'] = $appResponse;
        Log::debug('RESP2 :: ', (array)$this->response);


        if ($appResponse['status'] == 'FAIL') {
            $this->response['accept'] = 'REJECTED';
            $this->response['post_price'] = '0.00';
            $this->response['post_status'] = '1';
            $this->response['redirect_url'] = '';
            $this->response['reason'] = json_encode($appResponse['errors']) ?? 'Not available';
            $this->response['post_time'] = '0.00';
        }

        if ($appResponse['status'] == 'OK') {
            $this->response['accept'] = 'ACCEPTED';
            $this->response['post_price'] = $appResponse['price'];
            $this->response['post_status'] = '1';
            $this->response['redirect_url'] = $appResponse['redirectUrl'];
            $this->response['reason'] = $appResponse['message'] ?? 'Not available';
            $this->response['post_time'] = '0.00';


        } else {
            $this->response['accept'] = 'REJECTED';
            $this->response['post_status'] = '0';
            $this->response['post_price'] = '0.00';
            $this->response['post_time'] = '0.00';
            $this->response['reason'] = $appResponse['message']  ?? 'Not available';;

        }
        return $this->response;
    }
}
