<?php

namespace App\Http\Controllers\Admin\Report;

use App\Models\Buyer\BuyerSetup;
use App\Models\Lead\UKLead;
use App\Models\Lead\USLead;
use App\Models\Offer\Offer;
use App\Models\Partner\Partner;
use App\Models\Postback\Postback;
use App\Models\ClickTracker\ClickTracker;
use App\Models\Postback\PostbackLogs;
use App\Models\PostbackTracker\PostbackTracker;
use App\Models\User;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use App\Http\Controllers\Controller;


class ReportController extends Controller
{

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function fetchFilterUKData(Request $request): JsonResponse
    {
        $filterData= [];
        $filterData['user_ids'] = User::groupBy('id')->whereNotNull('id')->get(['id', 'username']);
        $filterData['vendor_ids'] = Partner::groupBy('vendor_id')->whereNotNull('vendor_id')->get([ 'vendor_id']);
//        dd($filterData['vendor_ids']);
        $filterData['sub_ids'] = UKLead::groupBy('subid')->whereNotNull('subid')->get(['subid']);
        $filterData['tier_ids'] = UKLead::groupBy('tier')->whereNotNull('tier')->get(['tier']);
        $filterData['vidLeadPrice_ids'] = UKLead::groupBy('vidLeadPrice')->whereNotNull('vidLeadPrice')->get(['vidLeadPrice']);
        $filterData['buyerLeadPrice_ids'] = UKLead::groupBy('buyerLeadPrice')->whereNotNull('buyerLeadPrice')->get(['buyerLeadPrice']);


        return Response::json(['filterData' => $filterData], 200);

    }
    public function fetchFilterUSData(Request $request)
    {
        $filterData= [];
        $filterData['user_ids'] = User::groupBy('id')->whereNotNull('id')->get(['id', 'username']);
        $filterData['vendor_ids'] = USLead::groupBy('vid')->whereNotNull('vid')->get([ 'vid']);
        $filterData['sub_ids'] = USLead::groupBy('subid')->whereNotNull('subid')->get(['subid']);
        $filterData['tier_ids'] = USLead::groupBy('tier')->whereNotNull('tier')->get(['tier']);
        $filterData['vidLeadPrice_ids'] = USLead::groupBy('vidLeadPrice')->whereNotNull('vidLeadPrice')->get(['vidLeadPrice']);
        $filterData['buyerLeadPrice_ids'] = USLead::groupBy('buyerLeadPrice')->whereNotNull('buyerLeadPrice')->get(['buyerLeadPrice']);



        return Response::json(['filterData' => $filterData], 200);

    }
    public function fetchFilterPostbackData(Request $request)
    {
        $filterData= [];
        $filterData['vendor_ids'] = Partner::with('postbacks')->groupBy('vendor_id')->whereNotNull('vendor_id')->get(['vendor_id']);


        return Response::json(['filterData' => $filterData], 200);

    }

    public function getUKReports(Request $request)
    {
        $perPage = $request->input("perPage");
        $vendor_id = $request->input("affId");
        $sub_id = $request->input("subId");
        $tier = $request->input("tier");
        $vidLeadPrice = $request->input("vidLeadPrice");
        $buyerLeadPrice = $request->input("buyerLeadPrice");
        $redirection = $request->input("redirection");
        $status = $request->input("status");
        $query = $request->input("q");



        $wherelist = array();
        if ($vendor_id != null) {
            $wherelist[] = ['vid', '=', $vendor_id];
        }
        if ($sub_id != null) {
            $wherelist[] = ['subid', '=', $sub_id];
        }
        if ($tier != null) {
            $wherelist[] = ['tier', '=', $tier];
        }
        if ($vidLeadPrice != null) {
            $wherelist[] = ['vidLeadPrice', '=', $vidLeadPrice];
        }
        if ($buyerLeadPrice != null) {
            $wherelist[] = ['buyerLeadPrice', '=', $buyerLeadPrice];
        }
        if ($redirection != null) {
            $wherelist[] = ['isRedirected', '=', $redirection];
        }
        if ($status != null) {
            $wherelist[] = ['leadStatus', '=', $status];
        }
        if ($query != null) {
            UKLead::query()
                ->where('vid', 'LIKE', "%$query%")
                ->orWhere('subid', 'LIKE', "%$query%")
                ->orWhere('tier', 'LIKE', "%$query%")
                ->orWhere('leadStatus', 'LIKE', "%$query%")
                ->get();
        }

        $reports = UKLead::select('vid', 'subid', 'vidLeadPrice', 'buyerLeadPrice', 'isRedirected', 'tier', 'leadStatus')
          ->where($wherelist)
            ->orderBy('created_at', 'desc')
            ->paginate($perPage);


        return Response::json(['reports' => $reports], 200);

    }
    public function getUSReports(Request $request)
    {
        $perPage = $request->input("perPage");
        $vendor_id = $request->input("affId");
        $sub_id = $request->input("subId");
        $tier = $request->input("tier");
        $vidLeadPrice = $request->input("vidLeadPrice");
        $buyerLeadPrice = $request->input("buyerLeadPrice");
        $redirection = $request->input("redirection");
        $status = $request->input("status");
        $query = $request->input("q");



        $wherelist = array();
        if ($vendor_id != null) {
            $wherelist[] = ['vid', '=', $vendor_id];
        }
        if ($sub_id != null) {
            $wherelist[] = ['subid', '=', $sub_id];
        }
        if ($tier != null) {
            $wherelist[] = ['tier', '=', $tier];
        }
        if ($vidLeadPrice != null) {
            $wherelist[] = ['vidLeadPrice', '=', $vidLeadPrice];
        }
        if ($buyerLeadPrice != null) {
            $wherelist[] = ['buyerLeadPrice', '=', $buyerLeadPrice];
        }
        if ($redirection != null) {
            $wherelist[] = ['isRedirected', '=', $redirection];
        }
        if ($status != null) {
            $wherelist[] = ['leadStatus', '=', $status];
        }
        if ($query != null) {
            USLead::query()
                ->where('vid', 'LIKE', "%{$query}%")
                ->orWhere('subid', 'LIKE', "%{$query}%")
                ->orWhere('tier', 'LIKE', "%{$query}%")
                ->orWhere('leadStatus', 'LIKE', "%{$query}%")
                ->get();
        }

        $reports = USLead::select('vid', 'subid', 'vidLeadPrice', 'buyerLeadPrice', 'isRedirected', 'tier', 'leadStatus')
            ->where($wherelist)
            ->orderBy('created_at', 'desc')
            ->paginate($perPage);


        return Response::json(['reports' => $reports], 200);

    }


    public function getOfferReports(Request $request)
    {

        $aff_sub = $request->input("aff_sub");
        $aff_sub2 = $request->input("aff_sub2");
        $aff_sub3 = $request->input("aff_sub3");
        $aff_sub4 = $request->input("aff_sub4");
        $aff_sub5 = $request->input("aff_sub5");
        $status = $request->input("status");

        $query = $request->input("q");
        $perPage = $request->input("perPage");



        $wherelist = array();
        if ($aff_sub != null) {
            $wherelist[] = ['aff_sub', '=', $aff_sub];
        }
        if ($aff_sub2 != null) {
            $wherelist[] = ['aff_sub2', '=', $aff_sub2];
        }
        if ($aff_sub3 != null) {
            $wherelist[] = ['aff_sub3', '=', $aff_sub3];
        }
        if ($aff_sub4 != null) {
            $wherelist[] = ['aff_sub3', '=', $aff_sub4];
        }
        if ($aff_sub5 != null) {
            $wherelist[] = ['aff_sub4', '=', $aff_sub5];
        }
        if ($status != null) {
            $wherelist[] = ['status', '=', $status];
        }

        if ($query != null) {
            $wherelist[] = ['', '%LIKE', $query]; // TODO
        }

        $reports = ClickTracker::select(
            'aff_click_id',
            'aff_sub',
            'aff_sub2',
            'aff_sub3',
            'aff_sub4',
            'aff_sub5',
        )
            ->where($wherelist)
            ->orderBy('created_at', 'desc')
            ->paginate($perPage);

        return Response::json(['reports' => $reports], 200);


    }

    public function getReferralReports()
    {
//        Referral::where()

//        return $report;

    }
    public function getPostbackReports(Request $request)
    {
        $perPage = $request->input("perPage");
        $partner_id = $request->input("affId");
        $conversion = $request->input("conversion");
        $status = $request->input("status");

        $query = $request->input("q");


        $wherelist = array();
        if ($partner_id != null) {
            $wherelist[] = ['partner_id', '=', $partner_id];
        }
        if ($conversion != null) {
            $wherelist[] = ['conversion', '=', $conversion];
        }

        if ($status != null) {
            $wherelist[] = ['status', '=', $status];
        }
        if ($query != null) {
            $wherelist[] = ['', 'LIKE', '%',  $query, '%'];
        }

        $reports = PostbackLogs::where($wherelist)
            ->orderBy('created_at', 'desc')
            ->paginate($perPage);

        return Response::json(['reports' => $reports], 200);


    }


    /**
     * Get In Between Days
     *
     * @param $start
     * @param $end
     * @param string $format
     * @return array
     */
    function getInBetweenDays($start, $end, $format = 'd/m')
    {

        $dateArray = array();
        $start = Carbon::createFromFormat('d/m/Y', $start);
        $end = Carbon::createFromFormat('d/m/Y', $end);
        $period = CarbonPeriod::create($start, $end);
        foreach ($period as $date) {
            $dateArray[] = $date->format($format);
        }
        return $dateArray;
    }

    /**
     * Get Last N Days
     *
     * @param $days
     * @param string $format
     * @return array
     */
    function getLastNDays($days, $format = 'd/m')
    {
        $period = CarbonPeriod::create(Carbon::today()->subDays($days), Carbon::today());
        $dateArray = array();
        foreach ($period as $date) {
            $dateArray[] = $date->format($format);
        }
        return $dateArray;
    }

    /**
     * Get the chart data
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function chart_data(Request $request)
    {
        $date1 = $request->input('start_date');
        $date2 = $request->input('end_date');
        if ($date1 != null && !empty($date1)) {
            $dates = $this->getInBetweenDays($date1, $date2, 'Y-m-d');
        } else {
            $dates = $this->getLastNDays(14, 'Y-m-d');
        }
        $data = [];
        $data['dates'] = array();
        $data['accepted'] = array();
        $data['rejected'] = array();
        $data['pending'] = array();
        foreach ($dates as $date) {
            $data['dates'][] = Carbon::createFromFormat('Y-m-d', $date)->format('d M');
            $data['accepted'][] = $this->getLeadStatusForDate(1, $date);
            $data['rejected'][] = $this->getLeadStatusForDate(2, $date);
            $data['pending'][] = $this->getLeadStatusForDate(3, $date);
        }
        return response()->json($data);
    }

    /**
     * Get the Lead Status For Date's requested
     *
     * @param $leadStatus
     * @param $date
     * @return int
     */
    public function getLeadStatusForDate($leadStatus, $date)
    {
        $result = DB::select("select leadStatus,
        substring(created_at,1,10) as date, count(*) as result_count
        from lmspaydayuks
        where substring(created_at,1,10) = '$date' and leadStatus = $leadStatus
        group by leadStatus, substring(created_at,1,10)");


        if ($result == null) {
            return 0;
        } else {
            return $result[0]->result_count;
        }
    }


}
