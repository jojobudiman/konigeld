<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class modifiers_edit extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud', 'm_product', 'm_modifier'));
    }

    function index($id) {
        $data['out'] = $this->m_crud->select2Condition('status_outlet', 'id_merchant', 'outlet_merchant')->result();
        $data['mod'] = $this->m_modifier->select3($id)->result();
        $data['produk'] = $this->m_product->select('status_produk', 'outlet_merchant.id_merchant')->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_modifiers_edit', $data);
        $this->load->view('merchant-js');
	}
    
    function update($id) {
        $getName = $this->input->post("name");
        $getPrice = $this->input->post("price");
        $getPro = $this->input->post("pro[]");
        $getLoc = $this->input->post("loc");
        $data = array(
            "id_outlet" => $getLoc,
            "nama_modifier" => $getName,
            "harga_modifier" => $getPrice,
        );
        
        $where = array(
            "id_modifier" => $id
        );
        
        $this->m_crud->update_data($where, $data, 'modifier');
        
        $this->m_crud->delete($where, 'detail_modifier');
        
        foreach($getPro as $pp) {
            $data2 = array(
                "id_modifier" => $id,
                "id_produk" => $pp
            );
            
            $this->m_crud->insertData($data2, 'detail_modifier');
        }
        /*$pp = array();
        $a = 0;
        foreach($getPro as $p) {
            $pp[$a] = $p->id_produk;
            $a++;
        }
        
        $modi = $this->m_modifier->select3($id)->result();
        $b = 0;
        foreach($modi as $m) {
            if($m->id_produk == $pp[$b]) {
                
            }
            else {
                if($pp[$b] == 1) {
                    //delete
                    $where = array(
                        "id_modifier" => $id,
                        "id_produk" => $m->id_produk
                    );
                    $this->m_crud->delete($where, 'detail_modifier');
                }
                else {
                    //insert
                    $data4 = array(
                        "id_modifier" => $id,
                        "id_produk" => $m->id_produk
                    );
                    $this->m_crud->insertData($data4, 'detail_modifier');
                }
            }
            $b++;
        }*/
        
        redirect('modifiers');
    }
    
    function delete($id) {
        $where = array(
            "id_modifier" => $id
        );
        
        $this->m_crud->delete($where, 'detail_modifier');
        
        $data = array(
            "status_modifier" => 0
        );
        
        $this->m_crud->update_data($where, $data, 'modifier');
        
        redirect('modifiers');
    }

}
