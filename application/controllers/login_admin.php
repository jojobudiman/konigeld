<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class login_admin extends CI_Controller {

        function __construct()
         {
            parent::__construct();
            $this->load->model(array('m_crud', 'm_admin'));
         }

         function index() {
           $this->load->view('admin-css');
           $this->load->view('eng_login_admin');
           $this->load->view('admin-js');
         }

         function login() {
           $getEmail = $this->input->post('email-admin');
           $getPass = $this->input->post('password-admin');
           $getData = $this->m_crud->select('admin', 'email_admin', $getEmail)->result();
           foreach ($getData as $data) {
                   $pw = $data->pass_admin;
                   $email = $data->email_admin;
                   $id = $data->id_admin;
                   $fname = $data->fname_admin;
                   $lname = $data->lname_admin;
           }

           if ($getEmail == $email && md5($getPass) == $pw) {
                   $this->session->set_userdata("name", $fname);
                   $this->session->set_userdata("lname", $lname);
                   $this->session->set_userdata("id", $id);
                   redirect('admin');
           }
         }

}
