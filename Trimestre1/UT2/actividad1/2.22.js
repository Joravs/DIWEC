function ej2_22(){
    let suma=0;
    let num=0;
    let sw=true;
    let cont=0;
    while(sw){
        num = prompt("Introduce un numero|Si quieres salir introduce una letra");

        if (isNaN(num)){
            sw=false;
        }else{
            suma += parseInt(num);
            cont++;
        }
    }
    document.write("<br>La suma de los numeros introducidos es: "+suma);
    document.write("<br>El numero de numeros introducidos es: "+cont);
    let promedio=suma/cont;
    document.write("<br>El promedio es: "+promedio);
}