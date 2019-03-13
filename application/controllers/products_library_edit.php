<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class products_library_edit extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model('m_crud');
    }

    function index() {
        $this->load->view('merchant-css');
        $this->load->view('eng_main_products_edit');
        $this->load->view('merchant-js');
	}

}
