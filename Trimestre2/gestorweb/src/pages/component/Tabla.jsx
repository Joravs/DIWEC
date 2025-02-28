export function TablaUsuarios(data){
    let mostrarBoton = false;
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
                mostrarBoton = true;
                tablaHTML += `<tr>
                        <td>${valor.username}</td>
                        <td>${valor.nombre}</td>
                        <td>${valor.apellido}</td>
                        <td>${valor.fechaNac}</td>
                        <td><button className='btn btn-primary' onClick="${modificar}">Modificar</Link></button></td>
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
                            ${
                                mostrarBoton?
                                `<th scope="col">Modificar</th>`:
                                ''
                            }
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
}