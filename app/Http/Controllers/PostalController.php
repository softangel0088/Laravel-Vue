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
     * @string $postcode
     */
    public function postcodes(Request $request, $postcode)
    {
        $string = 'https://api.postcodes.io/postcodes/' .  $postcode;

        $result = Http::get('https://api.postcodes.io/postcodes/' .  $postcode)->object();

        return Response::json(['result' => $result]);

    }
}
