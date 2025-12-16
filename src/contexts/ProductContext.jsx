import { createContext, useEffect, useState } from "react";

export const productContext = createContext();

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
        <productContext.Provider>
            {children}
        </productContext.Provider>
    )
}

export default ProductProvider
