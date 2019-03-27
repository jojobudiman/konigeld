<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class discounts_edit extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud', 'm_discount'));
    }

    function index($id) {
        $data['disc'] = $this->m_crud->select('diskon', 'id_diskon', $id)->result();
        $data['cat'] = $this->m_crud->select2Condition('status_jenis', 'id_merchant', 'jenis_produk')->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_discounts_edit', $data);
        $this->load->view('merchant-js');
	}
    
    function update() {
        $getName = $this->input->post("name");
        $getAmount1 = $this->input->post("text1");
        $getAmount2 = $this->input->post("text2");
        $id = $this->input->post("id");
        
        if($getAmount1 == "") {
            $amount = $getAmount2;
        }
        else {
            $amount = number_format((float) $getAmount1, 2, '.','')/100;
        }
        
        $data = array(
            "nama_diskon" => $getName,
            "jumlah" => $amount
        );
        $where = array(
            "id_diskon" => $id
        );
        
        $this->m_crud->update_data($where, $data, 'diskon');
        redirect('discounts');
    }

}
