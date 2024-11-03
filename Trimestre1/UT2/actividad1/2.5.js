function multiplicarNum(){
    let num=0;

    num= window.prompt("Introduce un numero: ");

    for(let i=2;i<=4;i++){
        document.write("Numero multiplicado por "+i+ " es igual a "+(num*i)+"<br>");
    }
}