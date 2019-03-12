<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class signup_3 extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model('m_crud');
    }

    function index() {
        $this->load->view('koniofficecss');
        $this->load->view('eng_signup_3');
        $this->load->view('konijs');
	}
    
    function cont() {
        //getData
        $fname = $this->input->post("fname");
        $lname = $this->input->post("lname");
        $phone = $this->input->post("phonenum");
        $year = $this->input->post("startyear");
        $btype = $this->input->post("btype");
        $monthlyrevenue = $this->input->post("monthlyrevenue");
        $blocation = $this->input->post("blocation");
        
        $this->session->set_userdata("fname", $fname);
        $this->session->set_userdata("lname", $lname);
        $this->session->set_userdata("phone", $phone);
        $this->session->set_userdata("year", $year);
        $this->session->set_userdata("btype", $btype);
        $this->session->set_userdata("revenue", $monthlyrevenue);
        $this->session->set_userdata("blocation", $blocation);
        
        redirect("signup_4");
    }

}
