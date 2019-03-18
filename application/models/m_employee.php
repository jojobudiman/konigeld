<?php
class M_employee extends CI_Model {
    
    function select($con1, $con2) {
        $this->db->select('user.id_user, user.fname_user, user.lname_user, user.email_user, user.jabatan, user.hp_user, user.id_outlet, user.id_merchant, user.status_user, outlet_merchant.id_outlet, outlet_merchant.id_merchant, outlet_merchant.alamat_outlet')
            ->from('user')
            ->join('outlet_merchant', 'user.id_outlet = outlet_merchant.id_outlet', 'inner')
            ->where($con1, 1)
            ->where($con2, $this->session->userdata("id"));
        $query = $this->db->get();
        return $query;
    }
}
