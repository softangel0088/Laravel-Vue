<?php

namespace App\Http\Controllers\Partner;

use App\Models\Advertiser\Advertiser;
use App\Models\Offer\Creatives;
use App\Models\Offer\Landers;
use App\Models\Offer\Offer;
use App\Models\Partner\Partner;
use App\Models\PostbackTracker\PostbackTracker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class PartOfferController extends Controller
{
    public function index()
    {
        $offers = Offer::with([
            'tracking',
            'campaign',
            'advertiser',
            'target_group',
            'landers',
            'payout',
            'offer_cap',
            'target_group',
            'creatives'
        ])->get();

        return Response::json(['offers' => $offers]);
    }

    public function show($id)
    {
        $offer = Offer::where('id', $id)->with(
            [
                'tracking',
                'campaign',
                'advertiser',
                'target_group',
                'landers',
                'payout',
                'offer_cap',
                'target_group',
                'creatives'
            ])
            ->get()->first();

        $files = Storage::allFiles('logo/'.$offer->id . '/');

        $advertisers = Advertiser::all();
        $vid = Auth::user()->partner->id;
        $partners = Partner::all();

        $trafficSource = $offer->trafficSource;
        $trafficSource = implode(',', $trafficSource);
        $geos = $offer->geos;

        $postback_trackers = PostbackTracker::where('offer_id', $id)->get();
        $landers = Landers::where('offer_id', $id)->get();
        $creatives = Creatives::where('offer_id', $id)->get();

        return view('partner.offers.offers-view',
            compact('offer', 'partners', 'vid', 'advertisers', 'geos', 'trafficSource',
                'postback_trackers', 'landers', 'creatives', 'files'));
    }

    public function edit($id)
    {
        $offer = Offer::find($id);
        $partner_id = Partner::where('id', Auth::id())->get();
        $postbacks = Postback::where('partner_id', $partner_id)->get();

        return view('partner.offers.offers-edit', compact('offer', 'postbacks'));
    }

    public function get_country_flags()
    {
        // Find offer countries flags to display // TODO
    }

}
