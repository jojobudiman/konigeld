<?php
class M_subs extends CI_Model {
    
    function select($con) {
        $this->db->select('transaksi.id_transaksi, transaksi.id_merchant, transaksi.tgl_transaksi, transaksi.total_transaksi, transaksi.tipe_transaksi, merchant.fname_merchant, merchant.lname_merchant, merchant.nama_bisnis, detail_transaksi.id_kategori, detail_transaksi.jangka_periode, kategori.nama_kategori')
            ->from('transaksi')
            ->join('merchant', 'merchant.id_merchant = transaksi.id_merchant', 'inner')
            ->join('detail_transaksi', 'transaksi.id_transaksi = detail_transaksi.id_transaksi', 'inner')
            ->join('kategori', 'kategori.id_kategori = detail_transaksi.id_kategori', 'inner')
            ->where($con, 1);
        $query = $this->db->get();
        return $query;
    }
}
