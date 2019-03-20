<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class admin_table_merchant_edit extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud'));
    }

    function index() {
        $data['admin'] = $this->m_crud->selectCondition('status_merchant', 'merchant')->result();
        $this->load->view('admin-css');
        $this->load->view('admin-header');
        $this->load->view('eng_admin_merchant_edit', $data);
        $this->load->view('admin-js');
	}

}
