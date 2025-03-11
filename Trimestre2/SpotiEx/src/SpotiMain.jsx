import { useState, useEffect } from 'react'
import {FiltradoCanciones} from './components/FiltradoCanciones'
import {MasPopular}from './components/MasPopular'
import './App.css'

function SpotiMain() {
  const [canciones, setCanciones] = useState([]);
  const obtenerCanciones = async ()=>{
    const response = await fetch('/json/Spotify.json');;
    const data = await response.json();
    setCanciones(data);
  };
  useEffect(()=>{
    obtenerCanciones();
  }, [])
  return (
    <>
      <h1>Canciones de Spotify</h1>
      <FiltradoCanciones canciones={canciones}/>
      <MasPopular canciones={canciones}/>
    </>
  )
}

export default SpotiMain