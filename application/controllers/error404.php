<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class error404 extends CI_Controller {

	public function index() {
    $this->output->set_status_header('404');
    $this->load->view('koniofficecss');
    $this->load->view('error404');
    $this->load->view('konijs');
 }

}
