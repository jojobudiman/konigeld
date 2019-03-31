<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class forgotpass extends CI_Controller {

	function __construct()
    {
        parent::__construct();
        $this->load->model(array('m_crud'));
    }

    function index() {
        $this->load->view('koniofficecss');
        $this->load->view('eng_forgotpass');
        $this->load->view('konijs');
	}

    function forgot() {
        $getEmail = $this->input->post("email");
        $getPass = $this->input->post("password");

        $log = $this->m_crud->select('merchant', 'email_merchant', $getEmail)->result();

    }

}
