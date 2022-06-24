<?php

use App\Helpers\CurlHelper;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Monolog\Handler\StreamHandler;
use Monolog\Logger;

class roundsky
{
    var $response = array();
    //function __construct($client_detail, $post){
    //parent::__construct();

    function __construct($client_detail, $post)
    {

        $dob_day = $post->Applicant->dateOfBirthDay;
        $dob_month = $post->Applicant->dateOfBirthMonth;
        $dob_year = $post->Applicant->dateOfBirthYear;

        if ($dob_month > '12') {
            $dob_day = $dob_month;
            $dob_month = $dob_day;
        }
        $dateOfBirth = $dob_year . '-' . $dob_month . '-' . $dob_day;

        $next_pay_date_day = $post->Employer->nextPayDateDay;
        $next_pay_date_month = $post->Employer->nextPayDateMonth;
        $next_pay_date_year = $post->Employer->nextPayDateYear;
        $nextPayDate = $next_pay_date_year . '-' . $next_pay_date_month . '-' . $next_pay_date_day;

        $followingPayDateDay = $post->Employer->followingPayDateDay;
        $followingPayDateMonth = $post->Employer->followingPayDateMonth;
        $followingPayDateYear = $post->Employer->followingPayDateYear;
        $followingPayDate = $followingPayDateYear . '-' . $followingPayDateMonth . '-' . $followingPayDateDay;

        $AddressMoveIn = floor($post->Residence->stayYear * 12 + $post->Residence->monthsAtAddress);

        // Time in current employment status
        $EmploymentStarted = floor($post->Employer->monthsAtEmployer);

        $monthsAtBank = floor($post->Bank->bankAccountLength);


        switch ($post->Applicant->nameTitle) {
            case 'Mr':
                $post->Applicant->nameTitle = 1;
            case 'Mrs':
                $post->Applicant->nameTitle = 2;
            case 'Ms':
                $post->Applicant->nameTitle = 3;
            case 'Miss':
                $post->Applicant->nameTitle = 4;
        }
        switch ($post->Employer->incomeSource) {
            case 'SelfEmployed':
                $post->Employer->incomeSource = 'self_employed';
            case 'EmployedFullTime':
                $post->Employer->incomeSource = 'employment';
            case 'EmployedPartTime':
                $post->Employer->incomeSource = 'employment';
            case 'EmployedTemporary':
                $post->Employer->incomeSource = 'employment';
            case 'Pension':
                $post->Employer->incomeSource = 'employment';
            case 'DisabilityBenefits':
                $post->Employer->incomeSource = 'benefits';
            case 'Benefits':
                $post->Employer->incomeSource = 'benefits';
        }
        switch ($post->Employer->incomeCycle) {
            case 'Weekly':
                $post->Employer->incomeCycle = 'weekly';
            case 'BiWeekly':
                $post->Employer->incomeCycle = 'bi_weekly';
            case 'TwiceMonthly':
                $post->Employer->incomeCycle = 'twice_monthly';
            case 'FourWeekly':
                $post->Employer->incomeCycle = 'monthly';
            case 'Monthly':
                $post->Employer->incomeCycle = 'monthly';
        }
        switch ($post->Employer->incomePaymentType) {
            case 'Cash':
                $post->Employer->incomePaymentType = false;
            case 'Cheque':
                $post->Employer->incomePaymentType = false;
            case 'RegionalDirectDeposit':
                $post->Employer->incomePaymentType = true;
        }
        switch ($post->Applicant->inMilitary) {
            case 'None':
                $post->Applicant->inMilitary = 0;
            case 'Veteran':
                $post->Applicant->inMilitary = 1;
            case 'Reserves':
                $post->Applicant->inMilitary = 1;
            case 'ActiveDuty':
                $post->Applicant->inMilitary = 1;
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
            case 'Other':
                $post->Residence->residentialStatus = 'rent';

        }
        switch ($post->Applicant->maritalStatus) {
            case 'Single':
                $post->Applicant->maritalStatus = 1;
            case 'Married':
                $post->Applicant->maritalStatus = 2;
            case 'LivingTogether':
                $post->Applicant->maritalStatus = 3;
            case 'Separated':
                $post->Applicant->maritalStatus = 4;
            case 'Divorced':
                $post->Applicant->maritalStatus = 5;
            case 'Widowed':
                $post->Applicant->maritalStatus = 6;
            case 'Other':
                $post->Applicant->maritalStatus = 7;

        }
        switch ($post->Bank->bankAccountType) {
            case 'Checking':
                $post->Bank->bankAccountType = 'checkings';
            case 'Savings':
                $post->Bank->bankAccountType = 'savings';

        }

        if (Str::startsWith($post->Source->referringUrl, 'http')) {
            $input = $post->Source->referringUrl;
            $new_input = preg_replace("#^[^:/.]*[:/]+#i", "", $input);
            $referringUrl = $new_input;
        } else {
            $referringUrl = $post->Source->referringUrl;
        }


        $lead = array(
                "time_allowed" => (int)$client_detail->timeout,
                "partner" => (string)$client_detail->parameter1,
                "partner_password" => (string)$client_detail->parameter2,
                "customer_ip" => (string)$post->Source->ipAddress,
                "browser_info" => (string)$post->Source->userAgent,
                "domain" => (string)$referringUrl,
                "response_type" => 'json',
                "tier" => (int) 1,
                "minimum_price" =>  (integer) $post->minCommissionAmount ?? $client_detail->min_price,
                "sub_id" => (string)$post->subid ?? 'UPING',
                "first_name" => (string)$post->Applicant->firstName,
//                "first_name" => (string)'approved',
                "last_name" => (string)$post->Applicant->lastName,
                "email" => (string)$post->Applicant->email,
                "birth_date" => (string)$dateOfBirth,
                "address" => (string)$post->Residence->addressStreet1,
                "city" => (string)$post->Residence->city,
                "state" => (string)$post->Residence->state,
                "zip" => (string)$post->Residence->zip,
                "home_phone" => (string)$post->Applicant->homePhoneNumber,
                "work_phone" => (string)$post->Applicant->workPhoneNumber,
                "housing" => (string)$post->Residence->residentialStatus,
                "monthly_income" => (int)$post->Employer->monthlyIncome,
                "direct_deposit" => $post->Employer->incomePaymentType,
                "pay_period" => (string)$post->Employer->incomeCycle,
                "company" => (string)$post->Employer->employerName,
                "next_pay_date" => (string)$nextPayDate,
                "second_pay_date" => (string)$followingPayDate,
                "months_at_residence" => (int)$AddressMoveIn,
                "requested_loan_amount" => (int)$post->Loan->loanAmount,
                "income_type" => (string)$post->Employer->incomeSource,
                "active_military" => (string)$post->Applicant->inMilitary,
                "occupation" => (string)$post->Employer->jobTitle,
//                "employer" => (string)$post->Employer->employerName,
                "months_employed" => (int)$EmploymentStarted,

                "bank_name" => (string)$post->Bank->bankName,
                "account_type" => (string)$post->Bank->bankAccountType,
                "account_number" => (string)$post->Bank->bankAccountNumber,
                "routing_number" => (string)$post->Bank->bankRoutingNumber,
                "driving_license_state" => (string)$post->Applicant->drivingLicenseState,
                "driving_license_number" => (string)$post->Applicant->drivingLicenseNumber,
                "social_security_number" => (string)$post->Applicant->ssn,
            );

        Log::debug('POST DATA::', (array)$lead);

        $this->response['post_data'] = $lead;
        $this->response['timeout'] = $client_detail->timeout;
        $this->response['post_url'] = ($client_detail->mode == '0') ? $client_detail->post_url_test : $client_detail->post_url_live;


        $validation_result = true;
        if ($validation_result == true) {

            $api_creds = $lead['partner'] . ':' . $lead['partner_password'];
            $url = $this->response['post_url'];
            $params = http_build_query($this->response['post_data']);
            $header = '';
            $timeout = $this->response['timeout'];


            try {
                $response = (new App\Helpers\CurlHelper)->curl_post($url, $params, $header, $timeout, $api_creds);
            } catch (Exception $e) {
                Log::debug('RS CURL ERROR::', (array) $e);
            }
            $resp = json_decode($response['res'], true);


            Log::debug('RESP POST::', (array)$resp);
            $this->response['application_response'] = (array)$resp;
            $this->response['post_time'] = (string)$response['post_time'];

        } else {
            $this->response['application_response'] = $validation_result;
            $this->response['validated'] = false;
        }
    }

    public function returnresponse()
    {

        $appResponse = $this->response['application_response'];
        Log::debug('APP RESP::', (array)$appResponse);

        $resp_data = json_encode($appResponse);

        $this->response['post_res'] = $resp_data;
        Log::debug('RESP2 :: ', (array)$this->response);


        if ($appResponse['DECISION'] == 'APPROVED') {
            $this->response['accept'] = 'ACCEPTED';
            $this->response['post_price'] = $appResponse['PRICE'];
            $this->response['post_status'] = '1';
            $this->response['redirect_url'] = $appResponse['URL'];
            $this->response['reason'] = $appResponse['MESSAGE'] ?? 'Not available';
            $this->response['LenderFound'] = 'LenderFound';
            $this->response['post_time'] ?? '0.00';


        } else {
            $this->response['accept'] = 'REJECTED';
            $this->response['post_status'] = '0';
            $this->response['post_price'] = '0.00';
            $this->response['post_time'] ?? '0.00';
            $this->response['LenderFound'] = 'NoLenderFound';
            $this->response['reason'] = $appResponse['MESSAGE']  ?? 'Not available';;

        }
        return $this->response;
    }
}
