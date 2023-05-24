<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

    <title>Crea un usuario</title>
  </head>
  <body>

    <h1 class="card-title text-center" style="margin: 1em 0">Crea un usuario</h1>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-6">
                <form action="" method="POST">
                <div class="row mb-3">
                        <label for="nombre" class="col-sm-2 col-form-label">Nombre</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="nombre" placeholder="Romina" required>
                        </div>
                </div>
                <div class="row mb-3">
                        <label for="apellido" class="col-sm-2 col-form-label">Apellido</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="apellido" placeholder="Yupanqui" required>
                        </div>
                </div>
                <div class="row mb-3">
                        <label for="email" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" name="email" placeholder="romiyup@hotmail.com" required>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Crear</button>
                
                <?php

                    if($_POST){
                        $nombre = $_POST['nombre'];
                        $apellido = $_POST['apellido'];
                        $email = $_POST['email'];

                        $db_host = 'localhost';
                        $db_user = 'root';
                        $db_password = 'root';
                        $db_db = 'practica-php';

                        $conn = new mysqli($db_host, $db_user, $db_password, $db_db);

                        if($conn->connect_error){
                            die('Connection failed: '.$conn->connect_error);
                        }

                        $sql = "INSERT INTO usuarios(nombre, apellido, email) VALUES ('$nombre' , '$apellido' , '$email')";

                        if($conn->query($sql) === TRUE){
                            echo 'Se ha creado un nuevo usuario, gracias '  . $nombre. ".";
                        }else{
                            echo "Error: " . $sql . "<br>" . $conn->error;
                        }

                        $conn->close();
                    }
                ?>
                
                </form>

            </div>
        </div>
    </div>

  </body>
</html>