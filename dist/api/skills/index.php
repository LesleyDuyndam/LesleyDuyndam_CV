<?php

include_once "../classes/database.class.php";
include_once "../classes/http.class.php";

$database = new Database('lesleyDuyndam');
$http = new Http();

/**
 * POST NEW LAB ITEM
 */
if ($_GET['request_type'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'POST') {
    echo $database->post('skills', $_GET);
    exit;
}



///**
// * UPDATE LAB ITEM
// */
//if ($_SERVER['REQUEST_METHOD'] === 'UPDATE' || $_GET['request_type'] === 'UPDATE') {
//    $database_response = $database->UPDATE('labs', $_GET);
//    echo $database_response;
//    exit;
//}



/**
 * DELETE SINGLE LAB ITEM, OR FILTER BY PARAMETERS IF SET
 */
if ($_SERVER['REQUEST_METHOD'] === 'DELETE' || $_GET['request_type'] === 'DELETE') {
    echo $database->delete('skills', $_GET);
}



/**
 * GET SINGLE LAB ITEM, OR FILTER BY PARAMETERS IF SET
 */
if ($_SERVER['REQUEST_METHOD'] === 'GET' || $_GET['request_type'] === 'GET') {
    $http->send($database->get('skills', false));
}