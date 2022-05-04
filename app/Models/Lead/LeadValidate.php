<?php

namespace App\Models\Lead;

use App\Http\Requests\LeadPostRequestUS;
use App\Models\IPQS\IPQS;
use App\Models\Microbilt\Microbilt;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class LeadValidate extends Model
{
    use HasFactory;

    public function validate_data(LeadPostRequestUS $request)
    {
        $valid = true;

        $email = $request->applicant['email'];
        $cellPhoneNumber = $request->applicant['cellPhoneNumber'];
        $dlnumber = $request->applicant['drivingLicenseNumber'];
        $dlnumberstate = $request->applicant['drivingLicenseState'];
        $firstName = $request->applicant['firstName'];
        $lastName = $request->applicant['lastName'];
        $ssn = $request->applicant['ssn'];

        $validate_email = IPQS::verify_email($email);
        $validate_phone = IPQS::verify_phone($cellPhoneNumber);
        $validate_driving_license = $this->verify_driving_license($dlnumber, $dlnumberstate, $firstName, $lastName);
        $validate_ssn = $this->verify_ssn($ssn);
        $validated_bank_details = $this->validate_bank($request->bank);


//        dd($validate_lead);
//        if ($validate_lead == false) {
//            return $validate_lead;
//        }
        if ($validate_email == false) {
            return 'Invalid Email';
        }
        elseif ($validate_ssn == false) {
            return 'Invalid SSN';
        }
        elseif ($validate_driving_license !== true) {
            return 'Invalid Driving License';
        }
        elseif ($validated_bank_details !== true) {
            return $validated_bank_details;
        } elseif (
//            $validate_lead == $valid &&
            $validate_email == $valid &&
            $validate_phone == $valid &&
            $validate_ssn == $valid
            &&
            $validate_driving_license == $valid &&
            $validated_bank_details == $valid
        ) {
            return true;
        }
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

        $result = (new Microbilt)->verify_ssn($ssn);

        return $result;

    }
}
