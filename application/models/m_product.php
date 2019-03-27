<?php
class M_product extends CI_Model {
    
    function select($con1, $con2) {
        $this->db->select('produk.id_produk, produk.id_outlet, produk.id_jenis_p, produk.nama_produk, produk.harga, produk.stok, produk.status_produk, outlet_merchant.id_outlet, outlet_merchant.id_merchant, outlet_merchant.alamat_outlet, outlet_merchant.hp_outlet, outlet_merchant.provinsi_outlet, outlet_merchant.kodepos_outlet, jenis_produk.id_jenis_p, jenis_produk.nama_jenis')
            ->from('produk')
            ->join('outlet_merchant', 'produk.id_outlet = outlet_merchant.id_outlet', 'inner')
            ->join('jenis_produk', 'produk.id_jenis_p = jenis_produk.id_jenis_p')
            ->where($con2, $this->session->userdata("id"))
            ->where($con1, 1);
            
        $query = $this->db->get();
        return $query;
    }
}
