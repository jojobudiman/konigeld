<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class locations extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud'));
    }

    function index() {
        $data['loc'] = $this->m_crud->select2Condition('status_outlet', 'id_merchant', 'outlet_merchant')->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_locations',$data);
        $this->load->view('merchant-js');
	}

}
