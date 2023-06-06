<?php

require_once( $_SERVER['DOCUMENT_ROOT']."/config/ini.php" );



try {
  
  $usuarios = User::getAllUsers() ; 

} catch (\Throwable $th) {
  $error = $th;
}



?>

<div class="usuarios">
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Nickname</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>

  <?php foreach ($usuarios as $usuario){ ?>

    <tr>
      <td><?= $usuario->nombre?> </td>
      <td><?= $usuario->login?> </td>
      <td><?= $usuario->email?> </td>
    </tr>
   

<?php } ?>

  </tbody>
</table>


</div>
