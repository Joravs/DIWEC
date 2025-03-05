export const UpdateOrDelete= (data, option)=> {
    console.log('Datos '+option);
    const eliminarUsuario = (data)=>{
        console.log('Eliminar '+data);
        // const headers = {
        //     Accept: "application/json",
        //     "Content-Type": "application/json",
        // }
        // fetch("http://localhost/DIWEC/Trimestre2/functionsphp/deleteusuario.php", {
        //     method: "POST",
        //     headers: headers,
        //     body: data,
        // })
        // .then((response)=>{
        //     if(!response.ok){
        //         throw new Error("Fallo en la conexion");
        //     }
        //     return response.json()
        // })
        // .catch((data) => {
        //     console.error('Error:', data)
        // });
    }
    const modificarUsuario = (data)=>{
        console.log('Modificar '+data);
        // const headers = {
        //     Accept: "application/json",
        //     "Content-Type": "application/json",
        // }
        // fetch("http://localhost/DIWEC/Trimestre2/functionsphp/updateusuario.php", {
        //     method: "POST",
        //     headers: headers,
        //     body: data,
        // })
        // .then((response)=>{
        //     if(!response.ok){
        //         throw new Error("Fallo en la conexion");
        //     }
        //     return response.json()
        // })
        // .then((data)=>{
        //     TablaUsuarios(data)
        // })
        // .catch((data) => {
        //     console.error('Error:', data)
        // });
    }
    if(option === 'eliminar'){
        eliminarUsuario(data);
    }else if(option ==='modificar'){
        modificarUsuario(data);
    }
}