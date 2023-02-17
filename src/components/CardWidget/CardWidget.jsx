import { Link } from "react-router-dom"

const CardWidget = ({cantidadCart}) => {
    return (
        <div className="d-flex">
            <Link className= "nav-link" to={'/cart'}><button className="bi bi-cart-fill text-warning" style={{fontSize:'2em'}}></button></Link>
            <p>{cantidadCart}</p>
        </div>
    );
}

export default CardWidget;
