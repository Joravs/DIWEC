import { useState } from 'react'
import './App.css'

function SpotiMain() {
  const [canciones, setCanciones] = useState([]);
  const songs = async ()=>{
    const response = await fetch('/json/Spotify.json');;
    const data = await response.json();
    setCanciones(data);
  };
  return (
    <>
      <h1>Canciones de Spotify</h1>
      <button onClick={songs}>Cargar canciones</button>
      {canciones.map(cancion => (
        <div key={cancion.track_id}></div>))}
    </>
  )
}

export default SpotiMain