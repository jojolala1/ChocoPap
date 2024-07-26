import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Carrousel() {


    return (
        <>
            <div className="carrouselSize">
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators mb-5">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className="active "
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner carrouselH">
                        <div className="carousel-item active">
                            <img src="/images/accueil1.webp"  className="hautImg" alt="..." loading="lazy" sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px"

                            />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
                                <h1 className="title titleCar jauneT">CHOCO PAP</h1>
                                <NavLink className="nav-link my-md-2 blancT" to="/boutique" >
                                    <button className="btn  mt-5 borderCb mx-auto rounded-0 py-2  fw-bold blancBg ">
                                        Voir la boutique
                                    </button>
                                </NavLink>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/accueil2.webp" className="hautImg" alt="..." loading="lazy" sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px"

                            />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
                                <h1 className="title titleCar jauneT">CHOCO PAP</h1>
                                <NavLink className="nav-link my-md-2 blancT" to="/boutique" >
                                    <button className="btn   mt-5 borderCb mx-auto rounded-0 py-2 fw-bold blancBg ">
                                        Voir la boutique
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/accueil3.webp" className=" hautImg " alt="..." loading="lazy" sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px"

                            />


                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
                                <h1 className="title titleCar jauneT">CHOCO PAP</h1>
                                <NavLink className="nav-link my-md-2 blancT" to="/boutique" >
                                    <button className="btn  mt-5 borderCb mx-auto rounded-0 py-2  fw-bold blancBg ">
                                        Voir la boutique
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>


    )
}