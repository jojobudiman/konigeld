<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class signup extends CI_Controller {

    function __construct()
    {
        parent::__construct();
        $this->load->model('m_crud');
    }

    function index() {
        $this->load->view('koniofficecss');
        $this->load->view('eng_signup');
        $this->load->view('konijs');
	}

    function cont() {
        //get Data
        $email = $this->input->post("email");
        $email2 = $this->input->post("email_confirmation");
        $pass = $this->input->post("password");
        $pass2 = $this->input->post("password_confirmation");

        $this->session->set_userdata("email", $email);
        $this->session->set_userdata("pw", $pass);

        if($email == $email2 && $pass == $pass2) {
            redirect("signup_2");
        }
    }

}
