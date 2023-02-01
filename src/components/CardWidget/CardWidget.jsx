const CardWidget = ({cantidadCart}) => {
    return (
        <div className="d-flex">
            <i className="bi bi-cart-fill text-warning" style={{fontSize:'2em'}}></i>
            <p className="text-success">{cantidadCart}</p>
        </div>
    );
}

export default CardWidget;
