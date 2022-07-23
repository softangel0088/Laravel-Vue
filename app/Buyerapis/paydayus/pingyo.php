<?php

use App\Buyerapis\vendor\PingYo\Application;
use App\Buyerapis\vendor\PingYo\ApplicationDetails;
use App\Buyerapis\vendor\PingYo\SourceDetails;
use App\Buyerapis\vendor\PingYo\Status;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;

class pingyo
{
    var $response = array();

    function __construct($client_detail, $post)
    {


//        dd($post);

        $dob_day = $post->Applicant->dateOfBirthDay;
        $dob_month = $post->Applicant->dateOfBirthMonth;
        $dob_year = $post->Applicant->dateOfBirthYear;
        if (strlen($dob_day) < 2) {
            $dob_day = '0' . $dob_day;
        }
        if (strlen($dob_month) < 2) {
            $dob_month = '0' . $dob_month;
        }

        if ($dob_month > '12') {
            try {
                $dob = new DateTime($dob_year . '/' . $dob_day . '/' . $dob_month, new DateTimeZone("UTC"));
                $dateOfBirth = '/Date(' . ($dob->getTimestamp() * 1000) . ')/';
                Log::debug('DOB Month > 12::', (array)$dateOfBirth);
            } catch (Exception $e) {
                $dob = strtotime($dob_year . '/' . $dob_day . '/' . $dob_month);
                $dateOfBirth = '/Date(' . $dob . ')/';
                Log::debug('DOB CATCH::', (array)$dateOfBirth);

                if ($dob === '') {
                    $dob = date("U", strtotime($dob_year . '/' . $dob_day . '/' . $dob_month));
                    $dateOfBirth = '/Date(' . $dob . ')/';
                    Log::debug('DOB EMPTY::', (array)$dateOfBirth);
                }
            }
        } else {
            try {
                $dob = new DateTime($dob_year . '/' . $dob_month . '/' . $dob_day, new DateTimeZone("UTC"));
                $dateOfBirth = '/Date(' . ($dob->getTimestamp() * 1000) . ')/';
                Log::debug('DOB TRY::', (array)$dateOfBirth);
            } catch (Exception $e) {
                $dob = strtotime($dob_year . '/' . $dob_month . '/' . $dob_day);
                $dateOfBirth = '/Date(' . $dob . ')/';
                Log::debug('DOB CATCH::', (array)$dateOfBirth);

                if ($dob === '') {
                    $dob = date("U", strtotime($dob_year . '/' . $dob_month . '/' . $dob_day));
                    $dateOfBirth = '/Date(' . $dob . ')/';
                    Log::debug('DOB EMPTY::', (array)$dateOfBirth);
                }
            }
        }



        $next_pay_date_day = $post->Employer->nextPayDateDay;
        $next_pay_date_month = $post->Employer->nextPayDateMonth;
        $next_pay_date_year = $post->Employer->nextPayDateYear;
        $npd = new DateTime($next_pay_date_year . '/' . $next_pay_date_month . '/' . $next_pay_date_day, new DateTimeZone("UTC"));
        $nextPayDate = '/Date(' . ($npd->getTimestamp() * 1000) . ')/';

        $followingPayDateDay = $post->Employer->followingPayDateDay;
        $followingPayDateMonth = $post->Employer->followingPayDateMonth;
        $followingPayDateYear = $post->Employer->followingPayDateYear;
        $fpd = new DateTime($followingPayDateYear . '/' . $followingPayDateMonth . '/' . $followingPayDateDay, new DateTimeZone("UTC"));
        $followingPayDate = '/Date(' . ($fpd->getTimestamp() * 1000) . ')/';

        $numberOfMonthsAtAddress = $post->Residence->monthsAtAddress;
        $date = date("c", strtotime('-' . $numberOfMonthsAtAddress . " months", strtotime($post->created_at)));
        $AddressMoveIn = date("c", strtotime($date));
        $ami = new DateTime($AddressMoveIn, new DateTimeZone("UTC"));
        $AddressMoveIn = '/Date(' . ($ami->getTimestamp() * 1000) . ')/';


        // Time in current employment status
        $numberOfMonthsInCurrentEmploymentStatus = $post->Employer->monthsAtEmployer;
        $date = date("c", strtotime('-' . $numberOfMonthsInCurrentEmploymentStatus . " months", strtotime($post->created_at)));
        $EmploymentStarted = date("c", strtotime($date));
        $es = new DateTime($EmploymentStarted, new DateTimeZone("UTC"));
        $EmploymentStarted = '/Date(' . ($es->getTimestamp() * 1000) . ')/';

        // Time at bank
        $numberOfMonthsInBank = $post->Bank->monthsAtBank;
        $date = date("c", strtotime('-' . $numberOfMonthsInBank . " months", strtotime($post->created_at)));
        $BankAccountOpened = date("c", strtotime($date));
        $bao = new DateTime($BankAccountOpened, new DateTimeZone("UTC"));
        $BankAccountOpened = '/Date(' . ($bao->getTimestamp() * 1000) . ')/';

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
                $post->Employer->incomeSource = 1;
            case 'EmployedFullTime':
                $post->Employer->incomeSource = 2;
            case 'EmployedPartTime':
                $post->Employer->incomeSource = 3;
            case 'EmployedTemporary':
                $post->Employer->incomeSource = 4;
            case 'Pension':
                $post->Employer->incomeSource = 5;
            case 'DisabilityBenefits':
                $post->Employer->incomeSource = 6;
            case 'Benefits':
                $post->Employer->incomeSource = 7;
        }
        switch ($post->Employer->incomeCycle) {
            case 'Weekly':
                $post->Employer->incomeCycle = 1;
            case 'BiWeekly':
                $post->Employer->incomeCycle = 2;
            case 'TwiceMonthly':
                $post->Employer->incomeCycle = 7;
            case 'Fortnightly':
                $post->Employer->incomeCycle = 7;
            case 'FourWeekly':
                $post->Employer->incomeCycle = 8;
            case 'Monthly':
                $post->Employer->incomeCycle = 8;
            case 'LastWorkingDayMonth':
                $post->Employer->incomeCycle = 14;
            case 'LastDayMonth':
                $post->Employer->incomeCycle = 14;
            case 'Monthly':
                $post->Employer->incomeCycle = 8;
        }
        switch ($post->Employer->incomePaymentType) {
            case 'Cash':
                $post->Employer->incomePaymentType = 2;
            case 'Cheque':
                $post->Employer->incomePaymentType = 3;
            case 'RegionalDirectDeposit':
                $post->Employer->incomePaymentType = 4;
            case 'NonRegionalDirectDeposit':
                $post->Employer->incomePaymentType = 2;
        }
        switch ($post->Applicant->inMilitary) {
            case 'None':
                $post->Applicant->inMilitary = 1;
            case 'Veteran':
                $post->Applicant->inMilitary = 2;
            case 'Reserves':
                $post->Applicant->inMilitary = 3;
            case 'ActiveDuty':
                $post->Applicant->inMilitary = 4;
        }
        switch ($post->Residence->residentialStatus) {
            case 'HomeOwner':
                $post->Residence->residentialStatus = 1;
            case 'PrivateTenant':
                $post->Residence->residentialStatus = 2;
            case 'CouncilTenant':
                $post->Residence->residentialStatus = 3;
            case 'LivingWithParents':
                $post->Residence->residentialStatus = 4;
            case 'LivingWithFriends':
                $post->Residence->residentialStatus = 5;
            case 'Other':
                $post->Residence->residentialStatus = 6;

        }
        switch ($post->Bank->BankAccountType) {
            case 'Checking':
                $post->Bank->BankAccountType = 1;
            case 'Savings':
                $post->Bank->BankAccountType = 2;

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
//



        $application = new Application();
        $application->AffiliateId =  (string) "UPING_USA";
        $application->Campaign =  (string)$post->vid ?? 'UPING';
        $application->SubAffiliate =  (string)$post->subid ?? '';
        $application->Timeout =  (int)$client_detail->timeout ?? '120';
        $application->TestOnly =  (boolean)false;

        $SourceDetails = new SourceDetails();
        $SourceDetails->Address = (string)$post->Source->ipAddress;
        $SourceDetails->ClientUserAgent = (string)$post->Source->userAgent;
        $SourceDetails->CreationUrl = (string)$post->Source->creationUrl;
        $SourceDetails->ReferringUrl = (string)$post->Source->referringUrl;

        $ApplicationDetails = new ApplicationDetails();
        $ApplicationDetails->ConsentToCreditSearch = (boolean)true;
        $ApplicationDetails->Title =  (int)$post->Applicant->nameTitle ?? 1;
        $ApplicationDetails->FirstName =  (string)$post->Applicant->firstName;
        $ApplicationDetails->LastName =  (string)$post->Applicant->lastName;
        $ApplicationDetails->DateOfBirth =  (string)$dateOfBirth;
        $ApplicationDetails->Email =  (string)$post->Applicant->email;
        $ApplicationDetails->HomePhoneNumber =  (string)$post->Applicant->homePhoneNumber;
        $ApplicationDetails->MobilePhoneNumber =  (string)$post->Applicant->cellPhoneNumber;
        $ApplicationDetails->WorkPhoneNumber =  (string)$post->Applicant->workPhoneNumber ?? $post->Applicant->cellPhoneNumber;
        $ApplicationDetails->EmployerName =  (string)$post->Employer->employerName ?? 'NOT AVAILABLE';
        $ApplicationDetails->JobTitle =  (string)$post->Employer->jobTitle ?? 'unknown';
        $ApplicationDetails->EmploymentStarted =  (string)$EmploymentStarted;
        $ApplicationDetails->IncomeSource =  (int)$post->Employer->incomeSource;
        $ApplicationDetails->PayFrequency =  (int)$post->Employer->incomeCycle;
        $ApplicationDetails->PayAmount =  (int)$post->Employer->monthlyIncome;
        $ApplicationDetails->IncomePaymentType =  (int)$post->Employer->incomePaymentType;

        $ApplicationDetails->NextPayDate =  (string)$nextPayDate;
        $ApplicationDetails->FollowingPayDate =  (string)$followingPayDate;

        $ApplicationDetails->LoanAmount =  (int)$post->Loan->loanAmount;
        $ApplicationDetails->Term =  (int)$post->Loan->loanTerms;
        $ApplicationDetails->ResidentialStatus =  (int)$post->Residence->residentialStatus;
        $ApplicationDetails->HouseNumber =  (string)$post->Residence->houseNumber;
        $ApplicationDetails->HouseName =  (string)$post->Residence->houseName;
        $ApplicationDetails->AddressStreet1 =  (string)$post->Residence->addressStreet1;
        $ApplicationDetails->AddressCity =  (string)$post->Residence->city;
        $ApplicationDetails->AddressState =  (string)$post->Residence->state;
        $ApplicationDetails->AddressMoveIn =  (string)$AddressMoveIn ?? '10-11-2018';
        $ApplicationDetails->AddressPostcode =  (string)$post->Residence->zip;
        $ApplicationDetails->BankName =  (string)$post->Bank->bankName;
        $ApplicationDetails->BankAccountNumber =  (string)$post->Bank->bankAccountNumber;
        $ApplicationDetails->BankRoutingNumber =  (string)$post->Bank->bankRoutingNumber;
        $ApplicationDetails->BankAccountType =  (int)$post->Bank->bankAccountType;
        $ApplicationDetails->BankAccountOpened =  (string)$BankAccountOpened;

        $ApplicationDetails->MaritalStatus =  (int)$post->Applicant->maritalStatus ?? 1;
        $ApplicationDetails->NumberOfDependents =  (int)$post->Applicant->dependants;
        $ApplicationDetails->CombinedMonthlyHouseholdIncome =  (float)$post->Applicant->dependants;

        $ApplicationDetails->DriversLicenseNumber =  (string)$post->Applicant->drivingLicenseNumber;
        $ApplicationDetails->DriversLicenseState =  (string)$post->Applicant->drivingLicenseState;
        $ApplicationDetails->NationalIdentityNumber =  (string)$post->Applicant->ssn;
        $ApplicationDetails->MilitaryService =  (int)$post->Applicant->inMilitary;

////      $ApplicationDetails->         "MinimumCommissionAmount" => (float) $client_detail->min_price ?? '',
//      $application['Application->         "MaximumCommissionAmount" => (float) $client_detail->max_price ?? '',


        $application->SourceDetails = $SourceDetails;
        $application->Application = $ApplicationDetails;


        $this->response['timeout'] = $client_detail->timeout;
        $this->response['post_url'] = ($client_detail->status == '0') ? $client_detail->post_url_test : $client_detail->post_url_live;

        $validation_result = (new Application)->pre_validate($application);
        if ($validation_result == true) {


                $application_status = (new Application)->send($application);
                Log::debug('STATUS::', (array)$application_status);


                $temp_errors = $application_status;
                $temp_errors = json_decode($temp_errors, true);

                if (isset($temp_errors['Errors'])) {
                    echo $application_status;
                    die();
                }

            $this->response['application_response'] = $application_status;

        } else {
            $this->response['application_response'] = $validation_result;
            $this->response['validated'] = false;
        }
    }


    public function returnresponse()
    {
        $appResponse = $this->response['application_response'];
        Log::debug('APP RESP::', (array)$appResponse);


        Log::debug('APP RESP::', (array)$appResponse->correlationid);
        $CorrelationId = $appResponse->correlationid;


        $this->response['validated'] = true;
        if ($this->response['validated'] === true) {
            $status = new Status('202', null, $CorrelationId, null);
            Log::debug('RESP STATUS::', (array)$status);

            $counter = 0;
            while (true) {
                $res = $status->refresh();
                Log::debug('STATUS REFRESH::', (array)$res);
                $counter++;
                if ($status->percentagecomplete == 100) {
                    break;
                }

                sleep(3);
            }

            $this->response['post_res'] = json_encode($res);
            $this->response['correlationid'] = $status->correlationid;
            Log::debug('POST RES :: ', (array)$this->response);
            Log::debug('RESP3 :: ', (array)$status);

            if ($status->status == 'LenderMatchFound') {
                $this->response['accept'] = 'ACCEPTED';
                $this->response['post_price'] = $status->estimatedcommission->Amount;
                $this->response['post_status'] = '1';
                $this->response['redirect_url'] = $status->redirecturl;
                $this->response['post_time'] = $appResponse->post_time;
                $this->response['LenderFound'] = 'LenderFound';

            } elseif ($status->status == 'ConditionalLenderMatchFound') {
                $this->response['accept'] = 'ACCEPTED';
                $this->response['post_status'] = '0';
                $this->response['post_price'] = '0';
                $this->response['post_time'] = $appResponse->post_time;
                $this->response['LenderFound'] = 'LenderFound';
            } elseif ($status->status == 'NoLenderMatchFound') {
                $this->response['accept'] = 'REJECTED';
                $this->response['post_status'] = '0';
                $this->response['post_price'] = '0';
                $this->response['post_time'] = $appResponse->post_time;
                $this->response['LenderFound'] = 'Declined';
            }
            return $this->response;
        } else {
            $this->response['errors'] = 'Validation Failed';
            $this->response['post_status'] = '0';
            $this->response['post_price'] = '0';
            $this->response['post_time'] = $appResponse->post_time;
            $this->response['LenderFound'] = 'Errors';
            return $this->response;
        }




    }



}
