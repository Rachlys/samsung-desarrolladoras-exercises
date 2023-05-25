
<?php
$db_host = 'localhost';
$db_user = 'root';
$db_password = 'root';
$db_db = 'practica-final';
$conn = new mysqli($db_host, $db_user, $db_password, $db_db);

print_r($conn) ;

if($conn->connect_errno === 0){
    echo 'La conexión ha sido exitosa';
}else{
    die('Connection failed: '.$conn->connect_error);

}

?>