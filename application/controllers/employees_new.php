<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class employees_new extends CI_Controller {

	function __construct()
    {
        parent::__construct();
        $this->load->model(array('m_crud'));
    }

    function index() {
        $data['out'] = $this->m_crud->select2Condition('status_outlet', 'id_merchant', 'outlet_merchant')->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_employees_add', $data);
        $this->load->view('merchant-js');
	}

    function add() {
        $getFName = $this->input->post("fname");
        $getLName = $this->input->post("lname");
        $getPhone = $this->input->post("phone");
        $getEmail = $this->input->post("email");
        $getPass = $this->input->post("pass");
        $getRole = $this->input->post("role");
        $getLoc = $this->input->post("loc");

        $data = array(
            "id_user" => 0,
            "fname_user" => $getFName,
            "lname_user" => $getLName,
            "email_user" => $getEmail,
            "pass_user" => md5(utf8_encode($getPass)),
            "jabatan" => $getRole,
            "hp_user" => $getPhone,
            "id_outlet" => $getLoc,
            "id_merchant" => $this->session->userdata("id"),
            "status_user" => 1
        );

        $this->m_crud->insertData($data, 'user');
        redirect('employees');
    }

}
