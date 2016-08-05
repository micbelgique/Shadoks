<?php

defined('BASEPATH') OR exit('No direct script access allowed');
header('Access-Control-Allow-Origin: *');

class Rooms extends CI_Controller {
    private $result = array();

    public function __construct(){
        parent::__construct();
        $this->load->library('session');
        $this->load->database();
    }

    public function getAll() {
        $this->load->model('RoomsModel');

        $rooms = $this->RoomsModel->get();

        echo json_encode($rooms);
    }
}

?>