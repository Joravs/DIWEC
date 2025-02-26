import {Link} from 'react-router-dom'

export default function ButtonAction({nombreBoton}){
    var accio = nombreBoton.replace(/ /g,"");
    return (
        <button><Link to={`/pages/${accio}`}>{nombreBoton}</Link></button>
    )
}