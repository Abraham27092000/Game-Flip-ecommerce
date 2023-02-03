

import {useState,useEffect} from 'react'
import {ItemList} from '../ItemList/ItemList'
export const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    useEffect (() => {
        fetch("./json/productos.json")
        .then (response => response.json())
        .then (productos => {
            const productosList = ItemList ({productos})
            console.log (productosList)
            setProductos(productosList)
        })

    }, [] )
    return (
        <div className = "row productos">
            {productos}
        </div>
    );
}