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
        if(indiceActual<img.length-1){indiceActual++;mostrarImagen()}
    };
    return(
        <div className="Visor">

        </div>
    )
}
export default Visor;