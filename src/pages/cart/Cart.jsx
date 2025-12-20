import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../components/title/Title";
import { ProductContext } from "../../contexts/ProductContext";
import { CartContext } from "../../contexts/CartContext";
import { RiDeleteBinLine } from "react-icons/ri";
import Price from "../../components/price/Price";
import CartTotal from "../../components/cartTotal/CartTotal";
import "./Cart.css";

const Cart = () => {

   const [cartProducts, setCartProducts] = useState([]);

   const navigate = useNavigate();

   const { products } = useContext(ProductContext);
   const { cartData, updateQuantity, removeProduct } = useContext(CartContext);

   useEffect(() => {
      const data = cartData.map((cartItem) => {
         const product = products.find((prod) => prod.id === cartItem.id);

         return product ? { ...product, quantity: cartItem.quantity, total: cartItem.total } : null;
      });

      setCartProducts(data);
   }, [cartData, products]);

   return (
      <section className="cart">
         <div className="cart-title">
            <Title text1={"YOUR"} text2={"CART"} />
         </div>
         {cartData.length > 0 ? (
            <>
               <div className="cart-products">
                  {cartProducts.map((product) => (
                     <div className="cart-prod">
                        <div className="prod-cnt">
                           <img src={product.thumbnail} alt="" />
                           <div className="prod-info">
                              <p>{product.title}</p>
                              <Price price={product.price * product.quantity} />
                           </div>
                        </div>
                        <div className="prod-changes">
                           <div className="quantity">
                              <div className="qty-wrapper">
                                 <button
                                    className="qty-btn"
                                    onClick={() => updateQuantity(product.id, product.quantity - 1, product.price)}
                                    disabled={product.quantity <= 1}
                                 >
                                    −
                                 </button>
                                 <span className="qty-value">{product.quantity}</span>
                                 <button
                                    className="qty-btn"
                                    onClick={() => updateQuantity(product.id, product.quantity + 1, product.price)}
                                 >
                                    +
                                 </button>
                              </div>
                           </div>
                           <div className="remove-prod">
                              <RiDeleteBinLine onClick={() => removeProduct(product.id)} fontSize={"20px"} />
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="cart-proceed">
                  <CartTotal />
                  <button onClick={() => navigate("/place-order")}>PROCEED TO CHECKOUT</button>
               </div>
            </>
         ) : (
            <div className="emptycart">
               <span>Your Cart Is Empty !</span>
            </div>
         )}
      </section>
   );
};

export default Cart;
