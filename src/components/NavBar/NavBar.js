import { Link } from 'react-router-dom';
import { categories } from "../../data/categories";
import CartWidget from "./CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/"><span className="navbar-brand">Gaming shop</span></Link>
                <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link to={"/"}>
                            <span className="nav-link" aria-current="page">Inicio</span>
                        </Link></li>
                        <li className="nav-item"><Link to="/">
                            <span className="nav-link">Juegos</span>
                        </Link></li>
                    </ul>
                    {categories.map((c) => (
                        <li key={c.categoryId} className="navbar-nav nav-item"><Link to={`/category/${c.categoryId}`}>
                            <span className="nav-link" aria-current="page">{c.categoryName}</span>
                        </Link></li>)
                    )}
                    <form className="d-flex me-2">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="button">Buscar</button>
                    </form>
                    <div>
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default NavBar