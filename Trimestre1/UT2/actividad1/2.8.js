function mostrarInformacion(){
    let apellido="";
    let nombre="";
    let poblacion="";

    nombre=window.prompt("Nombre: ");
    apellido=window.prompt("Apellido: ");
    poblacion=window.prompt("Poblacion: ");

    document.write(`Hola ${nombre} ${apellido},<br>Adios habitante de ${poblacion}`);
}