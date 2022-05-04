<?php


namespace App\QueryFilters\paydayus;

use App\Models\Lead\UKLead;
use App\Models\Buyer\BuyerFilterUS;
use App\QueryFilters\MultipleChoiceFilter\ShouldBe;
use App\QueryFilters\MultipleChoiceFilter\ShouldContain;
use App\QueryFilters\MultipleChoiceFilter\ShouldEndWith;
use App\QueryFilters\MultipleChoiceFilter\ShouldNotContain;
use App\QueryFilters\MultipleChoiceFilter\ShouldNotEndWith;


class MaritalStatus
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

        // Get the tier id/buyer setup id of each buyer mapped with the VID.
        $buyerTierID = BuyerFilterUS::getBuyerTierIds($buyer_list['row']);

        // Get the filter of each buyer using the tier id.
        $filters['row'] = BuyerFilterUS::getBuyerFilters($buyerTierID);


        /* Loop through the filters and grab conditions & values.  */
        foreach ($filters['row'] as $key_filter) {
            if ($key_filter['filter_type'] === 'MaritalStatus') {
                $filter_type = 'MaritalStatus';
                $key_filter['conditions'] = json_decode($key_filter['conditions']);

                if (isset($key_filter['conditions']->shouldContain)) {
                    if (!empty($key_filter['conditions']->shouldContain)) {
                        $value = $key_filter['conditions']->shouldContain;
                        $post = (new ShouldContain)->applyFilters($post, $value, $key_filter['id'], $filter_type);
                    }
                }

                if (isset($key_filter['conditions']->shouldEndWith)) {
                    if (!empty($key_filter['conditions']->shouldEndWith)) {
                        $value = $key_filter['conditions']->shouldEndWith;
                        $post = (new shouldEndWith)->applyFilters($post, $value, $key_filter['id'], $filter_type);
                    }
                }

                if (isset($key_filter['conditions']->shouldBe)) {
                    if (!empty($key_filter['conditions']->shouldBe)) {
                        $value = $key_filter['conditions']->shouldBe;
                        $post = (new shouldBe)->applyFilters($post, $value, $key_filter['id'], $filter_type);
                    }
                }

//                if ($key_filter['conditions']->shouldMatchRegEx !== null) {
//                     $value = $key_filter['conditions']->shouldMatchRegEx;
//                    $post = (new shouldMatchRegEx)->applyFilters($post, $value, $key_filter['id'], $filter_type);
//                }

                if (isset($key_filter['conditions']->shouldNotContain)) {
                    if (!empty($key_filter['conditions']->shouldNotContain)) {
                        $value = $key_filter['conditions']->shouldNotContain;
                        $post = (new shouldNotContain)->applyFilters($post, $value, $key_filter['id'], $filter_type);
                    }
                }

                if (isset($key_filter['conditions']->shouldNotEndWith)) {
                    if ($key_filter['conditions']->shouldNotEndWith !== null) {
                        $value = $key_filter['conditions']->shouldNotEndWith;
                        $post = (new ShouldNotEndWith)->applyFilters($post, $value, $key_filter['id'], $filter_type);
                    }
                }
            }
        }

        return $post;
    }

}
