<?php

namespace App\Models\Lead;

use App\Models\Buyer;
use App\CheckStatusLogger;
use App\Http\Controllers\Admin\Lead\LeadTestController;
use App\Lmsleadlog;
use App\LmsPartnerLeadType;
use App\Models\Buyer\BuyerFilter;
use App\Models\Buyer\BuyerSetup;
use App\Models\LeadLog\LeadLog;
use App\Models\LMSApplication\Applicant;
use App\Models\LMSApplication\Bank;
use App\Models\LMSApplication\Consent;
use App\Models\LMSApplication\Employer;
use App\Models\LMSApplication\Expenses;
use App\Models\LMSApplication\Loan;
use App\Models\LMSApplication\Residence;
use App\Models\LMSApplication\Source;
use App\Models\Mapping\Mapping;
use App\Models\Partner\Partner;
use App\Models\User;
use App\Pubbuyermapping;
use App\Traits\Uuids;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;


class USLead extends Model
{
    use HasFactory;
//        Uuids;

    public $timestamps = true;
    public $incrementing = false;
    protected $guarded = [];
    protected $table = 'us_leads';
    protected $keyType = 'string';
    protected $primaryKey = 'id';


    public function source()
    {
        return $this->hasOne(Source::class, 'id');
    }
    public function loan()
    {
        return $this->hasOne(Loan::class, 'id');
    }
    public function applicant()
    {
        return $this->hasOne(Applicant::class, 'id');
    }
    public function employer()
    {
        return $this->hasOne(Employer::class, 'id');
    }
    public function residence()
    {
        return $this->hasOne(Residence::class, 'id');
    }
    public function bank()
    {
        return $this->hasOne(Bank::class, 'id');
    }
    public function consent()
    {
        return $this->hasOne(Consent::class, 'id');
    }
    public function expense()
    {
        return $this->hasOne(Expenses::class, 'id');
    }

    /**
     * Date Format
     *
     * @param $value
     * @return string
     */
    public function getCreatedAtAttribute($value)
    {
        // Set the default format of date
        return Carbon::parse($value)->format("d M Y h:i A");
    }

    /*
     * End DB Model Attributes
     */

    public function users()
    {
        return $this->belongsTo(User::class);
    }
    public function mappings()
    {
        return $this->hasMany(Mapping::class);
    }
    public function partners()
    {
        return $this->belongsTo(Partner::class);
    }
    public function buyers()
    {
        return $this->hasMany(Buyer::class);
    }
    public function buyer_setups()
    {
        return $this->hasMany(BuyerSetup::class);
    }
    public function checkstatuses()
    {
        return $this->hasMany(CheckStatusLogger::class);
    }
//    public function lms_partner_leadtypes()
//    {
//        return $this->hasMany(LmsPartnerLeadType::class);
//    }
    public function lead_logs()
    {
        return $this->hasMany(LeadLog::class);
    }

    /**
     * Check the status of the lead id
     * @param $leadid
     * @return mixed
     */
    public static function CheckStatus( $leadid )
    {
        $query = DB::table('lead_logs')
            ->where('leadid', $leadid)
            ->get()
            ->first();

        return $query;
    }


    /**
     * This function will take the post data passed from the controller
     * if id is present, then it will do an update, else an insert.
     * @param $data
     * @return mixed
     */
    public static function add_log_partner( $data )
    {
        $query = DB::table('lms_lead_log_us');


        if (isset($data['lead_id'])) {
            $res = $query->where('lead_id', $data['lead_id'])
                ->updateOrInsert($data);
//            Log::debug('INSERTED LOG::', (array)$res);

        }

        $result = DB::table('lms_lead_log_us')->latest()->first();
        Log::debug('RESULT LOG::', (array)$result);

        return $result;
    }

    /**
     * This function will take the post data passed from the controller
     * if id is present, then it will do an update, else an insert.
     * @param $data
     * @return Model|Builder|object|null
     */
    public static function update_log_partner( $data )
    {
        $query = DB::table('lms_lead_log_us');

        if (isset($data['id'])) {
            $query->where('id', $data['id'])
                ->update($data);

        } else {
            $res = $query->insert($data);
        }

        return $query->get()->first();
    }


    /**
     * Get the VID lead logs
     * @param $id
     * @return mixed
     */
    public function getvendorlog($id)
    {
        $query = DB::table('lmsleadlogs');

        if (!empty($id)) {
            $query->where('leadid', $id);
        }
        $rows = $query->get()->first();

        return $rows;
    }

    /**
     * This function will add a lead payday uk log
     * @param $data
     * @return bool
     */
    public static function AddLog($data): bool
    {
        if (!empty($data)) {
            $res = DB::table('lmsleadlogsus')->insert($data);

            return $res;
        }
    }

    /**
     * Get the current conversion rates for UK & USA.
     * @return mixed
     */
    public static function GetDailyRate()
    {
        $query = DB::table('lms_daily_rates')
            ->orderBy('created_at', 'DESC')
            ->get()
            ->first();

        return $query;
    }

    /**
     * This function updates the redirect URL
     * @param $search
     * @return false|mixed
     */
    public function UpdateRedirectUrl($search)
    {
        $query = DB::table('us_leads');

        if (isset($search['id']) && !empty($search['id'])) {
            $query->where('id', $search['id'])
                ->where('created_at', '>', $search['created_at']);

            $row = $query->get()->first();
            Log::info('Redirect ROW::', (array) $row);


            if (!empty($row->redirectUrl)) {
                $data['id'] = $search['id'];
                $data['isRedirected'] = '1';

                $query->where('id', $data['id']);
                $res = $query->update(['id' => $data['id'], 'isRedirected' => $data['isRedirected']]);

                $data_log['isRedirected'] = '1';
                $query = DB::table('lmsleadlogsus');

                $tier_id = BuyerSetup::where('buyer_tier_id', $row->buyerTierID)->first()->id;


                $query->where('lead_id', $search['id'])
                    ->where('buyer_setup_id', $tier_id);

                $res = $query->update(['isredirected' => $data_log['isRedirected']]);
                return $row->redirectUrl;
            }
        }
        return false;
    }

    /**
     * This function updates the lead logs
     * @param $data
     * @return Builder
     */
    public function UpdateLog($data): Builder
    {
        $res = DB::table('lmsleadlogs');

        if (!empty($data)) {
            if (!empty($data['leadid'])) {
                $query = DB::table($this)
                    ->where('leadid', $data['leadid'])
                    ->where('buyersetup_id', $data['buyersetup_id'])
                    ->update($data);
                }
        }
        return $res;
    }

    /**
     * Find the partner Log ID
     * @param $lead_id
     * @return Collection
     */
    public static function FindPartnerLogId($lead_id): Collection
    {
         $res = DB::table('lms_lead_log')
            ->where('leadid', $lead_id)
            ->get();

         return $res;
    }


    /**
     * This function updates or inserts the $data ( lead ).
     * @param $data
     * @return bool|int
     */
    public function add( $data )
    {
        $query = DB::table('us_leads');

        if (isset($data['id'])) {
            $query->where('id', $data['id']);

            $res = $query->update($data);
        } else {
            $res = $query->insert($data);
        }

        return $res;
    }

    /**
     * This function gets the VID log associated with the lead id.
     * @param $id
     * @return mixed
     */
    public static function get_vendor_log($id)
    {
        $query = DB::table('lms_lead_paydayus_partner');

        if (!empty($id)) {
            $query->where('leadid', $id);
        }
        $rows = $query->get()->toArray();

        return $rows;

    }

    /**
     * Get the Log from lead log table based on the id provided.
     * @param $id
     * @return array
     */
    public static function getlog($id)
    {
        $query = DB::table('lmsleadlogsus');

        if (!empty($id)) {
            $query->where('lead_id', $id)
                ->orderBy('created_at', 'DESC');
        }
        $rows = $query->get()->toArray();

        return $rows;
    }

    /**
     * This function checks the fraud_score for the lead and
     * updates the lead column in the lms payday uk table.
     * @return int
     */
    public function quality_check()
    {
        $query = DB::table('us_leads');

        if (isset($result['fraud_score'])) {
            $query->where('quality_score', $result['fraud_score']);


            $res = $query->update($result);
        }
        return $res;
    }

    /**
     * This function gets the buyers associated with the VID.
     * @param $post
     * @return mixed
     */
    public static function getBuyers($post)
    {
        $post = USLead::preBuyerPost($post);


        if ($post['istest'] == true) {
            $testBuyer = (new LeadTestController)->getTestBuyerUS();
            $post['buyer_list'] = $testBuyer;
        } else {

            $search = $post['search'];

            $buyer_list = Mapping::GetBuyer($search, $post);
            $post['buyer_list'] = $buyer_list;

        }

        return $post;
    }

    /**
     * This function sets relevant params on the incoming post for the getBuyer function
     * @param $post
     * @return mixed
     */
    public static function preBuyerPost($post)
    {
        $search = (object)[];

        if (isset($post['minCommissionAmount']) && $post['minCommissionAmount'] != '0.00') {
            $search->min_price = $post['minCommissionAmount'];
        }
        if (isset($post['minCommissionAmount']) && $post['minCommissionAmount'] != '0.00') {
            $search->max_price = $post['maxCommissionAmount'];
        }
        if (isset($post['tier'])) {
            $search->tier = $post['tier'];
        }
        if (isset($post['timeout'])) {
            $search->timeout = $post['timeout'];
        }
        if (isset($post['vid'])) {
            $search->vid = $post['vid'];
        }
        if (isset($post['istest']) && $post['istest'] === 1) {
            $search->leadtype = 'testmodeus';
        } else {
            $search->leadtype = '2';
        }

        $post['search'] = $search;

        return $post;

    }

    /**
     * @param $buyerTierID
     * @return mixed
     */
    public static function getTierID($buyerTierID)
    {
        $filters = BuyerFilter::where('buyersetup_id', '=', $buyerTierID)
            ->where('filter_type', 'DateOfBirthDay')
            ->get()
            ->toArray();

        return $filters;
    }

     /**** Export functionality ***/
    public static function getLeads()
    {
        $u_id = Auth::id();
        $partner = DB::table('partners')->where('user_id', '=', $u_id)->get()->toArray();
        $vid = $partner[0]->id;

        $records = DB::table('lmspaydayuks')
            ->select(
                'id',
                'istest',
                'vid',
                'subid',
                'vidLeadPrice AS leadPrice',
                'leadStatus',
                'isRedirected',
                'ipaddress',
                'userAgent',
                'creationUrl',
                'referringUrl',
                'created_at AS timestamp',
            )
            ->where('vid', '=', $vid)
            ->get()->toArray();

        return $records;
    }


}
