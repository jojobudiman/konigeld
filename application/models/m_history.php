<?php
class M_history extends CI_Model {
    
    function select($con) {
        $this->db->select('*')
            ->from('history_transaksi')
            ->join('transaksi', 'history_transaksi.id_transaksi = transaksi.id_transaksi', 'inner')
            ->join('merchant', 'merchant.id_merchant = transaksi.id_merchant', 'inner')
            ->join('detail_transaksi', 'transaksi.id_transaksi = detail_transaksi.id_transaksi', 'inner')
            ->join('kategori', 'kategori.id_kategori = detail_transaksi.id_kategori', 'inner')
            ->where($con, 1);
        $query = $this->db->get();
        return $query;
    }
    
    function select2($where) {
        $this->db->select("*")
            ->from('history')
            ->join('order', 'order.id_order = history.id_order', 'inner')
            ->join('outlet_merchant', 'outlet_merchant.id_outlet = order.id_outlet', 'inner')
            ->where($where);
        $query = $this->db->get();
        return $query;
    }
    
    function select3($where) {
        $this->db->select("*")
            ->from('history')
            ->join('order', 'order.id_order = history.id_order', 'inner')
            ->join('outlet_merchant', 'outlet_merchant.id_outlet = order.id_outlet', 'inner')
            ->join('order_details', 'order_details.id_order = order.id_order', 'inner')
            ->join('produk', 'produk.id_produk = order_details.id_produk', 'innere')
            ->where($where);
        $query = $this->db->get();
        return $query;
    }
}
