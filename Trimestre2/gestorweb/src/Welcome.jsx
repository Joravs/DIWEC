import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {ExpresionesProvider} from './functions/RegularExpressions';
import ButtonAction from './ButtonAction'
import AdministrarUsuario from './pages/AdministrarUsuario'
import AltaUsuario from './pages/AltaUsuario'
import VisualizarUsuario from './pages/VisualizarUsuario'

export default function Welcome() {
  const button = ()=>{
    console.log('Nos fuimo a su\'pendel mi Loco')
  }
  return (
    <BrowserRouter>
     <ExpresionesProvider>
      <Routes>
        <Route path='/' element={
          <div className='row w-100 mx-auto d-flex justify-content-center'>
            <h1 className='text-white text-center col-12 mb-5'>Bienvenid@ al Gestor de Usuario</h1>
            <ButtonAction onClick={button} nombreBoton="Alta Usuario"/>
            <ButtonAction onClick={button} nombreBoton="Visualizar Usuario"/>
            <ButtonAction onClick={button} nombreBoton="AdministrarUsuario"/>
          </div>
          } />
        <Route path='/pages/AltaUsuario' element={<AltaUsuario />} />
        <Route path='/pages/VisualizarUsuario' element={<VisualizarUsuario />} />
        <Route path='/pages/AdministrarUsuario' element={<AdministrarUsuario />} />
      </Routes>
      </ExpresionesProvider>
    </BrowserRouter>
  )
}