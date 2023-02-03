import CardWidget from "../CardWidget/CardWidget";
import Categorias from "./Categorias/Categorias";
import {ItemCount} from "../ItemCount/ItemCount";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark d-flex">
            <div className="container-fluid">
                <img className="logo" src="../img/logo.png" alt="logo" style={{ width: "4em" }} />
                    <h1 className="ms-3 me-3">Game-Flip</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-light" href="/#" aria-current="page"><button className="btn btn-info">Inicio</button></a>
                            </li>
                            <Categorias />
                        </ul>
                    </div>
                <CardWidget cantidadCart={3} />
                <ItemCount valorInicial={1} stock={5}/>
            </div>
        </nav>
    )
};

export default Navbar;




