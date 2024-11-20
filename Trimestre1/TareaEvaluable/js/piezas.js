class Piezas{
    constructor(numpiezas,numpedido,largo,ancho,grosor,color,ambascaras,cortada){
        this.numpiezas=Number(numpiezas>0?numpiezas:this.numpiezas);
        this.numpedido=Number(numpedido>0? numpedido:this.numpedido);
        this.largo=largo>0?largo:this.largo;
        this.ancho=ancho>0?ancho:this.ancho;
        this.grosor=grosor>0?grosor:this.grosor;
        this.color=color?color:this.color;
        this.ambascaras=Boolean(ambascaras);
        this.cortada=Boolean(cortada);
    }
}