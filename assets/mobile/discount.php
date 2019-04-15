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

$sql = "SELECT * FROM diskon INNER JOIN merchant ON diskon.id_merchant = merchant.id_merchant INNER JOIN outlet_merchant ON outlet_merchant.id_merchant = merchant.id_merchant WHERE outlet_merchant.id_outlet =".$idout." AND diskon.status_diskon = 1";

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
        $id_dis = $row['id_diskon'];
        $nama_dis = $row['nama_diskon'];
        $dis = $row['jumlah'];

        $isi[] = array(
          "id_dis" => $id_dis,
          "nama_dis" => $nama_dis,
          "dis" => $dis
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
