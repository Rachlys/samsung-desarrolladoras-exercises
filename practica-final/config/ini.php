
<?php
$db_host = 'localhost';
$db_user = 'root';
$db_password = 'root';
$db_db = 'practica-final';

$connection = new mysqli($db_host, $db_user, $db_password, $db_db);


require_once($_SERVER['DOCUMENT_ROOT']."/models/user-class.php");



?>