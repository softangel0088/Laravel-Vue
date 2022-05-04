<?php


namespace App\QueryFilters\paydayus;

use App\Models\Lead\USLead;
use App\Models\Buyer\BuyerFilterUS;
use App\QueryFilters\MultipleChoiceFilter\ShouldBe;
use App\QueryFilters\MultipleChoiceFilter\ShouldBeAnyOf;
use App\QueryFilters\MultipleChoiceFilter\ShouldContain;
use App\QueryFilters\MultipleChoiceFilter\ShouldEndWith;
use App\QueryFilters\MultipleChoiceFilter\ShouldNotBeAnyOf;
use App\QueryFilters\MultipleChoiceFilter\ShouldNotContain;
use App\QueryFilters\MultipleChoiceFilter\ShouldNotEndWith;
use App\QueryFilters\NumericFilter\ShouldBeBetween;
use App\QueryFilters\NumericFilter\ShouldBeGreaterThan;
use App\QueryFilters\NumericFilter\ShouldBeLessThan;

class State
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
            if ($key_filter['filter_type'] === 'State') {
                $filter_type = 'State';
                $key_filter['conditions'] = json_decode($key_filter['conditions']);

                if (isset($key_filter['conditions']->shouldBeAnyOf)) {
                    if (!empty($key_filter['conditions']->shouldBeAnyOf)) {
                        $value = $key_filter['conditions']->shouldBeAnyOf;
                        $post = (new ShouldBeAnyOf)->applyFilters($post, $value, $key_filter['id'], $filter_type);
                    }
                }

                if (isset($key_filter['conditions']->shouldBe)) {
                    if (!empty($key_filter['conditions']->shouldBe)) {
                        $value = $key_filter['conditions']->shouldBe;
                        $post = (new shouldBe)->applyFilters($post, $value, $key_filter['id'], $filter_type);
                    }
                }

                if (isset($key_filter['conditions']->shouldNotBeAnyOf)) {
                    if (!empty($key_filter['conditions']->shouldNotBeAnyOf)) {
                        $value = $key_filter['conditions']->shouldNotBeAnyOf;
                        $post = (new ShouldNotBeAnyOf)->applyFilters($post, $value, $key_filter['id'], $filter_type);
                    }
                }
            }
        }

        return $post;
    }
}
