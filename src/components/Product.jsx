import { useState } from "react"

export default function Product ({product, AddProduct}) {

    return (
        <div category={product.category} key={product.id} className="size marronFT text-center product mt-5 mx-3  align-content-center shadow-sm borderB">
            <div className="productContentImg">
            <img src={`../../src/${product.image}`} alt="chocolat" className="img-fluid rounded px-5"/>

            </div>
            <div className="d-flex  flex-column ">
            <p className="title mt-4 h2">{product.title}</p>
            <p className="fw-bolder h5">{product.price}€</p>
            <p className="h6 fw-bold">Note: {product.note}</p>
            <button onClick={()=> {AddProduct(product, '+')}} className="btn  mt-2  borderCb mx-auto rounded-0 p-2  fw-bold blancBg ">Ajouter au panier</button>
            </div>
           
        </div>
    )
}

