<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class admin_table_transactionhistory_add extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud'));
    }

    function index() {
        $data['merchant'] = $this->m_crud->selectCondition('status_merchant', 'merchant')->result();
        $this->load->view('admin-css');
        $this->load->view('admin-header');
        $this->load->view('eng_admin_transactionhistory_add', $data);
        $this->load->view('admin-js');
	}
    
    function add() {
        $getID = $this->input->post('id_merchant');
        $getPricing = $this->input->post('pricing');
        $getPay = $this->input->post('payment-period');
        $getStart = $this->input->post('start-date');
        $getEnd = $this->input->post('end-date');
        $getTotal = $this->input->post('total-price');
        
        $data = array(
            "id_transaksi" => 0,
            "id_admin" => 0,
            "id_merchant" => $this->session->userdata("id"),
            "tgl_transaksi" => date("d-m-Y"),
            //"total_transaksi" => ,
        );
    }
}