import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import "./Price.css"

const Price = ({price}) => {
   return (
      <div className="price">
         <BsCurrencyDollar />
         <span>{price}</span>
      </div>
   );
};

export default Price;
