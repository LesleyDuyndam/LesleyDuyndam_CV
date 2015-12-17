<?php
include "../settings.php";



/**
 * Class Template
 */
class Template
{
    private $path;
    private $vars;
    private $styles;
    private $scripts;

    public $content;
    public $admin;


    /**
     * Template constructor.
     */
    public function __construct()
    {
        $this->content = $GLOBALS['settings']['template'];
        $this->vars = array();
        $this->styles = array();
        $this->scripts = array();

        $this->scripts['header'] = array();
        $this->scripts['footer'] = array();
    }



    /**
     * @param $name
     */
    public function info ($name) {
        echo $this->content[$name];
    }



    /**
     * @param $type
     * @param $name
     */
    public function get( $type, $name)
    {

        if ($type === 'styles'){
            $styles = $this->styles;
            foreach ($styles as $style){
                echo "<link rel=\"stylesheet\" href=\"$style\"/>";
            }
        }

        if ($type === 'scripts'){
            $scripts = $this->scripts[$name];
            foreach ($scripts as $script){
                echo "<script src=\"$script\"></script>";
            }
        }

        if ($type === 'module' || $type === 'page'){
            $this->path = "./cms/template/" . $type . "/" . $name . ".php";
            require($this->path);
        }

    }



    /**
     * @param $type
     * @param $value
     * @param $location
     */
    public function set($type, $value, $location)
    {

        if ($type == 'style'){
            array_push($this->styles, $value);
        }

        if ($type == 'script'){

            if ($location === 'header') {
                array_push($this->scripts['header'], $value);
            } else {
                array_push($this->scripts['footer'], $value);
            }
        }
    }



    /**
     * @param $name
     * @param $var
     */
    public function setVar ($name, $var) {
        $this->vars[$name] = $var;
    }



    /**
     * @param $name
     * @return mixed
     */
    public function getVar ($name) {
        return $this->vars[$name];
    }

    /**
     * @param $name
     * @return mixed
     */
    public function setAdmin ($boolean) {
        $this->admin = true;;
    }
}