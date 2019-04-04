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

$sql = "SELECT * FROM produk JOIN jenis_produk ON produk.id_jenis_p = jenis_produk.id_jenis_p
WHERE produk.id_outlet = '$idout' AND produk.status_produk = 1";
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
        $id = $row['id_produk'];
        $id_jenis = $row['id_jenis_p'];
        $nama_produk = $row['nama_produk'];
        $hg = $row['harga'];
        $stok = $row['stok'];
        $nama_jenis = $row['nama_jenis'];

        /*$isi[$id] = array(
          "id_produk" => $id,
          "id_jenis" => $id_jenis,
          "nama_produk" => $nama_produk,
          "harga" => $hg,
          "stok" => $stok,
          "nama_jenis" => $nama_jenis
        );*/

        $isi[] = array(
          "id_produk" => $id,
          "id_jenis" => $id_jenis,
          "nama_produk" => $nama_produk,
          "harga" => $hg,
          "stok" => $stok,
          "nama_jenis" => $nama_jenis
        );
      }

      $output = json_encode(array('item' => $isi));
      print($output);
      array_push($output);
      http_response_code(200);

//print(json_encode(array('item' => $isi)));
//print($isi);
mysqli_free_result($hasil);
mysqli_close($conn);



?>
