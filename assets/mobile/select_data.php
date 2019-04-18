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
$idor = $_GET['id_order'];
$sql = "SELECT * FROM `order` INNER JOIN order_details ON
order_details.id_order = order.id_order WHERE order.id_order = $idor";
$hasil = mysqli_query($conn, $sql);
$result = array();
$isi = array();
$tt = "0";

while ($row = mysqli_fetch_assoc($hasil)) {
  $id_o = $row['id_order'];
  $id_produk = 0;
  $id_modifier = 0;
  $id_diskon = 0;
  $hg = null;
  $nama = null;
  $hgm = null;
  $nama_mod = null;
  $diskon = null;
  $nama_dis = null;

  $id_produk = $row['id_produk'];
  $id_modifier = $row['id_modifier'];
  $id_diskon = $row['id_diskon'];
  $tt = $row['total_order'];

  if($id_produk != 0) {
        $sql2 = "SELECT * FROM produk WHERE id_produk = $id_produk";
        $hasil2 = mysqli_query($conn, $sql2);
        while ($row6 = mysqli_fetch_array($hasil2)) {
            $hg = $row6['harga'];
            $nama = $row6['nama_produk'];
        }
    }

    if($id_modifier != 0) {
        $sql2 = "SELECT * FROM modifier WHERE id_modifier = $id_modifier";
        $hasil2 = mysqli_query($conn, $sql2);
        while ($row6 = mysqli_fetch_array($hasil2)) {
            $hgm = $row6['harga_modifier'];
            $nama_mod = $row6['nama_modifier'];
        }
    }

    if($id_diskon != 0) {
        $sql2 = "SELECT * FROM diskon WHERE id_diskon = $id_diskon";
        $hasil2 = mysqli_query($conn, $sql2);
        while ($row6 = mysqli_fetch_array($hasil2)) {
            $diskon = $row6['jumlah'];
            $nama_dis = $row6['nama_diskon'];
        }
        if($diskon < 1) {
            $counter = 1;
        }
    }

    $isi[] = array(
      "id_order" => $id_o,
      "nama_produk" => $nama,
      "harga" => $hg,
      "nama_modifier" => $nama_mod,
      "harga_modifier" => $hgm,
      "nama_diskon" => $nama_dis,
      "jumlah_diskon" => $diskon,
      "total_order" => $tt
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
