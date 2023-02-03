export const Item = ({ item }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title text-light d-flex justify-content-center">{item.nombre}</h5>
                <img src={`../img/${item.img}`} className="card-img-top mt-1 mb-3" alt={"productos"} />
                <p className="card-text text-success">EUR {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <a href="#" className="btn btn-primary">Comprobar producto</a>
            </div>
        </div>

    )
}