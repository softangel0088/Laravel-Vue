<?php

namespace App\Models\Postback;

use App\Models\ClickTracker\ClickTracker;
use App\Models\Offer\Offer;
use App\Models\Partner\Partner;
use App\Models\PostbackTracker\PostbackTracker;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;

class PostbackLogs extends Model
{
    use HasFactory;

    protected $table = 'postback_logs';



    /**
     * @param $request
     * @param $transaction_id
     * @param $offer
     */
    public function store($request, $transaction_id, $offer)
    {
        $postback_log = new PostbackLogs();
        $postback_log->lead_id = $request->lead_id ?? '';

//        $offer->internal = '1';

//        if ($offer->internal == "1") {
            $vendor = Partner::where('vendor_id', '=', $request->partner_id)->first();
            $postback_log->partner_id = $vendor->id;
//        } else {
//            $postback_log->partner_id = $request->partner_id ?? '1';
//        }
        Log::debug('PB::', (array) $request->amount);
        $postback_log->offer_id = $request->offer_id ?? $offer->id;
        $postback_log->aff_sub = $request->aff_sub ?? 'NOT PROVIDED';
        $postback_log->aff_sub2 = $request->aff_sub2 ?? 'NOT PROVIDED';
        $postback_log->aff_sub3 = $request->aff_sub3 ?? 'NOT PROVIDED';
        $postback_log->aff_sub4 = $request->aff_sub4 ?? 'NOT PROVIDED';
        $postback_log->aff_sub5 = $request->aff_sub5 ?? 'NOT PROVIDED';
        $postback_log->affiliatePostbackUrl = $request->affiliatePostbackUrl ?? '';
        $postback_log->transaction_id = $transaction_id ??  'NOT PROVIDED';;
        $postback_log->conversion = $request->conversion ?? '1';
        $postback_log->amount = $request->amount ?? '0.00';
        $postback_log->totalCost = $request->totalCost ?? '0.00';
        $postback_log->totalRevenue = $request->totalRevenue ?? '0.00';
        $postback_log->save();
        Log::debug('Postback DEBUG::', (array) $postback_log);

        return $postback_log;


    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $postback_log = PostbackLogs::find($id);

        return Response::json($postback_log);
    }


    public function postback_tracker()
    {
        return $this->hasOne(PostbackTracker::class);
    }
    public function click_tracker()
    {
        return $this->belongsTo(ClickTracker::class);
    }
    public function offer()
    {
        return $this->belongsTo(Offer::class);
    }


    /**
     * @param $data
     * @param $data_update
     * @return object
     */
    public static function update_postback_log( $data, $data_update )
    {
        $data = json_decode(json_encode($data), true);
        $data['updated_at'] = Carbon::now();
        $data['created_at'] = Carbon::now();

        $totalCost = $data_update->totalCost;
        $totalRevenue =  $data_update->totalRevenue;
        $conversion_threshold_met = '1';

        $query = DB::table('postback_logs')->where('id', $data['id'] );
        $res = $query->update(['totalCost' => $totalCost, 'totalRevenue' => $totalRevenue, 'conversion' => $conversion_threshold_met]);
        Log::debug('Postback Log:: updated',(array) $res);

        return $query->first();
    }

    /**
     * @param $data
     * @param $data_update
     * @return object
     */
    public static function update_postback_log_no_conversion( $data, $data_update )
    {
        $data = json_decode(json_encode($data), true);
        $data['updated_at'] = Carbon::now();
        $data['created_at'] = Carbon::now();

        $totalCost = $data_update->totalCost;
        $totalRevenue =  $data_update->totalRevenue;
        $conversion_threshold_not_met = '0';

        $query = DB::table('postback_logs')->where('id', $data['id'] );
        $res = $query->update(['totalCost' => $totalCost, 'totalRevenue' => $totalRevenue, 'conversion' => $conversion_threshold_not_met]);

        Log::debug('Postback Log:: updated');

        return $query->first();
    }

    public static function store_adv_postback($request, $click_log, $offer)
    {
        $partner_id = Partner::where('id', '=', $click_log->aff_id)->first();

        $postback_log = new PostbackLog();
        $postback_log->partner_id = $partner_id ?? '1';
        $postback_log->offer_id = $request->offer_id ?? $offer->id;
        $postback_log->aff_sub = $request->aff_sub ?? '';
        $postback_log->aff_sub2 = $request->aff_sub2 ?? '';
        $postback_log->aff_sub3 = $request->aff_sub3 ?? '';
        $postback_log->aff_sub4 = $request->aff_sub4 ?? '';
        $postback_log->aff_sub5 = $request->aff_sub5 ?? '';
        $postback_log->affiliatePostbackUrl = $request->affiliatePostbackUrl ?? '';
        $postback_log->transaction_id = $request->transaction_id ?? '';
        $postback_log->conversion = $request->conversion ?? '1';
        $postback_log->amount = $request->amount ?? '';
        $postback_log->totalCost = $request->totalCost ?? '';
        $postback_log->totalRevenue = $request->totalRevenue ?? '';
        $postback_log->save();
        Log::debug('ADV PB::', (array) $postback_log);

        return $postback_log;

    }

}
