<<<<<<< HEAD
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
=======
export function TablaUsuarios(data){
    let compos=``;
    const handleButton= (username,tipo)=>{
        if(tipo=="modificar"){

        }
        else if(tipo=="eliminar"){
            
        }
    }
    const tablaData = (data)=>{
        let tablaHTML ='';
        for(const key in data){
            const valor=data[key];
            if(valor.length){
                for(let i=0;i<valor.length;i++){
                    let datosMostrar = valor[i]?valor[i]:valor;
                    tablaHTML += `<tr>
                        <td>${datosMostrar.username}</td>
                        <td>${datosMostrar.nombre}</td>
                        <td>${datosMostrar.apellido}</td>
                        <td>${datosMostrar.fechaNac}</td>
                    </tr>`
                }
            }else{
                compos=`<th scope="col">Modificar</th><th scope="col">Eliminar</th>`;
                tablaHTML += `<tr>
                        <td>${valor.username}</td>
                        <td>${valor.nombre}</td>
                        <td>${valor.apellido}</td>
                        <td>${valor.fechaNac}</td>
                        <td><button id="${valor.username}" value="${valor.username}" type="button" class="align-self-end btn btn-info" onClick="${handleButton(valor.username,'modificar')}">Modificar Usuario</button></td>
                        <td><button id="${valor.nombre}" value="${valor.nombre}" type="button" class="align-self-end btn btn-info" onClick="${handleButton(valor.username,'eliminar')}">Eliminar Usuario</button></td>
                    </tr>`
            }
        }
        return tablaHTML;
    }

    const mostrarDatos = (data)=>{
        const mostrarUsuario=$('#mostrarUsuario');
        let datos = `
            <div className="table-responsive mx-auto">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Nombre de Usuario</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Fecha de Nacimiento</th>
                            ${compos}
                        </tr>
                    </thead>
                    <tbody>
                        ${tablaData(data)}
                    </tbody>
                </table>
            </div>`;
        $(mostrarUsuario).html(datos);
    }
    return(mostrarDatos(data));
>>>>>>> 4824f301cf891b7c377499321732b92053f4ceba
}