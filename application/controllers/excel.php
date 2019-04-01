<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require('./vendor/autoload.php');

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class excel extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

    function __construct(){
        parent::__construct();
        $this->load->model('m_jadwal');
        $this->load->library('excel');
    }

    public function index() {
    // Create new Spreadsheet object
      $spreadsheet = new Spreadsheet();
      $sheet = $spreadsheet->getActiveSheet();
    // Set document properties
        $spreadsheet->getProperties()->setCreator('Königeld Point of Sale')
          ->setLastModifiedBy('Königeld Point of Sale')
          ->setTitle('Export')
    // add style to the header
        $styleArray = array(
          'font' => array(
            'bold' => true,
          ),
          'alignment' => array(
            'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
            'vertical'   => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
          ),
          'borders' => array(
              'bottom' => array(
                  'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THICK,
                  'color' => array('rgb' => '333333'),
              ),
          ),
          'fill' => array(
            'type'       => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_GRADIENT_LINEAR,
            'rotation'   => 90,
            'startcolor' => array('rgb' => '0d0d0d'),
            'endColor'   => array('rgb' => 'f2f2f2'),
          ),
        );
        $spreadsheet->getActiveSheet()->getStyle('A1:G1')->applyFromArray($styleArray);
        // auto fit column to content
    foreach(range('A', 'G') as $columnID) {
          $spreadsheet->getActiveSheet()->getColumnDimension($columnID)->setAutoSize(true);
        }
    // set the names of header cells
          $sheet->setCellValue('A1', 'ID');
          $sheet->setCellValue('B1', 'Name');
          $sheet->setCellValue('C1', 'Age');
          $sheet->setCellValue('D1', 'Sex');
          $sheet->setCellValue('E1', 'Address');
          $sheet->setCellValue('F1', 'Phone');
          $sheet->setCellValue('G1', 'Email');
    $getdata = $this->welcome_message->get_sample();
        // Add some data
        $x = 2;
        foreach($getdata as $get){
            $sheet->setCellValue('A'.$x, $get->id);
            $sheet->setCellValue('B'.$x, $get->the_name);
            $sheet->setCellValue('C'.$x, $get->the_age);
            $sheet->setCellValue('D'.$x, $get->the_sex);
            $sheet->setCellValue('E'.$x, $get->the_address);
            $sheet->setCellValue('F'.$x, $get->the_phone);
            $sheet->setCellValue('G'.$x, $get->the_email);
          $x++;
        }
    //Create file excel.xlsx
      $writer = new Xlsx($spreadsheet);
      $writer->save('export_test.csv');
    //End Function index
     }
//End Class Welcome

}
