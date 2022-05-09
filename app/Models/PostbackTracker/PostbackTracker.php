<?php

namespace App\Models\PostbackTracker;

use App\Models\ClickTracker\ClickTracker;
use App\Models\Offer\ConversionTracker;
use App\Models\Offer\Offer;
use App\Models\Partner\Partner;
use App\Models\Postback\Postback;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class PostbackTracker extends Model
{
    use HasFactory;

    protected $table = 'postback_trackers';

    public function click_tracker()
    {
        return $this->hasOne(ClickTracker::class);

    }
    public function conversion_tracker()
    {
        return $this->hasOne(ConversionTracker::class);

    }
//    public function postback_log()
//    {
//        return $this->hasOne(PostbackLog::class);
//
//    }
    public function offer()
    {
        return $this->hasOne(Offer::class);

    }
    public function partner()
    {
        return $this->hasOne(Partner::class);

    }


    /**
     * @param $request
     * @return mixed
     */
    public function get_postback_data($request)
    {
        try {
            $postback = DB::table('postback_trackers')
                ->where('partner_id', $request->aff_id)
                ->where('offer_id', $request->offer_id)
                ->get()
                ->first();

        }
        catch (\Exception $e) {
            $postback = DB::table('postback_trackers')
                ->where('partner_id', $request->aff_id)
                ->where('global', 1)
                ->get()
                ->first();
        } finally {
            if ($postback === null || '') {
                return $postback;
//                echo 'No postback setup Postback';
//                die();
            }
        }
        return $postback;
    }

}
