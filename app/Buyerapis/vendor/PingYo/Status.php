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
            if (isset($r['Errors'])) {
                $this->errors = $r['Errors'];
            }
            if (isset($r->CorrelationId)) {
                $this->correlationid = $r['CorrelationId'];
            }
            if (isset($r->Message)) {
                $this->message = $r['Message'];
            }
            if (isset($r->StatusCheckUrl)) {
                $this->statuscheckurl = $r['StatusCheckUrl'];
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

        Log::debug('Status Output2::', (array) $server_output->body());
        $xml_obj  = $server_output->body();
        Log::debug('Status Output2::', (array) $xml_obj);


        $r = simplexml_load_string($xml_obj);

        if (isset($r->PercentageComplete)) {
            $this->percentagecomplete = $r->PercentageComplete;
        }
        if (isset($r->RedirectUrl)) {
            $this->redirecturl = $r->RedirectUrl;
        }
        if (isset($r->Message)) {
            $this->message = $r->Message;
        }
        if (isset($r->Status)) {
            $this->status = $r->Status;
        }
        if (isset($r->EstimatedCommission)) {
            $this->estimatedcommission = $r->EstimatedCommission;
        }

        return $r;
    }

}
