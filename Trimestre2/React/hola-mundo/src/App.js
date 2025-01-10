import logo from './logo.svg';
import './App.css';
import Acercade from './components/Acercade.js';

function App() {
  const nombre = 'Jordy';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Hola, {nombre}</h1>
      </header>
      <Acercade />
    </div>
  );
}

export default App;
