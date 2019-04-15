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
$id_user = $_GET['id_user'];
$date = date("Y-m-d");

$sql = "DELETE FROM temporary_order WHERE 'id_outlet' = $idout AND 'id_user' = $id_user AND 'date' = '$date'";

$hasil = mysqli_query($conn, $sql);

while ($row = mysqli_fetch_assoc($hasil)) {
  $output[] = $row;
}

//print(json_encode(array('item' => $isi)));
print($isi);
mysqli_free_result($hasil);
mysqli_close($conn);
?>
