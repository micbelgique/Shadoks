<?php

defined('BASEPATH') OR exit('No direct script access allowed');
header('Access-Control-Allow-Origin: *');

class User extends CI_Controller {

	private $result = array();

	public function __construct(){
		parent::__construct();
		$this->load->library('session');
		$this->load->database();
	}

	/* Login: POST */

	public function login()
	{
		$login = $this->input->post('login');
		$password = $this->input->post('password');

		$this->load->model('UserModel');

		$result = $this->UserModel->check($login, sha1($password));

		if($result) {
			$this->result = array(
				'result' => array(
					'token' => $result,
				)
			);
			$json = json_encode($this->result);
		} else {
			$this->result = array(
				'result' => false,
			);
			$json = json_encode($this->result);
		}
		echo $json;
	}
}
