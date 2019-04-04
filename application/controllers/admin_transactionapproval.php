<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class admin_transactionapproval extends CI_Controller {

	function __construct()
    {
        parent::__construct();
        $this->load->model(array('m_crud'));
    }

    function index() {
        $this->load->view('admin-css');
        $this->load->view('admin-header');
        $this->load->view('eng_admin_transactionapprovals');
        $this->load->view('admin-js');
	}

}
