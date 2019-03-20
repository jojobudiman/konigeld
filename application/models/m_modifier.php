<?php
class M_modifier extends CI_Model {
    
    function select($where, $where2, $where3) {
        $this->db->where('nama_modifier', $where);
        $this->db->where('harga_modifier', $where2);
        $this->db->where('id_outlet', $where3);
        $query = $this->db->get('modifier');
        return $query;
    }
    
    function select2() {
        $this->db->select('modifier.id_modifier, modifier.id_outlet, modifier.nama_modifier, modifier.harga_modifier, modifier.status_modifier, outlet_merchant.id_outlet, outlet_merchant.id_merchant, outlet_merchant.alamat_outlet, outlet_merchant.provinsi_outlet, outlet_merchant.kodepos_outlet')
            ->from('modifier')
            ->join('outlet_merchant', 'modifier.id_outlet = outlet_merchant.id_outlet', 'inner')
            ->where('status_modifier', 1)
            ->where('outlet_merchant.id_merchant', $this->session->userdata("id"));
        $query = $this->db->get();
        return $query;
    }
    
    function select3($where) {
        $this->db->select('*')
            ->from('detail_modifier')
            ->join('modifier', 'detail_modifier.id_modifier = modifier.id_modifier', 'inner')
            ->join('produk', 'detail_modifier.id_produk = produk.id_produk', 'inner')
            ->where('detail_modifier.id_modifier', $where)
            ->where('modifier.status_modifier', 1);
        $query = $this->db->get();
        return $query;
    }
}