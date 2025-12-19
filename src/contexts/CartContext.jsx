import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

   const [cartProducts, setCartProducts] = useState([]);
   const [quantity, setQuantity] = useState(1);

   const addToCart = (productId) => {
      setCartProducts((prevCart) => {
         const existingProduct = prevCart.find((item) => item.id === productId);

         if (existingProduct) {
            return prevCart.map((item) =>
               item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
            );
         }

         return [...prevCart, { id: productId, quantity: quantity }];
      });
   };


   return (
      <CartContext.Provider value={{ cartProducts, quantity, setQuantity, addToCart }}>{children}</CartContext.Provider>
   );
};

export default CartProvider
