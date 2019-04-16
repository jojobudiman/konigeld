<?php
class M_ajax extends CI_Model {
    
    function getAjax($where) {
        $this->db->select("*")
            ->from("history")
            ->join('order', 'order.id_order = history.id_order', 'inner')
            ->join('order_details', 'order.id_order = order_details.id_order', 'inner')
            ->where('history.tanggal', $where);
        $query = $this->db->get();
        return $query;
    }
}
