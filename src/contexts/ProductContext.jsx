import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider=({children})=>{
    const [products, setProducts]=useState([])

    const fetchProducts=()=>{
        fetch("https://dummyjson.com/products?limit=0")
           .then((res) => res.json())
           .then((data)=>{
            console.log(data)
            setProducts(data.products)
           })
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    return (
        <ProductContext.Provider values={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider
