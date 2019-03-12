<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class login extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model('m_crud');
    }

    function index() {
        $this->load->view('koniofficecss');
        $this->load->view('eng_login');
        $this->load->view('konijs');
	}
    
    function login() {
        $getEmail = $this->input->post("email");
        $getPass = $this->input->post("password");
        
        $log = $this->m_crud->select('merchant', 'email_merchant', $getEmail)->result();
        
        foreach($log as $login) {
            $pw = $login->pass_merchant;
            $fname = $login->fname_merchant;
            $lname = $login->lname_merchant;
            $id = $login->id_merchant;
        }
        
        if(md5($getPass) == $pw) {
            $this->session->set_userdata("name", $fname);
            $this->session->set_userdata("lname", $lname);
            $this->session->set_userdata("id", $id);
            redirect("dashboard");
        }
    }

}
