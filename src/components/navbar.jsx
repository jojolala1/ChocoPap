import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../cartContext';

export default function Navbar({toggleSidebar}) {
    const { compteurQuantity } = useCart();

    return (
        <>
            <nav className="navbar navbar-expand-md bleuBg z-1 hNav">
                <div className="container-fluid footerResponssive">
                    <a className="navbar-brand ms-3" href="#">
                        <img className="img-fluid logo" src="/images/logo.png" alt="Logo" />
                    </a>
                    <button className="navbar-toggler blancBg" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>

                    <div className="collapse navbar-collapse z-3 me-5" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto gap-md-4 ">
                            <NavLink className="nav-link my-md-2 blancT" to="/" >Accueil</NavLink>

                            <NavLink className="nav-link my-md-2 blancT" to="/boutique" >Boutique</NavLink>
                            <div className="d-inline-flex gap-1">
                                    <div onClick={toggleSidebar}  className=" nav-link d-flex my-md-1">
                                        <p className=' m-md-1 pt-1 blancT'>{compteurQuantity}</p>
                                        <i className="bi bi-cart3 h3 blancT mb-0 mx-2"></i>
                                        <p  className="nav-link d-md-none p-0 pt-1 blancT">Panier</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    );
}

<>


</>