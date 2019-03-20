<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class admin_table_merchant extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud', 'm_admin'));
    }

    function index() {
        $data['admin'] = $this->m_admin->select('merchant.status_merchant')->result();
        $this->load->view('admin-css');
        $this->load->view('admin-header');
        $this->load->view('eng_admin_merchant', $data);
        $this->load->view('admin-js');
	}

}
