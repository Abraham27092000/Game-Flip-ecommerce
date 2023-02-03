import { useState } from "react"
export const ItemCount = ({ valorInicial, stock }) => {

    const [contador, setContador] = useState(valorInicial)

    const sumarCounter = () => (contador < stock) && setContador(contador + 1)
    const restarCounter = () => (contador > valorInicial) && setContador(contador - 1)

    return (
        <>
            <button className="btn btn-success" onClick={(e) => restarCounter()}>-</button>
            {contador}
            <button className="btn btn-success" onClick={(e) => sumarCounter()} >+</button>
        </>
    )
}

