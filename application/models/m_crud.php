<?php
class M_crud extends CI_Model {

    public function selectData($table) {
        return $this->db->get($table);
    }
    
    function selectCondition($where, $table)
    {
        $this->db->where($where, 1);
        $query = $this->db->get($table);
        return $query;
    }
    
    function select2Condition($where, $where2, $table)
    {
        $this->db->where($where, 1);
        $this->db->where($where2, $this->session->userdata('id'));
        $query = $this->db->get($table);
        return $query;
    }
    
    function select($table, $col, $val) {
        $this->db->where($col, $val);
        $query = $this->db->get($table);
        return $query;
    }

    function insertData($data, $table){
        $this->db->insert($table, $data);
    }

    function selectWhere($where, $table){
        return $this->db->get_where($table, $where);
    }

    function update_data($where, $data, $table){
        $this->db->where($where);
        $this->db->update($table, $data);
    }

    function delete($where,$table){
        $this->db->where($where);
        $this->db->delete($table);
    }
}
