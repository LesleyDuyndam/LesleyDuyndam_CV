<?php

class Http
{
    private $parameters;
    private $type;

    public function __construct ()
    {
        $this->parameters = [];
        $this->type = $_SERVER['REQUEST_METHOD'];
        if(isset($_SERVER["CONTENT_TYPE"]) && strpos($_SERVER["CONTENT_TYPE"], "application/json") !== false) {
            $_POST = array_merge($_POST, (array) json_decode(trim(file_get_contents('php://input')), true));
            $this->type = 'POST';
        }
    }

    public function typeOf ($request_type){
        return $request_type === $_SERVER['REQUEST_METHOD'];
    }


    public function isJson($string) {
    json_decode($string);
    return (json_last_error() == JSON_ERROR_NONE);
}


    public function send( $object ) {
        http_response_code(200);
        echo json_encode( $object );
    }

    public function sendJSON( $object ) {

        foreach($object as $key => &$value)
        {
            if ( $this->isJson($value)){
                $value = json_decode( $value );
            }
        }

        http_response_code(200);
        header('Content-Type: application/json');
        echo json_encode( $object );
    }


    /**
     * Turn the params into a object
     * @return array
     */
    public function get_parameters () {

        if ($this->typeOf("GET")) {

            if ( count(  $this -> parameters ) <= 0 ) {
                $data = explode("&", $_SERVER['QUERY_STRING']);
                foreach ($data as $chunk) {
                    $param = explode("=", $chunk);
                    if ($param) $this->parameters[urldecode($param[0])] = urldecode($param[1]);
                }
            }
        }

        if ($this->typeOf("POST")) {
            $this -> parameters = $_POST;
        }

        return $this -> $_POST;
    }


    public function get() {
        return $this->typeOf('GET');
    }

    public function post() {
        return $this->typeOf('POST');
    }

    public function put() {
        return $this->typeOf('PUT');
    }

    public function delete() {
        return $this->typeOf('DELETE');
    }
}