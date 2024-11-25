import Pedidos from './pedidos.js';
import Piezas from './piezas.js';

const GetDatPiezas=localStorage.getItem('datosPiezas');
let Listpiezas=GetDatPiezas?JSON.parse(GetDatPiezas):[];

const GetDatPedidos=localStorage.getItem('datosPedidos');
let Listpedidos=GetDatPedidos?JSON.parse(GetDatPedidos):[];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function darAltaPieza(){
    console.log(Listpiezas);
    if(Listpiezas.find((el)=>el.numpiezas==document.getElementById('numpiezaalta').value)){
        alert('El número de pieza ya existe');
        return;
    }else{
        let piz=new Piezas(
            document.getElementById('numpiezaalta').value,
            document.getElementById('numpedidoPieza').value,
            document.getElementById('largo').value,
            document.getElementById('ancho').value,
            document.getElementById('grosor').value,
            document.getElementById('color').value,
            document.getElementById('ambascaras').value,
            document.getElementById('cortada').value
        );
        Listpiezas.push(piz);
        const SetDatPiezas=localStorage.setItem('datosPiezas',JSON.stringify(Listpiezas));
        window.altaPieza.close();
    }
}

function darBajaPieza(){
    if(Listpiezas.find((el)=> el.numpiezas==document.getElementById('numpiezabaja').value)){
        Listpiezas.splice(Listpiezas.indexOf(document.getElementById('numpiezabaja').value),1);
    }else{
        alert('El número de pieza no existe');
        return;
    }
    const SetDatPiezas=localStorage.setItem('datosPiezas',JSON.stringify(Listpiezas));
    window.bajaPieza.close();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function darAltaPedido(){
    if(Listpedidos.find((el)=>el.numpedido==document.getElementById('numpedidoalta').value)){
        alert('El número de pedido ya existe');
        return;
    }else{
        let ped=new Pedidos(
            document.getElementById('numpedidoalta').value,
            document.getElementById('nombreclientealta').value,
            document.getElementById('apellidoclientealta').value,
            document.getElementById('procesadoalta').value,
            document.getElementById('servidoalta').value
        );
        Listpedidos.push(ped);
        const SetDatPedidos=localStorage.setItem('datosPedidos',JSON.stringify(Listpedidos));
        window.altaPedido.close();
    }
}

function darBajaPedido(){
    if(Listpedidos.find((el)=> el.numpedido==document.getElementById('numpedidobaja').value)){
        Listpedidos.splice(Listpedidos.indexOf(document.getElementById('numpedidobaja').value),1);
    }else{
        alert('El número de pedido no existe');
        return;
    }
    const SetDatPedidos=localStorage.setItem('datosPedidos',JSON.stringify(Listpedidos));
    window.bajaPedido.close();
}

function modificarPedido(){
    
}

function detallesPedidos(){
    let table=document.getElementById('tbl');
    Listpiezas.forEach((el) => {
        let superficie=el.largo*el.ancho;
        let volumen=el.largo*el.ancho*el.grosor;
        table.appendChild(document.createElement('tr'));
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.numpiezas;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.numpedido;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.largo;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.ancho;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.grosor;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.color;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=superficie;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=volumen;
    });
}
const cargaEventos = () => {
    document.getElementById('darAltaPedido').addEventListener('click', darAltaPedido);
    document.getElementById('darAltaPieza').addEventListener('click', darAltaPieza);
    document.getElementById('darBajaPedido').addEventListener('click', darBajaPedido);
    document.getElementById('darBajaPieza').addEventListener('click', darBajaPedido);
    document.getElementById('modificarPedido').addEventListener('click', modificarPedido);
    document.getElementById('modificarPieza').addEventListener('click', modificarPieza);
}

window.cargaEventos = cargaEventos;
window.detallesPedidos = detallesPedidos;