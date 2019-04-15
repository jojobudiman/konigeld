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

$sql = "SELECT * FROM modifier WHERE id_outlet =".$idout." AND status_modifier = 1";

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
        $id_mod = $row['id_modifier'];
        $nama_mod = $row['nama_modifier'];
        $harga_mod = $row['harga_modifier'];

        $isi[] = array(
          "id_modifier" => $id_mod,
          "nama_modifier" => $nama_mod,
          "harga_modifier" => $harga_mod
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
