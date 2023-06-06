<?php


ini_set('display_errors', "1");
error_reporting(E_ALL);


require_once('../config/ini.php');

if(isset($_POST['crear_usuario'])){

    if(validateFields()){

        try{
            $newUser = User::createUser();
            
            header('location: http://localhost:8888/views/user.php?id='.$newUser);


        }catch( \Throwable $th ){

            print_r($th); 

            $error_login = $th->getMessage();
            $encoded_error = urlencode($error_login);
            header("Location: http://localhost:8888/index.php?error_login=$encoded_error");
            exit;

        }

    }else{
        $error_direccion = "Algo ha salido mal";
        $encoded_error_direccion = urlencode($error_direccion);
        header("Location: http://localhost:8888/index.php?error_otro=$encoded_error_direccion");
        exit;
    }
}


/* Functions utilities */

function validateFields(){
    if (
        !isset($_POST['nombre']) ||
        !isset($_POST['email']) ||
        !isset($_POST['primer_apellido']) ||
        !isset($_POST['segundo_apellido']) ||
        !isset($_POST['login']) ||
        !isset($_POST['password']) ||
        empty($_POST['nombre'])  ||
        empty($_POST['email']) ||
        empty($_POST['primer_apellido']) ||
        empty($_POST['segundo_apellido']) ||
        empty($_POST['login']) ||
        empty($_POST['password'])


    ) {
        return false;
    }

    if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        return false;
    }

    return true;
}



?>



