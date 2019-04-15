<?php
header('Content-Type: application/json');
$host="localhost";
$user="root";
$DBpass="root";
$DB="konigeld";

$conn = mysqli_connect($host, $user, $DBpass, $DB);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
//echo "Connected successfully<br>";
$idout=$_GET['id_outlet'];
$nm = $_GET['nm'];

$sql = "SELECT * FROM `produk` INNER JOIN outlet_merchant ON outlet_merchant.id_outlet = produk.id_outlet INNER JOIN jenis_produk ON jenis_produk.id_jenis_p = produk.id_jenis_p WHERE outlet_merchant.id_outlet = ".$idout." AND jenis_produk.nama_jenis = '".$nm."'";

$hasil=mysqli_query($conn, $sql);
$result = array();
/*$login=mysqli_fetch_array($hasil);
  if(! $login || $email == "")
  {
    $isi="{'msg':'Data Gagal Masuk, Error:'".mysqli_error($conn)."}";
    //echo json dalam bentuk key '' : value
    die("Error in query");
  }
  else{
    SESSION_START();
    $isi="{'msg':'Data Masuk'}";
    $_SESSION['username'] = $username;
  }*/
  $isi = array();
  $counter = 0;
  while($row = mysqli_fetch_array($hasil))
  {
        $id_produk = $row['id_produk'];
        $nama_produk = $row['nama_produk'];
        $harga = $row['harga'];

        $isi[] = array(
          "id_produk" => $id_produk,
          "nama_produk" => $nama_produk,
          "harga" => $harga
        );
      }

      $output = json_encode($isi);
      print($output);
      array_push($output);
      http_response_code(200);

//print(json_encode(array('item' => $isi)));
//print($isi);
mysqli_free_result($hasil);
mysqli_close($conn);



?>
