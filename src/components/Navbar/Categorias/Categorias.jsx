const Categorias = () => {
    return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <button className="btn btn-info">Todas las Categorías</button>
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/#" >Consolas</a></li>
                    <li><a className="dropdown-item" href="/#" >Videojuegos</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="/#">Periféricos</a></li>
                </ul>
            </li>
    );
}

export default Categorias;
