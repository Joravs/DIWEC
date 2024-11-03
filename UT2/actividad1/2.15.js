function ej2_15(){
    let num = 7;
    switch (num){
        case 1:
        case 2:
        case 3:
        case 4:
            document.write("Suspenso");
            break;
        case 5:
        case 6:
            document.write("Aprobado");
            break;
        case 7:
        case 8:
            document.write("Notable");
            break;
        case 9:
        case 10:
            document.write("Sobresaliente");
            break;
    }
    document.write(" 'Switch con condiciones' ");
    switch (true){
        case num<5:
            document.write("Suspenso");
            break;
        case num<=6:
            document.write("Aprobado");
            break;
        case num<=8:
            document.write("Notable");
            break;
        case num<=10:
            document.write("Sobresaliente");
            break;
    }
}