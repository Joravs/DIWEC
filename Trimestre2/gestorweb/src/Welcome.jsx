import './Welcome.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ButtonAction from './ButtonAction'
import EliminarUsuario from './pages/EliminarUsuario'
import AltaUsuario from './pages/AltaUsuario'
import ModificarUsuario from './pages/ModificarUsuario'
import VisualizarUsuario from './pages/VisualizarUsuario'

export default function Welcome() {
  const button = ()=>{
    console.log('Nos fuimo a su\'pendel mi Loco')
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div className='botones'>
            <h1>Bienvenid@ al Gestor de Usuario</h1>
            <ButtonAction onClick={button} nombreBoton="Alta Usuario"/>
            <ButtonAction onClick={button} nombreBoton="Visualizar Usuario"/>
            <ButtonAction onClick={button} nombreBoton="Modificar Usuario"/>
            <ButtonAction onClick={button} nombreBoton="Eliminar Usuario"/>
          </div>
          } />
        <Route path='/pages/AltaUsuario' element={<AltaUsuario />} />
        <Route path='/pages/VisualizarUsuario' element={<VisualizarUsuario />} />
        <Route path='/pages/ModificarUsuario' element={<ModificarUsuario />} />
        <Route path='/pages/EliminarUsuario' element={<EliminarUsuario />} />
      </Routes>
    </BrowserRouter>
  )
}