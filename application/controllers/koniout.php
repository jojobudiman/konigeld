<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class koniout extends CI_Controller {

	/*function __construct()
    {
    }*/

    function index() {
	}

    function logout() {
        $this->session->sess_destroy();
        redirect('english_home');
    }

}
