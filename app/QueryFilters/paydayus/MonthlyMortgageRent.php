<?php


namespace App\QueryFilters\paydayus;


use App\Models\Buyer\BuyerFilterUS;
use App\Models\Lead\UKLead;
use App\Models\Buyer\BuyerFilter;
use App\QueryFilters\NumericFilter\ShouldBe;
use App\QueryFilters\NumericFilter\ShouldBeBetween;
use App\QueryFilters\NumericFilter\ShouldBeGreaterThan;
use App\QueryFilters\NumericFilter\ShouldBeLessThan;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pipeline\Pipeline;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

//use function Symfony\Component\String\b;

class MonthlyMortgageRent
{


    public function applyFilters($lead)
    {
        $post = $lead;

        // Get the buyers mapped with VID / Vendor ID
//        $post = LmsPaydayUK::getBuyers($post);

        $buyer_list['row'] = $post->buyer_list;

        if ($post->istest == true) {
            return $post;
        }
        if ($buyer_list['row']->isEmpty()) {
            return $post;
        }


        // Get the tier id/buyer setup id of each buyer mapped with the VID.
        $buyerTierID = BuyerFilterUS::getBuyerTierIds($buyer_list['row']);

        // Get the filter of each buyer using the tier id.
        $filters['row'] = BuyerFilterUS::getBuyerFilters($buyerTierID);

        /* Loop through the filters and grab conditions & values.  */
        foreach ($filters['row'] as $key_filter) {
            if ($key_filter['filter_type'] === 'MonthlyMortgageRent') {
                $filter_type = 'MonthlyMortgageRent';
                $key_filter['conditions'] = json_decode($key_filter['conditions']);

                if (isset($key_filter['conditions']->shouldBeGreaterThan)) {
                    if ($key_filter['conditions']->shouldBeGreaterThan !== null) {
                        $value = $key_filter['conditions']->shouldBeGreaterThan;
                        $post = (new ShouldBeGreaterThan)->applyFilters($post, $value, $key_filter['buyer_setup_id'], $filter_type);
                    }
                }
                if (isset($key_filter['conditions']->shouldBeLessThan)) {
                    if ($key_filter['conditions']->shouldBeLessThan !== null) {
                        $value = $key_filter['conditions']->shouldBeLessThan;
                        $post = (new ShouldBeLessThan)->applyFilters($post, $value, $key_filter['buyer_setup_id'], $filter_type);
                    }
                }
                if (isset($key_filter['conditions']->shouldBeBetween1) && isset($key_filter['conditions']->shouldBeBetween2)) {
                    if ($key_filter['conditions']->shouldBeBetween1 !== null && $key_filter['conditions']->shouldBeBetween2 !== null) {
                        $values[] = $key_filter['conditions']->shouldBeBetween1;
                        $values[] = $key_filter['conditions']->shouldBeBetween2;
                        $post = (new ShouldBeBetween)->applyFilters($post, $values, $key_filter['buyer_setup_id'], $filter_type);
                    }
                }
                if (isset($key_filter['conditions']->shouldBe)) {
                    if ($key_filter['conditions']->shouldBe !== null) {
                        $values = $key_filter['conditions']->shouldBe;
                        $post = (new ShouldBe)->applyFilters($post, $values, $key_filter['buyer_setup_id'], $filter_type);
                    }
                }
            }
        }


        return $post;
    }

}
