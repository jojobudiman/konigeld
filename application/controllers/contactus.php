<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class contactus extends CI_Controller {

	function __construct()
    {
        parent::__construct();
        $this->load->model('m_crud');
    }

    function index() { //Bikin tabel contactus (?)
        $email = $this->input->post("email");
        $sub = $this->input->post("csubject");
        $message = $this->input->post("cmessage");
        $date = date("Y-m-d");
        
        $data = array(
            'id_contact' => 0,
            'email' => $email,
            'subject_contact' => $sub,
            'isi' => $message,
            'date_contact' => $date,
            'status_contact' => 1
        );
        
        $this->m_crud->insertData($data, 'contact');
        redirect('en/home');
	}
    
    function replied($id) {
        $where = array(
            'id_contact' => $id
        );
        
        $data = array(
            'status_contact' => 0
        );
        
        $this->m_crud->update_data($where, $data, 'contact');
        redirect('admin_messagerequests');
    }

}
