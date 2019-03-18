<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class employees_edit extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud', 'm_employee'));
    }

    function index($id) {
        $data['out'] = $this->m_crud->select2Condition('status_outlet', 'id_merchant', 'outlet_merchant')->result();
        $data['user'] = $this->m_crud->select('user', 'id_user', $id)->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_employees_edit', $data);
        $this->load->view('merchant-js');
	}
    
    function update($id) {
        $getFName = $this->input->post("fname");
        $getLName = $this->input->post("lname");
        $getPhone = $this->input->post("phone");
        $getEmail = $this->input->post("email");
        $getRole = $this->input->post("role");
        $getLoc = $this->input->post("loc");
        
        $data = array(
            "fname_user" => $getFName,
            "lname_user" => $getLName,
            "email_user" => $getEmail,
            "jabatan" => $getRole,
            "hp_user" => $getPhone,
            "id_outlet" => $getLoc
        );
        
        $where = array(
            "id_user" => $id
        );
        
        $this->m_crud->update_data($where, $data, 'user');
        redirect('employees');
    }
     
    function delete($id) {
        $data = array(
            'status_user' => 0
        );
        
        $where = array(
            'id_user' => $id
        );
        
        $this->m_crud->update_data($where, $data, 'user');
        redirect('employees');
    }

}
