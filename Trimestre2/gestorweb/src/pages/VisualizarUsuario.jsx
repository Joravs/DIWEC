import { TablaUsuarios } from "./component/Tabla";
import {Link} from 'react-router-dom'

export default function VisualizarUsuario({modificar}){
    const buscarUsuario = ()=>{
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
        fetch("http://localhost:8080/jordyrl/DIWEC/Trimestre2/functionsphp/visualizarUsuario.php", {
            method: "POST",
            headers: headers,
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
    }

    return (
        <div className="row form text-center text-white p-auto">
            <div className="row-1 col-12 mt-5">
                <h2 className="fs-1">Buscar Usuario</h2>
            </div>
            <div id="mostrarUsuario" className="d-flex justify-content-center fs-5 mb-5">
                <button type="button" className="mt-5 col-6 btn btn-info" onClick={buscarUsuario}>Mostrar Usuarios</button>
            </div>
            <div className="d-flex justify-content-center fs-5 mt-5">
                <button className='btn btn-primary col-4 m-1'><Link to={`../`} className='text-white text-decoration-none'>Volver al Inicio</Link></button>
            </div>
        </div>
    );
}