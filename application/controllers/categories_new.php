<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class categories_new extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model('m_crud');
    }

    function index() {
        $this->load->view('merchant-css');
        $this->load->view('eng_main_categories_add');
        $this->load->view('merchant-js');
	}
    
    function add() {
        $getName = $this->input->post("catname");
        
        $data = array(
            "id_jenis_p" => 0,
            "id_merchant" => $this->session->userdata("id"),
            "nama_jenis" => $getName,
            "status_jenis" => 1
        );
        
        $this->m_crud->insertData($data, 'jenis_produk');
        redirect('categories');
    }

}
