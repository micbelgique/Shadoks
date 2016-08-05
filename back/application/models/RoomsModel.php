<?php
/**
 * Created by PhpStorm.
 * User: mathisandre
 * Date: 5/08/16
 * Time: 17:20
 */

defined('BASEPATH') OR exit('No direct script access allowed');

class RoomsModel extends CI_Model
{
    public function get()
    {
        /* Array */
        $array = array();

        /* Make request: GET Rooms */

        $rooms_req = $this->db->select('Id, Nom')
                              ->get('Rooms');

        $rooms = $rooms_req->result();

        /* Make a loop */

        foreach($rooms as $room) {
            $room_sql = "SELECT Id, Login, Nom, Prenom, Description FROM Users WHERE Users.SalleId = ?";
            $room_req = $this->db->query($room_sql, array($room->Id));

            $array[$room->Nom] = $room_req->result();
        }
        return $array;
    }
}

?>