function ej2_20() {
let opcion;
let numero;
let suma = 0;
    document.write("1. Salir<br>");
    document.write("2. Sumatorio<br>");
    document.write("3. Factorial<br>");

    opcion = parseInt(prompt("Introduce una opción:"));

    while (opcion == 1){
        switch (opcion) {
            case 1:
                alert("Saliendo...<br>");
                break;
            case 2:
                numero = parseInt(prompt("Introduce un número:"));
                for (let i = 1; i <= numero; i++) {
                    suma += i;
                }
                document.write("El sumatorio de los números desde 1 hasta " + numero + " es: " + suma + "<br>");
                suma = 0;
                break;
            case 3:
                numero = parseInt(prompt("Introduce un número:"));
                let factorial = 1;
                for (let i = 2; i <= numero; i++) {
                    factorial *= i;
                }
                document.write("El factorial de " + numero + " es: " + factorial + "<br>");
                break;
        }
    }
}