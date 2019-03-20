<?php
class M_admin extends CI_Model {
    
    function select($con) {
        $this->db->select('merchant.id_merchant, merchant.fname_merchant, merchant.lname_merchant, merchant.nama_bisnis, merchant.tahun_mulai_bisnis, merchant.tipe_bisnis, merchant.monthly_revenue, merchant.lokasi_bisnis, merchant.hp_merchant, merchant.email_merchant, merchant.status_merchant, transaksi.id_transaksi, transaksi.id_admin, transaksi.id_merchant, detail_transaksi.id_transaksi, detail_transaksi.id_kategori, kategori.id_kategori, kategori.nama_kategori')
            ->from('merchant')
            ->join('transaksi', 'merchant.id_merchant = transaksi.id_merchant', 'inner')
            ->join('detail_transaksi', 'transaksi.id_transaksi = detail_transaksi.id_transaksi', 'inner')
            ->join('kategori', 'kategori.id_kategori = detail_transaksi.id_kategori', 'inner')
            ->where($con, 1);
        $query = $this->db->get();
        return $query;
    }
}
