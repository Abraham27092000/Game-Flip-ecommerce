import CardWidget from "../CardWidget/CardWidget";
import Secciones from "./Secciones/Secciones";
import Categorias from "./Categorias/Categorias";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark d-flex mb-3">
            <div className="container-fluid">
                <img className="logo" src="../logo.png" alt="logo" style={{ width: "4em" }} />
                    <h1 className="ms-3 me-3">Game-Flip</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            </li>
                            <Secciones/>
                            <Categorias />
                        </ul>
                    </div>
                <CardWidget/>
            </div>
        </nav>
    )
};

export default Navbar;




