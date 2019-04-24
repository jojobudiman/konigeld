<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class dashboard extends CI_Controller {
    
    function __construct()
    {
        parent::__construct();
        $this->load->model(array('m_crud', 'm_history'));
    }

    function index() {
        $id = $this->session->userdata("id");
        $where = array(
            'outlet_merchant.id_merchant' => $id
        );
        $data['sale'] = $this->m_history->select2($where)->result();
        $data['detail'] = $this->m_history->select3($where)->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_dashboard', $data);
        $this->load->view('merchant-js');
	}

    /*function sales() {
        $this->load->view('merchant-css');
        $this->load->view('dashboard/sales/reports');
        $this->load->view('merchant-js');
    }*/

}
