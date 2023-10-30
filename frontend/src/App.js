import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Clientes from './Clientes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Clientes />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
