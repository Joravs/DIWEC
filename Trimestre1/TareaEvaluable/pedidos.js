class Pedidos{
    numpedido=0;
    nombre="";
    apellido="";
    fechapedido="";
    procesado=false;
    servido=false;

    constructor(numpedido,nombre,apellido,fechapedido,procesado,servido){
        this.numpedido=Number(numpedido>0? numpedido:this.numpedido);
        this.cliente=new Cliente(nombre?nombre:this.nombre,apellido?apellido:this.apellido);
        this.fechapedido=fechapedido?fechapedido:this.fechapedido;
        this.procesado=procesado;
        this.servido=servido;
    }
}