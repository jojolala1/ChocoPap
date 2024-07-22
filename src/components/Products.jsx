import Product from "./Product";

export default function Products ({categorys, products}) {

    


    const sortProduct = (product, categorys) => {
        for (let i in product.category) {
            if (categorys[product.category[i]] === false) {
                return null;

            }
        }

        return <Product key={product.id} product={product} />;

    };

    return (
        <>
            <div className="container-fluid row row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 m-0 p-5 pt-0 gap-5 align-items-center justify-content-center">
                {products.map((product) => sortProduct(product, categorys))}

            </div>
        </>
    );
}