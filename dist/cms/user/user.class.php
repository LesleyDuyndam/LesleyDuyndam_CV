<?php

class User
{
    public $id;
    public $name;
    public $email;
    public $role;
    public $database;


    public function  __construct($id, $name, $email, $role)
    {
        $this->id = $id;
        $this->token = $name;
        $this->email = $email;
        $this->role = $role;
    }

    public function authenticate ($role) {
        return $this->role == $role;
    }

    public function getRole()
    {
        return $this->role;
    }
}