<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class signup_2 extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model('m_crud');
    }

    function index() {
        $this->load->view('koniofficecss');
        $this->load->view('eng_signup_2');
        $this->load->view('konijs');
	}
    
    function cont() {
        //getData
        $bname = $this->input->post("bname");
        
        $this->session->set_userdata("bname", $bname);
        
        redirect("signup_3");
    }

}
