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
    StringPiezas(){
        return `Número de piezas: ${this.numpiezas}, Largo: ${this.largo} cm, Ancho: ${this.ancho} cm, Grosor: ${this.grosor} cm, Color: ${this.color}, Ambascaras: ${this.ambascaras}, Cortada: ${this.cortada}`;
    }
}
class Pedidos{
    constructor(numpedido,nombre,apellido,procesado,servido){
        this.numpedido=Number(numpedido>0? numpedido:this.numpedido);
        this.cliente=new Cliente(nombre?nombre:this.nombre,apellido?apellido:this.apellido);
        this.fechapedido=new Date();
        this.procesado=Boolean(procesado);
        this.servido=Boolean(servido);
    }
}
class Cliente{
    constructor(nombre,apellido){
        this.nombre=nombre?nombre:this.nombre;
        this.apellido=apellido?apellido:this.apellido;
    }
}

let Listpiezas=[];
const GetDatPiezas=localStorage.getItem('datosPiezas');
const table=document.getElementById('tbl');
const tr=document.createElement('tr');
const td=document.createElement('td');

function detalles(){
    console.log(GetDatPiezas);
}

function darAlta(){
    piz=new Piezas(
        document.getElementById('numpieza').value,
        document.getElementById('largo').value,
        document.getElementById('ancho').value,
        document.getElementById('grosor').value,
        document.getElementById('color').value,
        document.getElementById('ambascaras').value,
        document.getElementById('cortada').value
    );
    Listpiezas.push(piz);
    const SetDatPiezas=localStorage.setItem('datosPiezas',JSON.stringify(Listpiezas));
    window.alta.close();
}