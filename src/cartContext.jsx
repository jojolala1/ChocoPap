import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [panier, setPanier] = useState([]);
  const [price, setPrice] = useState(0);
  const [compteurQuantity, setCompteurQuantity] = useState(0);

  const totalQuantity = () => {
    let compteur = 0;
    for (let product of panier) {
      compteur += product.quantity;
    }
    setCompteurQuantity(compteur);
  };

  const totalPrice = () => {
    let compteur = 0;
    for (let product of panier) {
      compteur += product.quantity * product.price;
    }
    setPrice(compteur);
  };

  const deleteAllProduct = () => {
    setPanier([]);
  };

  const deleteProduct = (product) => {
    setPanier((prevPanier) => prevPanier.filter((panierElement) => panierElement.id !== product.id));
  };

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

  useEffect(() => {
    totalPrice();
    totalQuantity();
  }, [panier]);

  

  return (
    <CartContext.Provider value={{ panier, price, compteurQuantity, AddProduct, deleteProduct, deleteAllProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
