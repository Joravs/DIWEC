function ej2_38(){
    const p=document.getElementById("38");

    for (let i=1;i<=25;i++){
        p.innerHTML+=i+" ";
        if(i%4==0){
            p.innerHTML+="<br>";
        }
    }
}