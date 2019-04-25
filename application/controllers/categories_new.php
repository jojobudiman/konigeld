<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class categories_new extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud', 'm_subs', 'm_merchant'));
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
        
        $where = array(
            'transaksi.status_transaksi' => 2,
            'transaksi.id_merchant' => $this->session->userdata("id")
        );
        
        $check = $this->m_subs->check($where)->result();
        foreach($check as $cek) {
            $kategori = $cek->batas_kategori;
        }
        
        $where2 = array(
            'id_merchant' => $this->session->userdata("id");
        );
        $check2 = $this->m_crud->selectWhere($where2, 'jenis_produk')->result();
        $count = 0;
        foreach($check2 as $cek2) {
            $count++;
        }
        if($count <= $kategori) {
            $this->m_crud->insertData($data, 'jenis_produk');
            redirect('categories');
        }
        else {
            echo "<script type='text/javascript'>alert('Sorry you have reach your maximum amount of categories. Please upgrade your pricing plan to add more');</script>";
        }
    }

}
