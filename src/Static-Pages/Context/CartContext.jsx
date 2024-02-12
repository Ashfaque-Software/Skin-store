import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartStateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;

  // Function to add items to the cart
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item.productBlock_productName === product.productBlock_productName);
    
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.productBlock_priceValue * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.productBlock_productName === product.productBlock_productName) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity
          };
        }
        return cartProduct;
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
  };

  // Function to remove items from the cart
  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.productBlock_productName === product.productBlock_productName);
    const newCartItems = cartItems.filter((item) => item.productBlock_productName !== product.productBlock_productName);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.productBlock_priceValue * foundProduct.quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  };

  // Function to toggle the quantity of items in the cart
  const toggleCartItemQuantity = (productBlock_productName, value) => {
    foundProduct = cartItems.find((item) => item.productBlock_productName === productBlock_productName);

    if (value === 'inc') {
      setCartItems(cartItems.map((item) => item.productBlock_productName === productBlock_productName ? { ...foundProduct, quantity: foundProduct.quantity + 1 } : item));
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.productBlock_priceValue);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === 'dec' && foundProduct.quantity > 1) {
      setCartItems(cartItems.map((item) => item.productBlock_productName === productBlock_productName ? { ...foundProduct, quantity: foundProduct.quantity - 1 } : item));
      setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.productBlock_priceValue);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
    }
  };

  // Function to increment the quantity count
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  // Function to decrement the quantity count
  const decQty = () => {
    setQty((prevQty) => (prevQty - 1 < 1 ? 1 : prevQty - 1));
  };

  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useStateContext = () => useContext(CartContext);
