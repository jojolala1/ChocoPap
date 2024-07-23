import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Boutique from "./pages/Boutique";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorElement from "./pages/ErrorElement";
import Sidebar from "./components/sidebar";
import { useEffect, useState } from "react";

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <AppLayout />,
    errorElement: <ErrorElement />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'boutique',
        element: <Boutique />,
      },
    ],
  },
]);

function AppLayout() {

  const [panier, setPanier] = useState([])
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [price, setPrice] = useState(0)
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };


  const totalPrice = () => {
  let compteur = 0

    for(let product of panier ){
      compteur += product.quantity*product.price
    }
    setPrice(compteur)
  }

  const deleteAllProduct = () => {
    const newPanier = panier.filter((panierElement)=> panierElement.id === false)
    setPanier(newPanier)
  }

  const deleteProduct = (product) => {
    const newPanier = panier.filter((panierElement)=> panierElement.id !== product.id)
    setPanier(newPanier)
  }
  const AddProduct = (newProduct, action) => {
    setPanier((prevPanier) => {
      const existingProduct = prevPanier.find((item) => item.id === newProduct.id);
  
      if (existingProduct) {
        return prevPanier.map((item) => {
          if (item.id === newProduct.id) {
            const newQuantity = action === '+' ? item.quantity + 1 : (action === '-' ? item.quantity - 1 : item.quantity);
  
            return { ...item, quantity: Math.max(newQuantity, 0) };
          } else {
            return item;
          }
        });
      } else {
        return [...prevPanier, { ...newProduct, quantity: 1 }];
      }
    });
  };

  useEffect(()=>{totalPrice()},[panier])

return (
  <div className=" divApp min-vh-100">
    <Navbar toggleSidebar={toggleSidebar} />
    <div className="main-content d-flex flex-grow-1 position-relative ">
      {isSidebarVisible && <Sidebar toggleSidebar={toggleSidebar} panier={panier} deleteProduct={deleteProduct} deleteAllProduct={deleteAllProduct} AddProduct={AddProduct} priceTot={price}/>}
      <div className="content-container flex-grow-1">
        <Outlet context={{ AddProduct }} />
      </div>
    </div>
    <Footer />
  </div>
);
}

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
