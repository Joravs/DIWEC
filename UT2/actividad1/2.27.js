function ej2_27(){
    let dia=0, mes=0,anio=0;
    dia=prompt("Introduce dia");
    mes=prompt("Introduce mes");
    anio=prompt("Introduce año");
    if (dia>0 && dia < 32){
        if (mes>0 && mes<13){
            if (anio>0){
                document.write("La fecha es correcta");
                if (anio%4==0 || anio%400==0){
                    document.write("<br>El anio es bisiesto " + `${dia}/${mes}/${anio}`);
                }else{
                    document.write("<br>El anio no es bisiesto "  + `${dia}/${mes}/${anio}`);
                }
            }else{
                document.write("El año introducido no es valido");
            }
        }else{
            document.write("El mes introducido no es valido");
        }
    }else{
        document.write("El dia introducido no es valido");
    }
}