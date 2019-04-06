<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class contactus extends CI_Controller {

	function __construct()
    {
        parent::__construct();
        $this->load->model('m_crud');
    }

    function index() { //Bikin tabel contactus (?)
        $mailTo = "konigeld@gmail.com";
        $headers = "From:" .$mailFrom;
        $cname = $this->input->post("cname"); //Ambil nama
        $csubject = $this->input->post("csubject"); //Ambil subjek
        $cmessage = $this->input->post("cmessage"); //Ambil pesan

        $text = "You've received an e-mail from ".$cname.".\n\n".$cmessage;

        $data = array(
        'contact_id'=>NULL,
        'contact_name'=>$tangkapNama,
        'contact_subject'=>$tangkapSubject,
        'contact_message'=>$tangkapIsi
        );

        /*$this->m_contactus->insertData($data,'contactUs');*/

        mail($mailTo, $csubject, $text, $headers);
        header('location:index.php?mailsend');
	}

}
