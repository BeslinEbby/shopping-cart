import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

   const [cartData, setCartData] = useState([]);

   const shippingFee = 2;

   const addToCart = (productId, price) => {
      setCartData((prevCart) => {
         const existingProduct = prevCart.find((item) => item.id === productId);

         if (existingProduct) {
            return prevCart.map((item) =>
               item.id === productId ? { ...item, quantity: item.quantity + 1, total: item.total + price } : item
            );
         }
         return [...prevCart, { id: productId, quantity: 1, total: price }];
      });
   };

   const updateQuantity = (productId, newQty, price) => {
      setCartData((prev) =>
         prev.map((item) => (item.id === productId ? { ...item, quantity: newQty, total: newQty * price } : item))
      );
   };

   const removeProduct = (productId) => {
      setCartData((prev) => prev.filter((data) => data.id !== productId));
   };

   const getCartTotal = () => {
      const cartTotal = cartData.reduce((acc, curr) => acc + curr.total, 0);
      return Math.round(cartTotal);
   };

   const getCartCount=()=>{
      const cartCount=cartData.reduce((acc,curr)=>acc+curr.quantity, 0)
      return cartCount
   }   

   return (
      <CartContext.Provider value={{ cartData, addToCart, updateQuantity, removeProduct, getCartTotal, shippingFee, getCartCount }}>
         {children}
      </CartContext.Provider>
   );
};

export default CartProvider;
