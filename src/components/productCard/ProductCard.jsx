import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
   return (
      <div className="product-card">
         <Link to={`/product/${product.id}`}>
            <img src={product.thumbnail} alt="" />
            <div className="product-card-cnt">
               <p>{product.title}</p>
               <div className="price">
                  <BsCurrencyDollar />
                  <p>{product.price}</p>
               </div>
            </div>
         </Link>
      </div>
   );
};

export default ProductCard;
