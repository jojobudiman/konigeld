<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class discounts_new extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model('m_crud');
    }

    function index() {
        $data['out'] = $this->m_crud->select2Condition('status_outlet', 'id_merchant', 'outlet_merchant')->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_discounts_add', $data);
        $this->load->view('merchant-js');
	}
    
    function add() {
        $getName = $this->input->post("name");
        $getAmount1 = $this->input->post("text1");
        $getAmount2 = $this->input->post("text2");
        $getAmount2 = $this->input->post("text2");
    }

}
