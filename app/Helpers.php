<?php

if(!function_exists("response_utf8")){
    function response_utf8($message, $status){
        return response()->json($message, $status, ['Content-Type' => 'application/json;charset=UTF-8', 'Charset' => 'utf-8'], JSON_UNESCAPED_UNICODE);
    }
}