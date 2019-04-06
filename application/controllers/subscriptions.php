<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class subscriptions extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud', 'm_ajax'));
    }

    function index() {
        $this->load->view('merchant-css');
        $this->load->view('eng_main_pricing');
        $this->load->view('merchant-js');
	}
    
    function indexx($price) {
        $data['pricing'] = $this->m_crud->select('kategori', 'id_kategori', $price)->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_pricing', $data);
        $this->load->view('merchant-js');
    }
    
    function getAjax() {
        $bil = $this->input->post('bill');
        $sub = $this->session->userdata("idk");
        $total = 0;
        //echo "<script type='text/javascript'>alert('$bil');</script>";

        
        if($sub == 1) {
            if($bil == 1) {
                $awal = 25000;
                $bulanan = 25000;
                $total = 25000;
            }
            else {
                $awal = 25000;
                $disc = $awal*0.2;
                $bulanan = $awal - $disc;
                $total = $bulanan*12;
            }
        }
        else if($sub == 2) {
            if($bil == 1) {
                $awal = 75000;
                $bulanan = 75000;
                $total = 75000;
            }
            else {
                $awal = 75000;
                $disc = $awal*0.2;
                $bulanan = $awal - $disc;
                $total = $bulanan*12;
            }
        }
        else if($sub == 3){
            if($bil == 1) {
                $awal = 150000;
                $bulanan = 150000;
                $total = 150000;
            }
            else {
                $awal = 150000;
                $disc = $awal*0.2;
                $bulanan = $awal - $disc;
                $total = $bulanan*12;
            }
        }
        else {
            $awal = "-";
            $disc = "-";
            $bulanan = "-";
            $total = "-";
        }
        $data['bi'] = array(
            'awal' => $awal,
            'bulanan' => $bulanan,
            'total' => $total,
            'idk' => $sub
        );
        
        //$data['bi'] = '{"awal": 20000}';
        echo json_encode($data);
    }
    
    function pay() {
        $getDate = date("Y-m-d");
        $getTotal = $this->input->post("total2");
        
        $data = array(
            "id_transaksi" => 0,
            "id_admin" => 0,
            "id_merchant" => $this->session->userdata("id"),
            "tgl_transaksi" => $getDate,
            "total_transaksi" => $getTotal,
            "tipe_transaksi" => "Transfer",
            "status_transaksi" => 1
        );
        
        $this->m_crud->insertData($data, 'transaksi');
        
        $where = array(
            "id_merchant" => $this->session->userdata("id"),
            "tgl_transaksi" => $getDate,
            "total_transaksi" => $getTotal
        );
        
        $tr = $this->m_crud->selectWhere($where, 'transaksi')->result();
        foreach($tr as $tn) {
            $idt = $tn->id_transaksi;
        }
        $getIDK = $this->input->post("idk2");
        $getPeriod = $this->input->post("bill");
        if($getPeriod == 1) {
            $effectiveDate = date('Y-m-d', strtotime("+1 months", strtotime($effectiveDate)));
            $jangka = "1 month";
        }
        else {
            $effectiveDate = date('Y-m-d', strtotime("+12 months", strtotime($effectiveDate)));
            $jangka = "12 month";
        }
        
        $data2 = array(
            "id_transaksi" => $idt,
            "id_kategori" => $getIDK,
            "jangka_periode" => $jangka,
            "tanggal_awal" => $getDate,
            "tanggal_akhir" => $effectiveDate
        );
        
        $this->m_crud->insertData($data2, 'detail_transaksi');
        redirect('dashboard');
    }
}
