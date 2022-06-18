<?php



use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class testmodeus
{

    public array $response = array();

    function __construct($client_detail, $post)
    {
        Log::debug('TestMode:: Post', (array) $post);

        $this->response['post_url'] = ($client_detail->mode == '2') ? $client_detail->post_url_test : $client_detail->post_url_live;

        if ($post->Applicant->firstName == 'Accept') {
            $this->response['post_data'] = $this->testModeAccept();
        } else {
            $this->response['post_data'] = $this->testModeReject();
        }


//        if ($post->applicant->firstName == 'Reject') {
//            $this->response['post_data'] = $this->testModeAccept();
//        }


        if (isset($post->timeout)) {
            $this->response['timeout'] = $post->timeout;
        } else {
            $this->response['timeout'] = $client_detail->timeout;
        }


    }


    /**
     * Sleep 10, Send to SendResponse()
     *
     * @return string
     */
    public function testModeAccept()
    {
        sleep(3);

        return $this->sendAcceptResponse();
    }
    /**
     * Sleep 10, Send to SendResponse()
     *
     * @return string
     */
    public function testModeReject()
    {
        sleep(3);

        return $this->sendRejectResponse();
    }


    /**
     * Send stimulated response back to client for testing.
     *
     * @return string
     */
    public function sendAcceptResponse()
    {
        header("Content-type: text/xml; charset=utf-8");
        $response = '<?xml version="1.0" encoding="utf-8"?>';
        $response .= '<Payout>10.00</Payout><Result>1</Result><RedirectURL>https://www.google.com</RedirectURL>';

        return $response;
    }
    /**
     * Send stimulated response back to client for testing.
     *
     * @return string
     */
    public function sendRejectResponse()
    {
        header("Content-type: text/xml; charset=utf-8");
        $response = '<?xml version="1.0" encoding="utf-8"?>';
        $response .= '<Payout>0.00</Payout><Result>2</Result><RedirectURL></RedirectURL>';

        return $response;
    }


    /**
     * Return Response back to Job.
     *
     * @return array
     */
    public function returnresponse()
    {

        $result = [
            $this->response['post_url'],
            $this->response['post_data'],
//        $this->response['header'],
            $this->response['timeout'],
        ];
        $result['res'] = $result[1];
        $result['post_time'] = '10.046932935715';


        $this->response['post_res'] = $result['res'];
        $this->response['post_time'] = $result['post_time'];

        preg_match("/<RedirectURL>(.*)<\/RedirectURL>/", $result['res'], $Redirect_url);
        preg_match("/<Result>(.*)<\/Result>/", $result['res'], $Status);
        preg_match("/<Payout>(.*)<\/Payout>/", $result['res'], $Amount);

        if (count($Status) != 0 && $Status[1] == '1') {
            $this->response['accept'] = 'ACCEPTED';
            $this->response['post_price'] = $Amount[1];
            $this->response['post_status'] = '1';
            $this->response['redirect_url'] = $Redirect_url[1];
            $this->response['LenderFound'] = 'LenderFound';

            return $this->response;

        }elseif (count($Status) != 0 && $Status[1] == '3') {
            $this->response['accept'] = 'CONDITIONAL';
            $this->response['post_price'] = $Amount[1];
            $this->response['post_status'] = '1';
            $this->response['redirect_url'] = $Redirect_url[1];
            $this->response['LenderFound'] = 'ConditionalLenderFound';

            return $this->response;

        } else {
            $this->response['accept'] = 'REJECTED';
            $this->response['post_status'] = '0';
            $this->response['post_price'] = '0';
            $this->response['LenderFound'] = 'Decline';

            return $this->response;
        }
    }

    public function CheckStatus($res){

        preg_match("/<CorrelationId>(.*)<\/CorrelationId>/", $res, $CorrelationId);
        preg_match("/<StatusCheckUrl>(.*)<\/StatusCheckUrl>/", $res, $StatusCheckUrl);

        $url = "http://127.0.0.1:8000/application/usa/status/".$StatusCheckUrl[1];
        //echo $url;
        $url_response = file_get_contents($url);//die;
        //echo '13';print_r($url_response);die;

        preg_match("/<PercentageComplete>(.*)<\/PercentageComplete>/", $url_response, $PercentageComplete);
        preg_match("/<Status>(.*)<\/Status>/", $url_response, $Status);
        preg_match("/<Amount>(.*)<\/Amount>/", $url_response, $Amount);
        preg_match("/<RedirectionUrl>(.*)<\/RedirectionUrl>/", $url_response, $RedirectionUrl);




        $this->responses['post_res'] = $url_response;

        if ($Status[1] == 'LenderMatchFound') {
            $this->responses['accept'] = 'ACCEPTED';
            $this->responses['post_price'] = $Amount[1];
            $this->responses['post_status'] = '1';
            $this->responses['redirect_url'] = $RedirectionUrl[1];
            $this->responses['percentage'] = $PercentageComplete[1];
            $this->responses['status'] = $Status[1];

        } else {
            $this->responses['accept'] = 'REJECTED';
            $this->responses['post_status'] = '0';
            $this->responses['post_price'] = '0';
            $this->responses['percentage'] = $PercentageComplete[1];
            $this->responses['status'] = $Status[1];
        }
        //print_r($this->response);exit;
        return $this->responses;

    }

}
