import './App.css'
import 'react-toastify/dist/ReactToastify.css'

//Router

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Toastify
import { ToastContainer } from 'react-toastify';

//Componentes
import Navbar from "./Navbar/Navbar";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./ItemDetailContainer/ItemDetailContainer";
import { Contacto } from "./Contacto/Contacto";
import { Cart } from './Cart/Cart';

//Context
import { CartProvider } from '../context/CartContext';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/category/:idCategoria' element={<ItemListContainer />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <ToastContainer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

