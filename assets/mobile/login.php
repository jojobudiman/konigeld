<?php
header('Content-Type: application/json');
$host="localhost";
$user="root";
$DBpass="root";
$DB="konigeld";

$hname = "103.126.226.70";

$conn = mysqli_connect($host, $user, $DBpass, $DB);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
//echo "Connected successfully<br>";
$email=$_GET['email_user'];
$password= md5($_GET['pass_user']);

$sql = "SELECT * FROM user WHERE email_user = '$email' AND pass_user = '$password' AND status_user = 1";
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
  while($row = mysqli_fetch_array($hasil))
  {
        $id = $row['id_user'];
        $fname = $row['fname_user'];
        $lname = $row['lname_user'];
        $email = $row['email_user'];
        $pass = $row['pass_user'];
        $jabatan = $row['jabatan'];
        $handphone = $row['hp_user'];
        $outletid = $row['id_outlet'];
        $merchantid = $row['id_merchant'];
        $status = $row['status_user'];
        //echo $row['status_user'];
  }

/*$isi = '{ "user":{
          "id_user":"'.$id.'",
          "fname_user":"'.$fname.'",
          "lname_user":"'.$lname.'",
          "email_user":"'.$email.'",
          "pass_user":"'.$pass.'",
          "jabatan":"'.$jabatan.'",
          "hp_user":"'.$handphone.'",
          "id_outlet":"'.$id_outlet.'",
          "id_merchant":"'.$id_merchant.'",
          "status_user":"'.$status.'"
        }
      }';*/

      array_push($result, array(
        "id_user" => $id,
        "fname_user" => $fname,
        "lname_user" => $lname,
        "email_user" => $email,
        "pass_user" => $pass,
        "jabatan" => $jabatan,
        "hp_user" => $handphone,
        "id_outlet" => $outletid,
        "id_merchant" => $merchantid,
        "status_user" => $status
      );

      http_response_code(200);


print(json_encode(array('result'=>$result));
//print($isi);
mysqli_free_result($hasil);
mysqli_close($conn);



?>
