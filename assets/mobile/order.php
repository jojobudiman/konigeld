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

$idout = $_GET['id_outlet'];
$id_user = $_GET['id_user'];
$date = date("Y-m-d");
date_default_timezone_set("Asia/Bangkok");
$time = date("H:i:s");

$sql = "SELECT * FROM temporary_order WHERE id_outlet = $idout AND id_user = $id_user AND date = '$date'";

$hasil = mysqli_query($conn, $sql);

$isi = array();
$total = 0;

while ($row = mysqli_fetch_array($hasil)) {
    $id_produk = $row['id_produk'];
    $id_modifier = $row['id_modifier'];
    $id_diskon = $row['id_diskon'];
    $tot = $row['total'];
    $counter = 0;
    $diskon = 0;
    $hgm = 0;
    $hg = 0;
    $pot = 0;

    if($id_produk != "0") {
        $sql2 = "SELECT * FROM produk WHERE id_produk = $id_produk";
        $hasil2 = mysqli_query($conn, $sql);
        while ($row = mysqli_fetch_array($hasil2)) {
            $hg = $row['harga'];
        }
    }

    if($id_modifier != "0") {
        $sql2 = "SELECT * FROM modifier WHERE id_modifier = $id_modifier";
        $hasil2 = mysqli_query($conn, $sql);
        while ($row = mysqli_fetch_array($hasil2)) {
            $hgm = $row['harga_modifier'];
        }
    }

    if($id_diskon != "0") {
        $sql2 = "SELECT * FROM diskon WHERE id_diskon = $id_diskon";
        $hasil2 = mysqli_query($conn, $sql);
        while ($row = mysqli_fetch_array($hasil2)) {
            $diskon = $row['jumlah'];
        }
        if($diskon < 1) {
            $counter = 1;
        }
    }

    if($counter = "0") {
        $total = $total + ($hg + $hgm + $tot - $diskon);
    }
    else {
        $diskon = 1 - $diskon;
        $total = ($total + ($hg + $hgm + $tot)) * $diskon;
    }
}

$insert = "INSERT INTO `order` VALUES(0, $idout, '$date', '$time', '$total', 1)";
$result = mysqli_query($conn, $insert);

$gett = "SELECT * FROM `order` WHERE id_outlet = $idout AND tanggal_order = '$date' AND waktu_order = '$time'";
$hasil3 = mysqli_query($conn, $gett);

while ($row2 = mysqli_fetch_array($hasil3)) {
    $idnya = $row2['id_order'];
}

$hasil5 = mysqli_query($conn, $sql);

while ($row3 = mysqli_fetch_array($hasil5)) {
    $id_produk2 = $row3['id_produk'];
    $id_modifier2 = $row3['id_modifier'];
    $id_diskon2 = $row3['id_diskon'];
    $tot2 = $row3['total'];
    
    $detail = "INSERT INTO order_details VALUES(0, $idnya, $id_produk, $id_diskon, $id_modifier, 1)";
    $sip = mysqli_query($conn, $detail);
}



$hist = "INSERT INTO history VALUES(0, $idnya, '$date', '$total', 1)";
$yess = mysqli_query($conn, $hist);

$clean = "DELETE FROM temporary_order WHERE id_outlet = $idout AND id_user = $id_user AND date = '$date'";
$bersih = mysqli_query($conn, $clean);
?>
