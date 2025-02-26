import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Pag1 from './pages/Pag1';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/pag1" element={<Pag1 />} />
    </Routes>
  );
}

export default App;