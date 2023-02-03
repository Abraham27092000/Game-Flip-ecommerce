import './App.css'

//Componentes
import Navbar from "./Navbar/Navbar";
import {ItemListContainer} from "./ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./ItemDetailContainer/ItemDetailContainer";

const App = () => {
  console.log(document.getElementById("boton1"))
  return (
    <>
      <Navbar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;

