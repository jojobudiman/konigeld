<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class reports_salessummary extends CI_Controller {
    
    function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud', 'm_ajax'));
    }

    function index() {
        $this->load->view('merchant-css');
        $this->load->view('eng_main_reports');
        $this->load->view('merchant-js');
	}
    
    function getAjax() {
        $date = $this->input->post('start');
        $newDate = date("Y-m-d", strtotime($date));
        //echo "<script>console.log( 'Debug Objects: " . $date . "' );</script>";

        $data = $this->m_ajax->getAjax($newDate)->result();
        
        echo json_encode($data);
    }

}