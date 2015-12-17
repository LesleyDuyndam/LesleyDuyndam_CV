<?php
// ================================== //
// ========= BUILD TEMPLATE ========= //
// ================================== //

/**
 * Start a session
 */
error_reporting(E_ALL & ~E_NOTICE);



/**
 * Start a session
 */
session_start();



/**
 * Load classes
 */
include_once "api/classes/database.class.php";
include_once "cms/user/user.class.php";
include_once "cms/template/template.class.php";
include_once "cms/route/route.class.php";
include_once "cms/settings.php";



/**
 * Instantiate classes
 */
$database   = new Database('lesleyDuyndam');
$template   = new Template();
$route      = new Route($_SERVER['REQUEST_URI']);
$user       = new User($_SESSION['user_id'],$_SESSION['user_name'],$_SESSION['user_email'], $_SESSION['user_role']);

$template->setVar('user', $user);



/**
 * Add styles
 */
$template->set('style', 'styles/style.css', false);



/**
 * Add scripts
 */
$template->set('script', 'scripts/bower/modernizr/modernizr.js', 'header');
$template->set('script', 'scripts/bower/devicejs/lib/device.js', 'header');
$template->set('script', 'scripts/bower/jQuery/dist/jquery.js', 'header');
$template->set('script', 'scripts/bower/raphael/raphael.js', 'footer');
$template->set('script', 'scripts/scrontroll.min.js', 'footer');
$template->set('script', 'scripts/classes.js', 'footer');
$template->set('script', 'scripts/modules.js', 'footer');
$template->set('script', 'scripts/main.js', 'footer');


if ($user->role === 'admin' || $route->path === '/login') {
    $template->set('style', 'cms/styles/main.css', false);
    $template->set('style', 'cms/styles/templates/list.css', false);
    $template->set('style', 'cms/styles/templates/form.css', false);
    $template->set('style', 'cms/styles/modules/buttons.css', false);

    $template->set('script', 'cms/scripts/user.class.js', 'footer');
    $template->set('script', 'cms/scripts/snippets.js', 'footer');
    $template->set('script', 'cms/scripts/classes/api.class.js', 'footer');
    $template->set('script', 'cms/scripts/classes/menu.class.js', 'footer');
    $template->set('script', 'cms/scripts/classes/view.class.js', 'footer');
    $template->set('script', 'cms/scripts/classes/form.class.js', 'footer');
    $template->set('script', 'cms/scripts/classes/user.class.js', 'footer');
    $template->set('script', 'cms/scripts/classes/scroll.class.js', 'footer');
    $template->set('script', 'cms/scripts/cms.js', 'footer');
}


if ($user->role === 'admin') {
    $template->setAdmin(true);
}


/**
 * Lab page
 */
if ($route->path === '/lab'){
    $template->setVar('page', 'lab');
    $template->setVar('lab_items', $database->get('labs', false));
}


/**
 * Login page
 */
if ($route->path === '/login'){
    if ($user->authenticate('admin')){
        header("Location: " . '/backend');
    } else {
        $template->setVar('page', 'login');
    }
}


/**
 * Login page
 */
if ($route->path === '/logout'){
    require_once "api/user/logout/index.php";
    header("Location: http://lesleyduyndam.nl");
    die();
}


/**
 * Backend page
 */
if ($route->path === '/backend'){
    if( $user->authenticate('admin')){
        $template->setVar('page', 'backend');
    } else {
        header("Location: " . '/login');
    }
}


/**
 * Home page
 */
if ($route->path === '/'){
    $template->setVar('page', 'home');
    $template->setVar('lab', $database->get('labs', false));
    $template->setVar('skills', $database->get('skills', false));
}


/**
 * Home page
 */
if (!$template->getVar('page')){
    header("Location: http://lesleyduyndam.nl");
    die();
}


/**
 * Load the page
 */
include "cms/template/master_page.php";?>

