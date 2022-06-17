<?php

namespace App\Jobs;

use App\Http\Controllers\Admin\PostbackTracker\PostbackTrackerController;
use App\Models\Buyer\BuyerFilterUS;
use App\Models\Buyer\BuyerRotation;
use App\Models\Buyer\BuyerSetup;
use App\Models\CheckStatus\CheckStatus;
use App\Models\CheckStatus\CheckStatusLogger;
use App\Http\Controllers\Admin\Lead\LeadTestController;
use App\Http\Controllers\Partner\ReferralController;
use App\Models\Buyer\BuyerFilter;

//use App\Models\Buyer\Rotation;
use App\Models\Lead\USLead;
use App\Models\Mapping\Mapping;
use App\Models\Offer\Offer;
use App\Models\Partner\Partner;
use App\Models\PingtreeTracker\PingtreeTracker;
use App\Models\User;
use App\Models\User\Referral;
use Exception;

use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Notifications\Notification;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class PostLeadToBuyersUS implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

//    public $tries = 3;

    public int $timeout = 3600;
    private int $leadtype = 2;
    private array $partner_detail;
    private object $partner_log;
    private array $buyer_status;
    private array $post;
    private CheckStatus $status_check;


    /**
     * Create a new job instance.
     * @param $post
     * @param $partner_detail
     * @param $partner_log
     * @param $status_check
     */
    public function __construct(array $post, array $partner_detail, object $partner_log, CheckStatus $status_check)
    {
        $this->post = $post;
        $this->partner_detail = $partner_detail;
        $this->partner_log = $partner_log;
        $this->status_check = $status_check;
    }

    /**
     * Execute the job.
     * @return void
     */
    public function handle()
    {
        $startTime = explode(' ', microtime());
        $startTime = $startTime[1] + $startTime[0];
        $post = $this->post;
        $partner_log_id = $this->partner_log->id;


        $buyer_response = $this->BuyerPost($post);
//        Log::debug('DEBUG RESP1::', (array)$buyer_response);
//        $buyer_response['leadid'] = $this->post['lead_id'];


        Log::debug('DEBUG RESP2::', (array)$buyer_response);

        $offer_detail = Offer::get($post['oid']);

        if (!empty(($buyer_response))) {
            $response = $this->prepare_response($buyer_response, $offer_detail);
        } else {
            $status = 2;
            $response = $this->buyer_response($buyer_response, $status);
        }


        // Store Lead Log
        $logs = USLead::getlog($response['leadid']);

        // get check status response
        $response['check_status'] = $this->get_check_status_logs($response, $logs);

        // Return lead response
        $post_response = $this->curl_response_post($response, $this->post['response_type']);

        // End journey timer.
        $etime = explode(' ', microtime());
        $etime = ($etime[1] + $etime[0]);
        $post_time = $etime - $startTime;

        // Update partner log
        $this->update_partner_log($partner_log_id, $response, $post_response, $post_time);

        // response is ready to return, marking job as completed.
        $this->status_check->resp = $post_response;
        $this->status_check->percentage = 100;
        $this->status_check->status = 'completed';
        $this->status_check->save();
    }


    /**
     * @param $post
     * @return mixed
     */
    public function quality_score_tracker($post)
    {
        if ($post['quality_score'] >= 80) {
            $partner = Partner::where('vendor_id', $post['vid'])->first();
            $mappings = Mapping::where('partner_id', $partner->id)->get()->toArray();

            $buyer_list = [];
            if (!empty($mappings)) {
                foreach ($mappings as $mapping) {
                    $buyer_list = BuyerSetup::where('model_type', 'Pingtree')
                        ->where('id', $mapping['buyer_setup_id'])
                        ->where('rotate', 1)
                        ->where('status', 1)
                        ->get();
                }
                $post['buyer_list'] = $buyer_list;
            }
        }

        return $post;
    }

    public function network_channel_settings($post)
    {
        //

        return $post->buyer_list;

    }


    /**
     *  This function checks active buyers for enabled filters
     *  if so, the lead is filtered against the buyer filters.
     * @param $post
     * @return array
     */
    public function BuyerPost($post): array
    {

        // Get Buyers
        $post = USLead::getBuyers($post);

        // Check for high risk leads
        $post = $this->quality_score_tracker($post);

        // Buyer Filters
        $post = BuyerFilterUS::allBuyerFilters($post);

        // Check Pingtree EPLs
//        $pingtree_tracker_response = $this->GetPingtreeTracker($post);
        // Check affiliate limits on channel settings - pingtree traffic
//        $network_channel_response = $this->network_channel_settings($post);


        // Assign buyer list
        $buyer_list = $post->buyer_list;
        $buyer_list = json_decode(json_encode($buyer_list), true);


        if (is_array($buyer_list) && !empty($buyer_list)) {
            $index = 0;
            $length = count($buyer_list);

            foreach ($buyer_list as $key => $value) {
                $row = (object)$value;

                $filename = app_path("Buyerapis/paydayus/" . strtolower($row->buyername) . ".php");

                if (file_exists($filename)) {
                    require_once($filename);

                    $classname = strtolower($row->buyername);
                    $obj = new $classname($row, $post);

                    $lender_response = $obj->returnresponse();

                    $this->add_post_log($post, $row, $lender_response);
                    Log::debug('Lender Response::', (array)$lender_response);

                    $lead = USLead::where('lead_id', $post->lead_id)->first();

                    // Lead accepted By BUYER
                    if (isset($lender_response['post_price']) &&
                        isset($lender_response['accept']) &&

                        $lender_response['accept'] == 'ACCEPTED') {
                        $lead_status = 1;

                        // Get lender price and sub margin.
                        $price = $this->lender_accepted($lender_response, $post);

                        // check if lead has referrer - if so, add commission to referrer.
                        $this->check_lead_referrer($post, $lender_response, $price);

                        // Update lead status/info
                        $this->update_lead_status($lender_response, $row, $lead, $price);

                        // Accepted Response Data
                        return $accepted_data = $this->lead_response($lead, $row, $price, $lead_status);

                    }
                    // Lead Conditionally accepted By BUYER
                    if (isset($lender_response['accept']) && $lender_response['accept'] == 'CONDITIONAL') {

                        $price = '0.00';
                        $lead_status = 3;

                        // Update lead status/info
                        $this->update_lead_status($lender_response, $row, $lead, $price);

                        // Conditional Response Data
                        return $conditional_data = $this->lead_response($lead, $row, $price, $lead_status);

                    }

                    // Lead Declined By BUYER
                if (isset($lender_response['accept']) && $lender_response['accept'] == 'REJECTED') {

                    // Monetize declines.

                        $lead_status = 2;
                        $price = '0.00';

                        $decline_response = $this->lead_response($lead, $row, $price, $lead_status);

                        $index++;
                        if ($index >= $length) {
                            $this->status_check->percentage = 100;
                            $this->status_check->save();
                            Log::debug('Status Check::', (array)$this->status_check);
                            return $decline_response;
                        } else {
                            $this->status_check->percentage = (($index) / $length) * 100;
                            Log::debug('Status Check::', (array)$this->status_check);
                            $this->status_check->save();
                            continue;
                        }
                    }
                }
            }
        } else {
            // No buyers found - lead not sold.

            $data = $this->no_lender_found($post);
            Log::debug('no_lender_found() called');

            return $data;
        }
    }

    /**
     * Get Ping-tree EPL
     *
     * @param $row
     * @param $buyer_list
     * @return object
     */
    public function GetPingtreeTracker($row, $buyer_list)
    {

//        $buyer_list = $post['buyer_list'];

        if ($row->rotate === 1) {

            $lead_count_today = USLead::whereDate('created_at', '=', Carbon::today())
                ->where('model_type', '=', 5)
                ->count();

            // Get Sample EPL from each Tree
            if ($lead_count_today < 50) {

                $res = $this->GetBuyerRotate($row, $buyer_list->row, 'lead_post');
                return $res;

            } else {

                try {
                    $epl = (new PingtreeTracker)->GetEPL($row->id);
                } catch (Exception $e) {
                    Log::debug($e);
                }


                if ($row->model_type === "5") {
                    $buyer = PingtreeTrackerUS::orderBy('epl', 'DESC')->get();

                    if (count($buyer) > 1) {
                        $row = $this->GetBuyerRotate($row, $buyer_list->row, 'lead_post',);

                        return $row;

                    } else {
                        $buyer = $buyer->first();
                        $search = (object)[];
                        $search->tier_id = $buyer->buyersetup_id;

                        $row = Mapping::GetSingleBuyer($search);

                        return (object)$row;
                    }
                }
                return (object)$row;
            }
        }
        return $row;
    }


    /**
     * Rotate Ping-tree Buyers
     *
     * @param $row
     * @param $buyers
     * @param string $type
     * @return object
     */
    public function GetBuyerRotate($row, $buyers, string $type)
    {

        Log::debug('Buyers List ROW::', (array)$row);
        if (count($buyers) < 1) {
            Log::debug('Fallback Buyer Filtered Buyers ROW::', (array)$row);

            $buyers = BuyerSetup::where('id', '=', 2)->first();
        }

        $buyer_rotate = $this->buyer_rotate($row);

        if ($buyer_rotate->buyer_index != "0") {
            $buyerIndex = $buyer_rotate->buyer_index;
        } else {
            $buyerIndex = "0";
        }

        $buyer_used_count = $buyer_rotate->buyer_used_count;
        $buyer_total_count = $buyer_rotate->buyer_total_count;
        $id = $buyer_rotate->buyersetup_id;

        if ($type == 'lead_post') {
            $buyer_used_count++;
            if ($buyer_used_count > $buyer_total_count) {
                $buyer_used_count = 0;
                $buyerIndex++;
            }
            if ($buyerIndex >= count($buyers)) {
                $buyerIndex = 0;
            }
            $this->rotate_counts($id, $buyer_used_count, $buyer_total_count, $buyerIndex);

            $row = (object)$buyers[$buyerIndex];
            Log::debug('Buyer Rotate::', (array)$row);

            return $row;
        }

        return $row;
    }

    /**
     * @param $row
     * @return mixed
     */
    public function buyer_rotate($row)
    {
        Log::debug('buyer Rotate::,', (array)$row);
        $buyer_rotate = BuyerRotation::where('buyer_setup_id', '=', $row->buyer_setup_id)->first();

        return $buyer_rotate;

    }


    /**
     * Return Curl Response in XML | JSON
     * @param array $client_response
     * @param string $response_type
     * @return false|string
     */
    function curl_response_post(array $client_response, string $response_type)
    {
        if (isset($response_type) && $response_type === 'xml') {
            $response = $this->xml_response($client_response);

            return $response;
        } else {
            $response = $this->json_response($client_response);

            return json_encode($response);
        }
    }

    /**
     * 'random' feature -> inactive
     * 'lead_post' -> default
     *
     * @param $row
     * @param string $type
     * @return mixed|object
     */
    public function GetBuyerObject($row, string $type = null)
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
                $buyer = (new BuyerSetup)->UpdateParameters(
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
     * @param $id
     * @return string
     */
    public function redirecturl_encrypt($id)
    {
        return $secure = rand(10, 99) . $id . rand(10, 99);
    }

    /**
     * @param $post
     * @return int
     */
    public function GetVidRedirectRate($post): int
    {
        if ($post->tier === "0") {
            $query = USLead::where('vid', '=', $post->vid)->whereDate('created_at', '>', Carbon::today()->subDays(14));

            $lead_count = $query->count();
            $redirection_rate = $query->where('isRedirected', '=', 1)->count();

            try {
                $redirect = $redirection_rate / $lead_count * 100;
                $redirect = round($redirect);
            } catch (Exception $e) {
                Log::debug($e);
                $redirect = 0;
            }
            if (empty($redirectionrate)) {
                return $redirect = 0;
            }

            if ($redirect > 1 && $redirect < 80) {
                $tree = PingtreeTracker::orderBy('epl', 'DESC')->first();
                $pingtree = $tree->buyersetup_id;

                $post->buyer_list = BuyerSetup::where('id', '=', $pingtree)->first();


                return $post;
            }
            return $post;
        }
        return $post;
    }

    /**
     * @param object $post
     * @param object $row
     * @param $lender_response
     * @return bool
     */
    private function add_post_log(object $post, object $row, $lender_response): bool
    {
        $data = array(
            'lead_id' => $post->lead_id,
            'vendor_id' => $post->vid,
            'buyer_id' => $row->buyer_id,
            'buyer_setup_id' => $row->id,
            'post_price' => $lender_response['post_price'] ?? "",
            'post_url' => $lender_response['post_url'] ?? "",
            'post_data' => json_encode($lender_response['post_data'] ?? ""),
            'post_response' => json_encode($lender_response['post_res'] ?? ""),
            'post_status' => $lender_response['post_status'] ?? "",
            'post_time' => $lender_response['post_time'] ?? "",
            'lender_found' => $lender_response['LenderFound'] ?? "",
            'reason' => $lender_response['reason'] ?? "",
            'created_at' => date('Y-m-d H:i:s')
        );
        return $res = USLead::AddLog($data);
    }

    /**
     * @param $lender_response
     * @param object $post
     * @return float|int
     */
    private function lender_accepted($lender_response, object $post)
    {
        if (!empty($this->partner_detail['margin'])) {
            if ($post->tier === 0) {
                $price =
                    $lender_response['post_price'] - ($lender_response['post_price'] * ($this->partner_detail['margin'] / 100));
            } else {
                $price =
                    $lender_response['post_price'] - ($lender_response['post_price'] * ($this->partner_detail['margin'] / 100));
            }
        } else {

            $price = $lender_response['post_price'];

        }
        return $price;
    }

    /**
     * @param object $post
     * @param $lender_response
     * @param $price
     * @return bool
     */
    private function check_lead_referrer(object $post, $lender_response, $price)
    {
        try {
            $partner = Partner::where('vendor_id', '=', $post->vid)->first();
            $user = User::where('id', $partner->user_id)->first();
            Log::debug('REFERRER ID::', (array)$user->referrer_id);

            if (isset($user->referrer_id) && $user->referrer_id !== null && $user->referrer_id !== "") {

                $referrer_commission = $lender_response['post_price'] - ($lender_response['post_price'] * (95 / 100));
                $affiliate_price = $price - $referrer_commission;

                // Add referrer Commission to Partner ID
                $referrer_id = $user->referrer_id;
                $referrer_partner = Partner::where('vendor_id', '=', $referrer_id)->first();

                $referrer_data = array(
                    'vendor_id' => $post->vid,
                    'referrer_id' => $referrer_partner->vendor_id,
                    'commission' => $referrer_commission,
                    '$affiliate_price' => $affiliate_price,
                    'geo' => '1',
                );
                $add_commission_response = Referral::add_commission($referrer_data);
                Log::debug('REFERRER STORE::', (array)$add_commission_response);

                if ($add_commission_response) {
                    return true;
                } else {
                    Log::debug('Unable to Add referrer Commission::', (array)$post->Source->lead_id);
                }
            }
        } catch (Exception $e) {
            Log::debug($e);
            return false;
        }
    }

    /**
     * @param $lender_response
     * @param object $row
     * @param object $lead
     * @param float $price
     * @return bool|int
     */
    private function update_lead_status($lender_response, object $row, object $lead, float $price)
    {
        $data = array(
            'buyerLeadPrice' => $lender_response['post_price'],
            'vidLeadPrice' => $price,
            'buyerid' => $row->buyer_id,
            'model_type' => $row->model_type,
            'buyerTierID' => $row->buyer_tier_id,
            'redirectUrl' => $lender_response['redirect_url'] ?? "",
            'reason' => $lender_response['reason'] ?? "",
            'leadStatus' => '1',
            'id' => $lead->id
        );

        return (new USLead)->add($data);
    }


    /**
     * @param object $lead
     * @param object $row
     * @param int $price
     * @param int $lead_status
     * @return array
     */
    private function lead_response(object $lead, object $row, int $price, int $lead_status)
    {
        try {
            $data['errors'] = $lender_response['errors'] ?? "Validation Failed";
        } catch (Exception $e) {
            Log::debug($e);
            // ignore
        }

        $data = array(
            'price' => $price,
            'leadStatus' => $lead_status,
            'leadid' => $lead->lead_id,
            'id' => $lead->id,
            'ModelType' => $row->model_type
        );

        return $data;
    }

    /**
     * @param array|null $buyer_response
     * @param int $status
     * @return array
     */
    private function buyer_response(?array $buyer_response, int $status)
    {
        $response = array(
            'status' => $status,
            'price' => $buyer_response['price'] ?? '0.00',
            'leadid' => $buyer_response['leadid'],
            'ModelType' => $buyer_response['ModelType'] ?? 2,
            'id' => $buyer_response['id'],
        );
        return $response;
    }

    /**
     * @param $thresholdAmount
     * @param $offer_id
     * @param $response
     * @return int|array
     */
    private function accumulate_cpa_offers($thresholdAmount, $offer_id, $response)
    {
//        $accumulator = 0;

        if ($thresholdAmount > 0) {
            if ($offer_id == 3) {
                $accumulator = 0 + $this->partner_detail['accuCPLus20'];
            } elseif ($offer_id == 4) {
                $accumulator = 0 + $this->partner_detail['accuCPAus100'];
            }
            $accumulatorAmount = $accumulator + $response['price'];

            Log::debug('THRESHOLD::', (array)$thresholdAmount);

            if ($accumulatorAmount >= $thresholdAmount) {
                $accumulatorAmount = $accumulatorAmount - $thresholdAmount;
                $response['Threshold'] = 'true';
            } else {
                $response['Threshold'] = 'false';
            }

            if ($offer_id == 4) {
                $lead_data = array(
                    'id' => $this->partner_detail['id'],
                    'accuCPAus100' => $accumulatorAmount
                );
            } elseif ($offer_id == 3) {
                $lead_data = array(
                    'id' => $this->partner_detail['id'],
                    'accuCPLus20' => $accumulatorAmount
                );
            }
            return Partner::AddLeadType($lead_data);
        }
    }

    /**
     * @param array $partner_detail
     * @param array $response
     * @return float|int
     */
    private function currency_type(array $partner_detail, array $response)
    {
        if (!empty($this->partner_detail) && $this->partner_detail['currencyType'] != "USD") {
            $rate = USLead::GetDailyRate();
            $response['price'] = $response['price'] * $rate['usd'];
        }
        return $response['price'];
    }

    /**
     * @param array $response
     * @param array $logs
     * @return bool
     */
    private function get_check_status_logs(array $response, array $logs)
    {
        if (count($logs) > 0) {
            $log = $logs[0];
            if ($log->buyer_id == "1") {
                return $response["check_status"] = true;
            } else {
                return $response['check_status'] = false;
            }
        } else {
            return $response['check_status'] = false;
        }
    }

    /**
     * @param $partner_log_id
     * @param array $response
     * @param string $post_response
     * @param string $post_time
     * @return Model|Builder|object|null
     */
    private function update_partner_log($partner_log_id, array $response, string $post_response, string $post_time)
    {
        $data = array(
            'id' => $partner_log_id,
            'lead_id' => $response['leadid'],
            'post_response' => $post_response,
            'post_status' => $response['status'],
            'post_time' => $post_time
        );

        return USLead::update_log_partner($data);
    }

    /**
     * @param Offer $offer_detail
     * @param array $response
     * @return int
     */
    private function update_accumulator(Offer $offer_detail, array $response)
    {
        $offer_id = $offer_detail['id'];
        $internal_offers = [3, 4, 6, 7];

        if (in_array($offer_id, $internal_offers)) {

            $payoutAmount = $offer_detail['payout']['payoutAmount'];
            $thresholdAmount = $offer_detail['payout']['revenueAmount'];

            $accumulator_updated = $this->accumulate_cpa_offers($thresholdAmount, $offer_id, $response);
            $current_type = $this->currency_type($this->partner_detail, $response);

            return $accumulator_updated;
        }
    }

    /**
     * @param array $client_response
     * @return string
     */
    private function xml_response(array $client_response)
    {
        header("Content-type: text/xml; charset=utf-8");
        $res = '<?xml version="1.0"?>';
        $res .= '<PostResponse>';

        if (isset($client_response['status']) && $client_response['status'] === 1) {
            $res .= '<Response>LenderFound</Response>';

        } elseif (isset($client_response['status']) && $client_response['status'] === 3) {
            $res .= '<Response>ConditionalLenderFound</Response>';
        } else {
            $res .= '<Response>NoLenderFound</Response>';
        }
        $res .= ($client_response['status'] == '1') ? '<Price>' . $client_response['price'] . '</Price>' : '0.00';
        $res .= ($client_response['status'] == '3') ? '<Price>' . $client_response['price'] . '</Price>' : '0.00';
        $res .= ($client_response['status'] == '1' || '2' || '3') ? '<Leadid>' . $client_response['leadid'] . '</Leadid>' : '<Leadid>' . $client_response['leadid'] . '</Leadid>';
        $res .= ($client_response['status'] == '1') ? '<RedirectURL>' . 'https://portal.uping.co.uk/api/application/usa/redirecturl/' . $this->redirecturl_encrypt($client_response['id']) . '</RedirectURL>' : '';
        $res .= ($client_response['status'] == '1' && !empty($client_response['Threshold'])) ? '<Threshold>' . $client_response['Threshold'] . '</Threshold>' : '';
        if ($client_response['status'] && $client_response['ModelType'] === 'CPS') {
            $res .= '<ModelType>CPS</ModelType>';
        } elseif (isset($client_response['status']) && $client_response['ModelType'] === 'CPA') {
            $res .= '<ModelType>CPA</ModelType>';
        } elseif (isset($client_response['status']) && $client_response['ModelType'] === 'CPL') {
            $res .= '<ModelType>CPL</ModelType>';
        } elseif (isset($client_response['status']) && $client_response['ModelType'] === 'CPF') {
            $res .= '<ModelType>CPF</ModelType>';
        } else {
            $res .= '<ModelType>Pingtree</ModelType>';
        }
        $res .= isset($client_response['errors']) ? '<Errors>' . $client_response['errors'] . '</Errors>' : '';
        $res .= '</PostResponse>';

        return $res;
    }

    /**
     * @param array $client_response
     * @return array
     */
    private function json_response(array $client_response)
    {
        header("Content-type: application/json; charset=utf-8");
        $response = array();
        $response[0] = array(
            'Response' => ($client_response['status'] == '1') ? 'LenderFound' : 'NoLenderFound',
            'Price' => ($client_response['status'] == '1') ? $client_response['price'] : '0.00',
            'RedirectURL' => ($client_response['status'] == '1') ? 'https://portal.uping.co.uk/api/application/usa/redirecturl/' . $this->redirecturl_encrypt($client_response['id']) : '',
            'Leadid' => ($client_response['status'] == '1' || '2') ? $client_response['leadid'] : '',
        );
        if ($client_response['status'] && $client_response['ModelType'] === 'CPS') {
            $response[0] = array_merge($response[0], ['ModelType' => 'CPS']);
        } elseif (isset($client_response['status']) && $client_response['ModelType'] === 'CPA') {
            $response[0] = array_merge($response[0], ['ModelType' => 'CPA']);
        } elseif (isset($client_response['status']) && $client_response['ModelType'] === 'CPL') {
            $response[0] = array_merge($response[0], ['ModelType' => 'CPL']);
        } elseif (isset($client_response['status']) && $client_response['ModelType'] === 'CPF') {
            $response[0] = array_merge($response[0], ['ModelType' => 'CPF']);
        } else {
            $response[0] = array_merge($response[0], ['ModelType' => 'Pingtree']);
        }

        if ($client_response['status'] == '1' && (!empty($client_response['CheckStatusID']))) {
            $response[0] = array_merge($response[0], ['CheckStatusID' => $client_response['CheckStatusID']]);
        }
        if ($client_response['status'] == '1' && !empty($client_response['Threshold'])) {
            $response[0] = array_merge($response[0], ['Threshold' => $client_response['Threshold']]);
        }
        if (isset($client_response['Descriptions']) && !empty($client_response['Descriptions'])) {
            $response[0] = array_merge($response[0], ['Descriptions' => $client_response['Descriptions']]);
        }
        if (isset($client_response['Errors']) && !empty($client_response['Errors'])) {
            $response[0] = array_merge($response[0], ['Errors' => $client_response['Errors']]);
        }
        if (isset($client_response['CheckStatus']) && !empty($client_response['CheckStatus'])) {
            $response[0] = array_merge($response[0], ['CheckStatus' => $client_response['CheckStatus']]);
        }
        return $response;
    }

    /**
     * @param object $post
     * @return array
     */
    private function no_lender_found(object $post): array
    {
        $data = array(
            'id' => $post->lead_id,
            'leadStatus' => '2',
            'model_type' => '2',
            'reason' => $lender_response['reason'] ?? 'All Buyers rejected.',
        );

        (new USLead)->add($data);
        Log::debug('No Buyer found');

        return $data;
    }

    /**
     * @param array $buyer_response
     * @param Offer $offer_detail
     * @return array
     */
    private function prepare_response(array $buyer_response, Offer $offer_detail): array
    {
        // Parse buyer response
        if ($buyer_response['leadStatus'] == "1") {
            Log::debug('Status:: 1');
            $status = 1;
            $response = $this->buyer_response($buyer_response, $status);
        }
        else if ($buyer_response['leadStatus'] == "2") {
            Log::debug('Status:: 2');
            $status = 2;
            $response = $this->buyer_response($buyer_response, $status);
        }
         else if ($buyer_response['leadStatus'] == "3") {
             Log::debug('Status:: 3');
             $status = 3;
            $response = $this->buyer_response($buyer_response, $status);
        }
        $this->update_accumulator($offer_detail, $response);

        return $response;
    }
}
