<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class products_library_edit extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model('m_crud');
    }

    function index($id) {
        $data['out'] = $this->m_crud->select2Condition('status_outlet', 'id_merchant', 'outlet_merchant')->result();
        $data['cat'] = $this->m_crud->select2Condition('status_jenis', 'id_merchant', 'jenis_produk')->result();
        $data['produk'] = $this->m_crud->select('produk', 'id_produk', $id)->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_products_edit', $data);
        $this->load->view('merchant-js');
	}
    
    function update() {
        $getName = $this->input->post("name");
        $getCate = $this->input->post("cate");
        $getOut = $this->input->post("outlet");
        $getPrice = $this->input->post("price");
        $getStock = $this->input->post("stock");
        $getID = $this->input->post("sku");
        
        $data = array(
            "id_outlet" => $getOut,
            "id_jenis_p" => $getCate,
            "nama_produk" => $getName,
            "harga" => $getPrice,
            "stok" => $getStock
        );
        $where = array(
            "id_produk" => $getID
        );
        
        $this->m_crud->update_data($where, $data, 'produk');
        redirect("products_library");
    }

}
