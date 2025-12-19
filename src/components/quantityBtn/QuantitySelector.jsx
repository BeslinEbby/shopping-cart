import "./QuantitySelector.css";

const QuantitySelector = ({ quantity, setQuantity }) => {

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
