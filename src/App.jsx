import React from 'react';
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Boutique from "./pages/Boutique";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorElement from "./pages/ErrorElement";
import Sidebar from "./components/sidebar";
import { useEffect, useState } from "react";
import ProductPage from "./pages/productPage";
import { CartProvider, useCart } from "./cartContext";

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
      {
        path: 'boutique/:productname',
        element: <ProductPage />
      },
      {
        path: '*',
        element: <ErrorElement />
      },
    ],
  },
]);

function AppLayout() {
  const { panier, price, AddProduct, deleteProduct, deleteAllProduct } = useCart();
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible)
  }
  return (
      <div className="d-flex flex-column divApp">
        <Navbar toggleSidebar={toggleSidebar}/>
        {isSidebarVisible && <Sidebar toggleSidebar={toggleSidebar} panier={panier} deleteProduct={deleteProduct} deleteAllProduct={deleteAllProduct} AddProduct={AddProduct} priceTot={price} />}
        <Outlet context={{ AddProduct }} AddProduct={{ AddProduct }} />
        <Footer />
      </div>


  );
}

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
