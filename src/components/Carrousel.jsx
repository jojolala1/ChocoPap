import Accueil1 from "../assets/accueil1.jpg";
import Accueil2 from "../assets/accueil2.jpg";
import Accueil3 from "../assets/accueil3.jpg";

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
                            className="active"
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
                            <img src={Accueil1} className="hautImg" alt="..." />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
                                <h1 className="title display-2 jauneT">CHOCO PAP</h1>
                                <button className="btn  mt-5 borderCb mx-auto rounded-0 p-2 p-md-3  fw-bold blancBg ">
                                    Voir la boutique
                                </button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Accueil2} className="hautImg" alt="..." />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
                                <h1 className="title display-2 jauneT">CHOCO PAP</h1>
                                <button className="btn  mt-5 borderCb mx-auto rounded-0 p-2 p-md-3  fw-bold blancBg ">
                                    Voir la boutique
                                </button>
                            </div>
                        </div>
                        <div className="carousel-item">
                                <img src={Accueil3} className=" hautImg " alt="..." />

                            
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
                                <h1 className="title display-2 jauneT">CHOCO PAP</h1>
                                <button className="btn  mt-5 borderCb mx-auto rounded-0 p-2 p-md-3  fw-bold blancBg ">
                                    Voir la boutique
                                </button>
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