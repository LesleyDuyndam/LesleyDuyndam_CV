<?php
session_start();

unset($_SESSION['user_id']);
unset($_SESSION['user_role']);
unset($_SESSION['user_name']);
unset($_SESSION['user_email']);

setcookie("user_id", "", time() - 3600, "/");
setcookie("user_role", "", time() - 3600, "/");
setcookie("user_name", "", time() - 3600, "/");
setcookie("user_email", "", time() - 3600, "/");

echo 'http://lesleyduyndam.nl/login';
