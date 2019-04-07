<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class dashboard extends CI_Controller {

    function index() {
        $this->load->view('merchant-css');
        $this->load->view('eng_main_dashboard');
        $this->load->view('merchant-js');
	}

    /*function sales() {
        $this->load->view('merchant-css');
        $this->load->view('dashboard/sales/reports');
        $this->load->view('merchant-js');
    }*/

}
