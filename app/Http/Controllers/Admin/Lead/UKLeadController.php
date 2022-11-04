<?php

namespace App\Http\Controllers\Admin\Lead;

use App\Http\Requests\LeadPostRequest;
use App\Http\Requests\LeadPostRequestUS;
use App\Jobs\PostLeadToBuyersUS;
use App\Models\Buyer\BuyerSetup;

use App\Helpers\CurlHelper;
use App\Http\Controllers\Controller;
use App\Jobs\PostLeadToBuyers;
use App\Models\CheckStatus\CheckStatus;
use App\Models\CheckStatus\CheckStatusLogger;
use App\Models\IPQS\IPQS;
use App\Models\Lead\LeadValidate;
use App\Models\Lead\UKLead;
use App\Models\LMSApplication\Additional;
use App\Models\LMSApplication\Applicant;
use App\Models\LMSApplication\Bank;
use App\Models\LMSApplication\Consent;
use App\Models\LMSApplication\Employer;
use App\Models\LMSApplication\Expenses;
use App\Models\LMSApplication\Loan;
use App\Models\Mapping\Mapping;
use App\Models\Partner\Partner;
use App\Models\LMSApplication\Residence;
use App\Models\LMSApplication\Source;

use App\Models\Partner\PartnerLeadType;
use Carbon\Carbon;

use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;


class UKLeadController extends Controller
{

    public int $leadtype = 1;
    public array $partner_detail = [];
    public string $partner_status = '';
    public string $response_type = '';
    public string $affiliate_id = '';


    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        $perPage = $request->input("perPage");
        $wherelist = $this->lead_filter($request);

        $leads = UKLead::with([
            'source',
            'loan',
            'applicant',
            'residence',
            'employer',
            'expense',
            'bank',
            'consent'
        ])
            ->where($wherelist)
            ->orderBy('created_at', 'desc')
            ->paginate($perPage);

        return Response::json(['leads' => $leads]);
    }

    /**
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function show(Request $request, $id): JsonResponse
    {
        $lead = UKLead::with([
            'source',
            'loan',
            'applicant',
            'residence',
            'expense',
            'bank',
            'consent'])
            ->where('id', $id)
            ->first();

        $recentApplications = Applicant::with('us_lead')
            ->where('email', $lead->applicant->email)
            ->paginate(10);


        return Response::json(['lead' => $lead, 'recentApplications' => $recentApplications]);
    }


    /**
     * This function accepts applications and sends it to the job for processing.
     * @param LeadPostRequest $request
     */
    public function post(LeadPostRequest $request)
    {
        Log::debug('LEAD PASSED INITIAL VALIDATION 1');
//        $validated = (new LeadValidate)->validate_data_uk($request);
//        Log::debug('LEAD PASSED INITIAL VALIDATION 2');

        // Is application valid, if not return errors
//        $this->application_validate($validated);
//        Log::debug('LEAD PASSED INITIAL VALIDATION 3');

        // Check Lead Quality
//        $lead_quality = IPQS::quality_score($request);
        $lead_quality = 0;

        // Decode the Application
        $post = json_decode($request->getContent());
        Log::debug('POST::', (array) $post);

        // Retrieve Partner Account Status if AFF ID present.
        $this->partner_detail = $this->getPartnerDetails($post->vid, $this->leadtype);

        // Check and set Request response type
        $this->response_type = $this->getResponseType($post->response_type);

        // Mapping + Add Lead to Database
        $post = $this->store($post, $lead_quality);

        // Add Partner Log
        $partner_log = $this->prepare_log_data($post);

        // Status Check Code
        $status_check = $this->CheckStatusStart($post);

        // Passing all required parameters to Job to get processed.
        $post = $post->toArray();
        $partner_detail = $this->partner_detail;

        PostLeadToBuyers::dispatch($post, $partner_detail, $partner_log, $status_check);
        $resp = $this->curl_response_status($status_check, $this->response_type);
        echo $resp;
        die();
    }

    /**
     * @param $post
     * @param $lead_quality
     * @return UKLead
     */
    public function store($post, $lead_quality)
    {
        $data = new UKLead();
        $data->lead_id = Str::uuid();
        $data->vid = $this->toString($post->vid);
        $data->subid = $this->toString($post->subid);
        $data->oid = $this->toString($post->oid);
        $data->tier = $this->toString($post->tier ?? null);
        $data->transaction_id = $this->toString($post->transaction_id ?? null);

        $data->minCommissionAmount = $this->toString($post->minCommissionAmount ?? null);
        $data->maxCommissionAmount = $this->toString($post->maxCommissionAmount ?? null);
        $data->timeout = $this->toString($post->timeout ?? null);
        $data->istest = $this->toString($post->istest ?? false);
        $data->response_type = $this->toString($post->response_type ?? 'json');
        $data->quote_boost = $this->toString($post->quote_boost ?? '0');
        $data->quality_score = $this->toString($lead_quality ?? '0');
        $data->save();


        $data->Source = new Source();
        $data->Source->id = $data->Source->id;
        $data->Source->lead_id = $data->lead_id;
        $data->Source->ipAddress = $this->toString($post->source->ipAddress ?? '');
        $data->Source->userAgent = $this->toString($post->source->userAgent ?? '');
        $data->Source->creationUrl = $this->toString($post->source->creationUrl ?? '');
        $data->Source->referringUrl = $this->toString($post->source->referringUrl ?? '');
        $data->Source->save();

        $data->Loan = new Loan();
        $data->Loan->id = $data->Loan->id;
        $data->Loan->lead_id = $data->lead_id;
        $data->Loan->loanPurpose = $this->toString($post->loan->loanPurpose ?? '');
        $data->Loan->loanAmount = $this->toString($post->loan->loanAmount ?? '');
        $data->Loan->loanTerms = $this->toString($post->loan->loanTerms ?? '');
        $data->Loan->recentLoanCount = $this->toString($post->loan->recentLoanCount ?? 0);
        $data->Loan->save();

        $data->Applicant = new Applicant();
        $data->Applicant->id = $data->Applicant->id;
        $data->Applicant->lead_id = $data->lead_id;
        $data->Applicant->nameTitle = $this->toString($post->applicant->nameTitle ?? '');
        $data->Applicant->firstName = $this->toString($post->applicant->firstName ?? '');
        $data->Applicant->lastName = $this->toString($post->applicant->lastName ?? '');
        $data->Applicant->dateOfBirthDay = $this->toString($post->applicant->dateOfBirthDay ?? '');
        $data->Applicant->dateOfBirthMonth = $this->toString($post->applicant->dateOfBirthMonth ?? '');
        $data->Applicant->dateOfBirthYear = $this->toString($post->applicant->dateOfBirthYear ?? '');
        $data->Applicant->email = $this->toString($post->applicant->email ?? '');
        $data->Applicant->gender = $this->toString($post->applicant->gender ?? '');
        $data->Applicant->mobilePhoneNumber = $this->toString($post->applicant->mobilePhoneNumber ?? '');
        $data->Applicant->homePhoneNumber = $this->toString($post->applicant->homePhoneNumber ?? '');
        $data->Applicant->workPhoneNumber = $this->toString($post->applicant->workPhoneNumber ?? '');
        $data->Applicant->maritalStatus = $this->toString($post->applicant->maritalStatus ?? '');
        $data->Applicant->dependants = $this->toString($post->applicant->dependants ?? '0');
        $data->Applicant->save();


        $data->Residence = new Residence();
        $data->Residence->id = $data->Residence->id;
        $data->Residence->lead_id = $data->lead_id;
        $data->Residence->houseNumber = $this->toString($post->residence->houseNumber ?? '');
        $data->Residence->houseName = $this->toString($post->residence->houseName ?? '');
        $data->Residence->flatNumber = $this->toString($post->residence->flatNumber ?? '');
        $data->Residence->addressStreet1 = $this->toString($post->residence->addressStreet1 ?? '');
        $data->Residence->addressStreet2 = $this->toString($post->residence->addressStreet2 ?? '');
        $data->Residence->city = $this->toString($post->residence->city ?? '');
        $data->Residence->state = $this->toString($post->residence->state ?? '');
        $data->Residence->postcode = $this->toString($post->residence->postcode ?? '');
        $data->Residence->residentialStatus = $this->toString($post->residence->residentialStatus ?? '');
        $data->Residence->monthsAtAddress = $this->toString($post->residence->monthsAtAddress ?? '');
        $data->Residence->numberOfAdults = $this->toString($post->residence->numberOfAdults ?? 0);
        $data->Residence->typeOfHousing = $this->toString($post->residence->typeOfHousing ?? 0);
        $data->Residence->numberOfRenters = $this->toString($post->residence->numberOfRenters ?? 0);
        $data->Residence->save();

        $data->Employer = new Employer();
        $data->Employer->id = $data->Employer->id;
        $data->Employer->lead_id = $data->lead_id;
        $data->Employer->employerName = $this->toString($post->employer->employerName ?? '');
        $data->Employer->employerPhoneNumber = $this->toString($post->employer->employerPhoneNumber ?? '');
        $data->Employer->jobTitle = $this->toString($post->employer->jobTitle ?? '');
        $data->Employer->monthsAtEmployer = $this->toString($post->employer->monthsAtEmployer ?? '');
        $data->Employer->employerIndustry = $this->toString($post->employer->employerIndustry ?? '');
        $data->Employer->incomeSource = $this->toString($post->employer->incomeSource ?? '');
        $data->Employer->incomeCycle = $this->toString($post->employer->incomeCycle ?? '');
        $data->Employer->monthlyIncome = $this->toString($post->employer->monthlyIncome ?? '');
        $data->Employer->combinedMonthlyHouseholdIncome = $this->toString($post->employer->combinedMonthlyHouseholdIncome ?? null);
        $data->Employer->nextPayDateDay = $this->toString($post->employer->nextPayDateDay ?? '');
        $data->Employer->nextPayDateMonth = $this->toString($post->employer->nextPayDateMonth ?? '');
        $data->Employer->nextPayDateYear = $this->toString($post->employer->nextPayDateYear ?? '');
        $data->Employer->followingPayDateDay = $this->toString($post->employer->followingPayDateDay ?? '');
        $data->Employer->followingPayDateMonth = $this->toString($post->employer->followingPayDateMonth ?? '');
        $data->Employer->followingPayDateYear = $this->toString($post->employer->followingPayDateYear ?? '');
        $data->Employer->incomePaymentType = $this->toString($post->employer->incomePaymentType ?? '');
        $data->Employer->governmentBenefitsAmount = $this->toString($post->employer->governmentBenefitsAmount ?? 0);
        $data->Employer->pensionAmount = $this->toString($post->employer->pensionAmount ?? 0);
        $data->Employer->otherIncomeAmount = $this->toString($post->employer->otherIncomeAmount ?? 0);
        $data->Employer->save();


        $data->Bank = new Bank();
        $data->Bank->id = $data->Bank->id;
        $data->Bank->lead_id = $data->lead_id;
        $data->Bank->bankName = $this->toString($post->bank->bankName ?? '');
        $data->Bank->bankCardType = $this->toString($post->bank->bankCardType ?? '');
        $data->Bank->bankAccountNumber = $this->toString($post->bank->bankAccountNumber ?? '');
        $data->Bank->bankRoutingNumber = $this->toString($post->bank->bankRoutingNumber ?? '');
        $data->Bank->bankPhone = $this->toString($post->bank->bankPhone ?? '');
        $data->Bank->monthsAtBank = $this->toString($post->bank->monthsAtBank ?? '');
        $data->Bank->bankAccountType = $this->toString($post->bank->bankAccountType ?? '');
        $data->Bank->onlineBanking = $this->toString($post->bank->onlineBanking ?? '');
        $data->Bank->save();

        $data->Expenses = new Expenses();
        $data->Expenses->id = $data->Expenses->id;
        $data->Expenses->lead_id = $data->lead_id;
        $data->Expenses->creditExpense = $this->toString($post->expenses->creditExpense ?? '0');
        $data->Expenses->otherExpense = $this->toString($post->expenses->otherExpense ?? '0');
        $data->Expenses->foodExpense = $this->toString($post->expenses->foodExpense ?? '0');
        $data->Expenses->transportExpense = $this->toString($post->expenses->transportExpense ?? '0');
        $data->Expenses->utilitiesExpense = $this->toString($post->expenses->utilitiesExpense ?? '0');
        $data->Expenses->childCareExpense = $this->toString($post->expenses->childCareExpense ?? '0');
        $data->Expenses->insuranceExpense = $this->toString($post->expenses->insuranceExpense ?? '0');
        $data->Expenses->alcoholTobaccoExpense = $this->toString($post->expenses->alcoholTobaccoExpense ?? '0');
        $data->Expenses->healthBeautyExpense = $this->toString($post->expenses->healthBeautyExpense ?? '0');
        $data->Expenses->recreationExpense = $this->toString($post->expenses->recreationExpense ?? '0');
        $data->Expenses->restaurantsExpense = $this->toString($post->expenses->restaurantsExpense ?? '0');
        $data->Expenses->educationExpense = $this->toString($post->expenses->educationExpense ?? '0');
        $data->Expenses->clothingFootwearExpense = $this->toString($post->expenses->clothingFootwearExpense ?? '0');
        $data->Expenses->householdGoodsExpense = $this->toString($post->expenses->householdGoodsExpense ?? '0');
        $data->Expenses->communicationEntertainmentExpense = $this->toString($post->expenses->communicationEntertainmentExpense ?? '0');
        $data->Expenses->councilTaxExpense = $this->toString($post->expenses->councilTaxExpense ?? '0');
        $data->Expenses->save();

        $data->Consent = new Consent();
        $data->Consent->id = $data->Consent->id;
        $data->Consent->lead_id = $data->lead_id;
        $data->Consent->consentFinancial = $this->toString($post->consent->consentFinancial ?? '0');
        $data->Consent->consentCreditSearch = $this->toString($post->consent->consentCreditSearch ?? '0');
        $data->Consent->consentThirdPartyEmails = $this->toString($post->consent->consentThirdPartyEmails ?? '0');
        $data->Consent->consentThirdPartySMS = $this->toString($post->consent->consentThirdPartySMS ?? '0');
        $data->Consent->consentThirdPartyPhone = $this->toString($post->consent->consentThirdPartyPhone ?? '0');
        $data->Consent->save();


        $data->Additional = new Additional();
        $data->Additional->id = $data->Additional->id;
        $data->Additional->lead_id = $data->lead_id;
        $data->Additional->creditScore = $this->toString($post->additional->creditScore ?? '');
        $data->Additional->bestTimeToCall = $this->toString($post->additional->bestTimeToCall ?? '');
        $data->Additional->isCarOwner = $this->toString($post->additional->isCarOwner ?? '');
        $data->Additional->bankruptcy = $this->toString($post->additional->bankruptcy ?? '');
        $data->Additional->save();


        $data_update = UKLead::latest()->first();
        $data_update->loan_id = $data->Loan->id;
        $data_update->source_id = $data->Source->id;
        $data_update->applicant_id = $data->Applicant->id;
        $data_update->residence_id = $data->Residence->id;
        $data_update->employer_id = $data->Employer->id;
        $data_update->bank_id = $data->Bank->id;
        $data_update->consent_id = $data->Consent->id;
        $data_update->additional_id = $data->Additional->id;
        $data_update->save();

//        dd($data);
        return $data;

    }


    /**
     * @param $val
     * @return false|string
     */
    private function toString($val)
    {
        if (gettype($val) == 'object' || gettype($val) == 'array') {
            $res = json_encode($val);
        } else {
            return $val;
        }

        return $res;
    }


    /**
     * Return Curl Response in XML | JSON.
     * @param $check_status
     * @param $response_type
     * @return false|string
     */
    function curl_response_status($check_status, $response_type = 'json')
    {
        $url = route('api-check-status', $check_status['correlationId']);
        $response_type = 'json';

        if (isset($response_type) && $response_type == 'xml') {
            header("Content-type: text/xml; charset=utf-8");
            $res = '<?xml version="1.0"?>';
            $res .= '<PostResponse>';
            $res .= '<PercentageComplete>' . $check_status['percentage'] . '</PercentageComplete>';
            $res .= '<CheckStatusID>' . $check_status['correlationId'] . '</CheckStatusID>';
            $res .= '<CheckStatus>' . $check_status['status'] . '</CheckStatus>';
            $res .= '<Leadid>' . $check_status['lead_id'] . '</Leadid>';
            $res .= '<CheckStatusURL>' . $url . '</CheckStatusURL>';
            $res .= '</PostResponse>';

            return $res;
        } else {
            header('Content-Type: application/json; charset=utf-8');
            $response = array();
            $response[0] = array(
                'PercentageComplete' => $check_status['percentage'],
                'CheckStatusID' => $check_status['correlationId'],
                'CheckStatus' => $check_status['status'],
                'Leadid' => $check_status['lead_id'],
                'CheckStatusURL' => $url,
            );
            return json_encode($response);
        }
    }

    /**
     * Randomize Buyer every N posts
     * @param $row
     * @param string $type
     * @return mixed|object
     */
    public function GetBuyerObject($row, string $type = 'lead_post')
    {
        if ($row->post_url_live == 'random') {
            $buyerIndex = $row->parameter3;
            $buyer_used_count = $row->parameter2;
            $buyer_total_count = $row->parameter1;


            $buyers = json_decode(trim($row->notes));
            if ($type == 'lead_post') {
                $buyer_used_count++;
                if ($buyer_used_count > $buyer_total_count) {
                    $buyerIndex++;
                    if ($buyerIndex >= count($buyers)) {
                        $buyerIndex = 0;
                    }
                    $buyer_used_count = 1;
                }
                $buyer = (new Buyersetup)->UpdateParameters(
                    $row->buyersetupid,
                    $buyer_total_count,
                    $buyer_used_count,
                    $buyerIndex
                );
            }

            $buyer = $buyers[$buyerIndex];
            $search['leadtype'] = $this->leadtype;
            $search['buyerid'] = $buyer->buyerid;
            $search['setupid'] = $buyer->setupid;

            $v = Mapping::GetSingleBuyer($search);
            $row = (object)$v[0];
        }

        return $row;
    }

    /**
     * This function handles the redirect for the check status
     *
     * @param $id
     */
    public function redirectUrl($id)
    {
//        dd($id);
//        $CheckStatusLogger = new CheckStatusLogger;
//        $api_received_at = Carbon::now()->microsecond;


        Log::debug('REDIRECT ID::', (array)$id);
        $data['id'] = $this->redirecturl_decrypt($id);
        Log::debug('REDIRECT ID::', (array)$data['id']);

        $data['created_at'] = date('Y-m-d H:i:s', strtotime('-15 minutes'));
        $redirecturl = (new UKLead)->UpdateRedirectUrl($data);
//        dd($redirecturl);

        if ($redirecturl) {
            header("location: " . $redirecturl);
            exit;
        } else {
            echo 'Invalid/Expired Redirect URL';
            exit;
        }
    }


    /**
     * This function handles the redirection url ( decrypt )
     * @param $id
     * @return string
     */
    public function redirecturl_decrypt($id)
    {
        return $unsecure = substr(substr($id, 2), 0, -2);
    }


    /**
     * This function calls the IPQS curl post
     * @param $email
     * @return mixed
     */
    public function ipqs_email($email)
    {
        $ipqs = config('ipqs');
        $key = $ipqs[0];
        $timeout = $ipqs[1];
        $fast = $ipqs[2];
        $abuse_strictness = $ipqs[3];

        $url = 'https://ipqualityscore.com/api/json/email/' . $key . '/' . $email;

        $parameters = array(
            'timeout' => $timeout,
            'fast' => $fast,
            'abuse_strictness' => $abuse_strictness
        );

        $formatted_parameters = http_build_query($parameters);

        return CurlHelper::ipqs_ip(
            $url,
            $key,
            $email,
            $formatted_parameters
        );

    }

    /**
     * @param $ip
     * @param $user_agent
     * @return mixed
     */
    public function ipqs_ip($ip, $user_agent)
    {
        $ipqs = config('ipqs');
        $key = $ipqs[0];
        $timeout = $ipqs[1];
        $fast = $ipqs[2];
        $abuse_strictness = $ipqs[3];

        $ipqs_ip_url = 'https://ipqualityscore.com/api/json/ip/' . $key . '/' . $ip . '?strictness=1&user_agent=' . $user_agent;


        return CurlHelper::ipqs_ip(
            $ipqs_ip_url,
            $timeout
        );
    }


    /**
     * This function handles the new check status,
     * checks against the check status id.
     *
     * @param Request $request
     * @param $correlationId
     */
    public function CheckStatusNew(Request $request, $correlationId)
    {
        $status_check = CheckStatus::where('correlationId', '=', $correlationId)->first();
        Log::info('DEBUG:: Check Status', (array)$status_check);
        $lead = UKLead::where('lead_id', '=', $status_check->lead_id)->first();
        $response_type = $lead->response_type;

        if (isset($response_type) && $response_type === 'xml') {
            if ($status_check->status == 'pending') {
                echo $this->curl_response_status($status_check, $response_type);
            } else {
                header("Content-type: text/xml; charset=utf-8");
                echo $status_check->resp;
            }
            Log::info('DEBUG:: Check Status ID', (array)$correlationId);
        } else {
//            $lead = UKLead::where('id', '=', $status_check->lead_id)->first();
            $response_type = $lead->response_type;

            if ($status_check->status == 'pending') {
                echo $this->curl_response_status($status_check, $response_type);
            } else {
                header("Content-type: application/json; charset=utf-8");
                echo $status_check->resp;
            }
            Log::info('DEBUG:: Check Status ID', (array)$correlationId);
        }
        die();
    }


    /**
     * @param Request $request
     * @param $leadId
     * @return JsonResponse
     */
    public function mark_cpf_funded(Request $request, $leadId)
    {
        try {

            $query = DB::table('uk_leads')->where('lead_id', $leadId);

//            $tier = BuyerSetup::find('buyer_tier_id', $lead->buyerTierID)->first();
//            $partner_detail = PartnerLeadType::where('vid', $lead->vid)->first();

//            $vidLeadPrice = $tier->tier_price - ($tier->tier_price * ($partner_detail->margin / 100));

            $res = $query->update([
                'leadStatus' => 4,
//                'vidLeadPrice' => $vidLeadPrice,
//                'buyerLeadPrice' => $tier->tier_price,
                'updated_at' => Carbon::now(),
            ]);
            return Response::json('Success:: CPF Funded Received ', 202);
        } catch (Exception $e) {
            Log::debug($e);
            return Response::json('Error:: Unable to mark CPF Funded', 418);

        }
    }

    /**
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function getUsLeadLog(Request $request, $id)
    {

        $leadlog = DB::table('lmsleadlogsus')->where('lead_id', $id)->get();

        return Response::json(['leadlog' => $leadlog]);

    }

    /**
     * @param $vid
     * @param int $leadType
     * @return mixed
     */
    private function getPartnerDetails($vid, int $leadType)
    {
        $partner_detail = Partner::GetPartnerFullDetail($vid, $leadType);

        if ($partner_detail === null) {
            echo 'Partner Not Active';
            die();
        }

        return $partner_detail;
    }

    /**
     * @param $response_type
     * @return string
     */
    private function getResponseType($response_type)
    {
        if (!isset($response_type)) {
            $response_type = 'json';
        }

        return $response_type;
    }

    /**
     * @param bool $validated
     * @return bool|JsonResponse
     */
    private function application_validate(bool $validated)
    {
        if ($validated !== true) {
            return response()->json([
                'Errors' => $validated
            ]);
        }

        return $validated;
    }

    /**
     * @param $post
     * @return CheckStatus
     */
    private function CheckStatusStart($post)
    {
        $status_check = new CheckStatus();
        $status_check->lead_id = $post->lead_id;
        $status_check->status = "pending";
        $status_check->percentage = 0;
        $status_check->correlationId = Str::uuid();
        $status_check->save();

        return $status_check;
    }

    /**
     * @param $post
     * @return mixed
     */
    private function prepare_log_data($post)
    {
        $data['vendor_id'] = $this->partner_detail['vendor_id'];
        $data['post_data'] = json_encode($post);
        $data['lead_id'] = UKLead::latest()->first()->id;
        $data['created_at'] = date('Y-m-d H:i:s');

        return UKLead::add_log_partner($data);
    }

    /**
     * @param Request $request
     * @return array
     */
    private function lead_filter(Request $request)
    {
        $vendor_id = $request->input("vendor_id");
        $sub_id = $request->input("sub_id");
        $tier = $request->input("tier");
        $vidLeadPrice = $request->input("vidLeadPrice");
        $buyerLeadPrice = $request->input("buyerLeadPrice");
        $lead_quality = $request->input("lead_quality");
        $redirection = $request->input("redirection");
        $status = $request->input("status");
        $query = $request->input("searchQuery");


        $wherelist = array();
        if ($vendor_id != null) {
            $wherelist[] = ['vid', '=', $vendor_id];
        }
        if ($sub_id != null) {
            $wherelist[] = ['subid', '=', $sub_id];
        }
        if ($tier != null) {
            $wherelist[] = ['tier', '=', $tier];
        }
        if ($vidLeadPrice != null) {
            $wherelist[] = ['vidLeadPrice', '=', $vidLeadPrice];
        }
        if ($buyerLeadPrice != null) {
            $wherelist[] = ['buyerLeadPrice', '=', $buyerLeadPrice];
        }
        if ($lead_quality != null) {
            $wherelist[] = ['quality_score', '=', $lead_quality];
        }
        if ($redirection != null) {
            $wherelist[] = ['isRedirected', '=', $redirection];
        }
        if ($status != null) {
            $wherelist[] = ['leadStatus', '=', $status];
        }
        if ($query != null) {
            $wherelist[] = ['', 'LIKE', '%' . $query . '%'];
        }

        return $wherelist;
    }
}
