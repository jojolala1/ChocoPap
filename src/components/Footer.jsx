import React from 'react';
export default function Footer() {
    return (
        <div className="col-md-3 col-lg-2 mx-auto marronBg w-100 d-flex flex-column flex-md-row footer footerResponssive blancT p-5 gap-5">
            <div className="col-sm blancT">
                <p className="h5 footerResponssive mb-4 title">Choco Pap</p>
                <p className="blancT">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Magni veritatis totam laboriosam fuga ducimus aliquam
                    facilis iste soluta enim accusamus numquam velit deserunt
                    beatae corporis, officia non modi dolores qui.
                </p>
            </div>
            <div className="col-sm blancT">
                <p className="h5 footerResponssive title mb-4">Contact</p>
                <address className="blancT">
                    Adresse: 51 Rue du chocolat 75000 Paris
                    <br />
                    <p className="text-decoration-none blancT">01.23.45.67.89</p>
                    <br />
                    Horaires: 9h00-17h du Lundi au Vendredi
                </address>
            </div>
            <div className="col-sm d-flex gap-5 pe-0">
                <a href="#"><i className="bi bi-facebook display-1 blancT" style={{ fontSize: "2rem" }}></i></a>
                <a href="#"><i className="bi bi-instagram display-1 blancT" style={{ fontSize: "2rem" }}></i></a>
                <a href="#"><i className="bi bi-twitter display-1 blancT" style={{ fontSize: "2rem" }}></i></a>
            </div>
        </div>
    );
}