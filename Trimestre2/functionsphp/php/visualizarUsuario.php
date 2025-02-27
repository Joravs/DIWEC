<?php
    require_once '../ctdb.php';

    $eData = file_get_contents("php://input");
    $dData = json_decode($eData, true);

    $nombre =  $dData['nombre'];
    $apellido =  $dData['apellido'];
    $fechaNac = $dData['fechaNac'];
    $username = $dData['username'];
    $password = password_hash($dData['password'], PASSWORD_BCRYPT);

    if($nombre && $apellido && $fechaNac && $username && $password){
        $stmt = $conn -> prepare ('INSERT INTO usuarios (nombre,apellido,fechaNac,username,password)
                                    VALUES (:nombre,:apellido,:fechNac,:username,:password);');
        $stmt -> bindParam(':nombre,:apellido,:fechNac,:username,:password', $nombre, $apellido,$fechaNac ,$username, $password);
        $stmt -> execute();
        var_dump($stmt);
    }
?>