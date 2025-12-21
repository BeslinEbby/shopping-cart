import React, { useContext, useState } from "react";
import Title from "../../components/title/Title";
import CartTotal from "../../components/cartTotal/CartTotal";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { OrderContext } from "../../contexts/OrderContext";
import "./PlaceOrder.css";

const PlaceOrder = () => {
   const [method, setMethod] = useState("cod");
   const [address, setAddress] = useState({
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      phoneNumber: "",
   });

   const navigate=useNavigate()

   const { getCartTotal, shippingFee, cartData } = useContext(CartContext);
   const { setOrderData } = useContext(OrderContext);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setAddress((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const placeOrder = (e) => {
    e.preventDefault()
      const orderInfo = {
         address: address,
         order: cartData,
         totalPrice: getCartTotal() + shippingFee,
         paymentMethod: method,
      };
      setOrderData((prev) => [...prev, orderInfo]);
      navigate("/orders")
      setAddress({
         firstName: "",
         lastName: "",
         email: "",
         street: "",
         city: "",
         state: "",
         zipCode: "",
         country: "",
         phoneNumber: "",
      });
   };

   return (
      <section className="place-order">
         <form action="" onSubmit={placeOrder}>
            <div className="delivery-sec">
               <div>
                  <Title text1={"DELIVERY"} text2={"INFORMATION"} />
               </div>
               <div className="contact-details" action="">
                  <div className="input-sec">
                     <input
                        value={address.firstName}
                        onChange={handleChange}
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        required
                     />
                     <input
                        value={address.lasttName}
                        onChange={handleChange}
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        required
                     />
                  </div>
                  <div className="input-sec">
                     <input
                        value={address.email}
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        required
                     />
                  </div>
                  <div className="input-sec">
                     <input
                        value={address.street}
                        onChange={handleChange}
                        name="street"
                        type="text"
                        placeholder="Street"
                        required
                     />
                  </div>
                  <div className="input-sec">
                     <input value={address.city} onChange={handleChange} name="city" type="text" placeholder="City" />
                     <input
                        value={address.state}
                        onChange={handleChange}
                        name="state"
                        type="text"
                        placeholder="State"
                     />
                  </div>
                  <div className="input-sec">
                     <input
                        value={address.zipCode}
                        onChange={handleChange}
                        name="zipCode"
                        type="number"
                        placeholder="ZipCode"
                        required
                     />
                     <input
                        value={address.country}
                        onChange={handleChange}
                        name="country"
                        type="text"
                        placeholder="Country"
                        required
                     />
                  </div>
                  <div className="input-sec">
                     <input
                        value={address.phoneNumber}
                        onChange={handleChange}
                        name="phoneNumber"
                        type="number"
                        placeholder="Phone Number"
                        required
                     />
                  </div>
               </div>
            </div>
            <div className="payment-sec">
               <div className="cart-total-sec">
                  <CartTotal />
               </div>
               <div className="pay-method-sec">
                  <div className="pay-method-title">
                     <Title text1={"PAYMENT"} text2={"METHOD"} />
                  </div>
                  <div className="pay-method-cnt">
                     <div onClick={() => setMethod("net")} className="pay-method">
                        <span className={method === "net" && "method-bg"}></span>
                        <p>Net Banking</p>
                     </div>
                     <div onClick={() => setMethod("upi")} className="pay-method">
                        <span className={method === "upi" && "method-bg"}></span>
                        <p>UPI</p>
                     </div>
                     <div onClick={() => setMethod("cod")} className="pay-method">
                        <span className={method === "cod" && "method-bg"}></span>
                        <p>Cash on Delivery</p>
                     </div>
                  </div>
               </div>
               <div className="place-order-btn">
                  <button>PLACE ORDER</button>
               </div>
            </div>
         </form>
      </section>
   );
};

export default PlaceOrder;
