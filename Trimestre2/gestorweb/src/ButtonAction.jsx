import {Link} from 'react-router-dom'

export default function ButtonAction({nombreBoton}){
    var accio = nombreBoton.replace(/ /g,"");
    return (
        <button className='btn btn-primary col-4 m-1'><Link to={`/pages/${accio}`} className='text-white text-decoration-none'>{nombreBoton}</Link></button>
    )
}