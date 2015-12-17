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
if ($_SERVER['REQUEST_METHOD'] === 'GET' || $_GET['request_type'] === 'GET') {

    $user = $_GET;
    $db_user = $database->get('users', $_GET)[0];

    if ($db_user['hash'] === md5($user['password'])){

        $_SESSION['user_id'] = $db_user['id'];
        $_SESSION['user_role'] = $db_user['role'];
        $_SESSION['user_name'] = $db_user['name'];
        $_SESSION['user_email'] = $db_user['email'];

        setcookie('user_id', $db_user['id'], time() + (86400 * 30), "/");
        setcookie('user_role', $db_user['role'], time() + (86400 * 30), "/");
        setcookie('user_name', $db_user['name'], time() + (86400 * 30), "/");
        setcookie('user_email', $db_user['email'], time() + (86400 * 30), "/");

        echo 'http://lesleyduyndam.nl';
    } else {
        return false;
    }
}