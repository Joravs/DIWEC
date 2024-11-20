class Pedidos{
    constructor(numpedido,nombre,apellido,procesado,servido){
        this.numpedido=Number(numpedido>0? numpedido:this.numpedido);
        this.cliente=new Cliente(nombre?nombre:this.nombre,apellido?apellido:this.apellido);
        this.fechapedido=new Date();
        this.procesado=Boolean(procesado);
        this.servido=Boolean(servido);
    }
}