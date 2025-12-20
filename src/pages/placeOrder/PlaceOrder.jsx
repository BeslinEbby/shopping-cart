import React, { useState } from "react";
import Title from "../../components/title/Title";
import CartTotal from "../../components/cartTotal/CartTotal";
import { useNavigate } from "react-router-dom";
import "./PlaceOrder.css";

const PlaceOrder = () => {

  const [method, setMethod] = useState("cod");

  const navigate=useNavigate()

  return (
    <section className="place-order">
      <div className="delivery-sec">
        <div>
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <form className="contact-details" action="">
          <div className="input-sec">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="input-sec">
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="input-sec">
            <input type="text" placeholder="Street" />
          </div>
          <div className="input-sec">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="input-sec">
            <input type="number" placeholder="ZipCode" />
            <input type="text" placeholder="Country" />
          </div>
          <div className="input-sec">
            <input type="number" placeholder="Phone Number" />
          </div>
        </form>
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
            <div onClick={() => {setMethod("net")}}className="pay-method">
              <span className={method === "net" && "method-bg"}></span>
              <p>Net Banking</p>
            </div>
            <div onClick={() => {setMethod("upi")}}className="pay-method">
              <span className={method === "upi" && "method-bg"}></span>
                <p>UPI</p>
            </div>
            <div onClick={() => {setMethod("cod");}}className="pay-method">
              <span className={method === "cod" && "method-bg"}></span>
              <p>Cash on Delivery</p>
            </div>
          </div>
        </div>
        <div className="place-order-btn">
          <button onClick={()=>navigate('/orders')}>PLACE ORDER</button>
        </div>
      </div>
    </section>
  );
};

export default PlaceOrder;
