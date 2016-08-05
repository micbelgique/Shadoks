<?php
/**
 * Created by PhpStorm.
 * User: mathisandre
 * Date: 5/08/16
 * Time: 14:53
 */

defined('BASEPATH') OR exit('No direct script access allowed');

class UserModel extends CI_Model
{
    public function check($login, $password)
    {
        $response = $this->db->select('id AS token')
                             ->where('Login', $login)
                             ->where('Password', $password)
                             ->get('Users');
        $ret = $response->row();

        if($ret==true) {
            return $ret->token;
        }
        return false;
    }
}