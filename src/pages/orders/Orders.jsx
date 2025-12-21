import React, { useContext, useEffect, useState } from "react";
import Title from "../../components/title/Title";
import { ProductContext } from "../../contexts/ProductContext";
import { OrderContext } from "../../contexts/OrderContext";
import Price from "../../components/price/Price";
import { useNavigate } from "react-router-dom";
import "./Orders.css";

const Orders = () => {
   const [orders, setOrders] = useState([]);

   const navigate=useNavigate()

   const { products } = useContext(ProductContext);
   const { orderData } = useContext(OrderContext);

   useEffect(() => {
      setOrders(
         orderData.map((item) => {
            const productDetails = item.order.map((prod) => {
               const product = products.find((data) => data.id == prod.id);
               return {
                  ...product,
                  quantity: prod.quantity,
                  total: prod.total,
               };
            });

            return {
               ...item,
               products: productDetails,
            };
         })
      );
   }, [orderData, products]);

   return (
      <section className="orders">
         <div className="order-title">
            <Title text1={"MY"} text2={"ORDERS"} />
         </div>
         {orders.length > 0 ? (
            orders?.map((data) =>
               data.products.map((product) => (
                  <>
                     <div key={product.id} className="order-cnt">
                        <div onClick={()=>navigate(`/product/${product.id}`)} className="order-prod-info">
                           <img src={product.images[0]} alt="" />
                           <div>
                              <p>{product.title}</p>
                              <div>
                                 <p>
                                    <Price price={product.total} />
                                 </p>
                                 <p>Quantity : {product.quantity}</p>
                              </div>
                           </div>
                        </div>
                        <div>
                           <div className="ship-info">
                              <p></p>
                              <p>{product.shippingInformation}</p>
                           </div>
                        </div>
                        <button className="order-track-btn">Track Order</button>
                     </div>
                     <hr />
                  </>
               ))
            )
         ) : (
            <div className="emptyOrders">
               <span>You Have No Orders !</span>
            </div>
         )}
      </section>
   );
};

export default Orders;
