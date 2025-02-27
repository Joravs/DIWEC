<?php
require_once './ctdb.php';
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

$result= "";
if($nombre && $apellido && $fechaNac && $username && $password){
    $stmt = $conn -> prepare ('INSERT INTO usuario (nombre,apellido,fechaNac,username,password)
                                VALUES (?,?,?,?,?);');
    $stmt -> bind_param('sssss', $nombre, $apellido,$fechaNac ,$username, $password);
    $stmt -> execute();
    if($stmt->affected_rows){
        return $result="Usuario creado correctamente";
    }else{
        return $result="Ha ocurrido un problema en la creacion del usuario";
    }
}else{
    return $result="Todos los campos son requeridos";
}
$conn->close();
$response = ['result'=>$result];
json_encode($response);
echo $response;