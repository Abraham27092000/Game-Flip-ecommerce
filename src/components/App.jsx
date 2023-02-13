import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Componentes
import Navbar from "./Navbar/Navbar";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./ItemDetailContainer/ItemDetailContainer";
import { Contacto } from "./Contacto/Contacto";
import { Cart } from './Cart/Cart';

//Context
import {DarkModeProvider} from '../Context/DarkModeContext'

const App = () => {
  console.log(document.getElementById("boton1"))
  return (
    <>
      <BrowserRouter>
      <DarkModeProvider>
        <Navbar />
        <Routes>
          <Route path ='/' element = {<ItemListContainer/>}/>
          <Route path ='/item/:id' element = {<ItemDetailContainer/>}/>
          <Route path ='/category/:idCategoria' element = {<ItemListContainer/>}/>
          <Route path ='/contacto' element = {<Contacto/>}/>
          <Route path ='/cart' element={<Cart/>}/>
        </Routes>
        </DarkModeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

