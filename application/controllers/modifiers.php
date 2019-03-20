<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class modifiers extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud', 'm_modifier'));
    }

    function index() {
        $data['mod'] = $this->m_modifier->select2()->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_modifiers', $data);
        $this->load->view('merchant-js');
	}

}
