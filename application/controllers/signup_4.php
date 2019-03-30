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
            "fname_merchant" => $this->session->userdata('name'),
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
        $mail->isHTML(true);
        $from_mail = 'konigeld@gmail.com';
        $to = $this->session->userdata('email');

        $subject = 'Welcome to Königeld';
        $message = '<h1>Hello '.$this->session->userdata('name').'</h1>'
                    . "\n"
                    . 'Welcome to Königeld '.$this->session->userdata('name')
                    . ',you have just begun your new journey to be a jack of sales. A free guidebook for you to learn how to use the website and application! In Königeld, you could manage your business easily through our features inside such as dashboard, reports, products, employees, and settings.';

        $nama  = 'MIME-Version: 1.0' . "\r\n";
        $nama .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        $nama .= 'To: Your Name <'.$to.'>' . "\r\n";
        $nama .= 'From: NO-REPLY <'.$from_mail.'>' . "\r\n";

        $sendtomail = mail($to, $subject, $message, $nama);
        redirect('dashboard');
    }
}
