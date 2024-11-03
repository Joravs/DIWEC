function ej2_13(){
    let precio = prompt("Introduce el precio: ");
    let iva = prompt("Introduce IVA: ");

    let preciototal = (precio*iva);

    document.write(`Precio total a pagar es: ${preciototal}`);
}