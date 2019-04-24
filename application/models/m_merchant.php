<?php
class M_merchant extends CI_Model {
    
    function select($con) {
        $this->db->select('*')
            ->from('merchant')
            ->join('transaksi', 'merchant.id_merchant = transaksi.id_merchant', 'inner')
            ->join('detail_transaksi', 'transaksi.id_transaksi = detail_transaksi.id_transaksi', 'inner')
            ->join('kategori', 'kategori.id_kategori = detail_transaksi.id_kategori', 'inner')
            ->where($con, 1);
        $query = $this->db->get();
        return $query;
    }
}
