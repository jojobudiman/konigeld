<?php
class M_ajax extends CI_Model {
    
    function getAjax($table, $where) {
        $query = $this->db->get_where($table, $where);
        return $query;
    }
}
