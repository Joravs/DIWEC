export function TablaUsuarios({valores}){
    let datos = [];
    let admin = false
    if (!valores || (Array.isArray(valores) && valores.length === 0)) {
        return ''
    }
    if (Array.isArray(valores)) {
        datos = valores;
    } else if (typeof valores === 'object' && valores !== null) {
        datos = Array.isArray(valores.result) ? valores.result : [valores.result];
        admin = datos.length===1?true:false
    }
    const handleButton = (usuario,tipo) => {
        if(tipo=='modificar'){
            console.log('Modificar usuario:', usuario)
        }else if(tipo=='eliminar'){
            const eliminar = async()=>{
                const headers = {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
                const data = {username: usuario}
                fetch("http://localhost:8085/deleteusuario.php", {
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
                    console.log('Usuario eliminado:', data)
                })
                .catch((data) => {
                    console.error('Error:', data)
                });
            }
            eliminar();
    }}
    return(
        <div className="table-responsive mx-auto">
            <table className="table table-primary">
                <thead>
                    <tr>
                        <th scope="col">Nombre de Usuario</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Fecha de Nacimiento</th>
                        {admin==true?
                            <th scope="col" colSpan={2}>Acciones</th>
                        :''
                        }
                    </tr>
                </thead>
                <tbody>
                {datos.map((usuario,index)=>(
                    <tr key={index}>
                        <td>{usuario.username}</td>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.apellido}</td>
                        <td>{usuario.fechaNac}</td>
                        {admin==true?
                            <td>
                                <button type="button" className="btn btn-info" onClick={()=>{handleButton(usuario.username,'modificar')}}>Modificar</button>
                                <button type="button" className="btn btn-info" onClick={()=>{handleButton(usuario.username,'eliminar')}}>Eliminar</button>
                            </td>
                        :''
                        }
                    </tr>
                ))
                }
                </tbody>
            </table>
        </div>
    )
}