<?php

use App\Helpers\CurlHelper;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Monolog\Handler\StreamHandler;
use Monolog\Logger;

class itmedia
{
    var $response = array();

    function __construct($client_detail, $post)
    {
        $dob_day = $post->Applicant->dateOfBirthDay;
        $dob_month = $post->Applicant->dateOfBirthMonth;
        $dob_year = $post->Applicant->dateOfBirthYear;

        $next_pay_date_day = $post->Employer->nextPayDateDay;
        $next_pay_date_month = $post->Employer->nextPayDateMonth;
        $next_pay_date_year = $post->Employer->nextPayDateYear;
        $nextPayDate = $next_pay_date_day . '-' . $next_pay_date_month . '-' . $next_pay_date_year;

        $following_pay_date_day = $post->Employer->followingPayDateDay;
        $following_pay_date_month = $post->Employer->followingPayDateMonth;
        $following_pay_date_year = $post->Employer->followingPayDateYear;
        $followingPayDate = $following_pay_date_day . '-' . $following_pay_date_month . '-' . $following_pay_date_year;

        $creditScore = (string)$post->Additional->creditScore;
        $callTime = (string)$post->Additional->bestTimeToCall;
        $leadType = 'installment';

        $inMilitary = '';
        $incomeSource = '';
        $incomeCycle = '';
        $bankAccountType = '';
        $incomePaymentType = '';
        $loanPurpose = '';
        $residentialStatus = '';

        switch ($post->Applicant->inMilitary) {
            case 'None':
                $inMilitary = 'no';
                break;
            case 'Veteran':
                $inMilitary = 'yes';
                break;
            case 'Reserves':
                $inMilitary = 'yes';
                break;
            case 'ActiveDuty':
                $inMilitary = 'yes';
                break;
        }
        switch ($post->Employer->incomeSource) {
            case 'SelfEmployed':
                $incomeSource = 'selfemployment';
                break;
            case 'EmployedFullTime':
                $incomeSource = 'employment';
                break;
            case 'EmployedPartTime':
                $incomeSource = 'employment';
                break;
            case 'EmployedTemporary':
                $incomeSource = 'employment';
                break;
            case 'Pension':
                $incomeSource = 'benefits';
                break;
            case 'DisabilityBenefits':
                $incomeSource = 'benefits';
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
                $incomeCycle = 'biweekly';
                break;
            case 'Fortnightly':
                $incomeCycle = 'biweekly';
                break;
            case 'TwiceMonthly':
                $incomeCycle = 'twicemonthly';
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

        switch ($post->Bank->bankAccountType) {
            case 'Checking':
                $bankAccountType = 'checking';
                break;
            case 'Savings':
                $bankAccountType = 'saving';
                break;  }
        switch ($post->Employer->incomePaymentType) {
            case 'Cash':
                $incomePaymentType = 'no';
                break;
            case 'Cheque':
                $incomePaymentType = 'no';
                break;
            case 'RegionalDirectDeposit':
                $incomePaymentType = 'yes';
                break;
        }
        switch ($post->Loan->loanPurpose) {
            case 'Subsistence':
                $loanPurpose = 'emergencySituation';
                break;
            case 'OneOffPurchase':
                $loanPurpose = 'majorPurchase';
                break;
            case 'DebtConsolidation':
                $loanPurpose = 'debtConsolidation';
                break;
            case 'CarLoan':
                $loanPurpose = 'autoPurchase';
                break;
            case 'PayBills':
                $loanPurpose = 'rentOrMortgage';
                break;
            case 'ShortTermCash':
                $loanPurpose = 'majorPurchase';
                break;
            case 'HomeImprovements':
                $loanPurpose = 'homeImprovement';
                break;
            case 'Other':
                $loanPurpose = 'other';
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
        switch ((string)$post->Consent->consentThirdParty) {
            case 'true':
                $consentThirdParty = 'Y';
                break;
            case 'false':
                $consentThirdParty = 'N';
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


        $lead = array();
        $lead['username'] = $client_detail->parameter1;
        $lead['apikey'] = $client_detail->parameter2;
        $lead['campaignId'] = 'UPING';
        $lead['ip_address'] = (string)$post->Source->ipAddress;
        $lead['agent'] = (string)$post->Source->userAgent;
        $lead['min_price'] = (integer)$post->minCommissionAmount ?? $client_detail->min_price;
        $lead['amount'] = (integer)$post->Loan->loanAmount;
        $lead['fName'] = (string)$post->Applicant->firstName;
        $lead['lName'] = (string)$post->Applicant->lastName;
        $lead['zip'] = (string)$post->Residence->zip;
        $lead['city'] = (string)$post->Residence->city;
        $lead['state'] = (string)$post->Residence->state;
        $lead['address'] = (string)$post->Residence->addressStreet1;
        $lead['lengthAtAddress'] = (integer)$post->Residence->monthsAtAddress;
        $lead['licenseState'] = (string)$post->Applicant->drivingLicenseState;
        $lead['email'] = (string)$post->Applicant->email;
        $lead['license'] = (string)$post->Applicant->drivingLicenseNumber;
        $lead['rentOwn'] = (string)$residentialStatus ?? 'own';
        $lead['phone'] = (string)$post->Applicant->homePhoneNumber;
        $lead['workPhone'] = (string)$post->Applicant->workPhoneNumber;
        $lead['callTime'] = $callTime;
        $lead['bMonth'] = $dob_month;
        $lead['bDay'] = $dob_day;
        $lead['bYear'] = $dob_year;
        $lead['ssn'] = (string)$post->Applicant->ssn;
        $lead['armedForces'] = (string)$inMilitary ?? 'no';
        $lead['incomeSource'] = (string)$incomeSource ?? 'employment';
        $lead['employerName'] = (string)$post->Employer->employerName;
        $lead['timeEmployed'] = (integer)$post->Employer->monthsAtEmployer;
        $lead['employerPhone'] = (string)$post->Employer->employerPhoneNumber;
        $lead['jobTitle'] = (string)$post->Employer->jobTitle;
        $lead['paidEvery'] = (string)$incomeCycle ?? 'monthly';
        $lead['nextPayday'] = $nextPayDate;
        $lead['secondPayday'] = $followingPayDate;
        $lead['abaNumber'] = (string)$post->Bank->bankRoutingNumber;
        $lead['accountNumber'] = (string)$post->Bank->bankAccountNumber;
        $lead['accountType'] = (string)$bankAccountType ?? 'checking';
        $lead['bankName'] = (string)$post->Bank->bankName;
        $lead['bankPhone'] = 0;
        $lead['monthsBank'] = (integer)$post->Bank->monthsAtBank;
        $lead['directDeposit'] = (string)$incomePaymentType ?? 'yes';
        $lead['monthlyNetIncome'] = (int)$post->Employer->monthlyIncome;
//        $lead['ownCar']               = 'no';
        $lead['note'] = (string)$post->subid;
        $lead['websiteName'] = (string)$referringUrl;
        $lead['timeout'] = (integer)$post->timeout ?? '30';
        $lead['lead_type'] = (string)$leadType;
        $lead['loan_reason'] = (string)$loanPurpose ?? 'majorPurchase';
        $lead['credit_type'] = $creditScore;
        $lead['atrk'] = (string)$post->transaction_id ?? '0';

//        dd($lead);

        Log::debug('POST DATA::', (array)$lead);

        $this->response['post_data'] = $lead;
        $this->response['timeout'] = $client_detail->timeout;
        $this->response['post_url'] = ($client_detail->mode == '0') ? $client_detail->post_url_test : $client_detail->post_url_live;
//        $this->response['post_url'] = $client_detail->post_url_live;


        $validation_result = true;
        if ($validation_result == true) {

            $url = $this->response['post_url'];
            $timeout = $this->response['timeout'];

            $response = Http::asForm()->post($url, $lead);
            $response = $response->object();

            Log::debug('RESP ITM POST1::', (array)$response);
            $this->response['application_response'] = (array)$response;

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


        if ($appResponse['Status'] == 'Sold') {
            $this->response['accept'] = 'ACCEPTED';
            $this->response['post_price'] = $appResponse['Price'];
            $this->response['post_status'] = '1';
            $this->response['redirect_url'] = $appResponse['Redirect'];
            $this->response['reason'] = $appResponse['Messages'] ?? 'Not available';
            $this->response['post_time'] = '0.00';


        } else {
            $this->response['accept'] = 'REJECTED';
            $this->response['post_price'] = '0.00';
            $this->response['post_status'] = '1';
            $this->response['redirect_url'] = '';
            $this->response['reason'] = json_encode($appResponse['Messages']) ?? 'Not available';
            $this->response['post_time'] = '0.00';

        }
        return $this->response;
    }
}
