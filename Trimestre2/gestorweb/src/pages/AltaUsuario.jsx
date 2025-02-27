import { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom';
import {expresionesContext} from '../functions/RegularExpressions';

export default function AltaUsuario(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [nombre, setNombre] = useState("");
    const [password, setPassword] = useState("");
    const [apellido, setApellido] = useState("");
    const [fechaNac, setFechaNac] = useState("");
    let [log,setLog]= useState("");

    const{expressions}=useContext(expresionesContext);

    const handleEdad=(e)=>{
        var hoy = new Date();
        var edad= new Date(e.target.value);
        edad = hoy.getFullYear() - edad.getFullYear();
        if(edad >= 18){
            setFechaNac(e.target.value);
        }
    }
    const handleSubmit=(e,type)=>{
        let value=e.target.value;
        switch(type){
            case 'nombre':
                setNombre(value);
                break;
            case 'apellido':
                setApellido(value);
                break;
            case 'username':
                setUsername(value);
                break;
            case 'password':
                setPassword(value);
                break;
        }
    }
    const insertSubmit = ()=>{
        setUsername(expressions.username.test(username)?username:'');
        setPassword(expressions.password.test(password)?password:'');
        if(nombre!=="" && apellido!=="" && username!=="" && password!==""){
            const headers = {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
            const data = {nombre,apellido,username,password}

            fetch("http://localhost:8080/jordyrl/DIWEC/Trimestre2/functionsphp/altaUsuario.php", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            })
           .then((response)=>{
            if(!response.ok){
                throw new Error("Fallo en la conexion");
            }
            response.json()
           })
           .catch((data) => {
                console.error('Error:', data)
                if(data.result){
                    setLog(data.result)
                }
            });
        }else{
            setLog('Dato Incorrecto')
        }
    }

    return (
        <div className="form">
            <h2>Alta de Usuario</h2>
            {
                log!==""?
                <p className="errorClass">{log}</p>
                :
                null
            }
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e)=>handleSubmit(e,'nombre')} required autoComplete="off"/>
                <br/>
                <label for="apellido">Apellidos:</label>
                <input type="text" id="apellido" name="apellido" value={apellido} onChange={(e)=>handleSubmit(e,'apellido')} required autoComplete="off"/>
                <br/>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" value={username} onChange={(e)=>handleSubmit(e,'username')} autoComplete="off"/>
                <br/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={(e)=>handleSubmit(e,'password')} autoComplete="off"/>
                <br/>
                <label for="fechaNac">Fecha Nacimiento:</label>
                <input type="date" id="fechaNac" name="fechaNac" value={fechaNac} onChange={(e)=>handleEdad(e)} required autoComplete="off"/>
                <br/>
                <input type="button" value="Insertar Usuario" onClick={insertSubmit}/>
        </div>
    );
}