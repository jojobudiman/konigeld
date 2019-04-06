<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class locations_new extends CI_Controller {

    function index() {
        $this->load->view('merchant-css');
        $this->load->view('eng_main_locations_add');
        $this->load->view('merchant-js');
	}

}
