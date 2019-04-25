<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class modifiers_new extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud', 'm_product', 'm_modifier', 'm_subs', 'm_merchant'));
    }

    function index() {
        $data['out'] = $this->m_crud->select2Condition('status_outlet', 'id_merchant', 'outlet_merchant')->result();
        $data['produk'] = $this->m_product->select('status_produk', 'outlet_merchant.id_merchant')->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_modifiers_add', $data);
        $this->load->view('merchant-js');
	}
    
    function add() {
        $where = array(
            'transaksi.status_transaksi' => 2,
            'transaksi.id_merchant' => $this->session->userdata("id")
        );
        $check = $this->m_subs->select($where)->result();
        foreach($check as $cek) {
            $mod = $cek->batas_modifier;
        }
        
        $where2 = array(
            'merchant.id_merchant' => $this->session->userdata("id");
        );
        
        $check2 = $this->m_merchant->selectMod($where2)->result();
        $count = 0;
        foreach($check2 as $cek2) {
            $count++;
        }
        if($count <= $mod) {
            $getName = $this->input->post("name");
            $getPrice = $this->input->post("price");
            $getOut = $this->input->post("out");
            $data = array(
                "id_modifier" => 0,
                "id_outlet" => $getOut,
                "nama_modifier" => $getName,
                "harga_modifier" => $getPrice,
                "status_modifier" => 1
            );
            
            $this->m_crud->insertData($data, 'modifier');
            
            $mod = $this->m_modifier->select($getName, $getPrice, $getOut)->result();
            foreach($mod as $id) {
                $idm = $id->id_modifier;
            }
            $pro = $this->input->post("pro[]");
            foreach($pro as $list) {
                $data2 = array(
                    "id_modifier" => $idm,
                    "id_produk" => $list
                );
                
                $this->m_crud->insertData($data2, 'detail_modifier');
            }
            
            redirect('modifiers');
        }
        else {
            echo "<script type='text/javascript'>alert('Sorry you have reach your maximum amount of modifiers. Please upgrade your pricing plan to add more');</script>";
        }
    }

}
