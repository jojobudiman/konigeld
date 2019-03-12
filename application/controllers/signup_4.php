<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class signup_4 extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model('m_crud');
    }

    function index() {
        $this->load->view('koniofficecss');
        $this->load->view('eng_signup_4');
        $this->load->view('konijs');
	}
    
    function cont() {
        //getData
        $productname = $this->input->post("productname");
        $productcategory = $this->input->post("productcategory");
        $productprice = $this->input->post("productprice");
        
        $data_merchant = array(
            "id_merchant" => 0,
            "fname_merchant" => $this->session->userdata('fname'),
            "lname_merchant" => $this->session->userdata('lname'),
            "tahun_mulai_bisnis" => $this->session->userdata('year'),
            "tipe_bisnis" => $this->session->userdata('btype'),
            "monthly_revenue" => $this->session->userdata('revenue'),
            "lokasi_bisnis" => $this->session->userdata('blocation'),
            "email_merchant" => $this->session->userdata('email'),
            "pass_merchant" => md5($this->session->userdata('pw')),
            "status_merchant" => 1
        );
        
        $data_jenis = array(
            "id_jenis_p" => 0,
            "id_merchant" => 0;
            "nama_jenis" => $product_category,
            "status_jenis" => 1
        );
        
        $
    }
}
