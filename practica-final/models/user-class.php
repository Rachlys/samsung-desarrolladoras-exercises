<?php

class User
{

    // Propiedades
    private $id;
    private $nombre;
    private $email;
    private $password;
    private $primer_apellido;
    private $segundo_apellido;
    private $login;

    public function __construct($params)
    {
        $this->id = $params['id'];
        $this->nombre = $params['nombre'];
        $this->primer_apellido = $params['primer_apellido'];
        $this->segundo_apellido = $params['segundo_apellido'];
        $this->login = $params['login'];
        $this->email = $params['email'];
        $this->password = $params['password'];
    }

    public function __get( $prop )
    {
        return $this->$prop;
    }

    public function __set( $prop , $value)
    {
        $this->$prop = $value;
    }

    public static function getById($id){
        
        global $connection;
        
        $query_user = "SELECT * FROM usuarios WHERE id = $id";
        
        $ejecutar_user= $connection->query($query_user);
        
        if( $connection->error){
            throw new Exception("error interno: $connection->error");
        }

        if($ejecutar_user->num_rows != 1){
            throw new Exception('no existe usuario');
        }

        $user_bbdd = $ejecutar_user->fetch_assoc();
       
        $user = new User($user_bbdd);

        return $user;
        

    }

    private static function userExist(){

            if( !self::validateFields() ){
                throw new Exception("Campos no validos");
            }

            global $connection;

            $email = $_POST['email'];

            $query = "SELECT id FROM usuarios WHERE email = '$email'";
            
            $execquery_correo = $connection->query($query);

            if( $execquery_correo->num_rows > 0 ){
                throw new Exception("Este usuario ya está registrado");
                return true;
            }

            return false;


    }

    public static function createUser(){
        

        if( !self::userExist()){

        global $connection;

        extract($_POST);

        $password = password_hash($password , PASSWORD_DEFAULT);


        $query_crear_alumnos = "INSERT INTO `usuarios`(`nombre`, `primer_apellido`, `segundo_apellido`, `login`, `email`, `password` ) VALUES ('$nombre','$primer_apellido', '$segundo_apellido', '$login' , '$email','$password')";

        $connection->query($query_crear_alumnos);


        $id_usuario = $connection->insert_id;
        
        return $id_usuario;

        };        


    }


    private static function validateFields(){
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


    public static function getAllUsers(){
    global $connection;

    $query_usuarios = "SELECT * FROM usuarios WHERE 1";

    $ejecutar_usuarios = $connection->query($query_usuarios);

    $usuarios_bbdd = $ejecutar_usuarios->fetch_all(MYSQLI_ASSOC);

    $usuarios = [];
    foreach ($usuarios_bbdd as $usuario) {
        $users_obj = new User($usuario);
        array_push($usuarios, $users_obj);
    }
    return $usuarios;

}


}


?>