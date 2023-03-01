import { ItemCount } from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
//Context
import { useCartContext } from '../../context/CartContext'

export const ItemDetail = ({ item }) => {
    const { addItem } = useCartContext()

    const onAdd = (cantidad) => { //Agregar el producto al carrito
        addItem(item, cantidad)
    }
    return (
        <div className='row g-0'>
            <div className="col-md-4">
                <img src={item.img} className="img-fluid rounded-start" alt={`Imagen de ${item.nombre}`} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className='card-title'>{item.nombre}</h5>
                    <p className='card-text'>{item.descripcion}</p>
                    <p className='card-text'>Precio: {new Intl.NumberFormat('de-DE').format(item.precio)} EUR</p>
                    <p className='card-text'>Stock: {item.stock}</p>
                    <ItemCount valorInicial={1} stock={item.stock} onAdd={onAdd} />
                    <Link className='nav-link'to={"/cart"}><button className='btn btn-secondary'>Ver carrito</button></Link>
                </div>
            </div>

        </div>
    )
}