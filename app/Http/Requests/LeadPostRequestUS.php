<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class LeadPostRequestUS extends FormRequest
{
    /**
     * Indicates if the validator should stop on the first rule failure.
     *
     * @var bool
     */
    protected $stopOnFirstFailure = false;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'vid' => 'required',

            'oid' => 'required',
//            'response_type'
//            'minCommissionAmount' => 'required_without:tier',
//            'maxCommissionAmount' => 'required_without:tier',
//            'tier' => 'required_without_all:minCommissionAmount,maxCommissionAmount',

            'source.ipAddress' => 'required|ip',
            'source.userAgent' => 'required',
            'source.creationUrl' => 'required',
            'source.referringUrl' => 'required',

            'loan.loanAmount' => 'required|gte:50|lte:50000|multiple_of:50|numeric',
            'loan.loanTerms' => [
                Rule::in(1, 3, 6, 12, 18, 24, 36, 48, 60),
            ],
            'loan.loanPurpose' => [
                'required',
                Rule::in(
                    [
                        'Subsistence',
                        'OneOffPurchase',
                        'DebtConsolidation',
                        'CarLoan',
                        'PayBills',
                        'PayOffLoan',
                        'ShortTermCash',
                        'HomeImprovements',
                        'Other'
                    ]
                ),
            ],

            'applicant.nameTitle' => [
                'required',
                Rule::in('Mr', 'Miss', 'Mrs', 'Ms'),
            ],
            'applicant.firstName' => [
                'required', 'min:2', 'regex:/^[a-zA-Z-\'" ]+$/',
                Rule::notIn('Mr', 'Miss', 'Mrs', 'Ms'),
            ],
            'applicant.lastName' => [
                'required','min:2', 'regex:/^[a-zA-Z-\'" ]+$/',
                Rule::notIn('Mr', 'Miss', 'Mrs', 'Ms'),
            ],

            'applicant.dateOfBirthDay' =>  'min:2',
            'applicant.dateOfBirthMonth' =>  'min:2',
            'applicant.dateOfBirthYear' =>  'min:4',
            'applicant.ssn' => 'required', 'min:9',
            'applicant.email' => 'required', 'email:rfc, dns, spoof, filter',
            'applicant.homePhoneNumber' => 'required|min:10',
            'applicant.cellPhoneNumber' =>  'required|min:10',
            'applicant.workPhoneNumber' => 'required|min:10',
            'applicant.maritalStatus' => [
                Rule::in(
                    'Single',
                    'Married',
                    'LivingTogether',
                    'Separated',
                    'Divorced',
                    'Widowed',
                    'Other'
                ),
            ],
            'applicant.dependants' => [
                Rule::in(
                    1,
                    2,
                    3,
                    4
                ),
            ],
            'applicant.inMilitary' => [
                'required',
                Rule::in(
                    'None',
                    'Veteran',
                    'Reserves',
                    'ActiveDuty'
                ),
            ],
            'applicant.drivingLicenseState' =>  'min:2',
            'applicant.drivingLicenseNumber' =>  'min:4',  'regex:^[A-Z](?:\d[- ]*){14}$',

            // Residence
            'residence.houseNumber' => 'requiredIf:houseName,null',
            'residence.houseName' => 'requiredIf:houseNumber,null',

            'residence.residentialStatus' => [
                'required',
                Rule::in(
                    'HomeOwner',
                    'PrivateTenant',
                    'CouncilTenant',
                    'LivingWithParents',
                    'LivingWithFriends',
                    'LivingWithFamily',
                    'Other'
                ),
            ],
            'residence.addressStreet1' => 'required', 'different:houseNumber', 'min:4', 'max:128',
            'residence.city' =>  'min:2', 'max:32',
            'residence.state' => 'required|string|min:2|max:2|size:2',
            'residence.zip' => [
                'required', 'min:5', 'regex:/^(?:(\d{5})(?:[ \-](\d{4}))?)$/i'
            ],
            'residence.monthsAtAddress' => [
                'required',
//                'min:0', 'max:60',
                Rule::in(0, 12, 24, 36, 48, 60, 72, 84, 96),
            ],




//            'employer.employerName' => 'required', 'min:3', 'max:128',
//            'employer.jobTitle' => 'required_if:','min:1', 'max:128',
            'employer.incomeSource' =>  [
                'required',
                Rule::in(
                    'SelfEmployed',
                    'EmployedFullTime',
                    'EmployedPartTime',
                    'EmployedTemporary',
                    'Pension',
                    'DisabilityBenefits',
                    'Benefits',
                    'Retired',
                    'Unemployed',
                    'Student',
                    'ArmedForces'
                ),
            ],
            'employer.incomeCycle' => [
                'required',
                Rule::in(
                    'SpecificDayOfMonth',
                    'Weekly',
                    'BiWeekly',
                    'Fortnightly',
                    'LastDayMonth',
                    'LastWorkingDayMonth',
                    'TwiceMonthly',
                    'FourWeekly',
                    'LastFriday',
                    'LastWednesday',
                    'LastTuesday',
                    'LastThursday',
                    'LastMonday'
                ),
            ],
            'employer.monthlyIncome' => 'required', 'gte:100', 'lte:15000',
            'employer.monthsAtEmployer' => [
                'required',
                Rule::in(0, 12, 24, 36, 48, 60, 72, 84, 96),

            ],
            'employer.incomePaymentType' => [
                'required',
                Rule::in('Cheque', 'Cash', 'RegionalDirectDeposit', 'NonRegionalDirectDeposit'),
            ],
            'employer.nextPayDateDay' => 'min:2', 'max:2', 'size:2',
            'employer.nextPayDateMonth' => 'min:2', 'max:2', 'size:2',
            'employer.nextPayDateYear' => 'min:4', 'max:4', 'size:4',
            'employer.followingPayDateDay' => 'min:2', 'max:2', 'size:2',
            'employer.followingPayDateMonth' => 'min:2', 'max:2', 'size:2',
            'employer.followingPayDateYear' => 'min:4', 'max:4', 'size:4',


            'bank.bankPhone' => 'min:10',
            'bank.bankName' => 'required', 'min:2', 'max:64',
            'bank.bankAccountType' => [
                    'required',
                    Rule::in('Checking', 'Savings'),
        ],

            'bank.bankAccountNumber' => 'min:7', 'max:25',
            'bank.bankRoutingNumber' => 'min:9',

            'bank.monthsAtBank' => [
                'required',
                Rule::in(0, 12, 24, 36, 48, 60, 72, 84, 96),


            ],
//

            'consent.consentFinancial' => 'boolean',
            'consent.consentThirdPartyEmails' => 'boolean',

//            'combinedMonthlyHouseholdIncome' => 'requiredIf:maritalStatus, Married', 'required', '' [21]
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'vid.required' => 'A vid is required',
            'tier.required' => 'A tier is required',
            'loanPurpose.required' => 'Please choose one of the following:
                        Subsistence,
                        OneOffPurchase,
                        Other,
                        DebtConsolidation,
                        CarLoan,
                        PayBills,
                        PayOffLoan,
                        ShortTermCash,
                        HomeImprovements',

            'loan.loanAmount.required' => 'Loan amount must be in multiples of 100,  ex: 1100, 1200, etc.',

            'loan.loanTerms.required' => 'The selected loan term is not applicable on the loan amount entered',

            'applicant.nameTitle.required' => '',
            'applicant.firstName.required' => 'First name can contain only alphabets and spaces',

            'applicant.lastName.required' => 'Last name can contain only alphabets, spaces, hyphens and apostrophes',

            // add : + 18 years old
            'applicant.dateOfBirthDay.required' => 'Date Of Birth Day Field is required',
            'applicant.dateOfBirthMonth.required' => 'Date Of Birth Month is required',
            'applicant.dateOfBirthYear.required' => 'Date Of Birth Year Field is required',

            // check email
            'applicant.email.required' => 'Please enter a valid email',
            'applicant.maritalStatus.required' => 'Please enter a valid maritalStatus',
            'applicant.dependants.required' => 'Please enter a valid dependants',
            'applicant.homePhoneNumber.required' => 'Please enter a valid homePhoneNumber number',
            'applicant.cellPhoneNumber.required' => 'Please enter a valid mobilePhoneNumber number',
            'applicant.workPhoneNumber.required' => 'Please enter a valid workPhoneNumber number',
            'employer.employerName.required' => 'Please enter a valid employerName',
            'employer.monthsAtAddress.required' => 'Please choose one of the following options: 12, 24, 36, 48, 60, 96',
//            // timeinwork
//            'employmentYear' => [
//                'required', 'min:6', 'max:8',
//                Rule::in('12','24','36','48','60','96'),
//            ],
            'employer.employerIndustry.required' => 'Please enter a valid employerIndustry',
            'employer.incomeSource.required' => 'Please enter a valid incomeSource',
            'employer.incomeCycle.required' => 'Please enter a valid incomeCycle',
            'employer.monthlyIncome.required' => 'Please enter a valid monthlyIncome',
            'employer.nextPayDateDay' => 'Next Pay Date Day is required',
            'employer.nextPayDateMonth' => 'Next Pay Date Month is required',
            'employer.nextPayDateYear' => 'Next Pay Date Year is required',
            'employer.followingPayDateDay' => 'Following Pay Date Day is required',
            'employer.followingPayDateMonth' => 'Following Pay Date Month is required',
            'employer.followingPayDateYear' => 'Following Pay Date Year is required',
            'residence.houseNumber.required' => 'Please enter a valid houseNumber',
//            'houseName' => 'required',
//            'flatNumber' => 'required',////
            'residence.addressStreet1.required' => 'Please enter a valid addressStreet1',
            'residence.city.required' => 'Please enter a valid city',
            'residence.locality.required' => 'Please enter a valid locality',
            'residence.county.required' => 'Please enter a valid county',
//            'postCode.required' => 'Please enter a valid postcode',
            'residence.residentialStatus.required' => 'Residential Status error',
            'employer.monthlyMortgageRent.required' => 'Please enter a valid monthlyMortgageRent',
////            'expense.monthlyRepayments.required' => 'Please enter a valid monthlyRepayments',
//            'monthlyUtilities.required' => 'Please enter a valid monthlyUtilities',
//            'monthlyTransport.required' => 'Please enter a valid monthlyTransport',
//            'monthlyFood.required' => 'Please enter a valid monthlyFood',
//            'otherExpense.required' => 'Please enter a valid otherExpense',
//            'bankCardType.required' => 'Please enter a valid bankCardType',
            'bank.bankAccountNumber.required' => 'Please enter a valid bankAccountNumber',
            'bank.bankRoutingNumber.required' => 'Please enter a valid bankRoutingNumber',
//            // check: accepted
            'consent.consentFinancial.required' => 'Please enter a valid consentFinancial',
            'consent.consentCreditSearch.required' => 'Please enter a valid consentCreditSearch',
            'consent.consentThirdPartyEmails.required' => 'Please enter a valid consentThirdPartyEmails',
            'consent.consentThirdPartySMS.required' => 'Please enter a valid consentThirdPartySMS',
            'consent.consentThirdPartyPhone.required' => 'Please enter a valid consentThirdPartyPhone',
            'source.ipAddress.required' => 'Please enter a valid ipAddress',
            'source.userAgent.required' => 'Please enter a valid userAgent',
            'source.creationUrl.required' => 'Please enter a valid creationUrl',
            'source.referringUrl.required' => 'Please enter a valid referringUrl',

            'employer.combined_pay' => 'Combined pay is invalid.',
//
//
        ];

    }
}
