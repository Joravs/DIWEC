import Cliente from './cliente.js';
export default class Pedidos{
    constructor(numpedido,nombre,apellido,procesado,servido){
        this.numpedido=parseInt(numpedido>0? numpedido:this.numpedido);
        this.cliente=new Cliente(nombre?nombre:this.nombre,apellido?apellido:this.apellido);
        this.fechapedido=new Date();
        this.procesado=Boolean(procesado);
        this.servido=Boolean(servido);
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