import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//Components
import { ItemList } from '../ItemList/ItemList'

//Firebase
import { getProductos, query, orderBy} from '../../firebase/firebase'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { idCategoria } = useParams()
    const q = query(idCategoria, orderBy.filter("category"));
    useEffect(() => {
    if (idCategoria) {
        getProductos()
            .then(items => {
                const products = items.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(idCategoria))
                const productsList = <ItemList products={products} />
                setProductos(productsList)
            })
    } else {
        getProductos()
            .then(items => {
                const products = items.filter(prod => prod.stock > 0)
                const productsList = <ItemList products={products} />
                setProductos(productsList)
            })
    }

    }, [idCategoria])

    return (
        <div className='row productos'>
            {productos}
        </div>
    )
}