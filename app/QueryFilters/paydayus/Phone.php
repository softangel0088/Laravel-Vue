<?php


namespace App\QueryFilters\paydayus;

use App\Models\Lead\USLead;
use App\Models\Buyer\BuyerFilterUS;
use App\QueryFilters\MultipleChoiceFilter\ShouldBe;
use App\QueryFilters\MultipleChoiceFilter\ShouldContain;
use App\QueryFilters\MultipleChoiceFilter\ShouldEndWith;
use App\QueryFilters\MultipleChoiceFilter\ShouldNotContain;
use App\QueryFilters\MultipleChoiceFilter\ShouldNotEndWith;
use App\QueryFilters\MultipleChoiceFilter\ShouldNotMatch;
use App\QueryFilters\NumericFilter\ShouldBeBetween;
use App\QueryFilters\NumericFilter\ShouldBeGreaterThan;
use App\QueryFilters\NumericFilter\ShouldBeLessThan;

class Phone
{

    public function applyFilters($lead)
    {
        $post = $lead;

        $buyer_list['row'] = $post->buyer_list;

        if ($post->istest == true) {
            return $post;
        }
        if ($buyer_list['row']->isEmpty()) {
            return $post;
        }

//        dd($buyer_list);

        // Get the tier id/buyer setup id of each buyer mapped with the VID.
        $buyerTierID = BuyerFilterUS::getBuyerTierIds($buyer_list['row']);

        // Get the filter of each buyer using the tier id.
        $filters = BuyerFilterUS::getBuyerFilters($buyerTierID);

        /* Loop through the filters and grab conditions & values */
        foreach ($filters as $key_filter) {
            if ($key_filter['filter_type'] === 'Phone') {
                $filter_type = 'Phone';
                $key_filter['conditions'] = json_decode($key_filter['conditions']);



                if (isset($key_filter['conditions']->shouldNotMatch)) {
                    if ($key_filter['conditions']->shouldNotMatch !== null) {
                    $value = $key_filter['conditions']->shouldNotMatch;
                    $post = (new ShouldNotMatch)->applyFilters($post, $value, $key_filter['buyer_setup_id'], $filter_type);
                }
                }
            }
        }

        return $post;
    }
}
