function ej2_40(){
    const p=document.getElementById("40");
    let cont=1;
    do{
        p.innerHTML+=cont+" ";
        if(cont%4==0){
            p.innerHTML+="<br>";
        }
        cont++;
    }while(cont<=25);
}