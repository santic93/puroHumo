import Layout from './Components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Carrito from './Components/Carrito';
import Hamburguesas from './Components/Hamburguesas';
import Lomos from './Components/Lomos';
import './assets/styles/App.css';
import Nuggets from './Components/Nuggets';
import UseContext from './context/UseContext';
function App() {
  return (
    <div>
      <link
        rel='stylesheet wrapper'
        href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css'
        integrity='sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor'
        crossorigin='anonymous'
      />
      <BrowserRouter>
        <UseContext>
          <Layout>
            <Routes>
              <Route index path='/' element={<Menu />} />
              <Route path='/lomos' element={<Lomos />} />
              <Route path='/hamburguesas' element={<Hamburguesas />} />
              <Route path='/nuggets' element={<Nuggets />} />
              <Route path='/carrito' element={<Carrito />} />
            </Routes>
          </Layout>
        </UseContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
