<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class subscriptions_change extends CI_Controller {

	

    function index() {
        $this->load->view('merchant-css');
        $this->load->view('eng_main_pricing_change');
        $this->load->view('merchant-js');
	}

}
