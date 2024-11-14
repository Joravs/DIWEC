class Piezas{
    numpedido=0;
    numpiezas=0;
    largo=0;
    ancho=0;
    grosor=0;
    color="Natural";
    ambascaras=false;
    cortada=false;

    constructor(numpiezas,numpedido,largo,ancho,grosor,color,ambascaras,cortada){
        this.numpiezas=numpiezas?numpiezas:this.numpiezas;
        this.numpedido=Number(numpedido>0? numpedido:this.numpedido);
        this.largo=largo?largo:this.largo;
        this.ancho=ancho?ancho:this.ancho;
        this.grosor=grosor?grosor:this.grosor;
        this.color=color?color:this.color;
        this.ambascaras=ambascaras;
        this.cortada=cortada;
    }
}