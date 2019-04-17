<?php
//header('Content-Type: application/json');
$host="localhost";
$user="root";
$DBpass="root";
$DB="konigeld";

$conn = mysqli_connect($host, $user, $DBpass, $DB);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
//echo "Connected successfully<br>";
$id_temp = 0;
$idout=$_GET['id_outlet'];
$id_user = $_GET['id_user'];
$id_produk = $_GET['id_produk'];
$id_modifier = $_GET['id_modifier'];
$id_diskon = $_GET['id_diskon'];
$total = $_GET['total'];
$date = date("Y-m-d");

$sql = "INSERT INTO temporary_order VALUES ($id_temp, $idout, $id_user, $id_produk, $id_modifier, $id_diskon, '$total', '$date', 1)";

$hasil = mysqli_query($conn, $sql);

while ($row = mysqli_fetch_assoc($hasil)) {
  $output[] = $row;
}

//print(json_encode(array('item' => $isi)));
print($isi);
mysqli_free_result($hasil);
mysqli_close($conn);
?>
