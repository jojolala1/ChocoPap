import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const defaultValue = []; // Définir la valeur par défaut appropriée

  const [panier, setPanier] = useState(() => {
    const stikyValue = window.localStorage.getItem('myCart');
    try {
      return stikyValue !== null ? JSON.parse(stikyValue) : defaultValue;
    } catch (error) {
      console.error('Failed to parse myCart from localStorage', error);
      return defaultValue;
    }
  });

  const [price, setPrice] = useState(0);
  const [compteurQuantity, setCompteurQuantity] = useState(0);

  useEffect(() => {
    const dataCart = window.localStorage.getItem('myCart');
    try {
      const parsedDataCart = JSON.parse(dataCart);
      if (Array.isArray(parsedDataCart)) {
        setPanier(parsedDataCart);
      }
    } catch (error) {
      console.error('Failed to parse myCart from localStorage', error);
    }
  }, []);

  const myCartStorage = () => {
    window.localStorage.setItem('myCart', JSON.stringify(panier));
  };

  useEffect(() => {
    myCartStorage();
    totalPrice();
    totalQuantity();
  }, [panier]);

  const totalQuantity = () => {
    let compteur = 0;
    if (Array.isArray(panier)) {
      for (let product of panier) {
        compteur += product.quantity;
      }
    }
    setCompteurQuantity(compteur);
  };

  const totalPrice = () => {
    let compteur = 0;
    if (Array.isArray(panier)) {
      for (let product of panier) {
        compteur += product.quantity * product.price;
      }
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

  return (
    <CartContext.Provider value={{ panier, price, compteurQuantity, AddProduct, deleteProduct, deleteAllProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
