import { Link } from "react-router-dom"
export const Item = ({ item }) => {
    return (
        <div className="card mb-4 mt-4 d-flex align-items-center justify-content-center" style={{ width: '21rem'}}>
            <div className="card-body">
                <h5 className="card-title text-light d-flex justify-content-center productos__titulo">{item.nombre}</h5>
                <img src={item.img} className="card-img-top mb-2 d-flex justify-content-center" style={{ width: '14rem'}} alt={"productos"} />
                <p className="card-text text-success d-flex justify-content-center">Precio EUR: {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <Link to={`/item/${item.id}`} className="btn btn-primary d-flex justify-content-center">Comprobar producto</Link>
            </div>
        </div>

    )
}