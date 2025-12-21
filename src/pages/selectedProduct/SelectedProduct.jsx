import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import RatingStars from "../../components/RatingStars/RatingStars";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import RelatedProducts from "../../components/relatedProducts/RelatedProducts";
import { CartContext } from "../../contexts/CartContext";
import Price from "../../components/price/Price";
import "./SelectedProduct.css";

const SelectedProduct = () => {

   const [productData, setProductData] = useState();
   const [image, setImage] = useState();
   const [change, setChange] = useState(true);

   const { productId } = useParams();

   const { products } = useContext(ProductContext);
   const { addToCart  } = useContext(CartContext);

   useEffect(() => {
      const fetchProductData = () => {
         const product = products?.find((data) => data.id == productId);
         setProductData(product);
         setImage(product?.images[0]);
      };
      fetchProductData();
   }, [products, productId]);
   

   return (
      productData && (
         <section className="product">
            <div className="product-details">
               <div className="product-images">
                  <div className="all-images">
                     {productData.images.map((item, index) => (
                        <img onClick={() => setImage(item)} src={item} key={index} alt="" />
                     ))}
                  </div>
                  <div className="full-image">
                     <img src={image} alt="" />
                  </div>
               </div>
               <div className="product-info">
                  <h2>{productData.title}</h2>
                  <RatingStars rating={productData.rating} />
                  <Price price={productData.price} />
                  <p>{productData.description}</p>
                  <button onClick={() => addToCart(productData.id, productData.price)} className="cart-btn">
                     ADD TO CART
                  </button>
                  <hr />
                  <div className="policy">
                     <p>100% Orginal Product</p>
                     <p>Cash on Delivery on this Product</p>
                     <p>Easy return And Exchange within 7 days</p>
                  </div>
               </div>
            </div>
            <div className="product-more">
               <div className="more-btns">
                  <button className={change ? "btn-bg" : ""} onClick={() => setChange(true)}>
                     Description
                  </button>
                  <button className={!change ? "btn-bg" : ""} onClick={() => setChange(false)}>
                     Reviews ({productData.reviews.length})
                  </button>
               </div>
               {change ? (
                  <div className="product-desc">
                     <p>{productData.description}</p>
                     <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam porro soluta dignissimos labore
                        dolor odio fugit quidem dolores velit, reprehenderit perspiciatis commodi doloribus error magnam
                        mollitia, quam cum sit doloremque architecto nobis?
                     </p>
                  </div>
               ) : (
                  <div className="reviews">
                     {productData.reviews.map((review) => (
                        <ReviewCard review={review} />
                     ))}
                  </div>
               )}
            </div>
            <RelatedProducts category={productData.category} />
         </section>
      )
   );
};

export default SelectedProduct;
