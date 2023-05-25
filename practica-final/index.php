<?php
    ini_set('display_errors', "1");
    error_reporting(E_ALL);
    
    require_once( $_SERVER['DOCUMENT_ROOT']."/config/ini.php" );
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

    <title>Practica final Samsung Bejob</title>
</head>

<body>

    <h1 class="card-title text-center" style="margin: 1em 0">Registrate</h1>

    <form method="post" action="/controllers/userController.php" style="width: 60%; display:flex; flex-flow: column nowrap; gap:2rem; margin:auto;">
        
        <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Romina" value="Romina">
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
        </div>
        <div class="form-group">
            <label for="primer-apellido">Primer pellido</label>
            <input type="text" class="form-control" id="primer-apellido" name="primer-apellido" placeholder="Yupanqui" value="Yupanqui">
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
        </div>
        <div class="form-group">
            <pellido for="segundo-apellido">Segundo apellido</label>
            <input type="text" class="form-control" id="segundo-apellido" name="segundo-apellido" placeholder="Reynoso" value="Reynoso">
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
        </div>
        <div class="form-group">
            <pellido for="login">Login</label>
            <input type="text" class="form-control" id="login" placeholder="ryupanqui" name="login" value="ryupanqui">
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="romiyup@hotmail.com" name="email" value="rsda@hotmail.com">
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" name="password">
        </div>
        <button class="btn btn-success" type="submit">Registrate</button>
    </form>


</body>

</html>