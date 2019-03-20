<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class login_admin extends CI_Controller {


    function index() {
			$this->load->view('admin-css');
			$this->load->view('eng_login_admin');
			$this->load->view('admin-js');
	}

}
