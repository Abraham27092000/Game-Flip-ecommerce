import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//Components
import { ItemList } from '../ItemList/ItemList'

//Context


export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { idCategoria } = useParams()

    useEffect(() => {
        if (idCategoria) {
            fetch('../json/productos.json')
                .then(response => response.json())
                .then(items => {
                    const products = items.filter(prod => prod.idCategoria === idCategoria)
                    const productsList = ItemList({ products }) //Array de productos en JSX
                    console.log(productsList)
                    setProductos(productsList)
                })
        } else {
            fetch('./json/productos.json')
                .then(response => response.json())
                .then(products => {
                    console.log(products)
                    const productsList = ItemList({ products }) //Array de productos en JSX
                    console.log(productsList)
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

