<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class discounts_new extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model('m_crud');
    }

    function index() {
        $this->load->view('merchant-css');
        $this->load->view('eng_main_discounts_add');
        $this->load->view('merchant-js');
	}
    
    function add() {
        $getName = $this->input->post("name");
        $getAmount1 = $this->input->post("text1");
        $getAmount2 = $this->input->post("text2");
        
        if($getAmount1 == "") {
            $amount = $getAmount2;
        }
        else {
            $amount = number_format((float) $getAmount1, 2, '.','')/100;
        }
        
        $data = array(
            "id_diskon" => 0,
            "id_merchant" => $this->session->userdata("id"),
            "nama_diskon" => $getName,
            "jumlah" => $amount,
            "status_diskon" => 1
        );
        
        $this->m_crud->insertData($data, 'diskon');
        redirect('discounts');
    }

}
