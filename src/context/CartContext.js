import { useContext, createContext, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartConext)

export const CartProvider = (props) => {
    const [cart, setCart] = useState([])

    //Si existe algun producto en el Carrito

    const isInCart = (id) => {
        //Si existe lo devuelve. Y si no, retorna undefined
        return cart.find(prod => prod.id === id)
    }

    //Agregar productos

    const addItem = (producto, cantidad) => {
        if (isInCart(producto.id)) { //Reemplazo la cantidad de productos
            const indice = cart.findIndex(prod => prod.id === producto.id)
            const aux = [...cart]
            aux[indice].cant = cantidad
            setCart(aux)
        } else { //Creo el objeto producto en carrito con los datos ingresados
            const prodCart = {
                ...producto,
                cant: cantidad
            }
            /*
                const aux = [...carrito]
                aux.push(prodCart)
                setCarrito(aux)
            */
            setCart([...cart, prodCart])

        }
    }

    //Vaciar Carrito

    const emptyCart = () => {
        setCart([])
    }

    //Eliminar productos

    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    //Cantidad total de productos en carrito

    const getItemQuantity = () => {
        return cart.reduce((acum, prod) => acum += prod.cant, 0)
    }

    //Precio total de la compra

    const totalPrice = () => {
        return cart.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
    }
    console.log(cart)

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, emptyCart, getItemQuantity, totalPrice }}>
            {props.children}
        </CartContext.Provider>
    )

}

