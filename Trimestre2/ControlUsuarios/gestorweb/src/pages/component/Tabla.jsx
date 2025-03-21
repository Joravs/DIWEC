import {useState,useContext, useEffect} from 'react'
import {expresionesContext} from '../../functions/RegularExpressions';
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
    const [user,setUser]=useState({})
    const [nombre, setNombre] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [apellido, setApellido] = useState("")
    const [fechaNac, setFechaNac] = useState("")
    const [logpw,setLogPw]= useState([]);
    const [logf,setLogF]= useState([]);
    const [error2, setError2] = useState(false)
    const [error3, setError3] = useState(false)

    const{expressions}=useContext(expresionesContext);

    const handleEdad=(e)=>{
        var hoy = new Date();
        var edad= new Date(e.target.value);
        edad = hoy.getFullYear() - edad.getFullYear();
        if(edad >= 18){
            setFechaNac(e.target.value);
        }else{
            setError3(true);
            setLogF('Debe ser mayor de edad ( 18 )')
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
            case 'password':
                setPassword(value)
                let hasError2 = false
                let logMessages2 = []
                if(!expressions.password1.test(value)){
                    hasError2 = true;
                    logMessages2.push('Debe tener una minuscula');
                }if(!expressions.password2.test(value)){
                    hasError2 = true;
                    logMessages2.push('Debe tener una mayuscula');
                }if(!expressions.password3.test(value)){
                    hasError2 = true;
                    logMessages2.push('Debe tener un digito');
                }if(!expressions.password4.test(value)){
                    hasError2 = true;
                    logMessages2.push('Debe tener minimo 8 caracteres');
                }
                setError2(hasError2)
                setLogPw(logMessages2)
            break;
        }
    }
    const updateSubmit = async()=>{
        if(nombre!=="" && apellido!=="" && password!="" && fechaNac!==""){
            const headers = {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
            const data = {nombre,apellido,username,password,fechaNac}
            await fetch("http://localhost:8085/modificarUsuario.php", {
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
           .then(()=>{
                setNombre("")
                setApellido("")
                setPassword("")
                setFechaNac("")
                setUsername("")
                setLogPw([])
                setLogF([])
                setError2(false)
                setError3(false)
                alert('Usuario Modificado Correctamente')
            })
           .catch((data) => {
                console.error('Error:', data)
                if(data.result){
                    setLog(data.result)
                }
            });
        }else{
            setLog('Faltan Datos')
        }
    }

    useEffect(()=>{
        setUsername(user.username)
        setNombre(user.nombre)
        setApellido(user.apellido)
        setPassword(user.password)
        setFechaNac(user.fechaNac)
    },[user])
    const handleButton = (usuario,tipo) => {
        if(tipo=='modificar'){
            setUser(usuario)
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
                                <button type="button" className="btn btn-info" onClick={()=>{handleButton(usuario,'modificar')}} data-bs-toggle="modal" data-bs-target="#Update">Modificar</button>
                                <button type="button" className="btn btn-info" onClick={()=>{handleButton(usuario.username,'eliminar')}}>Eliminar</button>
                            </td>
                        :''
                        }
                    </tr>
                ))
                }
                </tbody>
            </table>
            <div className="modal fade" id="Update" tabindex="-1" role="dialog" aria-labelledby="modalTitleId">
                <div className="modal-dialog modal-sm modal-fullscreen" role="document">
                    <div className="modal-content">
                    <div className="row form text-center text-white p-auto">
                            <div className="row-1 col-12 mt-5">
                                <h2 className="fs-1">Actualizar de Usuario</h2>
                                <small>No hace falta rellenar todos los campos</small>
                            </div>
                            <div className="row m-auto my-5 w-75">
                                <div className="mb-3 col-4">
                                    <label htmlFor="username" className="form-label fs-3">Nombre de Usuario</label>
                                    <input type="text" className="form-control fs-6" name="username" id="username" aria-describedby="usernameHelp" value={user.username} readOnly/>
                                </div>
                                <div className="mb-3 col-6">
                                    <label htmlFor="nombre" className="form-label fs-3 fs-3">Nombre</label>
                                    <input type="text" className="form-control fs-6" name="nombre" id="nombre" placeholder={user.nombre} onChange={(e)=>handleSubmit(e,'nombre')} autoComplete="off"/>
                                </div>
                                <div className="mb-3 col-6">
                                    <label htmlFor="apellido" className="form-label fs-3">Apellidos</label>
                                    <input type="text" className="form-control fs-6" name="" id="" placeholder={user.apellido} onChange={(e)=>handleSubmit(e,'apellido')} autoComplete="off"/>
                                </div>
                                <div className="mb-3 col-4">
                                    <label htmlFor="password" className="form-label fs-3">Contraseña</label>
                                    <input type="password" className="form-control fs-6" name="password" id="password" aria-describedby="passwordHelp" placeholder={user.password} onChange={(e)=>handleSubmit(e,'password')} required autoComplete="off"/>
                                    <small id="passwordHelp" className="form-text text-info fs-6">
                                        {
                                            error2?
                                            logpw.map((log2,index)=>(
                                                <li key={index}>{log2}</li>
                                            )):
                                            ''
                                        }
                                    </small>
                                </div>
                                <div className="mb-3 col-4">
                                    <label htmlFor="fechaNac" className="form-label fs-3">Fecha de Nacimiento</label>
                                    <input type="date" className="form-control fs-6" name="fechaNac" id="fechaNac"aria-describedby="fechaNacHelp" placeholder={user.fechaNac} onChange={(e)=>handleEdad(e)} autoComplete="off"/>
                                    <small id="fechaNacHelp" className="form-text text-info fs-6">{error3?logf:''}</small>
                                </div>
                                <button type="button" className="btn btn-info" onClick={updateSubmit}>Actualizar Usuario</button>
                                <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#Update">Cerrar</button>
                                <small>Para Salir de Este Formulario pulsa "Esc"</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}