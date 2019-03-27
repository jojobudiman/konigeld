<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class signup_4 extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model('m_crud');
    }

    function index() {
        $this->load->view('koniofficecss');
        $this->load->view('eng_signup_4');
        $this->load->view('konijs');
	}
    
    function cont() {
        //getData
        $locaddrs1 = $this->input->post("locaddrs1");
        $locaddrs2 = $this->input->post("locaddrs2");
        $loc = $locaddrs1." ".$locaddrs2;
        $number = $this->input->post("phonenum");
        $province = $this->input->post("province");
        $zip = $this->input->post("zip");
        
        $data_merchant = array(
            "id_merchant" => 0,
            "fname_merchant" => $this->session->userdata('fname'),
            "lname_merchant" => $this->session->userdata('lname'),
            "tahun_mulai_bisnis" => $this->session->userdata('year'),
            "nama_bisnis" => $this->session->userdata('bname'),
            "tipe_bisnis" => $this->session->userdata('btype'),
            "monthly_revenue" => $this->session->userdata('revenue'),
            "lokasi_bisnis" => $this->session->userdata('blocation'),
            "hp_merchant" => $this->session->userdata('phone'),
            "email_merchant" => $this->session->userdata('email'),
            "pass_merchant" => md5($this->session->userdata('pw')),
            "status_merchant" => 1
        );
        $this->m_crud->insertData($data_merchant, 'merchant');
        $mer = $this->m_crud->select('merchant', 'email_merchant', $this->session->userdata('email'))->result();
        $id_m = "";
        foreach($mer as $list) {
            $id_m = $list->id_merchant;
        }
        $data_outlet = array(
            "id_outlet" => 0,
            "id_merchant" => $id_m,
            "alamat_outlet" => $loc,
            "hp_outlet" => $number,
            "provinsi_outlet" => $province,
            "kodepos_outlet" => $zip,
            "status_outlet" => 1
        );
        $this->m_crud->insertData($data_outlet, 'outlet_merchant');
        
        $this->load->library('email');
        /*$config['protocol'] = 'sendmail';
        $config['mailpath'] = '/usr/sbin/sendmail';
        $config['charset'] = 'iso-8859-1';
        $config['wordwrap'] = TRUE;*/
        $config['protocol']='smtp';
        $config['smtp_host']='localhost';
        $config['smtp_port']='110';
        $config['smtp_timeout']='30';
        $config['smtp_user']='noreply@konigeld.com';
        $config['smtp_pass']='qf4hjN8?sL#l';
        $config['charset']='utf-8';
        $config['newline']="\r\n";
        $config['wordwrap'] = TRUE;
        $config['mailtype'] = 'html';
        
        $this->email->initialize($config);
        
        $from = [
            'email' => 'noreply@konigeld.com',
            'name' => 'Konigeld'
        ];
        $to = array($getEmail);
        $subject = 'Welcome to Konigeld';
        
        $message = 'Hello, '.$this->session->userdata('fname').'<br> Thank you for   registering your account into Konigeld!';
        
        
        //$this->load->library('email', $emailConfig);
        $this->email->set_newline("\r\n");
        $this->email->from($from['email'], $from['name']);
        $this->email->to($to);
        $this->email->subject($subject);
        $this->email->message($message);
        
        redirect("dashboard");
    }
}
