export default class Pieza{
    constructor(numpiezas,numpedido,largo,ancho,grosor,color,ambascaras,cortada){
        this.numpiezas=parseInt(numpiezas>0?numpiezas:this.numpiezas);
        this.numpedido=parseInt(numpedido>0?numpedido:this.numpiezas);
        this.largo=parseFloat(largo>0?largo:this.largo);
        this.ancho=parseFloat(ancho>0?ancho:this.ancho);
        this.grosor=parseFloat(grosor>0?grosor:this.grosor);
        this.color=color?color:this.color;
        this.ambascaras=Boolean(ambascaras);
        this.cortada=Boolean(cortada);
    }
    setNumpiezas(numpiezas){
        this.numpiezas=parseInt(numpiezas>0?numpiezas:this.numpiezas);
    }
    setNumpedido(numpedido){
        this.numpedido=parseInt(numpedido>0?numpedido:this.numpiezas);
    }
    setLargo(largo){
        this.largo=parseFloat(largo>0?largo:this.largo);
    }
    setAncho(ancho){
        this.ancho=parseFloat(ancho>0?ancho:this.ancho);
    }
    setGrosor(grosor){
        this.grosor=parseFloat(grosor>0?grosor:this.grosor);
    }
    setColor(color){
        this.color=color?color:this.color;
    }
    setAmbascaras(ambascaras){
        this.ambascaras=Boolean(ambascaras);
    }
    setCortada(cortada){
        this.cortada=Boolean(cortada);
    }
    getNumpiezas(){
        return this.numpiezas;
    }
    getNumpedido(){
        return this.numpedido;
    }
    getLargo(){
        return this.largo;
    }
    getAncho(){
        return this.ancho;
    }
    getGrosor(){
        return this.grosor;
    }
    getColor(){
        return this.color;
    }
    getAmbascaras(){
        return this.ambascaras;
    }
    getCortada(){
        return this.cortada;
    }
}