<?php
    require_once './ctdb.php';
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: POST');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');
    try{
        $eData = file_get_contents("php://input");
        $dData = json_decode($eData, true);
    
        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new Exception("Error al decodificar JSON: " . json_last_error_msg());
        }
    
        $username = $dData['username'];
        $anio = $dData['anio'];
        $mes = $dData['mes'];
        $handle= fopen('./log.txt', 'a');
        fwrite($handle, $username . ' ' . $anio . ' ' . $mes . PHP_EOL); 
        fclose($handle);
        $result= "";
        
        if($username){
            $stmt = $conn -> prepare ('SELECT AVG(lenta),MIN(lenta),MAX(lenta) FROM controlGlucosa
            inner JOIN usuario on (usuario.idUsuario=controlglucosa.idUsuario)
            where username = ?
            AND MONTH(fecha) = ?
            AND YEAR(fecha) = ?');
            if(!$stmt){
                throw new Exception("Error al preparar la consulta: ". $conn->error);
            }
            $stmt -> bind_param('sss', $username,$mes,$anio);
            $stmt -> execute();
            $stmt->bind_result($avg, $min, $max);
    
            if($stmt->fetch()){
                $result= ["media"=>$avg, "min"=>$min, "max"=>$max];
            }else{
                $result="Ha ocurrido un problema en la obtencion de los datos";
            }
        }else{
            $result="No se proporciono usuario o fecha";
        }
        $conn->close();
    }catch(Exception $e){
        $result= "Error: ".$e->getMessage();
    }
        $jsonresponse = ['result'=>$result];
        $response = json_encode($jsonresponse);
        if (json_last_error() !== JSON_ERROR_NONE) {
            echo "Error al decodificar JSON: " . json_last_error_msg();
        }else{
            echo $response;
        }
?>