<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class account extends CI_Controller {

	function __construct()
    {
    }

    function index() {
        $data['mer'] = $this->m_crud->select2Condition('status_merchant', 'id_merchant', 'merchant')->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_account', $data);
        $this->load->view('merchant-js');
	}

    function logout() {
        $this->session->sess_destroy();
        redirect('english_home');
    }

}
