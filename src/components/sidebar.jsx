export default function Sidebar({ toggleSidebar, panier, AddProduct, priceTot, deleteProduct, deleteAllProduct }) {
  return (
    <div className="sidebar blancBg d-flex flex-column flex-grow-1 position-absolute end-0 top-0 h-100 z-2">

      <div className="jauneBg p-2 blancT text-center">
        <button onClick={toggleSidebar} className="btn blancBg position-absolute rounded-0 start-0 ms-2 py-0 borderCb px-1">
          <i className="bi bi-x h4"></i>
        </button>
        <h2 className="mt-5">Panier</h2>
      </div>

      <div className="contentSidebar">
        {panier.length === 0 ? (
          <div className="d-flex m-5 justify-content-center">
          <p className="h3  marronFT title">Votre panier est vide</p>
          </div>
        ) : (
          panier.map((article) => (
            <div key={article.id} className="d-flex justify-content-start ms-2 my-5 align-items-center">
              <button onClick={()=>deleteProduct(article)} className="btn littleBtn my-4 px-0 border border-danger text-decoration-none d-flex align-items-center"><i className=" bi bi-x display-6 text-danger"></i></button>
              <img src={`../../src/${article.image}`} alt="chocolat" className="img-fluid w-50 rounded px-4" />
              <div className="ms-2">
                <p className="title footerResponssive">{article.title}</p>
                <p className="fw-bolder footerResponssive">{(article.price * article.quantity).toFixed(2)}€</p>
                <div className="d-flex">
                  <input id={article.id} readOnly type="number" min={1} className="footerResponssive form-control inputSize" value={article.quantity} />
                  <div className="d-flex flex-column">
                    <button onClick={() => {AddProduct(article, '+'), console.log(article.quantity)}} className="btn borderCb py-0">+</button>
                    <button onClick={() => AddProduct(article, '-')} className="btn borderCb py-0">-</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="jauneBg footerSide d-flex flex-column align-items-center gap-2 p-3 title">
        <p className="title marronFT mb-3 footerResponssive">TOTAL : {priceTot.toFixed(2)}€</p>
        <button onClick={()=>deleteAllProduct()} className="footerResponssive btn btnW blancBg rounded-0 borderCb">REINITIALISER LE PANIER</button>
        <button className="btn btnW blancBg rounded-0 borderCb footerResponssive">VALIDER LE PANIER</button>
      </div>

    </div>
  );
}
