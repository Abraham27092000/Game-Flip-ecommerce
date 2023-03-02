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
        <div className="d-flex justify-content-center">
            <button className="btn btn-light text-secondary" onClick={() => restarCounter()}>-</button>
            <section className="text-success d-flex align-items-center">{contador}</section>
            <button className="btn btn-light text-secondary" onClick={() => sumarCounter()} >+</button>
            <button className="btn btn-primary ms-3" onClick={() => agregarCarrito()}>Agregar al carrito</button>
        </div>
    )
}

