import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { createOrdenCompra, getProducto, updateProducto } from "../../firebase/firebase"

export const Checkout = () => {
    const { cart, emptyCart, totalPrice } = useCartContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const [user, setUser] = useState({ nombre: '', telefono: '', correo: '', correo2: '', direccion: '' })

    if (user.correo === user.correo2) {
        //logica de la orden
    } else {
        alert('Los correos deben ser idénticos')
    }

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)
        setUser({
            nombre: cliente.nombre,
            telefono: cliente.telefono})
            
        const aux = [...cart]

        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                prodBDD.stock -= prodCarrito.cant //Descuento del stock la cantidad comprada
                updateProducto(prodCarrito.id, prodBDD)
            })
        })

        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
            toast.success(`¡Gracias por su compra!. Id de compra: ${ordenCompra.id
                } por un total de EUR ${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con exito`, {
                pauseOnHover: false,
                theme: "dark",
            });
            emptyCart()
            e.target.reset()
            navigate("/")
        })

    }


    return (
        <>
            {cart.length === 0
                ?
                <>
                    <h2>No posee productos en el carrito</h2>
                    <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link>
                </>
                :
                <div className="container d-flex justify-content-center" style={{ marginTop: "2em" }}>
                    <form onSubmit={consultarFormulario} ref={datosFormulario}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label text-dark">Nombre y apellidos:</label>
                            <input type="text" className="form-control" name="nombre" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label text-dark">Correo electrónico:</label>
                            <input type="email" className="form-control" name="correo" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label text-dark">Repetir correo electrónico:</label>
                            <input type="email" className="form-control" name="correo2" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label text-dark">Número telefónico:</label>
                            <input type="number" className="form-control" name="telefono" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="consulta" className="form-label text-dark">Dirección:</label>
                            <textarea className="form-control" name="direccion" rows={3} defaultValue={""} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-dark" style={{ width: 500 }}>Finalizar compra</button>
                        </div>
                    </form>
                </div>
            }

        </>

    )
}