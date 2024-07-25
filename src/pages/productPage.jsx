import { useLocation, useParams } from "react-router-dom"
import { useCart } from "../cartContext";

export default function ProductPage() {

    const location = useLocation();
    const { product,  } = location.state || { product: null};
    const { AddProduct, panier } = useCart();

    const productInCart = panier.find(item => item.id === product.id)
    const productQuantity = productInCart ? productInCart.quantity : 0;

    return (
        <>
            <div className="hautProductPage d-flex flex-column align-self-center align-items-center justify-content-center border gap-5 w-50">
                <div className="d-flex flex-row">
                    <img src={`../../src/${product.image}`} alt="produit image" className="border p-5 ps-0 pt-0 " />
                    <div className="border ps-5">
                        <h3 className="display-1">{product.title}</h3>
                        <p className="display-6 py-5">{product.price}€</p>
                        <p className="h3 pb-5">{product.description}</p>
                        <div className="border d-flex ">
                            <div className="quantity-control d-flex mb-4">
                                <input id={product.id} readOnly type="number" min={0} className="form-control inputSize" value={productQuantity}  />
                                <div className="d-flex flex-column ms-2">
                                    <button onClick={() => AddProduct(product, '+')} className="btn borderCb py-0">+</button>
                                    <button onClick={() => AddProduct(product, '-')} className="btn borderCb py-0">-</button>
                                </div>
                            </div>
                            <button onClick={() => AddProduct(product, '+')} className="btn borderCb p-3 title footerResponssive">AJOUTER AU PANIER</button>
                        </div>
                    </div>
                </div>
                <div className="border">
                    <h5 className="display-6 my-5">Ingrédients</h5>
                    <p className="h3">{product.ingredients}</p>
                </div>
            </div>
        </>
    )
}