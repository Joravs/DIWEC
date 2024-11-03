function ej2_24(){
    //Identificar cuantos días tiene el mes.
    let mes = 2;
    let diasMes = new Date(0, mes, 0).getDate();

    //Imprimir el resultado. 0-January, 1-February, etc.
    
    document.write(`El mes ${mes} tiene ${diasMes} días.`);
}