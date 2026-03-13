import { Link } from "react-router-dom";

function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <div className="navbar-nav">
                <Link className="nav-link text-white" to="/"> Home</Link>
                <Link className="nav-link text-white" to="/ChiSiamo"> Chi Siamo</Link>
                <Link className="nav-link text-white" to="/Prodotti"> Prodotti</Link>
            </div>
        </nav >
    );
}

export default NavBar;