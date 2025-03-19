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