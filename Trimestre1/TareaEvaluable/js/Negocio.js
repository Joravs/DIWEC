import Piezas from './piezas.js';

const GetDatPiezas=localStorage.getItem('datosPiezas');
let Listpiezas=GetDatPiezas?JSON.parse(GetDatPiezas):[];

function detallesPiezas(){
    const table=document.getElementById('tbl');
    Listpiezas.forEach(el => {
        superficie=el.getLargo*el.getAncho;
        volumen=el.getLargo*el.getAncho*el.getGrosor;
        table.appendChild(document.createElement('tr'));
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.getNumpieza;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.getLargo;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.getAncho;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.getGrosor;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=el.getColor;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=superficie;
        table.children[table.children.length-1].appendChild(document.createElement('td')).innerHTML=volumen;
    });
}

function darAltaPiezas(){
    if(Listpiezas.find((el)=>el.numpieza==document.getElementById('numpieza').value)){
        alert('El número de pieza ya existe');
        return;
    }else{
        piz=new Piezas(
            document.getElementById('numpiezaalta').value,
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
}

function darBajaPiezas(){
    if(Listpiezas.find((el)=> el.numpieza==document.getElementById('numpiezabaja').value)){
        Listpiezas.splice(Listpiezas.indexOf(document.getElementById('numpiezabaja').value),1);
    }else{
        alert('El número de pieza no existe');
        return;
    }
    const SetDatPiezas=localStorage.setItem('datosPiezas',JSON.stringify(Listpiezas));
    window.baja.close();
}

function eliminarDatosPiezas(){
    localStorage.clear();
}