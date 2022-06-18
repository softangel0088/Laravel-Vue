<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class LeadPostRequest extends FormRequest
{
    /**
     * Indicates if the validator should stop on the first rule failure.
     *
     * @var bool
     */
    protected $stopOnFirstFailure = true;


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
            'loan.loanAmount' => 'required|gte:100|lte:5000|multiple_of:50|numeric',
            'loan.recentLoanCount' => 'required',

            'loan.loanTerms' => [
                'required',
                Rule::in(1, 3, 6, 9, 12, 18, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144),
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
                'required', 'different:firstName', 'min:2', 'regex:/^[a-zA-Z-\'" ]+$/',
                Rule::notIn('Mr', 'Miss', 'Mrs', 'Ms'),
            ],

            // add : + 18 years old
            'applicant.dateOfBirthDay' => 'required',
            'applicant.dateOfBirthMonth' => 'required',
            'applicant.dateOfBirthYear' => 'required',

            'applicant.homePhoneNumber' => 'required|size:11',
            'applicant.mobilePhoneNumber' => 'required|size:11|starts_with:07',
            'applicant.workPhoneNumber' => 'required|size:11',

            'employer.employmentIndustry' => [
                Rule::in(
                    'ConstructionManufacturing',
                    'Military',
                    'Health',
                    'BankingInsurance',
                    'Education',
                    'CivilService',
                    'SupermarketRetail',
                    'UtilitiesTelecom',
                    'HotelRestaurantAndLeisure',
                    'OtherOfficeBased',
                    'OtherNotOfficeBased',
                    'DrivingDelivery',
                    'AdministrationSecretarial',
                    'MidLevelManagement',
                    'SeniorLevelManagement',
                    'SkilledTrade',
                    'Professional'

                )
            ],
            'applicant.email' => 'required', 'email:rfc, dns, spoof, filter',
//
            'applicant.maritalStatus' => [
                'required',
                Rule::in(
                    'Single',
                    'Married',
                    'LivingTogether',
                    'Separated',
                    'Divorced',
                    'Widowed',
                    'Other'),
            ],
//
            'applicant.dependants' => [
                'required',
                Rule::in(0,1,2,3,4),
            ],
            'residence.residentialStatus' => [
                'required',
                Rule::in(
                    'HomeOwner',
                    'PrivateTenant',
                    'CouncilTenant',
                    'LivingWithParents',
                    'LivingWithFriends',
                    'Other'),
            ],
            'residence.monthsAtAddress' => [
                'required',
                Rule::in('12', '24', '36', '48', '60', '72'),
            ],
            'residence.monthsAtEmployer' => [
                'sometimes', 'required',
                Rule::in('12', '24', '36', '48', '60', '72'),
            ],


            'houseNumber' => 'numeric',
//            'houseName' =>  'string',
//            'flatNumber' => 'string|nullable',
            'residence.addressStreet1' => 'required', 'different:houseNumber',
            'residence.city' => 'required', 'min2',
            'residence.locality' => 'required', 'min:2',
            'residence.county' => 'required', 'min:2',
            'residence.monthlyMortgageRent' => 'required', 'numeric',
            'residence.postcode' => [
                'required',
            ],
            'employer.incomeSource' => [
                'required',
                Rule::in(
                    'SelfEmployed',
                    'EmployedFullTime',
                    'EmployedPartTime',
                    'EmployedTemporary',
                    'Pension',
                    'DisabilityBenefits',
                    'Benefits'
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
                    'LastThursday',
                    'LastWednesday',
                    'LastTuesday',
                    'LastMonday'),
            ],
            'employer.monthlyIncome' => 'required', 'gte:100', 'lte:15000', 'numeric',
            'employer.incomePaymentType' => [
                 'required',
                Rule::in(
                    'Cheque',
                    'Cash',
                    'RegionalDirectDeposit',
                    'NonRegionalDirectDeposit'
                )],

            'employer.nextPayDateDay' => 'required','min:2', 'max:2',
            'employer.nextPayDateMonth' => 'required','min:2', 'max:2',
            'employer.nextPayDateYear' => 'required','min:4', 'max:4',
            'employer.followingPayDateDay' => 'required','min:2', 'max:2',
            'employer.followingPayDateMonth' => 'required','min:2', 'max:2',
            'employer.followingPayDateYear' => 'required','min:4', 'max:4',

            'expense.monthlyRepayments' => 'required', 'numeric','gte:0', 'lte:15000',
            'expense.utilitiesExpense' => 'required', 'numeric','gte:0', 'lte:15000',
            'expense.foodExpense' => 'required', 'numeric','gte:0', 'lte:15000',
            'expense.transportExpense' => 'required', 'numeric','gte:0', 'lte:15000',
            'expense.otherExpense' => 'required', 'numeric','gte:0', 'lte:15000',

            'bank.bankCardType' => [
                'required',
                Rule::in(
                    'Solo',
                    'SwitchMaestro',
                    'Visa',
                    'VisaDebit',
                    'VisaDelta',
                    'VisaElectron',
                    'MasterCard',
                    'MasterCardDebit'
                ),
            ],
            'bank.bankAccountNumber' => 'required', 'size:8',
            'bank.bankRoutingNumber' => 'required', 'size:6',

            'consent.consentFinancial' => 'boolean',
            'source.ipAddress' => 'required',
            'source.userAgent' => 'required',
            'source.creationUrl' => 'required',
            'source.referringUrl' => 'required',
//            'combinedMonthlyHouseHoldIncome' => 'sometimes', 'required',
//             employmentMonth

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
            'loan.loanPurpose.required' => 'Please choose one of the following:
                        DebtConsolidation,
                        Subsistence,
                        OneOffPurchase,
                        Other,
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
            'applicant.dateOfBirth.required' => 'You must be 18 years or older to apply',

            // check email
            'applicant.email.required' => 'Please enter a valid email',
            'applicant.maritalStatus.required' => 'Please enter a valid maritalStatus',
            'applicant.dependants.required' => 'Please enter a valid dependants',
            'applicant.homePhoneNumber.required' => 'Please enter a valid homePhoneNumber number',
            'applicant.mobilePhoneNumber.required' => 'Please enter a valid mobilePhoneNumber number',
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
            'employer.nextPayDate1' => 'Please enter a valid nextPayDate1',
            'employer.nextPayDate2' => 'Please enter a valid nextPayDate2',
            'residence.houseNumber.required' => 'Please enter a valid houseNumber',
//            'houseName' => 'required',
//            'flatNumber' => 'required',////
            'residence.addressStreet1.required' => 'Please enter a valid addressStreet1',
            'residence.city.required' => 'Please enter a valid city',
            'residence.locality.required' => 'Please enter a valid locality',
            'residence.county.required' => 'Please enter a valid county',
            'residence.postcode.required' => 'Please enter a valid postcode',
            'residence.residentialStatus.required' => 'Residential Status error',
            'employer.monthlyMortgageRent.required' => 'Please enter a valid monthlyMortgageRent',
            'expense.monthlyRepayments.required' => 'Please enter a valid monthlyRepayments',
            'expense.monthlyUtilities.required' => 'Please enter a valid monthlyUtilities',
            'expense.monthlyTransport.required' => 'Please enter a valid monthlyTransport',
            'expense.monthlyFood.required' => 'Please enter a valid monthlyFood',
            'expense.otherExpense.required' => 'Please enter a valid otherExpense',
            'bank.bankCardType.required' => 'Please enter a valid bankCardType',
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


        ];

    }

}



