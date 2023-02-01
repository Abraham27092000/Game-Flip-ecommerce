//Componentes
import Navbar from "./Navbar/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

const App = () => {
  console.log(document.getElementById("boton1"))
  return (
    <>
      <Navbar/>
      <ItemListContainer saludo={"¡Bienvenido!"}/>
    </>
  );
}

export default App;

