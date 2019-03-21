<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class signup_admin extends CI_Controller {

         function __construct()
         {
                  parent::__construct();
                  $this->load->model(array('m_crud', 'm_admin'));
         }
         
         function index() {
	          $this->load->view('admin-css');
                   $this->load->view('eng_signup_admin');
                   $this->load->view('admin-js');
         }

         function add() {
                  $getFName = $this->input->post("fname-admin");
                  $getLName = $this->input->post("lname-admin");
                  $getAdd = $this->input->post("add");
                  $getHP = $this->input->post("hp-admin");
                  $getEmail = $this->input->post("email-admin");
                  $getPass = $this->input->post("pass");

           $data = array(
              "id_admin" => 0,
              "fname_admin" => $getFName,
              "lname_admin" => $getLName,
              "email_admin" => $getEmail,
              "pass_admin" => md5($getPass),
              "status_admin" => 1,
              "hp_admin" => $getHP,
              "alamat_admin" => $getAdd
           );

           $this->m_crud->insertData($data, 'admin');
           redirect('login_admin');
         }

}
