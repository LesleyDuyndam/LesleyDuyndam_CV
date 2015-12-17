<?php
session_start();
include_once "../../../cms/settings.php";
include_once "../../classes/database.class.php";
include_once "../../classes/http.class.php";


$database = new Database('lesleyDuyndam');
$http = new Http();


/**
 * GET SINGLE USER ITEM, OR FILTER BY PARAMETERS IF SET
 */
if ($_GET['request_type'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'POST') {

    $_GET['hash'] = md5($_GET['password']);
    $_GET['role'] = 'admin';

    $database_response = $database->post('users', $_GET);

    if ($database_response){
        echo 'http://lesleyduyndam.nl/backend';
    } else {
        return false;
    }
    exit;
}
