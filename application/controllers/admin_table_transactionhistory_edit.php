<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class admin_table_transactionhistory_edit extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud'));
    }

    function index() {
        $this->load->view('admin-css');
        $this->load->view('admin-header');
        $this->load->view('eng_admin_transactionhistory_edit');
        $this->load->view('admin-js');
	}

}
