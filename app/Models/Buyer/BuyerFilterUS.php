<?php

namespace App\Models\Buyer;

use App\Models\Lead\USLead;
use App\QueryFilters\paydayus\BankAccountType;
use App\QueryFilters\paydayus\InMilitary;
use App\QueryFilters\paydayus\Phone;
use App\QueryFilters\paydayus\State;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\QueryFilters\paydayus\DateOfBirth;
use App\QueryFilters\paydayus\DateOfBirthMonth;
use App\QueryFilters\paydayus\DateOfBirthYear;
use App\QueryFilters\paydayus\Email;
use App\QueryFilters\paydayus\FollowingPayDateDay;
use App\QueryFilters\paydayus\IncomeCycle;
use App\QueryFilters\paydayus\IncomeSource;
use App\QueryFilters\paydayus\LoanAmount;
use App\QueryFilters\paydayus\LoanTerms;
use App\QueryFilters\paydayus\MaritalStatus;
use App\QueryFilters\paydayus\MonthlyIncome;
use App\QueryFilters\paydayus\MonthlyMortgageRent;
use App\QueryFilters\paydayus\MonthlyRepayments;
use App\QueryFilters\paydayus\MonthsAtAddress;
use App\QueryFilters\paydayus\NextPayDateDay;
use App\QueryFilters\paydayus\ResidentialStatus;
use Illuminate\Support\Facades\Log;


class BuyerFilterUS extends Model
{
    use HasFactory;
//        Searchable;

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
     * @param $post
     * @return USLead|mixed
     */
    public static function dateFilters($post)
    {
        $post = (new DateOfBirth)->applyFilters($post);
//        $post = (new DateOfBirthMonth)->applyFilters($post);
//        $post = (new DateOfBirthYear)->applyFilters($post);
//        $post = (new NextPayDateDay)->applyFilters($lead);
//        $post = (new FollowingPayDateDay)->applyFilters($post);


        return $post;
    }

    /**
     * Numeric Filters
     *
     * @param $post
     * @return USLead|mixed
     */
    public static function numericFilters($post)
    {


        /*** Numeric Choice Filters ***/
        $post = (new LoanAmount)->applyFilters($post);
        $post = (new MonthlyIncome)->applyFilters($post);
        $post = (new MonthlyMortgageRent)->applyFilters($post);
        $post = (new MonthsAtAddress)->applyFilters($post);
        $post = (new MonthlyRepayments)->applyFilters($post);
        $post = (new LoanTerms)->applyFilters($post);


        return $post;

    }

    /**
     * Multi Choice Filters
     * @param $lead
     * @return USLead
     */
    public static function multiChoiceFilters($lead)
    {
        $post = (new Email)->applyFilters($lead);
        $post = (new ResidentialStatus)->applyFilters($post);
        $post = (new IncomeSource)->applyFilters($post);
        $post = (new MaritalStatus)->applyFilters($post);
        $post = (new IncomeCycle)->applyFilters($post);
        $post = (new InMilitary)->applyFilters($post);
        $post = (new State)->applyFilters($post);
        $post = (new BankAccountType)->applyFilters($post);
        $post = (new Phone)->applyFilters($post);


        return $post;

    }


    /**
     * @param $lead
     * @return mixed
     */
    public function quote_boost($lead)
    {

        if ($lead->Loan->loanAmount >= '600' && $lead->Loan->loanAmount <= '900') {
            $lead->Loan->loanAmount = '500';
        } elseif ($lead->Loan->loanAmount >= '1100' && $lead->Loan->loanAmount <= '1900')
            $lead->Loan->loanAmount = '1000';
        elseif ($lead->Loan->loanAmount >= '2100' && $lead->Loan->loanAmount <= '2900')
            $lead->Loan->loanAmount = '2000';
        elseif ($lead->Loan->loanAmount >= '3000' && $lead->Loan->loanAmount <= '3900')
            $lead->Loan->loanAmount = '3000';

        return $lead;
    }

    /**
     * This function sends the lead through the buyer filters
     * and returns filtered $post.
     *
     * @param $lead
     * @return mixed
     */
    public static function allBuyerFilters($lead)
    {
        $lead = (object)$lead;

        if ($lead->quote_boost == 1) {
            $lead = (new BuyerFilterUS)->quote_boost($lead);
        }

        /*** All Filters ***/
        $lead = BuyerFilterUS::numericFilters($lead);
        $lead = BuyerFilterUS::multiChoiceFilters($lead);
        $lead = BuyerFilterUS::dateFilters($lead);

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
        $failed_filters = BuyerFilterUS::where('buyer_setup_id', $buyerTierID)
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
        bool $value = null,
        bool $operator = null)
    {
        $failed_filters = BuyerFilterUS::where('buyer_setup_id', '=', $buyerTierID)
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
     * This function gets the tier index of failed buyer filters
     * and flips/pushes them to an array.
     *
     * @param $buyerTierID
     * @param $filteredTierID
     * @return int[]|string[]
     */
    public
    static function getTierIndex($buyerTierID, $filteredTierID)
    {
//        foreach ($buyerTierID as $k => $v) {
        dd($filteredTierID);
//            foreach ($filteredTierID as $key => $val) {
//
//                $result = array_intersect($buyerTierID, $filteredTierID);
////                dd($result);
//                $tierIndex = array_flip($result);
////                dd($tierIndex);
//
//                return $tierIndex;
//            }
    }
//    }

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
            if (isset($index->id) && $index->id == $tierIndex) {
                unset($buyer_list[$key]);
                $post->buyer_list = $buyer_list;
                return $post;
            }
        }
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

        $filters['row'] = BuyerFilterUS::whereIn('buyer_setup_id', $buyerTierID)
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
            if ($buyer->buyername == 'testmodeus') {
                $buyerTierID[] = 2;

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

