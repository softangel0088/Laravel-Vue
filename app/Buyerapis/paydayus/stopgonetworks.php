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


//        $post->Loan->loanPurpose = 'oneoffPurchase';
//        $creditScore = 'good';
        $bankruptcy = 'N';

        $inMilitary = '';
        $incomeSource = '';
        $incomeCycle = '';
        $bankAccountType = '';
        $incomePaymentType = '';
        $loanPurpose = '';
        $residentialStatus = '';
        $consentThirdParty = '';
        $creditScore = '';

        if ($post->Residence->monthsAtAddress == '0') {
            $monthsAtAddress = '1';
        } else {
            $monthsAtAddress = $post->Residence->monthsAtAddress;
        }
        if ($post->Bank->monthsAtBank == '0') {
            $monthsAtBank = '1';
        } else {
            $monthsAtBank = $post->Bank->monthsAtBank;
        }
        if ($post->Employer->monthsAtEmployer == '0') {
            $monthsAtEmployer = '1';
        } else {
            $monthsAtEmployer = $post->Employer->monthsAtEmployer;
        }

        switch ($post->Employer->incomeSource) {
            case 'SelfEmployed':
                $incomeSource = 'selfEmployed';
                break;
            case 'EmployedFullTime':
                $incomeSource = 'employed';
                break;
            case 'EmployedPartTime':
                $incomeSource = 'employed';
                  break;
            case 'EmployedTemporary':
                $incomeSource = 'employed';
                  break;
            case 'Pension':
                $incomeSource = 'pension';
                  break;
            case 'DisabilityBenefits':
                $incomeSource = 'disability';
                  break;
            case 'Benefits':
                $incomeSource = 'benefits';
                  break;
        }
        switch ($post->Employer->incomeCycle) {
            case 'Weekly':
                $incomeCycle = 'weekly';
                break;
            case 'BiWeekly':
                $incomeCycle = 'biWeekly';
                break;
                case 'Fortnightly':
                $incomeCycle = 'biWeekly';
            case 'TwiceMonthly':
                $incomeCycle = 'twiceMonthly';
                 break;
            case 'FourWeekly':
                $incomeCycle = 'monthly';
                 break;
            case 'Monthly':
                $incomeCycle = 'monthly';
                 break;
            case 'LastDayMonth':
                $incomeCycle = 'monthly';
                 break;
            case 'LastWorkingDayMonth':
                $incomeCycle = 'monthly';
                 break;
            case 'LastFriday':
                $incomeCycle = 'monthly';
                 break;
            case 'LastThursday':
                $incomeCycle = 'monthly';
                 break;
            case 'LastWednesday':
                $incomeCycle = 'monthly';
                 break;
            case 'LastTuesday':
                $incomeCycle = 'monthly';
                 break;
            case 'LastMonday':
                $incomeCycle = 'monthly';
                 break;
            case 'SpecificDayOfMonth':
                $incomeCycle = 'monthly';
                 break;
        }
        switch ($post->Employer->incomePaymentType) {
            case 'Cash':
                $incomePaymentType = 'N';
                break;
            case 'Cheque':
                $incomePaymentType = 'N';
                break;
            case 'RegionalDirectDeposit':
                $incomePaymentType = 'Y';
                break;
        }
        switch ($post->Applicant->inMilitary) {
            case 'None':
                $inMilitary = 'N';
                break;
            case 'Veteran':
                $inMilitary = 'Y';
                 break;
            case 'Reserves':
                $inMilitary = 'Y';
                 break;
            case 'ActiveDuty':
                $inMilitary = 'Y';
                 break;
        }
        switch ($post->Residence->residentialStatus) {
            case 'HomeOwner':
                $residentialStatus = 'own';
                break;
             case 'PrivateTenant':
                $residentialStatus = 'rent';
                 break;
            case 'CouncilTenant':
                $residentialStatus = 'rent';
                 break;
            case 'LivingWithParents':
                $residentialStatus = 'rent';
                 break;
            case 'LivingWithFriends':
                $residentialStatus = 'rent';
                 break;
            case 'LivingWithFamily':
                $residentialStatus = 'rent';
                 break;
            case 'Other':
                $residentialStatus = 'rent';
                 break;


        }
        switch ($post->Bank->bankAccountType) {
            case 'Checking':
                $bankAccountType = 'checking';
                break;
            case 'Savings':
                $bankAccountType = 'savings';
                break;
        }
        switch ((string)$post->Consent->consentThirdParty) {
            case 'true':
                $consentThirdParty = 'Y';
                break;
            case 'false':
                $consentThirdParty = 'N';
                break;
        }
        switch ($post->Additional->creditScore) {
            case '1':
                $creditScore = 'excellent';
                break;
            case '2':
                $creditScore = 'good';
                break;
            case '3':
                $creditScore = 'fair';
                break;
            case '4':
                $creditScore = 'poor';
                break;
            case '5':
                $creditScore = 'good';
                break;

        }

        if (Str::startsWith($post->Source->referringUrl, 'http')) {
            $input = $post->Source->referringUrl;
            $new_input = preg_replace("#^[^:/.]*[:/]+#i", "", $input);
            $referringUrl = $new_input;
        } else {
            $referringUrl = $post->Source->referringUrl;
        }

//        dd($client_detail->min_price);
//        dd($post);




        $lead = array(
            "aff" => (string)$client_detail->parameter1,
            "apiToken" => (string)$client_detail->parameter2,
            'subAff' => (string)$post->subid ?? 'UPING',
            'timeAllowed' => (integer) $post->timeout ?? '30',
            'minPrice' => (integer) $post->minCommissionAmount ?? $client_detail->min_price,

            'amount' => (integer) $post->Loan->loanAmount,
            'purpose' => (string) $loanPurpose ?? '',

            'firstName' => (string) $post->Applicant->firstName,
            'lastName' =>(string) $post->Applicant->lastName,
            'email' => (string) $post->Applicant->email,
            'SSN' => (string)$post->Applicant->ssn,
            'driverLicense' =>  (string)$post->Applicant->drivingLicenseNumber,
            'driverState' =>  (string)$post->Applicant->drivingLicenseState, // ENUM
            'mobilePhone' => (string)$post->Applicant->cellPhoneNumber,
            'homePhone' =>  (string)$post->Applicant->homePhoneNumber,
            'workPhone' => (string)$post->Applicant->workPhoneNumber,
            'military' =>  (string) $inMilitary ?? 'N', //ENUM
            'dob' => (string) $dateOfBirth,

            'streetAddress' => (string)$post->Residence->addressStreet1,
            'postalCode' => (string)$post->Residence->zip,
            'locality' => (string)$post->Residence->city,
            'region' => (string)$post->Residence->state, //ENUM
            'homeOwner' => (string)$residentialStatus ?? 'own', // ENUM
            'timeAddress' => (integer)$monthsAtAddress,

            'incomeSource' => (string)$incomeSource ?? 'employed', // ENUM
            'jobTitle' => (string)$post->Employer->jobTitle,
            'company' => (string)$post->Employer->employerName,
            'income' =>  (int)$post->Employer->monthlyIncome,
            'directDeposit' =>  (string)$incomePaymentType ?? 'Y', //ENUM
            'frequency' => (string)$incomeCycle ?? 'monthly', //ENUM
            'payDate' => (string)$nextPayDate,
            'payDateNext' => (string)$followingPayDate,
            'timeJob' => (integer) $monthsAtEmployer,

            'accountABA' =>  (string)$post->Bank->bankRoutingNumber,
            'bankName' => (string)$post->Bank->bankName,
            'accountNumber' => (string)$post->Bank->bankAccountNumber,
            'accountType' => (string)$bankAccountType ?? 'Y',
            'accountLength' => (integer)$monthsAtBank,
            'bankruptcy' => (integer) $bankruptcy, //ENUM

            'userAgent' => (string) $post->Source->userAgent,
            'ipAddress' => (string)$post->Source->ipAddress,

            'termsAgreed' => (string) 'Y',
            'mailing' => (string) $consentThirdParty ? 'Y' : 'N', //ENUM

            "domain" => (string)$referringUrl,
            'creditScore' => (string) $creditScore ?? 'good',
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
