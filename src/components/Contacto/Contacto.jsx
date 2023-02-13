import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";

export const Contacto = () => {
    const datosFormulario = React.useRef() //Creo la referencia
    let navigate = useNavigate() //Ubicacion actual de mi componente
    const consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosFormulario.current) //Consulto el estado actual del formulario
        const datForm = new FormData(datosFormulario.current) //Genero un objeto iterator de esos datos
        const contacto = Object.fromEntries(datForm) //Transforma en un objeto literal
        console.log(contacto)
        e.target.reset() //Reseteo el formulario
        navigate("/")//Redirijo a pagina inicial
    }


    return (
        <div className="container d-flex justify-content-center" style={{ marginTop: "2em" }}>
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label text-dark">Nombre y apellidos:</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-dark">Correo electrónico:</label>
                    <input type="email" className="form-control" name="correo" />
                    <div id="emailHelp" className="form-text text-primary"><u>No Compartiremos tus datos con nadie</u></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-dark">Número telefónico:</label>
                    <input type="number" className="form-control" name="teléfono" />
                </div>
                <div className="mb-3">
                    <label htmlFor="consulta" className="form-label text-dark">Consulta:</label>
                    <textarea className="form-control" name="consulta" rows={3} defaultValue={""} />
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-dark" style={{ width: 500 }}>Enviar Mensaje</button>
                </div>
            </form>
        </div>
    )
}
