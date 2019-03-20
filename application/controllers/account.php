<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class account extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud'));
    }

    function index() {
        $data['mer'] = $this->m_crud->select2Condition('status_merchant', 'id_merchant', 'merchant')->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_account', $data);
        $this->load->view('merchant-js');
	}
    
    function update($id) {
        $getName = $this->input->post("bname");
        $getEmail = $this->input->post("email");
        $getPhone = $this->input->post("phone");
        $getPass = $this->input->post("cpass");
        $getNewPass = $this->input->post("newpass");
        $getNewPass2 = $this->input->post("cnewpass");
        
        if($getPass == "") {
            $data = array(
                "nama_bisnis" => $getName,
                "email_merchant" => $getEmail,
                "hp_merchant" => $getPhone
            );
            
            $where = array(
                "id_merchant" => $id
            );
        
            $this->m_crud->update_data($where, $data, 'merchant');
            redirect('account');
        }
        else {
            $pass = $this->m_crud->select('merchant', 'id_merchant', $id)->result();
            
            foreach($pass as $list) {
                $old = $list->pass_merchant;
            }
            
            if(md5($getPass) == $old) {
                //kalo pw lama betul
                if($getNewPass == $getNewPass2) {
                    //kalo pw baru cocok
                    $data = array(
                        "nama_bisnis" => $getName,
                        "email_merchant" => $getEmail,
                        "hp_merchant" => $getPhone,
                        "pass_merchant" => md5($getNewPass)
                    );
                    
                    $this->m_crud->update_data($where, $data, 'merchant');
                    redirect('account');
                }
                else {
                    //kalo pw baru ga cocok
                    
                }
            }
            else {
                //kalo pw lama salah
            }
        }
    }

}
