<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class products_library extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud', 'm_product'));
    }

    function index() {
        $data['product'] = $this->m_product->select('status_produk', 'outlet_merchant.id_merchant')->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_products', $data);
        $this->load->view('merchant-js');
	}
    
    function delete($id) {
        $data = array(
            "status_produk" => 0
        );
        $where = array(
            "id_produk" => $id
        );
        
        $this->m_crud->update_data($where, $data, 'produk');
        redirect('products_library');
    }

}
