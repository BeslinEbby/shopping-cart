import { useContext } from "react";
import "./QuantitySelector.css";
import { CartContext } from "../../contexts/CartContext";

const QuantitySelector = () => {

    const {quantity, setQuantity}=useContext(CartContext)

   return (
      <div className="qty-wrapper">
         <button className="qty-btn" onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>
            -
         </button>

         <span className="qty-value">{quantity}</span>

         <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}>
            +
         </button>
      </div>
   );
};

export default QuantitySelector;
