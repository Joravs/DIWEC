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
            <img id="visorImagenes" className='img'></img>
            <br/>
            <div className='btns'>
                <button onClick={retroceder}><FontAwesomeIcon icon={faBackward}/></button>
                <button onClick={primera}><FontAwesomeIcon icon={faPlay}/></button>
                <button onClick={avanzar}><FontAwesomeIcon icon={faForward}/></button>
                <button onClick={ultima}><FontAwesomeIcon icon={faPlay}/></button>
            </div>
        </div>
    )
}
export default Visor;