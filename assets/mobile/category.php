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

$sql = "SELECT * FROM jenis_produk INNER JOIN merchant ON merchant.id_merchant = jenis_produk.id_merchant INNER JOIN outlet_merchant ON outlet_merchant.id_merchant = merchant.id_merchant WHERE outlet_merchant.id_outlet =".$idout;
//$sql = "SELECT * FROM user WHERE email_user = '$email' AND status_user = 1";

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
        $id_jenis = $row['id_jenis_p'];
        $nama_jenis = $row['nama_jenis'];

        $isi[] = array(
          "id_jenis" => $id_jenis,
          "nama_jenis" => $nama_jenis
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
