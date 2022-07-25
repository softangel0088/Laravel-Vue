<?php

namespace App\Models\Mapping;

use App\Models\Buyer\Buyer;
use App\Models\Buyer\BuyerFilter;
use App\Models\Buyer\BuyerSetup;
use App\Models\LeadLog\LeadLog;
use App\Models\Partner\Partner;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class Mapping extends Model
{
    use HasFactory;


    public function partners()
    {
        return $this->hasMany(Partner::class);
    }
    public function buyers()
    {
        return $this->hasMany(Buyer::class);
    }
    public function buyer_setups()
    {
        return $this->hasMany(BuyerSetup::class);
    }


    protected $guarded = [];

    protected $casts = [
    ];

    protected $fillable = [
        'leadtype',
        'vid',
        'buyer_id',
        'buyer_setup_id',
        'status',
    ];




    /**
     * @param array $search
     * @return Builder
     */
    private static function getBuyerTiers(array $search)
    {
        $query = DB::table('mappings')
            ->select(
                'mappings.*',
                'buyer_setups.*',
                'buyers.*'
            )
            ->leftJoin(
                'buyer_setups',
                'mappings.buyer_setup_id',
                '=',
                'buyer_setups.id')
            ->leftJoin(
                'buyers',
                'mappings.buyer_id',
                '=',
                'buyers.id');



        $query
            ->where('mappings.leadtype', $search['leadtype'])
            ->where('buyer_setups.status', 1)
            ->where('mappings.status', 1)
            ->where('buyers.status', 1)
            ->where('mappings.partner_id', $search['vid']);

        $buyers = $query->orderBy('buyer_setups.tier_price', 'DESC');

        return $buyers;
    }

    /**
     * @param array $search
     * @param Builder $buyers
     * @return Collection
     */
    private static function filterBuyers(array $search, Builder $buyers)
    {
//        if (!empty($search['tier'])) {
//            if ($search['tier'] == '0') {
//                $buyers->orderBy('buyer_setups.tier_price', 'DESC');
//            } else {
//                if ($search['tier'] != '0') {
//                    $buyers->where('buyer_setups.buyer_tier_id', '=', $search['tier']);
//                }
//            }
//        }
//        if (!empty($search['timeout'])) {
//            $buyers->where('buyer_setups.timeout', '<=', $search['timeout']);
//        }

//        if (!empty($search['min_price'] && $search['min_price'] !== '0.00')) {
//            $buyers->where('buyer_setups.tier_price', '>=', $search['min_price']);
//        }
//        if (!empty($search['max_price'] && $search['max_price']  !== '0.00')) {
//            $buyers->where('buyer_setups.tier_price', '<=', $search['max_price']);
//        }

        if (!empty($search['mode'])) {
            $buyers = $buyers->where('buyer_setups.mode', $search['mode']);
        } else {
            $buyers = $buyers->where('buyer_setups.mode', 1);
        }


        $buyers = $buyers->get();

        return $buyers;
    }

    /**
     *  Get Single Buyer
     *
     * @param null $search
     * @return array
     */
    public static function GetSingleBuyer($search)
    {
        $query = DB::table(
            'buyer_setups')
            ->leftJoin(
                'buyers',
                'buyer_setups.buyer_id',
                '=',
                'buyers.id'
            );

        $query
            ->where('buyer_setups.status', '=', 1)
            ->where('buyers.status', '=', 1);


        if (!empty($search->tier_id)) {
            $query->where('buyer_setups.id', $search->tier_id);
        }
        if (!empty($search->leadtype)) {
            $query->where('buyer_setups.leadtype', $search->leadtype);
        }
        if (!empty($search->buyer_id)) {
            $query->where('buyer_setups.buyer_id', $search->buyer_id);
        }
        if (!empty($search->mode)) {
            $query->where('buyer_setups.mode', $search->mode);
        } else {
            $query->where('buyer_setups.mode', '=', 1);
            $query->orderBy('buyer_setups.tier_price', 'DESC');

            return $query->get()->first();
        }
    }

    /**
     * Get Buyer from Pub buyer table
     *
     * @param $search
     * @param $post
     * @return Collection|void
     */
    public static function GetBuyer($search, $post)
    {
        $vendor = Partner::where('vendor_id', '=', $post['vid'])->first();
        $post['vendor_id'] = $vendor->id;

        $search = (array)$search;
        $search['vid'] = $post['vendor_id'];
        if ($post['minCommissionAmount'] == "0") {
            $post['minCommissionAmount'] = "0.00";
        }
        if ($post['maxCommissionAmount'] == "0") {
            $post['maxCommissionAmount'] = "0.00";
        }
        $search['min_price'] = $post['minCommissionAmount'] ?? "0.00";
        $search['max_price'] = $post['maxCommissionAmount'] ?? "0.00";
        $search['timeout'] = $post['timeout'] ?? "210";

        Log::debug('search() called ::', (array)$search);

        $buyers = Mapping::getBuyerTiers($search);
        Log::debug('Mapping::getBuyerTiers() called ::', (array)$buyers);
        Log::debug('Mapping::getBuyerTiers()->get() called ::', (array)$buyers->get());

        $buyers = Mapping::filterBuyers($search, $buyers);
        Log::debug('Mapping::filterBuyers() called ::', (array)$buyers);


        if ($buyers->isEmpty()) {
            echo json_encode(['error' => 'Tier Not Found']);
            die();
        }

        return $buyers;
    }





}
