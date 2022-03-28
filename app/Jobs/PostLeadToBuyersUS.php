<?php

namespace App\Jobs;

use App\Models\Buyer\BuyerFilterUS;
use App\Models\Buyer\BuyerRotation;
use App\Models\Buyer\BuyerSetup;
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

use App\Models\Mapping;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Notifications\Notification;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class PostLeadToBuyersUS implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

//    public $timeout = 3600;

    var string $leadtype = 2;
//    public $tries = 3;
    private $post;
    private $inputs;
    private $partner_detail;
    private $partnerlogid;
    private $data;
    private $status_check;
    private $buyer_status;


    /**
     *  if (isset($post->timeout)) {
    $row->timeout = $post->timeout;
    }
     */

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($post, $inputs, $partnerDetail, $partnerlogid, $data, $status_check)
    {
        $this->post = $post;
        $this->inputs = $inputs;
        $this->partner_detail = $partnerDetail;
        $this->partnerlogid = $partnerlogid;
        $this->data = $data;
        $this->status_check = $status_check;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $startTime = explode(' ', microtime());
        $startTime = $startTime[1] + $startTime[0];
        $post = $this->post;
        $inputs = $this->inputs;
        $data = $this->data;
        $partnerlogid = $this->partnerlogid;


        Log::info('Posting lead to buyer');
        $buyer_response = $this->BuyerPost($post);
        Log::debug('DEBUG RESP::', (array) $buyer_response);


        // Parse buyer response
        if (!is_null($buyer_response) && $buyer_response['leadStatus'] == "1" || $buyer_response['leadStatus'] == "3") {
            $offer_detail = Offer::get($inputs['oid']);
            Log::debug('OFFER::', (array) $offer_detail);

            if ($buyer_response['leadStatus'] == "1") {
                $response = array(
                    'status' => 1,
                    'price' => $buyer_response['price'],
                    'leadid' => $buyer_response['leadid'],
                    'ModelType' => $buyer_response['ModelType'],
                    'id' => $buyer_response['id'],
                    );
            } else {
                $response = array(
                    'status' => 3,
                    'price' => $buyer_response['price'],
                    'leadid' => $buyer_response['leadid'],
                    'ModelType' => $buyer_response['ModelType'],
                    'id' => $buyer_response['id'],
                    );
            }

            $thresholdAmount = $offer_detail['payout']['payoutAmount'];
            $offer_id = $offer_detail['id'];

            $internal_offers= [3,4];

            if ($thresholdAmount > 0 && in_array($offer_id, $internal_offers)) {
                if ($offer_id == 3) {
                    $accumulatorAmount = 0 + $this->partner_detail->accuCPLus20;
                } elseif ($offer_id == 4) {
                    $accumulatorAmount = 0 + $this->partner_detail->accuCPAus100;
                }
                $accumulatorAmount = $accumulatorAmount + $response['price'];

                $thresholdAmount = $offer_detail['payout']['revenueAmount'];
                Log::debug('THRESHOLD::', (array)$thresholdAmount);

                if ($accumulatorAmount >= $thresholdAmount) {
                    $accumulatorAmount = $accumulatorAmount - $thresholdAmount;
                    $buyer_response['Threshold'] = 'true';
                } else {
                    $buyer_response['Threshold'] = 'false';
                }
                if ($offer_id == 4) {
                    $lead_data = array(
                        'id' => $this->partner_detail->id,
                        'accuCPAus100' => $accumulatorAmount
                    );
                } elseif ($offer_id == 3) {
                    $lead_data = array(
                        'id' => $this->partner_detail->id,
                        'accuCPLus20' => $accumulatorAmount
                    );
                }

                $response_lead_data = Partner::AddLeadType($lead_data);

            }

            if (!empty($this->partner_detail) && $this->partner_detail->currencyType != "USD") {
                $rate = USLead::GetDailyRate();
                $response['price'] = $response['price'] * $rate['usd'];
            }
        } else {
            $response = array(
                'status' => 2,
                'leadid' => $buyer_response['leadid'],
                'id' => $buyer_response['id'],
                'ModelType' => $buyer_response['model_type'],
                'price' => '0.00'
            );
        }

        Log::debug('Response array: ' . json_encode($response));

        $logs = USLead::getlog($response['leadid']);

        if (count($logs) > 0) {
            $log = $logs[0];
            if ($log->buyer_id == "1") {
                $response["check_status"] = true;
            } else {
                $response['check_status'] = false;
            }
        }

        $post_response = $this->curl_response_post($response, $post['response_type']);
        Log::debug('Response:: ' . $post_response);


        $etime = explode(' ', microtime());
        $etime = ($etime[1] + $etime[0]);
        $post_time = $etime - $startTime;

        $data = array(
            'id' => $partnerlogid,
            'lead_id' => $response['leadid'],
            'post_response' => $post_response,
            'post_status' => $response['status'],
            'post_time' => $post_time
        );

        $res = USLead::update_log_partner($data);

        // response is ready to return, marking job as completed.
        $this->status_check->resp = $post_response;
        $this->status_check->percentage = 100;
        $this->status_check->status = 'completed';
        $this->status_check->save();
//        echo $post_response;
//        exit;
    }




    /**
     *  This function checks active buyers for enabled filters
     *  if so, the lead is filtered against the buyer filters.
     *
     * @param $post
     * @return array
     */
    public function BuyerPost($post)
    {


        $post = BuyerFilterUS::allBuyerFilters($post);

        $post->subid = $post->subid ?? 'DIRECT';

//        if ($post->istest != true) {
//            if (isset($post->quality_score)) {
//                $buyer_list['row'] = $this->QualityScoreChecker($post);
//                $post->buyer_list = $buyer_list['row'];
//            }
//        }




        Log::debug('BUYER LIST2::', (array)$post->buyer_list);


        $buyer_list['row'] = $post->buyer_list;
        $buyer_list['row'] = json_decode(json_encode($buyer_list['row']), true);


        if (is_array($buyer_list['row']) && !empty($buyer_list['row'])) {
            $index = 0;
            $length = count($buyer_list['row']);

            foreach ($buyer_list['row'] as $key => $value) {
                $row = (object)$value;
                $row = $this->GetPingtreeTracker($row, $buyer_list);

                $filename = app_path("Buyerapis/paydayus/" . strtolower($row->buyername) . ".php");
                Log::debug('BuyerFile::', (array) $filename);

                if (file_exists($filename)) {
                    require_once($filename);




                    $classname = strtolower($row->buyername);
                    $obj = new $classname($row, $post);

                    $lender_response = $obj->returnresponse();
                    Log::debug('Lender Response::', (array) $lender_response);

                    $datalogo = array(
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
                        'created_at' => date('Y-m-d H:i:s')
                    );
                    Log::debug('Log::', (array) $datalogo);
                    $res = USLead::AddLog($datalogo);
                    Log::debug('Log::', (array) $res);


                    // TODO CLEAN
                    Log::debug('LEAD ID::', (array) $post->uuid);
                    $lead = USLead::where('uuid', $post->uuid)->first();
                    Log::debug('LEAD ID::', (array) $lead);


                    if (isset($lender_response['post_price']) && isset($lender_response['accept']) && $lender_response['accept'] == 'ACCEPTED') {

                        if (!empty($this->partner_detail->margin)) {
                            if ($post->tier === 0) {
                                $price =
                                    $lender_response['post_price'] - ($lender_response['post_price'] * ($this->partner_detail->margin / 100));
                            } else {
                                $price =
                                    $lender_response['post_price'] - ($lender_response['post_price'] * ($this->partner_detail->margin / 100));
                            }
                        } else {

                            $price = $lender_response['post_price'];

                        }


                        try {
                            $partner = Partner::where('vendor_id', '=', $post->vid)->first();
                            $user = User::where('id', $partner->user_id)->first();

                            if (!empty($user->referrer_id)) {

                                $referrer_commission =
                                    $lender_response['post_price'] - ($lender_response['post_price'] * (95 / 100));

                                $price = $price - $referrer_commission;

                                // Add referrer Commission to Partner ID
                                $referrer_vid = $user->referrer_id;
                                $referrer_partner = Partner::where('user_id', '=', $referrer_vid)->first();

                                $referrer_data = array(
                                    'vendor_id' => $post->vid,
                                    'referrer_id' => $referrer_partner,
                                    'commission' => $referrer_commission,
                                    'geo' => '1',
                                );
                                Log::debug('REFERRER::', (array) $referrer_data);
                                $ref_com_response = Referral::add_commission($referrer_data);
                                Log::debug('REFERRER STORE::', (array) $ref_com_response);

                            }
                        } catch (Exception $e) {
                            Log::debug($e);
                        }




                        Log::debug('PRICE::', (array)$price);


                        $data = array(
                            'buyerLeadPrice' => $lender_response['post_price'],
                            'vidLeadPrice' => $price,
                            'buyerid' => $row->buyer_id,
                            'model_type' => $row->model_type,
                            'buyerTierID' => $row->buyer_tier_id,
                            'redirectUrl' => $lender_response['redirect_url'] ?? "",
                            'leadStatus' => '1',
                            'id' => $lead->id
                        );
                        $resp = (new USLead)->add($data);
                        Log::debug('LEAD::', (array) $resp);


                        $data = array(
                            'price' => $price,
                            'leadStatus' => '1',
                            'leadid' => $lead->uuid,
                            'id' => $lead->id,
                            'ModelType' => $row->model_type
                        );



                        return $data;

                    } elseif (isset($lender_response['accept']) && $lender_response['accept'] == 'CONDITIONAL') {

                        $data = array(
                            'buyerLeadPrice' => $lender_response['post_price'] ?? '0.00',
                            'vidLeadPrice' => '0.00',
                            'buyerid' => $row->buyer_id,
                            'model_type' => $row->model_type,
                            'buyerTierID' => $row->buyer_tier_id,
                            'redirectUrl' => $lender_response['redirect_url'] ?? "",
                            'leadStatus' => '3',
                            'id' => $lead->id,
                        );
                        $resp = (new USLead)->add($data);


                        $data = array(
                            'price' => '0.00',
                            'leadStatus' => '3',
                            'leadid' => $lead->uuid,
                            'id' => $lead->id,
                            'ModelType' => $row->model_type

                        );

                        return $data;

                    } else {


                        $data = array(
                            'leadStatus' => '2',
                            'id' => $lead->id,
                            'leadid' => $lead->uuid,
                            'model_type' => $row->model_type,
                            'reason' => $lender_response['reason'] ?? 'No Reason Provided'
                        );

                        $res = (new USLead)->add($data);


                        try {
                            $data['errors'] = $lender_response['errors'] ?? "";
                        } catch (Exception $e) {
                            Log::debug($e);
                            // ignore
//                            Notification::
                        }
                        $index++;
                        if ($index >= $length) {
                            $this->status_check->percentage = 100;
                            $this->status_check->save();
                            Log::debug('Status Check::', (array) $this->status_check);
                            return $data;
                        } else {
                            $this->status_check->percentage = (($index) / $length) * 100;
                            Log::debug('Status Check::', (array) $this->status_check);
                            $this->status_check->save();
                            continue;
                        }
                    }
                } else {
                    if ($buyer_list['row'] > 1) {
                        try{
                            $index++;
                        } catch (Exception $e) {
                            Log::debug($e);

                            $data = array(
                                'id' =>$lead->id,
                                'leadStatus' => '2',
                                'leadid' => $lead->uuid,
                                'model_type' => $row->model_type,
                                'reason' => $lender_response['reason'] ?? 'All Buyers rejected.',
                            );

                            $res = (new USLead)->add($data);
//
                        }
                    } else {
                        $data = array(
                            'id' => $lead->id,
                            'leadStatus' => '2',
                            'leadid' => $lead->uuid,
                            'model_type' => $row->model_type,
                            'reason' => $lender_response['reason'] ?? 'All Buyers rejected.',
                        );

                        $res = (new USLead)->add($data);

                        return $data;

                    }
                    Log::debug('Buyer file not found: ' . $filename);
                }
            }

            // use case
        } else {
            $data = array(
                'id' => $post->uuid,
                'leadStatus' => '2',
                'model_type' => '2',
                'reason' => $lender_response['reason'] ?? 'All Buyers rejected.',

            );

            $res = (new USLead)->add($data);

            Log::debug('No Buyer found');
//
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

        if ($row->rotate === 1) {

            $lead_count_today = USLead::whereDate('created_at', '=', Carbon::today())
                ->where('model_type', '=', 5)
                ->count();

            // Get Sample EPL from each Tree
            if ($lead_count_today < 50) {

                $res = $this->GetBuyerRotate($row, $buyer_list['row'], 'lead_post');
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
                        $row = $this->GetBuyerRotate($row, $buyer_list['row'], 'lead_post',);

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

        Log::debug('Buyers List ROW::', (array) $row);
        if (count($buyers) < 1) {
            Log::debug('Fallback Buyer Filtered Buyers ROW::', (array) $row);

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
        Log::debug('buyer Rotate::,' , (array) $row);
        $buyer_rotate = BuyerRotation::where('buyer_setup_id', '=', $row->buyer_setup_id)->first();

        return $buyer_rotate;

    }


    /**
     * Return Curl Response in XML | JSON
     * @param $client_response
     * @param $response_type
     * @return false|string
     */
    function curl_response_post($client_response, $response_type)
    {
        Log::debug('CLIENT RES::', (array) $client_response);
//        dd($client_response);
        if (isset($response_type) && $response_type === 'xml') {
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
        } else {
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

    /*
     * This function handles the redirection url
     */

    public function redirecturl_encrypt($id)
    {
        return $secure = rand(10, 99) . $id . rand(10, 99);
    }

    /**
     * @param $post
     * @return int
     *
     *
     */
    public function GetVidRedirectRate($post)
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

                $buyer_list['row'] = BuyerSetup::where('id', '=', $pingtree)->first();

                $post->buyer_list = $buyer_list['row'];

                return $post;
            }
            return $post;
        }
        return $post;
    }


}
