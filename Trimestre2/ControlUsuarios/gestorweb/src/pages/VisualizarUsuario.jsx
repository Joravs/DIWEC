import {useRef,useState} from 'react'
import { TablaUsuarios } from "./component/Tabla";
import AdministrarUsuario from './AdministrarUsuario'
import AltaUsuario from './AltaUsuario'
import StatLenta from './StatLenta';

export default function VisualizarUsuario(){
    const modalRef = useRef(null);
    const [valores, setValores] = useState([])
    const buscarUsuario = async()=>{
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
        await fetch("http://localhost:8085/visualizarUsuario.php", {
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
            setValores(data)
        })
        .catch((data) => {
            console.error('Error:', data)
        });
    }
    return (
        <div className="row form text-center text-white p-auto">
            <div className="row-1 col-12">
                <h2 className="fs-1">Gestion de Usuarios</h2>
            </div>
            <div className="row-1 col-12">
                <AdministrarUsuario setValores={setValores}/>
                <div id="mostrarUsuario" className="d-flex justify-content-center fs-5 mb-5">
                    <TablaUsuarios closeModal={() => modalRef.current?.classList.remove('show')} valores={valores}/>
                </div>       
                <div className="modal fade" id="modalId" tabindex="-1" role="dialog" aria-labelledby="modalTitleId"aria-hidden="true">
                    <div className="modal-dialog modal-sm modal-fullscreen" role="document">
                        <div className="modal-content">
                            <AltaUsuario closeModal={() => modalRef.current?.classList.remove('show')} />
                        </div>
                    </div>
                </div>
                <div className="row mx-auto col-8 gap-3">
                    <button type="button" className="mt-5 col-5 btn btn-info" onClick={buscarUsuario}>Mostrar Todos Usuarios</button>
                    <button type="button" className="mt-5 col-5 btn btn-info" data-bs-toggle="modal" data-bs-target="#modalId">Alta de Usuario</button>
                    <StatLenta/>
                </div>
            </div>
        </div>
    );
}