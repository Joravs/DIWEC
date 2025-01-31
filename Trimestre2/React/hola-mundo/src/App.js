import logo from './logo.svg';
import './App.css';
import Acercade from './components/Acercade.js';
import Bucle from './components/Bucle.js';
import Saludar from './components/Saludar.js';
import EjemploEstado from './components/State/EjemploState.js';
import EjemploState3 from './components/State/EjemploState3.js';

function App() {
  const nombre = 'Jordy';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}
        {/* <h1>Hola, {nombre}</h1> */}
        {/* <Bucle /> */}
        {/* <Saludar nombre="Jordy" edad="21"/> */}
        {/* <EjemploEstado/> */}
        <EjemploState3/>
      </header>
      <Acercade />
    </div>
  );
}

export default App;