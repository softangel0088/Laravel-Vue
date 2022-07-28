<?php

namespace App\Models\Lead;

use App\Http\Requests\LeadPostRequest;
use App\Http\Requests\LeadPostRequestUS;
use App\Models\IPQS\IPQS;
use App\Models\Microbilt\Microbilt;
use Axlon\PostalCodeValidation\Support\Facades\PostalCodes;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;
use libphonenumber\NumberParseException;
use libphonenumber\PhoneNumberUtil;

class LeadValidate extends Model
{
    use HasFactory;



    /**
     * @param  $post
     * @return bool
     */
    public function validate_data($post)
    {
        $post = $this->format_dates($post);

        $applicant = $post->applicant;
        $employer = $post->employer;
        $zip = $post->residence->zip;


        $this->check_pay_dates($employer);
//        $this->check_phone_numbers($applicant, 'US');
        $this->check_postcode($zip, 'US');

        return true;
//        $dl_number = $request->applicant['drivingLicenseNumber'];
//        $dl_number_state = $request->applicant['drivingLicenseState'];
//        $ssn = $request->applicant['ssn'];
//        $email = $request->applicant['email'];
//        $firstName = $request->applicant['firstName'];
//        $lastName = $request->applicant['lastName'];
//        $validated_bank_details = $this->validate_bank($request['bank']);
//        $validate_driving_license = $this->verify_driving_license($dl_number, $dl_number_state, $firstName, $lastName);
//        $validate_ssn = $this->verify_ssn($ssn);
//        $validate_email = IPQS::verify_email($email);


    }


    /**
     * @param  $post
     * @return bool
     */
    public function validate_data_uk($post)
    {
        $applicant = $post->applicant;
        $employer = $post->employer;
        $postcode = $post->residencepostcode;

        $this->check_pay_dates($employer);
        $this->check_phone_numbers($applicant, 'GB');
        $this->check_postcode($postcode, 'GB');

        return true;

//        $email = $request->applicant['email;
//        $validate_email = IPQS::verify_email($email);
//        $validate_phone = IPQS::verify_phone($mobilePhoneNumber);
//        $validated_bank_details = $this->validate_bank($post->bank']);
    }


    /**
     * @param $request
     * @return bool
     */
    public function quality_score($request)
    {
        $validated_source = IPQS::quality_score($request);

        if ($validated_source == true) {
            return true;
        } else {
            return $validated_source->message ?? false;
        }
    }

    public function validate_bank($bank)
    {
        $bankaccountnumber = $bank['bankAccountNumber'];
        $bankroutingnumber = $bank['bankRoutingNumber'];

        $result = (new Microbilt)->verify($bankaccountnumber, $bankroutingnumber);

        return $result;

    }

    /**
     * @param $dlnumber
     * @param $dlnumberstate
     * @param $firstname
     * @param $lastname
     * @return bool
     */
    public function verify_driving_license($dlnumber, $dlnumberstate, $firstname, $lastname)
    {

        $result = (new Microbilt)->verify_driving_license_number($dlnumber, $dlnumberstate, $firstname, $lastname);

        return $result;

    }



    /**
     * @param $ssn
     * @return bool
     */
    public function verify_ssn($ssn)
    {

        return (new Microbilt)->verify_ssn($ssn);

    }

    /**
     * @param object $employer
     * @return bool
     */
    private function check_pay_dates(object $employer)
    {

        $npd = Carbon::createFromDate($employer->nextPayDateYear , $employer->nextPayDateMonth , $employer->nextPayDateDay);
        $fpd = Carbon::createFromDate($employer->followingPayDateYear . '/' . $employer->followingPayDateMonth . '/' . $employer->followingPayDateDay);


//        $this->dates_are_in_past($npd, $fpd);
        $this->dates_are_weekend($npd, $fpd);

        return true;
    }

    /**
     * @param Carbon $npd
     * @param Carbon $fpd
     * @return bool
     */
    private function dates_are_in_past(Carbon $npd, Carbon $fpd)
    {
        $next_pay_date = $npd->isPast();
        $following_pay_date = $fpd->isPast();
//        dd($following_pay_date);

        if ($next_pay_date === true) {
            echo json_encode(['errors' => 'Next Pay Date Should Be In The Future']);
            die();
        }
        if ($following_pay_date === true) {
            echo json_encode(['errors' => 'Following Pay Date Should Be In The Future']);
            die();
        } else {
            return true;
        }

    }

    /**
     * @param Carbon $npd
     * @param Carbon $fpd
     * @return bool
     */
    private function dates_are_weekend(Carbon $npd, Carbon $fpd)
    {
        $next_pay_date = $npd->isWeekend();
        $following_pay_date = $fpd->isWeekend();

        if ($next_pay_date === true) {
            echo json_encode(['errors' => 'Next Pay Date Should Not Be a Saturday or Sunday']);
            die();
        }
        if ($following_pay_date === true) {
            echo json_encode(['errors' => 'Following Pay Date Should Not Be a Saturday or Sunday']);
            die();
        } elseif ($next_pay_date == false && $following_pay_date == false) {
            return true;
        }

    }


    /**
     * @param $applicant
     * @param $country_code
     * //     * @return bool
     * @return bool
     */
    private function check_phone_numbers($applicant, $country_code)
    {
        if ($country_code == 'US') {
            $mobile = $applicant['cellPhoneNumber'];
        } else {
            $mobile = $applicant['mobilePhoneNumber'];

        }
        $this->validate_mobile_phone($mobile, $country_code);
        $this->validate_home_phone($applicant['homePhoneNumber'], $country_code);
        $this->validate_work_phone($applicant['workPhoneNumber'], $country_code);

        return true;
    }


    /**
     * @param $cellPhoneNumber
     * @param $country_code
     * @return bool
     */
    private function validate_mobile_phone($cellPhoneNumber, $country_code)
    {
        $swissNumberProto = '';
        $swissNumberStr = $cellPhoneNumber;
        $phoneUtil = PhoneNumberUtil::getInstance();
        try {
            $swissNumberProto = $phoneUtil->parse($swissNumberStr, $country_code);
            Log::debug($swissNumberProto);
        } catch (NumberParseException $e) {
            Log::debug($e);
        }

        $isValid = $phoneUtil->isValidNumber($swissNumberProto);


        if ($country_code == 'US') {
            if ($isValid === false) {
                echo json_encode(['errors' => 'cellPhoneNumber is Invalid.']);
                die();
            } else {
                return true;
            }
        }
        if ($country_code == 'GB') {
            if ($isValid === false) {
                echo json_encode(['errors' => 'mobilePhoneNumber is Invalid.']);
                die();
            } else {
                return true;
            }
        }

//        return $isValid;
    }


    /**
     * @param $homePhoneNumber
     * @param $country_code
     * @return bool
     */
    private function validate_home_phone($homePhoneNumber, $country_code)
    {
        $swissNumberProto = '';
        $swissNumberStr = $homePhoneNumber;
        $phoneUtil = PhoneNumberUtil::getInstance();
        try {
            $swissNumberProto = $phoneUtil->parse($swissNumberStr, $country_code);
            Log::debug($swissNumberProto);
        } catch (NumberParseException $e) {
            Log::debug($e);
        }

        $isValid = $phoneUtil->isValidNumber($swissNumberProto);

        if ($isValid === false) {
            echo json_encode(['errors' => 'homePhoneNumber is Invalid.']);
            die();
        } else {
            return true;
        }
//        return $isValid;
    }

    /**
     * @param $workPhoneNumber
     * @param $country_code
     * @return bool
     */
    private function validate_work_phone($workPhoneNumber, $country_code)
    {
        $swissNumberProto = '';
        $swissNumberStr = $workPhoneNumber;
        $phoneUtil = PhoneNumberUtil::getInstance();
        try {
            $swissNumberProto = $phoneUtil->parse($swissNumberStr, $country_code);
            Log::debug($swissNumberProto);
        } catch (NumberParseException $e) {
            Log::debug($e);
        }

        $isValid = $phoneUtil->isValidNumber($swissNumberProto);

        if ($isValid === false) {
            echo json_encode(['errors' => 'cellPhoneNumber is Invalid.']);
            die();
        } else {
            return true;
        }
    }

    /**
     * @param $zip
     * @return bool
     */
    private function check_zip($zip)
    {
        $isValid = PostalCodes::passes('US', $zip); // returns a boolean

//        dd($isValid);
        if ($isValid === false) {
            echo json_encode(['errors' => 'ZIP is Invalid.']);
            die();
        } else {
            return true;
        }
    }

    /**
     * @param $postcode
     * @param $country_code
     * @return bool
     */
    private function check_postcode($postcode, $country_code)
    {
        $isValid = PostalCodes::passes($country_code, $postcode); // returns a boolean

//        dd($isValid);
        if ($isValid === false) {
            echo json_encode(['errors' => 'Postcode is Invalid.']);
            die();
        } else {
            return true;
        }
    }

    /**
     * @param $post
     * @return mixed
     */
    private function format_dates($post)
    {
        if ($post->applicant->dateOfBirthMonth > '12'){
            $post->applicant->dateOfBirthMonth = $post->employer->dateOfBirthDay;
            $post->applicant->dateOfBirthDay = $post->employer->dateOfBirthMonth;
        }
        if ($post->employer->nextPayDateMonth > '12'){
            $nextPayDateDay = $post->employer->nextPayDateDay;
            $nextPayDateMonth = $post->employer->nextPayDateMonth;

            $post->employer->nextPayDateMonth = $nextPayDateDay;
            $post->employer->nextPayDateDay = $nextPayDateMonth;
        }
        if ($post->employer->followingPayDateMonth > '12'){
            $post->employer->followingPayDateMonth = $post->employer->followingPayDateDay;
            $post->employer->followingPayDateDay = $post->employer->followingPayDateMonth;

        }

        return $post;

    }

}
