function dividirNum(){
    let num1= 25;
    let num2 =5;
    let sol=num1/num2;
    document.write(sol);
};

//Al dividir 2 textos con numeros, hace la division, pero al meter un texto aparece NaN
//Y al dividir entre 0 aparece infinito
//Si no se introduce nada, aparece infinito
function dividirText(){
    let text1= "25";
    let text2 = "h";
    let sol2=text1/text2;
    document.write(sol2);
};