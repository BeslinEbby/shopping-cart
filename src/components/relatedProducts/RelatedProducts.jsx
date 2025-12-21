import React, { useContext, useEffect, useState } from 'react'
import Title from '../title/Title'
import { ProductContext } from '../../contexts/ProductContext'
import ProductCard from '../productCard/ProductCard'
import './RelatedProducts.css'

const RelatedProducts = ({category, productId}) => {
  
  const [relatedProd,setRelatedProd]=useState([])
  
  const {products}=useContext(ProductContext)

    useEffect(()=>{
        if(products.length>0){
             setRelatedProd(products.filter((item)=>category===item.category && item.id !== productId))
        }
    },[products, category])

    console.log(relatedProd);
    

  return (
     <div className="related">
        <div className="related-prod-title">
           <Title text1={"RELATED"} text2={"PRODUCTS"} />
        </div>
        <div className="related-prod">
           {relatedProd.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
           ))}
        </div>
     </div>
  );
}

export default RelatedProducts