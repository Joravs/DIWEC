import Cliente from './cliente.js';
export default class Pedido{
    constructor(numpedido,nombre,apellido,procesado,servido,fecha){
        this.numpedido=parseInt(numpedido>0? numpedido:this.numpedido);
        this.cliente=new Cliente(nombre?nombre:this.nombre,apellido?apellido:this.apellido);
        this.fechapedido=this.validarFecha(fecha);
        this.procesado=Boolean(procesado);
        this.servido=Boolean(servido);
    }
    validarFecha(fecha) {
        let Fnow=new Date(Date.now());
        let Frec=new Date(Date.parse(fecha));
        let fech="";
        if (Frec>=Fnow){
            fech=Fnow.getFullYear()+"-"+Fnow.getMonth()+"-"+Fnow.getDay();
            return fech;
        }else{
            fech=Frec.getFullYear()+"-"+Frec.getMonth()+"-"+Frec.getDay();
            return fech;
        }
    }

    setNumpedido(numpedido){
        this.numpedido=parseInt(numpedido>0? numpedido:this.numpedido);
    }
    setCliente(nombre,apellido){
        this.cliente.setNombre(nombre);
        this.cliente.setApellido(apellido);
    }
    setFechapedido(fechapedido){
        this.fechapedido=new Date(fechapedido);
    }
    setProcesado(procesado){
        this.procesado=Boolean(procesado);
    }
    setServido(servido){
        this.servido=Boolean(servido);
    }
    getNumpedido(){
        return this.numpedido;
    }
    getCliente(){
        return this.cliente;
    }
    getFechapedido(){
        return this.fechapedido;
    }
    getProcesado(){
        return this.procesado;
    }
    getServido(){
        return this.servido;
    }
}