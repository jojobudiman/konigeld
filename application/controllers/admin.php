<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class admin extends CI_Controller {
    
    function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud'));
    }

    function index()
    {
        $data['trans'] = $this->m_crud->selectCondition('status_transaksi', 'transaksi')->result();
        $data['mer'] = $this->m_crud->selectCondition('status_merchant', 'merchant')->result();
        $data['product'] = $this->m_crud->selectCondition('status_produk', 'produk')->result();
        $data['contact'] = $this->m_crud->selectCondition('status_contact', 'contact')->result();
        $this->load->view('admin-css');
        $this->load->view('admin-header');
        $this->load->view('eng_admin_dashboard', $data);
        $this->load->view('admin-js');
	}

    function logout()
    {
        $this->session->sess_destroy();
        redirect('login_admin');
    }

}
