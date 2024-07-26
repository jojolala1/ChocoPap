import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Product({product, AddProduct }) {


    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/boutique/${product.title}`, { state: { product } });
    };

    return (
        <div category={product.category} key={product.id} className="size marronFT text-center product mb-5 mx-3 align-content-center shadow-sm borderB">
            <div onClick={handleNavigate} className="productContentImg">
                <img src={(product.image)} alt={product.title} className="img-fluid rounded px-5" loading="lazy" />
            </div>
            <div className="d-flex flex-column">
                <p onClick={handleNavigate} className="title mt-4 h2">{product.title}</p>
                <p className="fw-bolder h5">{product.price}€</p>
                <p className="h6 fw-bold">Note: {product.note}</p>
                <button 
                    onClick={() => {
                        AddProduct(product, '+');
                    }} 
                    className="btn mt-2 borderCb mx-auto rounded-0 p-2 fw-bold blancBg">
                    Ajouter au panier
                </button>
            </div>
        </div>
    );
}
