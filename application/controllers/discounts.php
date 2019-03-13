<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class discounts extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud', 'm_discount'));
    }

    function index() {
        $data['disc'] = $this->m_crud->select2Condition('status_diskon', 'id_merchant', 'diskon')->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_discounts', $data);
        $this->load->view('merchant-js');
	}

}
