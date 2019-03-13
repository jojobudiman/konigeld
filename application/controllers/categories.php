<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class categories extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model('m_crud');
    }

    function index() {
        $data['cat'] = $this->m_crud->select2Condition('status_jenis', 'id_merchant', 'jenis_produk')->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_categories', $data);
        $this->load->view('merchant-js');
	}

}
