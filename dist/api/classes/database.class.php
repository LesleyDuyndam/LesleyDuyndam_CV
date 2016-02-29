<?php
include_once "../../cms/settings.php";

class Database
{
    private $database_settings;

    public function __construct( $name)
    {
        $this->database_settings = $GLOBALS['settings']['database'];
    }


    public function get( $table, $parameters)
    {
        $find_sql = "SELECT * FROM " . $table;

        if ($parameters['request_type']) unset($parameters['request_type']);

        if ($parameters) {

            if ( count( $parameters ) > 0) {

                $parameter_key = key($parameters);
                $parameter_value = $parameters[$parameter_key];

                if( isset( $parameter_key ) && isset( $parameter_value ) ) {
                    $find_sql = "SELECT * FROM " . $table . " WHERE " . $parameter_key . " = '" . $parameter_value . "'";
                }
            }

        }

        $connection = new mysqli($this->database_settings->host, $this->database_settings->username, $this->database_settings->password, $this->database_settings->name );
        if ($connection->connect_error) {
            return false;
        }

        $db_found = $connection->query($find_sql);

        $data = $db_found->fetch_all(MYSQLI_ASSOC);

        $connection->close();
        return $data;
    }




    public function post( $table,  $parameters )
    {
        if ($parameters['request_type']) unset($parameters['request_type']);

        $parameters_fields       = implode(',', array_keys( $parameters ));
        $parameters_fields_value = implode("', '", $parameters );

        $connection = new mysqli($this->database_settings->host, $this->database_settings->username, $this->database_settings->password, $this->database_settings->name );
        if ($connection->connect_error) die("Connection failed: " . $connection->connect_error);

        $post_user_sql = "INSERT INTO " . $table . " (" . $parameters_fields . ") VALUES ('" . $parameters_fields_value . "')";

        if( $connection->query($post_user_sql) === TRUE && $connection->insert_id) {
            return $connection->insert_id;
        }
        else
        {
            return $connection->error;
        };

        $connection->close();
    }



    public function update( $table,  $parameters )
    {
        if ($parameters['request_type']) unset($parameters['request_type']);
        $data = "";

        foreach ($parameters as $key => $value) {

            if (isset($value)
                && $value != ''
                && $key != 'id'
                && $key != 'timestamp')
            {

//                integers
                if ( $key == 'parent'){
                    $data .= "$key = $value, ";
                } else {
                    $data .= "$key = '$value', ";
                }
            }
        }

        $data .= "timestamp_touched = NULL ";

        //  "UPDATE MyGuests SET lastname='Doe' WHERE id=2"

        $connection = new mysqli($this->database_settings->host, $this->database_settings->username, $this->database_settings->password, $this->database_settings->name );
        if ($connection->connect_error)     die("Connection failed: " . $connection->connect_error);;

//        UPDATE items,month SET items.price=month.price
//        WHERE items.id=month.id;


        $update_user_query = "UPDATE " . $table . " SET " . $data . " WHERE id = " . $parameters['id'];
        echo $update_user_query;

        if( $connection->query($update_user_query) === TRUE || $connection->insert_id) {
            return $connection->insert_id;
        }
        else
        {
            return $connection->error;
        };

        $connection->close();
    }






    public function delete( $table, $parameters)
    {

        $find_sql = '';

        if ($parameters['request_type']) unset($parameters['request_type']);

        if ($parameters) {

            if ( count( $parameters ) > 0) {

                $parameter_key = key($parameters);
                $parameter_value = $parameters[$parameter_key];

                if( isset( $parameter_key ) && isset( $parameter_value ) ) {
                    $find_sql = "DELETE FROM " . $table . " WHERE " . $parameter_key . " = " . $parameter_value;
                    echo $find_sql;
                }
            }

        }

        $connection = new mysqli($this->database_settings->host, $this->database_settings->username, $this->database_settings->password, $this->database_settings->name );
        if ($connection->connect_error) {
            return false;
        }

        return $connection->query($find_sql);
   }

}