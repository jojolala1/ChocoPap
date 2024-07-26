import React from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../cartContext';

export default function ProductPage() {
    const location = useLocation();
    const { product } = location.state || { product: null };
    const { AddProduct, panier } = useCart();

    if (!product) {
        return <p>Produit non trouvé</p>;
    }

    const productInCart = panier.find(item => item.id === product.id);
    const productQuantity = productInCart ? productInCart.quantity : 0;

    const imageUrl = `/${product.image}`;

    return (
        <div className="hautProductPage d-flex flex-column align-self-center align-items-center justify-content-center wResponssive">
            <div className="d-flex flex-column-reverse flex-md-row">
                <img 
                    src={imageUrl} 
                    alt={product.title} 
                    className="img-fluid coverImg imgProductPage my-5 my-md-4 my-md-0" 
                />
                <div className="ps-md-5">
                    <h3 className="display-6 mt-5 mt-md-0 jauneT">{product.title}</h3>
                    <p className="h3 py-2 marronCT">{product.price}€</p>
                    <p className="h5 pb-4 pb-md-5">{product.description}</p>
                    <div className="d-flex flex-column flex-md-row">
                        <div className="quantity-control d-flex mb-4 mb-md-0 mx-3 mx-md-0">
                            <input 
                                id={product.id} 
                                readOnly 
                                type="number" 
                                min={0} 
                                className="form-control inputSize" 
                                value={productQuantity} 
                            />
                            <div className="d-flex flex-column me-4">
                                <button 
                                    onClick={() => AddProduct(product, '+')} 
                                    className="btn borderCb py-0"
                                >
                                    +
                                </button>
                                <button 
                                    onClick={() => AddProduct(product, '-')} 
                                    className="btn borderCb py-0"
                                >
                                    -
                                </button>
                            </div>
                        </div>
                        <button 
                            onClick={() => AddProduct(product, '+')} 
                            className="btn borderCb mx-3 mx-md-0 py-2 title btnW"
                        >
                            AJOUTER AU PANIER
                        </button>
                    </div>
                </div>
            </div>
            <div className="mb-5 mb-md-0">
                <h5 className="h3 my-3 my-md-5">Ingrédients</h5>
                <p className="h6">{product.ingredients}</p>
            </div>
        </div>
    );
}
