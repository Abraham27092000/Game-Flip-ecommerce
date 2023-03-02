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
            <div className="col-md-4  d-flex justify-content-center mb-2 mt-2">
                <img src={item.img} className="img-fluid rounded-start productos__img__detail" alt={`Imagen de ${item.nombre}`} />
            </div>
            <div className="col-md-8 d-flex align-items-center">
                <div className="card-body">
                    <h3 className='card-title text-light productos__titulo'>{item.nombre}</h3>
                    <p className='card-text'>{item.descripcion}</p>
                    <p className='card-text text-success'>Precio: {new Intl.NumberFormat('de-DE').format(item.precio)} EUR</p>
                    <p className='card-text text-danger'>Stock: {item.stock}</p>
                    <ItemCount valorInicial={1} stock={item.stock} onAdd={onAdd} />
                    <Link className='nav-link'to={"/cart"}><button className='btn btn-warning text-secondary'>Ver carrito</button></Link>
                </div>
            </div>

        </div>
    )
}