export const Item = ({ item }) => {
    return (
        <div className="card mb-4 mt-4" style={{ width: '21rem'}}>
            <div className="card-body">
                <h5 className="card-title text-light d-flex justify-content-center">{item.nombre}</h5>
                <img src={`../img/${item.img}`} className="card-img-top mb-2" alt={"productos"} />
                <p className="card-text text-success d-flex justify-content-center">Precio EUR: {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <a href="./" className="btn btn-primary d-flex justify-content-center">Comprobar producto</a>
            </div>
        </div>

    )
}