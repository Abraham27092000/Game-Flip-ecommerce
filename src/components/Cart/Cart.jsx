import { Link } from "react-router-dom"
import { ItemCart } from "../ItemCart/ItemCart"
import { useCartContext } from "../../context/CartContext"
export const Cart = () => {
    const { cart, totalPrice, emptyCart } = useCartContext()
    return (
        <>
            {cart.length === 0
                ? //Si carrito esta vacio
                <div>
                    <h2 className="ms-2">Carrito vacio</h2>
                    <Link className="nav-link" to={'/'}><button className="btn btn-secondary ms-2">Continuar comprando</button></Link>
                </div>
                : //Si carrito tiene productos
                <div className="container cartContainer">
                    {cart.map((item)=> <ItemCart key={item.id} item={item}/>)}
                    <div className="ms-1">
                        <p className="text-dark">Resumen de la compra: {new Intl.NumberFormat('de-DE').format(totalPrice())} EUR</p>
                        <button className="btn btn-danger mb-2" onClick={() => emptyCart()}>Vaciar carrito</button>
                        <Link className="nav-link mb-2" to={'/'}><button className="btn btn-success">Continuar Comprando</button></Link>
                        <Link className="nav-link mb-2" to={'/checkout'}><button className="btn btn-secondary">Finalizar compra</button></Link>
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
