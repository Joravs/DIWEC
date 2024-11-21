export class Piezas{
    constructor(numpiezas,largo,ancho,grosor,color,ambascaras,cortada){
        this.numpiezas=Number(numpiezas>0?numpiezas:this.numpiezas);
        this.largo=largo>0?largo:this.largo;
        this.ancho=ancho>0?ancho:this.ancho;
        this.grosor=grosor>0?grosor:this.grosor;
        this.color=color?color:this.color;
        this.ambascaras=Boolean(ambascaras);
        this.cortada=Boolean(cortada);
    }
    setNumpiezas(numpiezas){
        this.numpiezas=Number(numpiezas>0?numpiezas:this.numpiezas);
    }
    setLargo(largo){
        this.largo=largo>0?largo:this.largo;
    }
    setAncho(ancho){
        this.ancho=ancho>0?ancho:this.ancho;
    }
    setGrosor(grosor){
        this.grosor=grosor>0?grosor:this.grosor;
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