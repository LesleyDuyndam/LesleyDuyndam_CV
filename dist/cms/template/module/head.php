<head>
    <!--

    Hi there source code viewer,

    as you can see, all CSS and JavaScripts has been minified. But don't worry! You
    can find the source on Github for readable CoffeeScripts and LESS!

    View on github:     https://github.com/LesleyDuyndam/LesleyDuyndam_CV
    Pull from github:   https://github.com/LesleyDuyndam/LesleyDuyndam_CV.git

    Enjoy!

    -->

    <meta charset="utf-8">
    <meta name="viewport"           content="width=device-width, initial-scale=1">
    <meta http-equiv="content-type" content="text/html;charset=UTF-8">
    <meta name="description"        content="<?php $this->info('description'); ?>">

    <meta property="og:title"       content="<?php $this->info('title'); ?> · <?php $this->info('subTitle'); ?>" />
    <meta property="og:description" content="<?php $this->info('description'); ?>" />
    <meta property="og:type"        content="<?php $this->info('type'); ?>" />
    <meta property="og:url"         content="<?php $this->info('site_url');?><?php echo $this->getVar('url'); ?>/" />
    <meta property="og:image"       content="<?php $this->info('image'); ?>" />

    <title><?php $this->info('title'); ?> · <?php $this->info('subTitle'); ?></title>

    <?php $this->get('styles', false); ?>
    <?php $this->get('scripts', 'header'); ?>

</head>