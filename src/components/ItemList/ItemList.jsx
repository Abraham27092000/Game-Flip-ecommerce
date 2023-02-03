import { Item } from "../Item/Item"
export const ItemList = ({ productos }) => {
    return (
        <>
            {productos.map(producto => <Item item={producto} key={producto.id} />)}
        </>
    )
}
