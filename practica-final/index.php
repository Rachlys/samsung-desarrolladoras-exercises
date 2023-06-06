<?php
/* Debug errores */
    ini_set('display_errors', "1");
    error_reporting(E_ALL);
    
    require_once( $_SERVER['DOCUMENT_ROOT']."/config/ini.php" );

    $error_exist_login = false;
    $error_exist_direccion = false;


    if (isset($_GET['error_login']) ){
        $error_exist_login  = true;
        $error_login = urldecode($_GET['error_login']);
    }

    if(isset($_GET['error_direccion'])){
        $error_exist_direccion = true;
        $error_direccion = urldecode($_GET['error_direccion']);

    }


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;600&display=swap" rel="stylesheet">
    
    <title>Registrate</title>
</head>
<body>

<section class="FormLayout">
<form  method="post" action="/controllers/userController.php" class="FormLayout__form">
        <div class="input_label nombre">
            <img src="img/user.svg" alt="icon usuario">
            <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Romina">
        </div>
        <span class="error_name"> </span>
        <div class="input_label primer_apellido">
            <img src="img/user.svg" alt="icon usuario">
            <input type="text" class="form-control" id="primer-apellido" name="primer_apellido" placeholder="Yupanqui" >
        </div>
        <span class="error_primer_apellido"> </span>
        <div class="input_label segundo_apellido">
            <img src="img/user.svg" alt="icon usuario">
            <input type="text" class="form-control" id="segundo-apellido" name="segundo_apellido" placeholder="Reynoso" >
        </div>
        <span class="error_segundo_apellido"> </span>
        <div class="input_label login">
            <img src="img/nickname.svg" alt="icon nickname">
            <input type="text" class="form-control" id="login" placeholder="ryupanqui" name="login" >
        </div>
        <span class="error_login"> </span>
        <div class="input_label email">
            <img src="img/email.svg" alt="icon email">
            <input type="email" class="form-control" id="email" placeholder="romiyup@hotmail.com" name="email">
        </div>
        <span class="error_email"> </span>
        <div class="input_label password">
            <img src="img/password.svg" alt="icon email">
            <input type="password" class="form-control" id="password" placeholder="Password" name="password">
        </div>
        <span class="error_password"> </span>
        <button type="submit" class="button" name="crear_usuario"> Registrate </button>
        
        <?php if($error_exist_login){ ?>
            <span> <?php print_r($error_login);?> </span>
        <?php } ?>

        <?php if($error_exist_direccion){ ?>
            <span> <?php print_r($error_direccion);?> </span>
        <?php } ?>

    </form>

    <div class="FormLayout__visual">
        <div class="FormLayout__visual--title"> <p>Welcome to this </p><p>beautiful place.</p> </div>
    </div>

</section>
        <script src="js/index.js"></script>
</body>
</html>