import { useCartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemCart = ({ item }) => {
    const { removeItem, addItem } = useCartContext()


    const onAdd = (cantidad) => { //Agregar el producto al carrito
        addItem(item, cantidad)
    }

    return (
        <div className="card mb-3 cardCart">
            <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center mt-3 mb-3">
                    <img src={item.img} alt={`Imagen de producto ${item.nombre}`} className="img-fluid rounded-start" style={{ width: '14rem'}} />
                </div>
                <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                        <h5 className="card-title text-light productos__titulo">{item.nombre} {item.modelo}</h5>
                        <p className="card-text text-info">Cantidad: {item.cant}</p>
                        <p className="card-text">Precio Unitario: {new Intl.NumberFormat('de-DE').format(item.precio)} EUR </p>
                        <p className="card-text text-success">Precio total: {new Intl.NumberFormat('de-DE').format(item.precio * item.cant)} EUR </p>
                        <ItemCount valorInicial={1} stock={item.stock} onAdd={onAdd} />
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar del Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}