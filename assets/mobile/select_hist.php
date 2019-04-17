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

$sql = "SELECT * FROM `order` WHERE id_outlet = $idout ORDER BY tanggal_order DESC, waktu_order DESC";
$hasil = mysqli_query($conn, $sql);
$result = array();
$isi = array();

while ($row = mysqli_fetch_assoc($hasil)) {
  $id_o = $row['id_order'];
  $date = $row['tanggal_order'];
  $time = $row['waktu_order'];
  $total = $row['total_order'];

  $isi[] = array(
    "id_order" => $id_o,
    "date" => $date,
    "waktu" => $time,
    "total_order" => $total
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
