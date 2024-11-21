class Piezas{
    constructor(numpiezas,largo,ancho,grosor,color,ambascaras,cortada){
        this.numpiezas=Number(numpiezas>0?numpiezas:this.numpiezas);
        this.largo=largo>0?largo:this.largo;
        this.ancho=ancho>0?ancho:this.ancho;
        this.grosor=grosor>0?grosor:this.grosor;
        this.color=color?color:this.color;
        this.ambascaras=Boolean(ambascaras);
        this.cortada=Boolean(cortada);
    }
}