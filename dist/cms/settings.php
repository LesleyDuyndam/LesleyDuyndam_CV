<?php

$settings = array();

$settings['database'] = new stdClass();
$settings['database']->host         = 'localhost';
$settings['database']->name         = 'duydesign_lesley';
$settings['database']->username     = 'duydesign_lesley';
$settings['database']->password     = 'wUij93sVmo';

$settings['template'] = array();
$settings['template']['title']      = 'Lesley Duyndam';
$settings['template']['subTitle']   = 'webdeveloper';
$settings['template']['type']       = 'website';
$settings['template']['analytics']  = 'UA-61905827-1';
$settings['template']['description']= 'I’m a allround web developer. I design user interfaces, build and maintain web applications, write JavaScript code and make those websites findable in leading search engines like Google, Bing, Yahoo and DuckDuckGo.';
$settings['template']['site_url']   = 'http://lesleyduyndam.nl';
$settings['template']['image']      = 'http://lesleyduyndam.nl/images/og-image.jpg';

$GLOBALS[ 'settings' ] = $settings;
?>