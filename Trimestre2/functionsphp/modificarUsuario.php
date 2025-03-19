<?php    
require_once './ctdb.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

try {
    $eData = file_get_contents("php://input");
    $dData = json_decode($eData, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception("Error al decodificar JSON: " . json_last_error_msg());
    }

    $username = isset($dData['username']) ? $dData['username'] : "";
    $nombre = isset($dData['nombre']) ? $dData['nombre'] : "";
    $apellido = isset($dData['apellido']) ? $dData['apellido'] : "";
    $fechaNac = isset($dData['fechaNac']) ? $dData['fechaNac'] : "";
    $password = isset($dData['password']) ? password_hash($dData['password'], PASSWORD_BCRYPT) : "";

    $result = "";

    if ($username) {
        $sentencia = 'UPDATE usuario SET nombre=?, apellido=?, fechaNac=?, password=?,  WHERE username = ?';

        $stmt = $conn->prepare($sentencia);
        if (!$stmt) {
            throw new Exception("Error al preparar la consulta: " . $conn->error);
        }
        $stmt->bind_param('sssss', $nombre,$apellido,$fechaNac, $password, $username);
        $stmt->execute();

        if ($stmt->affected_rows > 0) {
            $result = "Usuario Modificado Correctamente";
        } else {
            $result = "No se realizaron cambios en el usuario o el usuario no existe";
        }
    } else {
        $result = "No se proporcionó usuario";
    }

    $conn->close();
} catch (Exception $e) {
    $result = "Error: " . $e->getMessage();
}

$jsonresponse = ['result' => $result];
$response = json_encode($jsonresponse);

if (json_last_error() !== JSON_ERROR_NONE) {
    echo "Error al codificar JSON: " . json_last_error_msg();
} else {
    echo $response;
}
?>