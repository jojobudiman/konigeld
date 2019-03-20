<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class products_library_new extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model('m_crud');
    }

    function index() {
        $data['cat'] = $this->m_crud->select2Condition('status_jenis', 'id_merchant', 'jenis_produk')->result();
        $data['out'] = $this->m_crud->select2Condition('status_outlet', 'id_merchant', 'outlet_merchant')->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_products_add', $data);
        $this->load->view('merchant-js');
	}
    
    function add() {
        $getName = $this->input->post("name");
        $getCat = $this->input->post("cate");
        $getOut = $this->input->post("out");
        $getPrice = $this->input->post("price");
        $getStock = $this->input->post("stock");
        
        $data = array(
            "id_produk" => 0,
            "id_outlet" => $getOut,
            "id_jenis_p" => $getCat,
            "nama_produk" => $getName,
            "harga" => $getPrice,
            "stok" => $getStock,
            "status_produk" => 1
        );
        
        $this->m_crud->insertData($data, 'produk');
        redirect('products_library');
    }

}