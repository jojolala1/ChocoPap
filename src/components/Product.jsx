export default function Product ({product}) {

                return (
                    <div category={product.category} key={product.id} className=" d-flex flex-column text-center  align-items-center product">
                        <div className=" h-100  rounded-5 p-5 shadow align-content-center">
                        <img src={`../../src/${product.image}`} alt="chocolat" className="img-fluid"/>
            
                        </div>
                        <p>{product.title}</p>
                        <p>{product.price}€</p>
                        <p>Note: {product.note}</p>
                        <button className="btn btn-primary btn-md">Ajouter au panier</button>
                    </div>
                )
            }

