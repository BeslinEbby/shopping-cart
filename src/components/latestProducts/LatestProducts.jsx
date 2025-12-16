import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import Title from '../title/Title'
import ProductCard from '../productCard/ProductCard'
import './LatestProducts.css'

const  LatestProducts = () => {

  const [latestProducts, setLatestProducts]=useState([])

  const {products}=useContext(ProductContext)
    
    useEffect(()=>{
        setLatestProducts(products.slice(0,10))
    },[products])    

  return (
     <section className="latest">
        <div className="latest-title">
           <Title text1={"LATEST"} text2={"PRODUCTS"} />
           <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, animi sunt neque repudiandae in at
              ab soluta iste corrupti laudantium omnis nisi doloribus saepe quam qui expedita fugiat nostrum?
              Cupiditate!
           </p>
        </div>
        <div className="latest-prod">
           {latestProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
           ))}
        </div>
     </section>
  );
}

export default LatestProducts