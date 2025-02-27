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

    const{expressions}=useContext(expresionesContext);
    const handleUsername= (e)=>{
        let value=e.target.value;
        if(expressions.username.test(value)){
            setUsername(value);
        }
    }
    const handlePassword= (e)=>{
        let value=e.target.value;
        if(expressions.password.test(value)){
            setPassword(value);
        }
    }
    const handleEdad=(e)=>{
        var hoy = new Date();
        var edad= new Date(e.target.value);
        edad = hoy.getFullYear() - edad.getFullYear();
        if(edad >= 18){
            setFechaNac(e.target.value);
        }
    }
    const handleSubmit=(e,type)=>{
        switch(type){
            case 'nombre':
                setNombre(e.target.value);
                break;
            case 'apellido':
                setApellido(e.target.value);
                break;
        }
    }
    const insertSubmit = ()=>{
        if(nombre!=="" && apellido!=="" && username!=="" && password!==""){
            const headers = {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
            const data = {nombre,apellido,username,password}

            fetch("http://localhost/DIWEC/Trimestre2/functionsphp/php/altaUsuario.php", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            })
           .then((response) => response.json())
           .then((response)=>{
            if(response[0].respons==="Usuario creado correctamente"){
                navigate('../');
            }
           })
           .catch((error) => {
                console.error('Error:', error);
            });
        }
    }

    return (
        <div className="form">
            <h2>Alta de Usuario</h2>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e)=>handleSubmit(e,'nombre')} required autoComplete="off"/>
                <br/>
                <label for="apellido">Apellidos:</label>
                <input type="text" id="apellido" name="apellido" value={apellido} onChange={(e)=>handleSubmit(e,'apellido')} required autoComplete="off"/>
                <br/>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" value={username} onChange={(e)=>handleUsername(e)} autoComplete="off"/>
                <br/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={(e)=>handlePassword(e)} autoComplete="off"/>
                <br/>
                <label for="fechaNac">Fecha Nacimiento:</label>
                <input type="date" id="fechaNac" name="fechaNac" value={fechaNac} onChange={(e)=>handleEdad(e)} required autoComplete="off"/>
                <br/>
                <input type="button" value="Insertar Usuario" onClick={insertSubmit}/>
        </div>
    );
}