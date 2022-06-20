<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Response;

class PostalController extends Controller
{
    /**
     * @param Request $request
     * @param $postcode
     * @return mixed
     */
    public function postcodes(Request $request, $postcode)
    {
        $string = 'https://api.postcodes.io/postcodes/' .  $postcode;

        $result = Http::get('https://api.postcodes.io/postcodes/' .  $postcode)->object();

        return Response::json(['result' => $result]);

    }

    /**
     * @param Request $request
     * @param $zip
     * @return mixed
     */
    public function zip(Request $request, $zip)
    {
        $api_key = '3563d540-f0ac-11ec-968f-9f47caf1ac9d';

        $result = Http::withHeaders([
            'apikey' => $api_key
        ])
            ->get('https://app.zipcodebase.com/api/v1/search?codes=' .  $zip)->object();

        return Response::json(['result' => $result]);

    }

}

