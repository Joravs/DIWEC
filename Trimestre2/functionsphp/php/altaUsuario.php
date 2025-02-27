<?php
    require_once '../ctdb.php';
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: POST');
    header('Access-Control-Allow-Headers: Content-Type');

    $eData = file_get_contents("php://input");
    $dData = json_decode($eData, true);

    $nombre =  $dData['nombre'];
    $apellido =  $dData['apellido'];
    $fechaNac = $dData['fechaNac'];
    $username = $dData['username'];
    $password = password_hash($dData['password'], PASSWORD_BCRYPT);

    $respons= "";
    if($nombre && $apellido && $fechaNac && $username && $password){
        $stmt = $conn -> prepare ('INSERT INTO usuarios (nombre,apellido,fechaNac,username,password)
                                    VALUES (:nombre,:apellido,:fechNac,:username,:password);');
        $stmt -> bindParam(':nombre,:apellido,:fechNac,:username,:password', $nombre, $apellido,$fechaNac ,$username, $password);
        $stmt -> execute();
        return $respons="Usuario creado correctamente";
    }else{
        return $respons="Todos los campos son requeridos";
    }
    $conn->close();
    $response = ['result'=>$respons];
?>