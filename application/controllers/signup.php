<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class signup extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

    function index() {
        $this->load->view('koniofficecss');
        $this->load->view('eng_signup');
        $this->load->view('konijs');
	}
    
    function cont() {
        //get Data
        $email = $this->input->post("email");
        $email2 = $this->input->post("email-confirmation");
        $pass = $this->input->post("password");
        $pass2 = $this->input->post("password-confirmation");
        
        $this->session->set_userdata("email", $email);
        $this->session->set_userdata("pw", $pass);
        
        if($email == $email2 && $pass == $pass2) {
            redirect("signup_2");
        }
    }

}