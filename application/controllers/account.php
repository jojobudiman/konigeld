<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class account extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud'));
    }

    function index() {
        $data['mer'] = $this->m_crud->select2Condition('status_merchant', 'id_merchant', 'merchant')->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_account', $data);
        $this->load->view('merchant-js');
	}

}
