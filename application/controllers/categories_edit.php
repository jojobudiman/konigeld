<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class categories_edit extends CI_Controller {

	function __construct() 
    {
        parent::__construct();
        $this->load->model(array('m_crud'));
    }

    function index($id) {
        $data['out'] = $this->m_crud->select('jenis_produk', 'id_jenis_p', $id)->result();
        $this->load->view('merchant-css');
        $this->load->view('eng_main_categories_edit', $data);
        $this->load->view('merchant-js');
	}

    function update() {
        $getName = $this->input->post("catname");
        $id = $this->input->post("idc");


        $data = array(
            "nama_jenis" => $getName
        );
        $where = array(
            "id_jenis_p" => $id
        );

        $this->m_crud->update_data($where, $data, 'jenis_produk');
        redirect('categories');
    }

}
