import { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom';
import {expresionesContext} from '../functions/RegularExpressions';
import { TablaUsuarios } from "./component/Tabla";
import {Link} from 'react-router-dom';

export default function AdministrarUsuario(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [logun,setLogUn]= useState([]);
    const [error1, setError1] = useState(false);
    const [log,setLog]= useState();

    const{expressions}=useContext(expresionesContext);

    const handleSubmit=(e)=>{
        let value=e.target.value;
            setUsername(value)
            let hasError1 = false
            let logMessages1 = []
            if(!expressions.username3.test(value)){
                hasError1 = true;
                logMessages1.push('Debe tener mínimo 6 caracteres');
            }
            setError1(hasError1)
            setLogUn(logMessages1)
    }
    const buscarUsuario = ()=>{
        if(username!=""){
            const headers = {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
            const data = {username}
            fetch("http://localhost/DIWEC/Trimestre2/functionsphp/verUsuario.php", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            })
           .then((response)=>{
               if(!response.ok){
                   throw new Error("Fallo en la conexion");
                }
                return response.json()
            })
            .then((data)=>{
                TablaUsuarios(data)
            })
            .catch((data) => {
                console.error('Error:', data)
            });
        }else{
            setLog('No se pudo administrar este usuario')
        }
    }

    return (
        <div className="row form text-center text-white p-auto">
            <div className="row-1 col-12 mt-5">
                <h2 className="fs-1">Administrar Usuario</h2>
            </div>
            <div className="row m-auto my-5 w-75">
                <div className="mb-3 col-6">
                    <label htmlFor="username" className="form-label fs-3">Nombre de Usuario</label>
                    <input type="text" className="form-control fs-6" name="username" id="username" aria-describedby="usernameHelp" value={username} onChange={(e)=>handleSubmit(e)} required autoComplete="off"/>
                    <small id="usernameHelp" className="form-text text-info fs-6">
                        {
                            error1?
                            logun.map((log1,index)=>(
                                <li key={index}>{log1}</li>
                            )):
                            ''
                        }
                    </small>
                </div>
                    <button type="button" className="h-50 align-self-end col-6 btn btn-info" onClick={buscarUsuario}>Buscar Usuario</button>
            </div>
            <div id="mostrarUsuario" className="d-flex justify-content-center fs-5">        
            </div>
            <div className="d-flex justify-content-center fs-5 mt-5">
                <button className='btn btn-primary col-4 m-1'><Link to={`../`} className='text-white text-decoration-none'>Volver al Inicio</Link></button>
            </div>
        </div>
    );
}