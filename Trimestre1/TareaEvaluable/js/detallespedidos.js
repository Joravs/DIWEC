import Pedidos from './pedidos.js';
import Piezas from './piezas.js';

const GetDatPiezas=localStorage.getItem('datosPiezas');
let Listpiezas=GetDatPiezas?JSON.parse(GetDatPiezas):[];

const GetDatPedidos=localStorage.getItem('datosPedidos');
let Listpedidos=GetDatPedidos?JSON.parse(GetDatPedidos):[];

addEventListener('DOMContentLoaded', detallesPedidos());

function detallesPedidos(){
    console.log(GetDatPiezas);
    let table=document.getElementById('tbl');
    Listpiezas.forEach(el => {
        let superficie=el.getLargo*el.getAncho;
        let volumen=el.getLargo*el.getAncho*el.getGrosor;
        table.appendChild(document.createElement('tr'));
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.getNumpieza;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.getNumpedido;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.getLargo;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.getAncho;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.getGrosor;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.getColor;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=superficie;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=volumen;
    });
}