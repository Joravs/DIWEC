function ej2_28(){
    let v1 =2;
    let v2 =2;
    let v3 =2;

    if(v1 == 0 && v2 == 0 && v3 == 0){
        document.write("Todas las variables son 0<br>");
    }
    if(v1 > 0 && v2 >0 && v3>0){
        document.write("Todos los valores son positivos<br>");
    }
    if(v1 < 0 && v2 < 0 && v3 < 0){
        document.write("Todos los valores son negativos<br>");
    }
    if(v1!=v2!=v3){
        if(v1!=v2 && v2!=v3){
            document.write("Todos los valores son distintos<br>");
        }else{
            document.write("Dos valores son iguales<br>");
        }
    }else{
        document.write("Como maximo 2 de sus valores son iguales<br>");
    }
    if((v2>v1 && v2<v3)|| (v2<v1 && v2>v3)){
        document.write("El valor de v2 esta comprendido entre v1 y v3<br>");
    }
}