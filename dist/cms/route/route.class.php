<?php
include "../settings.php";

class Route
{
    private $pages;
    public $path;

    public function __construct($path)
    {
        $this->pages = array();
        $this->path = $path;
    }

}