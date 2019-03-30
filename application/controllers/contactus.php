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
        $cname = $this->input->post("phonenum"); //Ambil nama
        $cemail = $this->input->post("phonenum"); //Ambil email
        $csubject = $this->input->post("phonenum"); //Ambil subjek
        $cmessage = $this->input->post("phonenum"); //Ambil pesan
        $text = "You've received an e-mail from ".$cname.".\n\n".$cmessage;

        mail($mailTo, $subject, $text, $headers);
        header('location:index.php?mailsend');
	}

}
