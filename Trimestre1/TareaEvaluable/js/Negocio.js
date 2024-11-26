import Pedido from './pedidos.js';
import Pieza from './piezas.js';

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
        let piz=new Pieza(
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

function modificarPieza(){
    
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function darAltaPedido(){
    if(Listpedidos.find((el)=>el.numpedido==document.getElementById('numpedidoalta').value)){
        alert('El número de pedido ya existe');
        return;
    }else{
        let ped=new Pedido(
            document.getElementById('numpedidoalta').value,
            document.getElementById('nombreclientealta').value,
            document.getElementById('apellidoclientealta').value,
            document.getElementById('procesadoalta').value,
            document.getElementById('servidoalta').value,
            document.getElementById('fechaalta').value
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
    let index=Listpedidos.indexOf(document.getElementById('numpedidomod').value);
    if(Listpedidos.find((el)=> el.numpedido==document.getElementById('numpedidomod').value)){
        let ped=new Pedido(
            document.getElementById('numpedidomod').value,
            document.getElementById('nombreclientemod').value?document.getElementById('nombreclientemod').value:Listpedidos[index].cliente.nombre,
            document.getElementById('apellidoclientemod').value?document.getElementById('apellidoclientemod').value:Listpedidos[index].cliente.apellido,
            document.getElementById('procesadomod').value?document.getElementById('procesadomod').value:Listpedidos[index].procesado,
            document.getElementById('servidomod').value?document.getElementById('servidomod'):Listpedidos[index].servido,
            Date.now()
        );
        Listpedidos.push(ped);
        const SetDatPedidos=localStorage.setItem('datosPedidos',JSON.stringify(Listpedidos));
        window.modificarPedido.close();
    }else{
        alert('El número de pedido no existe');
        return;
    }
}
function modPedForm(){
    let dialMod=document.getElementById('formmodped');
    Listpedidos.forEach((el)=>{
        dialMod.children[1].appendChild(document.createElement('option')).innerHTML=el.numpedido;
    });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
function datosPedidos(){
    let table=document.getElementById('tbl');
    Listpedidos.forEach((el) => {
        table.appendChild(document.createElement('tr'));
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.numpedido;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.cliente.nombre;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.cliente.apellido;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.procesado==true?"Si":"No";
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.servido==true?"Si":"No";
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.fechapedido;
    });
}
const cargaEventosPedidos = () => {
    document.getElementById('darAltaPedido').addEventListener('click', darAltaPedido);
    document.getElementById('darBajaPedido').addEventListener('click', darBajaPedido);
    document.getElementById('modPedido').addEventListener('click', modificarPedido);
    
    document.getElementById('btnmodPed').addEventListener('click', modPedForm);
}
const cargaEventosPiezas =()=>{
    document.getElementById('darAltaPieza').addEventListener('click', darAltaPieza);
    document.getElementById('darBajaPieza').addEventListener('click', darBajaPieza);
    document.getElementById('modPieza').addEventListener('click', modificarPieza);

}

window.cargaEventosPedidos = cargaEventosPedidos;
window.cargaEventosPiezas = cargaEventosPiezas;
window.detallesPedidos = detallesPedidos;
window.datosPedidos= datosPedidos;