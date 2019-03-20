<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class signup_admin extends CI_Controller {


    function index() {
			$this->load->view('admin-css');
			$this->load->view('eng_signup_admin');
			$this->load->view('admin-js');
	}

}
