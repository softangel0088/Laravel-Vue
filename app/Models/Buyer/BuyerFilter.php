<?php

namespace App\Models\Buyer;

use App\Models\Lead\UKLead;
use App\Models\Lead\USLead;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\QueryFilters\paydayuk\DateOfBirthDay;
use App\QueryFilters\paydayuk\DateOfBirthMonth;
use App\QueryFilters\paydayuk\DateOfBirthYear;
use App\QueryFilters\paydayuk\Email;
use App\QueryFilters\paydayuk\FollowingPayDateDay;
use App\QueryFilters\paydayuk\IncomeCycle;
use App\QueryFilters\paydayuk\IncomeSource;
use App\QueryFilters\paydayuk\LoanAmount;
use App\QueryFilters\paydayuk\LoanTerms;
use App\QueryFilters\paydayuk\MaritalStatus;
use App\QueryFilters\paydayuk\MonthlyFood;
use App\QueryFilters\paydayuk\MonthlyIncome;
use App\QueryFilters\paydayuk\MonthlyMortgageRent;
use App\QueryFilters\paydayuk\MonthlyOtherExpense;
use App\QueryFilters\paydayuk\MonthlyRepayments;
use App\QueryFilters\paydayuk\MonthlyTransport;
use App\QueryFilters\paydayuk\MonthlyUtilities;
use App\QueryFilters\paydayuk\MonthsAtAddress;
use App\QueryFilters\paydayuk\NextPayDateDay;
use App\QueryFilters\paydayuk\ResidentialStatus;
use Illuminate\Support\Facades\Log;


class BuyerFilter extends Model
{
    use HasFactory;

    protected $table = 'buyer_filters';


    public function buyer()
    {
        return $this->hasMany(Buyer::class);
    }
    public function buyer_setup()
    {
        return $this->hasOne(BuyerSetup::class);
    }


    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'conditions' => 'array',
    ];

    /**
     * Date Filters
     *
     * @param $lead
     * @return UKLead|mixed
     */
    public static function dateFilters($lead)
    {
//        $post = (new DateOfBirthDay)->applyFilters($lead);
//        $post = (new DateOfBirthMonth)->applyFilters($post);
//        $post = (new DateOfBirthYear)->applyFilters($post);
//        $post = (new NextPayDateDay)->applyFilters($lead);
//        $post = (new FollowingPayDateDay)->applyFilters($post);


        return $lead;
    }

    /**
     * Numeric Filters
     *
     * @param $lead
     * @return UKLead|mixed
     */
    public static function numericFilters($lead)
    {
//        $post = UKLead::getBuyers($lead);

        /*** Numeric Choice Filters ***/
        $post = (new LoanAmount)->applyFilters($lead);
        $post = (new MonthlyIncome)->applyFilters($post);
        $post = (new MonthlyMortgageRent)->applyFilters($post);
        $post = (new MonthsAtAddress)->applyFilters($post);
        $post = (new MonthlyRepayments)->applyFilters($post);
        $post = (new MonthlyTransport)->applyFilters($post);
        $post = (new MonthlyOtherExpense)->applyFilters($post);
        $post = (new MonthlyUtilities)->applyFilters($post);
        $post = (new MonthlyFood)->applyFilters($post);
        $post = (new LoanTerms)->applyFilters($post);

        return $post;

    }

    /**
     * Multi Choice Filters
     * @param $lead
     * @return UKLead
     */
    public static function multiChoiceFilters($lead)
    {
        $post = (new Email)->applyFilters($lead);
        $post = (new ResidentialStatus)->applyFilters($post);
        $post = (new IncomeSource)->applyFilters($post);
        $post = (new MaritalStatus)->applyFilters($post);
        $post = (new IncomeCycle)->applyFilters($post);

        return $post;

    }


    public function quote_boost($lead)
    {

        if ($lead->loan->loanAmount >= '600' && $lead->loan->loanAmount <= '900') {
            $lead->loan->loanAmount = '500';
        } elseif ($lead->loan->loanAmount >= '1100' && $lead->loan->loanAmount <= '1900')
            $lead->loan->loanAmount = '1000';
        elseif ($lead->loan->loanAmount >= '2100' && $lead->loan->loanAmount <= '2900')
            $lead->loan->loanAmount = '2000';
        elseif ($lead->loan->loanAmount >= '3000' && $lead->loan->loanAmount <= '3900')
            $lead->loan->loanAmount = '3000';

        return $lead;
    }

    /**
     * This function sends the lead through the buyer filters
     * and returns filtered $post.
     *
     * @param $post
     * @return mixed
     */
    public static function allBuyerFilters($post)
    {
        $lead = UKLead::where('lead_id', $post['lead_id'])->with(
            'source',
            'loan',
            'applicant',
            'employer',
            'residence',
            'bank',
            'consent',
            'expense'
        )
            ->first();



        if (isset($lead->quote_boost) && $lead->quote_boost == 1) {
            $lead = (new BuyerFilter)->quote_boost($lead);
        }

        /*** All Filters ***/

        $lead = BuyerFilter::numericFilters($lead);
        $lead = BuyerFilter::dateFilters($lead);
        $lead = BuyerFilter::multiChoiceFilters($lead);

        return $lead;

    }


    /**
     * This function gets all the failed filters if the query is empty.
     * @param $buyerTierID
     * @return array
     */
    public
    static function getAllFailedFilters($buyerTierID)
    {
        $failed_filters = BuyerFilter::where('buyer_setup_id', $buyerTierID)
            ->get()
            ->toArray();

        foreach ($failed_filters as $key1 => $val1) {
            $filteredTierID[] = $val1['buyer_setup_id'];

            return $filteredTierID;
        }
    }


    /**
     *
     *
     * @param $buyerTierID
     * @param string $condition
     * @param false $value
     * @param false $operator
     * @return array
     */
    public
    static function getAllFailedFiltersByIds(
        $buyerTierID,
        string $condition,
        bool $value = false,
        bool $operator = false)
    {
        $failed_filters = BuyerFilter::where('buyer_setup_id', '=', $buyerTierID)
            ->get()
            ->toArray();

        $filteredTierID = array();

        foreach ($failed_filters as $key1 => $val1) {
            if (isset($val1['conditions']) && is_array($val1['conditions'])) {
                foreach ($val1['conditions'] as $val) {
                    $has = array_search($condition, $val);
                    //var_dump($value.'-'.$val['values'][0]);
//                dd($condition);
//                    dd($has);
//                    dd($value);
//                    dd($operator);
//                    dd($val['values'][0]);
//                    dd($val['values']);
                    if (
                        $has
                        && $value
                        && (
                            (!$operator && $value <= $val['values'][0])
                            || ($operator == '<>' && $value <= $val['values'][1] && $value >= $val['values'][0])
                            || ($operator == '=' && $value == $val['values'][0])
                            || ($operator == '>' && $value > $val['values'][0])
                            || ($operator == '<' && $value < $val['values'][0])
                            || ($operator == 'in' && in_array($value, $val['values']))
                            || ($operator == 'notin' && !in_array($value, $val['values']))
                        )
                    ) {
                        $filteredTierID[] = $val1['buyer_setup_id'];
                    }
                    if (
                        $has
                        && $value
                        && (
                            $operator == 'endwith' || $operator == 'notendwith')) {
                        if ($operator == 'endwith') {
                            foreach ($val['values'] as $item) {
                                $value_length = strlen($value);
                                if ($value == substr($item, -$value_length)) {
                                    $filteredTierID[] = $val1['buyer_setup_id'];
                                    break;
                                }
                            }
                        }
                        if ($operator == 'notendwith') {
                            $notend = false;
                            foreach ($val['values'] as $item) {
                                $value_length = strlen($value);
                                if ($value == substr($item, -$value_length)) {
                                    $notend = true;
                                }
                            }
                            if (!$notend) {
                                $filteredTierID[] = $val1['buyer_setup_id'];
                            }
                        }
                    }
                }
            }
        }
        return $filteredTierID;
    }

    /**
     * This function removes the buyer from the list who's
     * filter failed, where it returned null or false.
     *
     * @param $post
     * @param $tierIndex
     * @return mixed
     */
    public
    static function removeBuyerFromBuyerList($post, $tierIndex)
    {
        $buyer_list = $post->buyer_list;

        foreach ($buyer_list as $key => $index) {
            if (isset($index->id) && $index->buyer_setup_id == $tierIndex) {
                unset($buyer_list[$key]);
                $post->buyer_list = $buyer_list;
            }
        }
                return $post;
        }

    /**
     * Get the buyer filters associated with the buyer setup id
     *
     * @param $buyerTierID
     * @return mixed
     */
    public
    static function getBuyerFilters($buyerTierID)
    {

        $filters['row'] = BuyerFilter::whereIn('buyer_setup_id', $buyerTierID)
            ->get()
            ->toArray();

        return $filters['row'];
    }

    /**
     * @param $buyer_list
     * @return array
     */
    public
    static function getBuyerTierIds($buyer_list)
    {
        foreach ($buyer_list as $buyer) {
//            dd($buyer_list);
            if ($buyer->buyername === 'testmodeuk') {
                $buyerTierID[] = 1;

                return $buyerTierID;
            } else {
                $buyerTierID[] = $buyer->buyer_setup_id;

            }
        }
        return $buyerTierID;
    }


    /**
     * ================
     * Model Relationships
     * ================
     */

    public
    function buyers()
    {
        return $this->belongsToMany(Buyer::class, 'buyer_filters', 'buyer_id');
    }

    public
    function buyer_setups()
    {
        return $this->belongsToMany(BuyerSetup::class, 'buyer_filters', 'buyer_setup_id');
    }


}

