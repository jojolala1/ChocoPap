export default function Footer() {
    return (
        <div className="col-md-3 col-lg-2 mx-auto marronBg w-100 d-flex flex-column flex-md-row footer blancT p-5 gap-5">
            <div className="col-sm blancT">
                <h5 className="mb-4">Choco Pap</h5>
                <p className="blancT">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Magni veritatis totam laboriosam fuga ducimus aliquam
                    facilis iste soluta enim accusamus numquam velit deserunt
                    beatae corporis, officia non modi dolores qui.
                </p>
            </div>
            <div className="col-sm blancT">
                <h5 className="mb-4">Contact</h5>
                <address className="blancT">
                    Adresse: 51 Rue du chocolat 75000 Paris
                    <br />
                    <a href="tel:+0606060606" className="text-decoration-none blancT ">01.23.45.67.89 </a>
                    <br />
                    Horaires:9h00-17h du Lundi au Vendredi
                </address>
            </div>
            <div className="col-sm d-flex justify-content-center align-items-center mb-5 gap-5 ">
                <a href=""><i className="bi bi-facebook display-1 blancT"></i></a>
                <a href=""><i className="bi bi-instagram display-1 blancT"></i></a>
                <a href=""><i className="bi bi-twitter display-1 blancT"></i></a>
            </div>
        </div>
    );
}
