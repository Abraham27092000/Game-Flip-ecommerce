import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

const CardWidget = () => {
    const { getItemQuantity } = useCartContext()
    return (
        <>
            <Link className="nav-link" to={'/cart'}><button className="bi bi-cart-fill text-warning" style={{ fontSize: '2em' }}></button>
                {getItemQuantity() > 0 && <span className="text-success">{getItemQuantity()}</span>}
            </Link>
        </>
    );
}

export default CardWidget;
