<?php

require_once( $_SERVER['DOCUMENT_ROOT']."/config/ini.php" );

$error = false;

try {
  
  if( !isset( $_GET['id']) || empty( $_GET['id'])){
    die('no hay id');
  }
  
  $usuario = User::getById( $_GET['id'] ); 
  
} catch (\Throwable $th) {
  $error = $th;
}



?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/users.css">
    <title> Usuario </title>
  </head>
  <body>

  <section class="UserLayout">


  <?php if( !$error ){ 
    
        
    ?>
    <div class="UserLayout__title">
      Felicidades te has registrado <br> correctamente <?= ' '.$usuario->nombre.' '?> <?= $usuario->primer_apellido?>.
    </div>
    <div class="UserLayout__users">
        <div class="UserLayout__users--title"> Aquí puedes ver con quien puedes contactar </div>
        <div class="UserLayout__users--btn">
        <svg class="UserLayout__users--btn-svg" width="20" height="21" viewBox="0 0 20 21" fill="black" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5L4 8M4 8L7 5M4 8L4 0" stroke="black"/>
        </svg>
        </div>
        <div class="UserLayout__users--table">
          <?php require_once($_SERVER['DOCUMENT_ROOT']."/views/users.php");  ?>
        </div>



      </div>
        

    <?php
        }else{
        }
    ?>

</section>

        <script src="../js/users.js"></script>
    </body>
</html>