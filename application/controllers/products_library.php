<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class products_library extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud', 'm_product'));
    }

    function index() {
        $data['product'] = $this->m_product->select('status_produk', 'id_merchant')->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_products', $data);
        $this->load->view('merchant-js');
	}

}
