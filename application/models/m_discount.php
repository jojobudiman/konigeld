<?php
class M_discount extends CI_Model {
    
    function select($con1, $con2) {
        $this->db->select('diskon.id_diskon, diskon.id_merchant, diskon.nama_diskon, diskon.jumlah, outlet_merchant.id_outlet, outlet_merchant.id_merchant, outlet_merchant.alamat_outlet')
            ->from('diskon')
            ->join('outlet_merchant', 'diskon.id_outlet = outlet_merchant.id_outlet', 'inner')
            ->where($con1, 1)
            ->where($con2, $this->session->userdata("id"));
        $query = $this->db->get();
        return $query;
    }
}
