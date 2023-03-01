import { Link } from "react-router-dom"
import { ItemCart } from "../ItemCart/ItemCart"
import { useCartContext } from "../../context/CartContext"
export const Cart = () => {
    const { cart, totalPrice, emptyCart } = useCartContext()
    return (
        <>
            {cart.length === 0
                ? //Si carrito esta vacio
                <>
                    <h2>Carrito vacio</h2>
                    <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link>
                </>
                : //Si carrito tiene productos
                <div className="container cartContainer">
                    {cart.map((item)=> <ItemCart key={item.id} item={item}/>)}
                    <div className="divButtons">
                        <p>Resumen de la compra: {new Intl.NumberFormat('de-DE').format(totalPrice())} EUR</p>
                        <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar carrito</button>
                        <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar Comprando</button></Link>
                        <Link className="nav-link" to={'/checkout'}><button className="btn btn-dark">Finalizar compra</button></Link>
                    </div>
                </div>
            }
        </>
    )

}


/*
    Condicional 1 = 6 complejidad, 2 return y 1 condicional
    if(false) {
        return <p>Es verdadero</p>;
    } 
    return <p>Es falso</p>;
    -----------------
    Condicional 2 = 6 complejidad, 1 return y 2 condicionales
    const condLogica = false
    return(
        <>
        {condLogica && <p>Es verdadero</p>  }
        {!condLogica && <p>Es falso</p>  }
        </>
    )
    ------------
    Condicional 3 = 5 complejidad, 1 return y 1 condicional
    const condLogica = false
    return(
        <>
            {condLogica ? <p>Es verdadero</p> : <p>Es falso</p>}
        </>
    )
*/
