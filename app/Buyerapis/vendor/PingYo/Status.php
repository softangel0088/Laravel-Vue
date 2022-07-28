<?php
namespace App\Buyerapis\vendor\PingYo;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class Status
{

    public $httpcode = "";
    public $errors = "";
    public $correlationid = "";
    public $message = "";
    public $statuscheckurl = "";

    public $percentagecomplete = 0;
    public $redirecturl = "";
    public $status = "";
    public $estimatedcommission = "";

    private $logger = null;

    function __construct(
        $http_code,
        $json_response,
        $correlationid,
        \Psr\Log\LoggerInterface $logger = null
    )
    {
        if (!is_null($correlationid)) {
            $this->correlationid = $correlationid;
            $this->statuscheckurl = '/application/status/' . $correlationid;
        } else {
//            $r = json_decode($json_response);

            $this->httpcode = $http_code;
            if (isset($r->errors)) {
                $this->errors = $r->Errors;
            }
            if (isset($r->correlationid)) {
                $this->correlationid = $r->correlationid;
            }
            if (isset($r->message)) {
                $this->message = $r->message;
            }
            if (isset($r->statuscheckurl)) {
                $this->statuscheckurl = $r->statuscheckurl;
            }
        }
    }

    public static function CreateFromCorrelationId($correlationid, \Psr\Log\LoggerInterface $logger = null)
    {
        return new Status(null, null, $correlationid, $logger);
    }

    public function refresh()
    {
        Log::debug("PingYo Status::refresh()");
        Log::debug('Status URL::', (array) $this->statuscheckurl);

        $server_output = Http::get("http://leads.pingyo.co.uk" . $this->statuscheckurl);
        Log::debug('Status Output1::', (array) $server_output->object());
        Log::debug('Status Output1::', (array) $server_output->json());
        Log::debug('Status Output2::', (array) $server_output->body());
        Log::debug('Status Output4::', (array) $server_output);
        $r = $server_output->object();
        Log::debug('Status Output2::', (array) $r);


//        $r = json_decode($res);
//        Log::debug('Status RESP::', (array) $r);

        if (isset($r->percentagecomplete)) {
            $this->percentagecomplete = $r->percentagecomplete;
        }
        if (isset($r->redirecturl)) {
            $this->redirecturl = $r->redirecturl;
        }
        if (isset($r->message)) {
            $this->message = $r->message;
        }
        if (isset($r->status)) {
            $this->status = $r->status;
        }
        if (isset($r->estimatedcommission)) {
            $this->estimatedcommission = $r->estimatedcommission;
        }

        return $r;
    }

}
