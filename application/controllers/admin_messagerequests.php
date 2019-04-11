<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class admin_messagerequests extends CI_Controller {

	function __construct()
    {
        parent::__construct();
        $this->load->model(array('m_crud', 'm_subs'));
    }

    function index() {
        $data['trans'] = $this->m_subs->select('status_transaksi')->result();
        $this->load->view('admin-css');
        $this->load->view('admin-header');
        $this->load->view('eng_admin_messagerequests', $data);
        $this->load->view('admin-js');
	}

}
