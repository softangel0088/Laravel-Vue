<?php

namespace App\Models\Partner;

use App\Models\Mapping\Mapping;
use App\Models\Postback\Postback;
use App\Models\PostbackTracker\PostbackTracker;
use App\Models\User;
use App\Models\User\Company;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class Partner extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->hasOne(User::class);
    }
    public function company()
    {
        return $this->hasOne(Company::class);
    }
    public function mappings()
    {
        return $this->hasMany(Mapping::class);
    }
    public function postbacks()
    {
        return $this->hasMany(PostbackTracker::class);
    }

    public function postback_trackers()
    {
        return $this->hasMany(PostbackTracker::class);
    }

    /**
     * Get the full partner details
     *
     * @param $id
     * @param $leadtype
     * @return mixed
     */
    public static function GetPartnerFullDetail($id, $leadtype)
    {

        $status_inactive = DB::table('partners',)
            ->select('partners.*', 'lms_partner_leadtype.*', 'partners.status AS PStatus')
            ->leftJoin(
                'lms_partner_leadtype',
                'partners.vendor_id',
                '=',
                'lms_partner_leadtype.vendor_id')
            ->where('partners.status', 0)
            ->where('partners.vendor_id', $id)
            ->where('lms_partner_leadtype.lead_type', '=', $leadtype)
            ->get();

        $status_active = DB::table('partners',)
            ->select('partners.*', 'lms_partner_leadtype.*', 'partners.status AS PStatus')
            ->leftJoin(
                'lms_partner_leadtype',
                'partners.vendor_id',
                '=',
                'lms_partner_leadtype.vendor_id')
            ->where('partners.status', 1)
            ->where('partners.vendor_id', $id)
            ->where('lms_partner_leadtype.lead_type', '=', $leadtype)
            ->get();

        $status_inactive = json_decode(json_encode($status_inactive), true);

        if (!empty($status_inactive)) {
            echo 'Partner Not Active';
            die();
        }
        else {
            $status_active->where('lms_partner_leadtype.lead_type', $leadtype);
        }

        if ($id != null) {
            $status_active->where('partners.id', $id);
        }
        else {
            echo 'Partner Not Active';
            die();
        }

        $status_active = (array)$status_active->first();
        return $status_active;
    }

    /**
     * Get the partner call-center
     *
     * @param null $id
     * @param $leadtype
     * @return mixed|string
     */
    public static function get_callcenter_fulldetail($id, $leadtype)
    {

        $status_inactive = DB::table('lms_callcenter', 'p')
            ->select(
                'p.*',
                'pd.*',
            )
            ->leftJoin(
                'lms_partner_leadtype as pd',
                'p.vid',
                '=',
                'pd.vid')
            ->where('pd.status', '=', 0)
            ->where('p.vid', '=', $id)
            ->where('p.leadType', '=', $leadtype)
            ->where('pd.type', '=', $leadtype)
            ->get()
            ->first();
//        dd($status_inactive);

        $status_active = DB::table('lms_callcenter', 'p')
            ->select(
                'p.*',
                'pd.*',
            )
            ->leftJoin(
                'lms_partner_leadtype as pd',
                'p.vid',
                '=',
                'pd.vid')
            ->where('pd.status', '=', 1)
            ->where('pd.vid', '=', $id)
            ->where('p.leadType', '=', $leadtype)
            ->where('pd.type', '=', $leadtype)
            ->get()
            ->first();

//        dd($status_active);
        if (!empty($status_inactive)) {
            return 'Partner Route Not Active';
        }

        if ($id != null) {
            return $status_active;
        }
        else {
            return 'Partner Not Active';
        }
    }

    /**
     * Get the partner details
     *
     * @param null $id
     * @return mixed
     */
    public static function get_partner_details($id)
    {
//        dd($id);
        $status_inactive = DB::table('partners', 'p')
            ->select(
                'p.*',
                'pd.*',
            )
            ->leftJoin(
                'lms_partner_leadtype as pd',
                'p.id',
                '=',
                'pd.vid')

            ->where('pd.status', '=', 0)
            ->where('p.vendor_id', '=', $id)
            ->get()
            ->first();

        $status_active = DB::table('partners', 'p')
            ->select(
                'p.*',
                'pd.*',
            )
            ->leftJoin(
                'lms_partner_leadtype as pd',
                'p.id',
                '=',
                'pd.vid')
            ->where('pd.status', '=', 1)
            ->where('p.vendor_id', '=', $id)
            ->get()
            ->first();

        if (!empty($status_inactive)) {
            echo 'Partner Route Not Active';
            die();
        }

        if ($id != null) {
            return $status_active;
        }
        else {
            echo 'Partner Not Active';
            die();
        }
    }


    /**
     * Get the Profit Margin for the affiliate
     *
     * @param null $vid
     * @param null $leadType
     * @return mixed
     */
    public static function ProfitMargin($vid = null, $leadType = null)
    {
        $query = DB::table('lms_partner_leadtype')
            ->select('margin')
            ->where('vid', $vid)
            ->where('type', $leadType)
            ->where('status', 1)
            ->get()
            ->toArray();
        $query = json_decode(json_encode($query), true);

        return $query[0]['margin'];

    }

    /**
     * This function gets the key value as row['company']
     *
     * @return array
     */
    public function GetKeyValue()
    {
        $query = DB::table('lms_callcenter')
            ->get();

        $return = array();

        if ($query->count() > 0) {
            foreach ($query->toArray() as $row) {
                $row = json_decode(json_encode($row), true);
                $return[$row['id'] = $row['company']];
            }
        }
        return $return;

    }

    /*
     * Get the Lead type associated with the VID
     *
     * @param null $vid
     * @return array
     */
    public function GetLeadType($vid = null)
    {
        $query = DB::table('lms_partner_leadtype');

        if ($vid != null) {
            $leadtype = $query->where('vid', $vid)
                ->get()
                ->toArray();

            $temp = $leadtype;
            $result = array();
            foreach ($temp as $t) {
                $t = json_decode(json_encode($t), true);
                $result[$t['type']] = $t;
            }
            return $result;
        }
    }

    /**
     * Add Lead Type
     *
     * @param $data
     * @return int
     */
    public static function AddLeadType($data)
    {
        if (isset($data['id']) && !empty($data['id'])) {
            $response = DB::table('lms_partner_leadtype')
                ->where('id', $data['id']);

            $response->update($data);
            Log::debug('Threshold:: updated successfully');
//            Log::debug('Threshold RESP::', (array) $response->get()->first());

            return $response->get()->first();
        }


    }
}
