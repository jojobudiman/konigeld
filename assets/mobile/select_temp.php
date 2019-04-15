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
$idout = $_GET['id_outlet'];
$id_user = $_GET['id_user'];
$date = date("Y-m-d");

$sql = "SELECT * FROM temporary_order WHERE 'id_outlet' = $idout AND 'id_user' = $id_user AND 'date' = '$date'";

$hasil = mysqli_query($conn, $sql);
$result = array();
$isi = array();

while ($row = mysqli_fetch_assoc($hasil)) {
  $id_p = $row['id_produk'];
  $id_d = $row['id_diskon'];
  $id_paket = $row['id_paket'];

  $isi[] = array(
    "id_produk" => $id_p,
    "id_modifier" => $id_paket,
    "id_diskon" => $id_d
  );
}
$output = json_encode($isi);
print($output);
array_push($output);
http_response_code(200);

//print(json_encode(array('item' => $isi)));
print($isi);
mysqli_free_result($hasil);
mysqli_close($conn);
?>
