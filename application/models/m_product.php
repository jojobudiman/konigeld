<?php
class M_product extends CI_Model {
    
    function select($con1, $con2) {
        $this->db->select('produk.id_produk, produk.id_outlet, produk.id_jenis_p, produk.nama_produk, produk.harga, produk.stok, produk.status_produk, outlet_merchant.id_outlet, outlet_merchant.id_merchant, outlet_merchant.alamat_outlet, outlet_merchant.hp_outlet, outlet_merchant.provinsi_outlet, outlet_merchant.kodepos_outlet')
            ->from('produk')
            ->join('outlet_merchant', 'produk.id_outlet = outlet_merchant.id_outlet', 'inner')
            ->where($con1, 1)
            ->where($con2, $this->session->userdata("id"));
        $query = $this->db->get();
        return $query;
    }
}
