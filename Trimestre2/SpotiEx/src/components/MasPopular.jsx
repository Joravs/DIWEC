import { useState,useEffect } from 'react'
export function MasPopular(props){
    const [canciones, setCanciones] = useState([]);
    const [maxPopular, setMaxPopular] = useState(null);
    useEffect(() => {
      const songs = async () => {
        if (Array.isArray(props)) {
          setCanciones(props);
        }
      };
      songs();
    }, [props]);
  
    useEffect(() => {
      if (canciones.length > 0) { 
        const cancionMasPopular = canciones.reduce((max, cancion) => {
          return max.track_popularity > cancion.track_popularity ? max : cancion;
        });
        setMaxPopular(cancionMasPopular);
      }
    }, [canciones]);
    return(
        <>
            <h2>Cancion mas popular</h2>
            <table>
            <th>Id</th>
            <th>Nombre</th>
            <th>Artista</th>
            <th>Album</th>
            <th>Fecha</th>
            <th>Duracion</th>
            <tbody>
                {maxPopular?<tr><td>{maxPopular.track_id}</td>
                <td>{maxPopular.track_name}</td>
                <td>{maxPopular.track_artist}</td>
                <td>{maxPopular.track_album_name}</td>
                <td>{maxPopular.track_album_release_date}</td>
                <td>{maxPopular.duration_ms/1000}</td></tr>:<tr></tr>}
            </tbody>
        </table>
        {}
        </>
    )
}