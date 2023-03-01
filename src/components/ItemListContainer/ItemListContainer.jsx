import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//Components
import { ItemList } from '../ItemList/ItemList'

//Firebase
import { getProductos } from '../../firebase/firebase'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { idCategoria } = useParams()
    
    useEffect(() => {

        getProductos(idCategoria)
            .then(items => {
                const products = items.filter(prod => prod.stock > 0)
                const productsList = <ItemList products={products} />
                setProductos(productsList)
            })

    }, [idCategoria])

    return (
        <div className='row productos'>
            {productos}
        </div>
    )
}