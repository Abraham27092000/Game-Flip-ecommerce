import { useState } from "react"
import { toast } from 'react-toastify'

export const ItemCount = ({ valorInicial, stock, onAdd }) => {

    const [contador, setContador] = useState(valorInicial)
    //Var       //Modificar var     //Estado inicial

    const sumarCounter = () => (contador < stock) && setContador(contador + 1)
    const restarCounter = () => (contador > valorInicial) && setContador(contador - 1)

    const agregarCarrito = () => { 
        onAdd(contador)
        toast.success(`Agregaste satisfactoriamente ${contador} productos al carrito!`, {
            pauseOnHover: false,
            theme: "dark",
        })
    }   


    return (
        <>
            <button className="btn btn-success" onClick={() => restarCounter()}>-</button>
            {contador}
            <button className="btn btn-success" onClick={() => sumarCounter()} >+</button>
            <button className="btn btn-dark" onClick={() => agregarCarrito()}>Agregar al carrito</button>
        </>
    )
}

