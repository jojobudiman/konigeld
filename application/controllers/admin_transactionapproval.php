<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class admin_transactionapproval extends CI_Controller {

	function __construct()
    {
        parent::__construct();
        $this->load->model(array('m_crud', 'm_subs'));
    }

    function index() {
        $data['trans'] = $this->m_subs->select('status_transaksi')->result();
        $this->load->view('admin-css');
        $this->load->view('admin-header');
        $this->load->view('eng_admin_transactionapprovals', $data);
        $this->load->view('admin-js');
	}
    
    function approve($id_transaksi) {
        $where = array(
            'id_transaksi' => $id_transaksi
        );
        
        $id_admin = $this->session->userdata("id");
        $date = date("Y-m-d");
        
        $data = array(
            'id_admin' => $id_admin,
            'status_transaksi' => 0
        );
        
        $this->m_crud->update_data($where, $data, 'transaksi');
        
        $data2 = array(
            'id_history_transaksi' => 0,
            'id_transaksi' => $id_transaksi,
            'tanggal' => $date,
            'status_history' => 1
        );
        
        $this->m_crud->insertData($data2, 'history_transaksi');
        redirect("admin_transactionapproval");
    }
    
    function decline($id_merchant) {
        $where = array(
            'id_transaksi' => $id_transaksi
        );
        
        $id_admin = $this->session->userdata("id");
        $date = date("Y-m-d");
        
        $data = array(
            'id_admin' => $id_admin,
            'status_transaksi' => 2
        );
        
        $this->m_crud->update_data($where, $data, 'transaksi');
        
        $data2 = array(
            'id_history_transaksi' => 0,
            'id_transaksi' => $id_transaksi,
            'tanggal' => $date,
            'status_history' => 1
        );
        
        $this->m_crud->insertData($data2, 'history_transaksi');
        redirect("admin_transactionapproval");
    }
}