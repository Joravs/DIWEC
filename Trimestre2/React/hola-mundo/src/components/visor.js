import './Visor.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faForward,faBackward} from '@fortawesome/free-solid-svg-icons';
const Visor=(props)=>{
    let indiceActual =0;
    const img=props.img;
    const mostrarImagen=()=>{
        const path='/img/' + props.img[indiceActual];
        const visorImagenes= document.getElementById('visorImagenes');
        if (visorImagenes){visorImagenes.src=path;}
    };
    const avanzar=()=>{
        if(indiceActual<img.length-1){indiceActual++}
        else{indiceActual=0}
        mostrarImagen();
    };
    const retroceder=()=>{
        if(indiceActual>0){indiceActual--;}
        else{indiceActual=img.length-1}
        mostrarImagen();
    };
    const primera=()=>{
        indiceActual=0;
        mostrarImagen();
    }
    const ultima=()=>{
        indiceActual=img.length-1;
        mostrarImagen();
    }
    setTimeout(()=>{mostrarImagen();},0);
    return(
        <div className="Visor">
            
        </div>
    )
}
export default Visor;