function mostrarVida(){
    let edad=0;
    let nombre="";

    nombre=prompt("Introduce tu nombre: ");
    edad=prompt("Introduce tu edad: ");

    let vida=edad*365;

    document.write(`Nombre: ${nombre} , dias vividos: ${vida}`);
}