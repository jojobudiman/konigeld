<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class admin_table_admin extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud'));
    }

    function index() {
        $data['admin'] = $this->m_crud->selectCondition('status_admin', 'admin')->result();
        $this->load->view('admin-css');
        $this->load->view('admin-header');
        $this->load->view('eng_admin_administrators', $data);
        $this->load->view('admin-js');
	}

}
