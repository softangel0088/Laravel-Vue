<?php

namespace App\Http\Controllers\Admin\Lead;

use App\Http\Controllers\Controller;
use App\Http\Requests\LeadPostRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class LeadTestController extends Controller
{


    public function getTestBuyer()
    {
        $query = DB::table('buyer_setups')
            ->select(
                'buyer_setups.*',
                'buyers.*',
//                'lms_buyer_leadtype.*'
            )
            ->leftJoin(
                'buyers',
                'buyer_setups.buyer_id',
                '=',
                'buyers.id'
            )
            ->where('buyername', '=', 'testmodeuk')
            ->get()
            ->toArray();

        return $query;

    }
    public function getTestBuyerUS()
    {
        $query = DB::table('buyer_setups')
            ->select(
                'buyer_setups.*',
                'buyers.*',
//                'lms_buyer_leadtype.*'
            )
            ->leftJoin(
                'buyers',
                'buyer_setups.buyer_id',
                '=',
                'buyers.id'
            )
            ->where('buyername', '=', 'testmodeus')
            ->get()
            ->toArray();

        return $query;

    }

    /**
     * This function is the endpoint for the testing parameter defined in PaydayUK Table.
     *
     *
     * @param Request $request
     * @return string
     */
    public function testMode(Request $request)
    {
        sleep(1);

        $final_res = $this->sendResponse();

        return $final_res;
    }

    /**
     * Send stimulated response back to client for testing.
     *
     * @return string
     */
    public function sendResponse()
    {
        header("Content-type: text/xml; charset=utf-8");
        $response = '<?xml version="1.0" encoding="utf-8"?>';
        $response .= '<Payout>10.00</Payout><Result>1</Result><RedirectURL>http://www.google.com</RedirectURL>';

        echo $response;
        return $response;


    }
}
