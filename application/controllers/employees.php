<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class employees extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud', 'm_employee'));
    }

    function index() {
        $data['user'] = $this->m_employee->select('status_user', 'user.id_merchant')->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_employees', $data);
        $this->load->view('merchant-js');
	}

}
