<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class employees_permissions extends CI_Controller {

	

    function index() {
        $this->load->view('merchant-css');
        $this->load->view('eng_main_employees_permissions');
        $this->load->view('merchant-js');
	}

}
