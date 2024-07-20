import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png'

export default function Navbar() {
    return (
        
        <nav className="navbar navbar-expand-md bleuBg ">
            <div className="container-fluid ">
                <a className="navbar-brand ms-3" href="#">
                    <img className="img-fluid logo" src={Logo} alt="Logo" />
                </a>
                <button className="navbar-toggler blancBg" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>

                <div className="collapse navbar-collapse me-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto gap-md-4 ">
                        <NavLink className="nav-link my-md-2 blancT" to="/" >Accueil</NavLink>

                        <NavLink className="nav-link my-md-2 blancT" to="/boutique" >Boutique</NavLink>
                        <div className="nav-link d-flex my-md-1">
                            <p className=' m-md-1 pt-1 blancT'>2</p>
                            <i className="bi bi-cart3 h3 blancT mb-0 mx-2"></i>
                            <a href="#" className="nav-link d-md-none p-0 pt-1 blancT">Panier</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}


<nav className="nav">
    <a href="/" className="site-title">
        Site Name
    </a>
    <ul>
        <li>
            <a href="/pricing">Pricing</a>
        </li>
        <li>
            <a href="/about">About</a>
        </li>
    </ul>
</nav>