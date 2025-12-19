import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { ProductContext } from "../../contexts/ProductContext";
import { SearchContext } from "../../contexts/SearchContext";
import ProductCard from "../../components/productCard/ProductCard";
import Title from "../../components/title/Title";
import "./Products.css";

const Products = () => {
   const [filteredProducts, setFilteredProducts] = useState([]);
   const [showFilter, setshowFilter] = useState(false);
   const [categories, setCategories] = useState([]);
   const [brands, setBrands] = useState([]);
   const [category, setCategory] = useState("all");
   const [selectedBrands, setSelectedBrands] = useState([]);
   const [sortType, setSortType] = useState();

   const { products } = useContext(ProductContext);
   const { search, showSearchBar } = useContext(SearchContext);

   const toggleCategory = (cat) => {
      setCategory(cat);
      setSelectedBrands([]);
   };
   
   const toggleBrands = (e) => {
      if (selectedBrands.includes(e.target.value)) {
         setSelectedBrands((prev) => prev.filter((brand) => brand !== e.target.value));
      } else {
         setSelectedBrands((prev) => [...prev, e.target.value]);
      }
   };

   const applyFilter = () => {
      let productsCopy = [...products];

      if (search.length > 0) {
         productsCopy = productsCopy.filter(
            (item) =>
               item.title.toLowerCase().includes(search.toLowerCase()) || item.tags.includes(search.toLowerCase())
         );
      }
      if (category !== "all") {
         productsCopy = productsCopy.filter((item) => category === item.category);
      }
      if (selectedBrands.length > 0) {
         productsCopy = productsCopy.filter((item) => selectedBrands.includes(item.brand));
      }
      if (sortType === "low-high") {
         productsCopy.sort((a, b) => a.price - b.price);
      }

      if (sortType === "high-low") {
         productsCopy.sort((a, b) => b.price - a.price);
      }
      setFilteredProducts(productsCopy);
   };

   useEffect(() => {
      setFilteredProducts(products);
   }, [products]);

   useEffect(() => {
      applyFilter();
   }, [products, category, selectedBrands, search, showSearchBar, sortType]);

   useEffect(() => {
      const brandsWithDuplicates = products
         .filter((product) => {
            if (product.category == category) {
               return product.brand;
            }
         })
         .map((prod) => prod.brand);
      setBrands([...new Set(brandsWithDuplicates)]);
   }, [category, products]);

   useEffect(() => {
      const fetchCategories = () => {
         fetch("https://dummyjson.com/products/category-list")
            .then((res) => res.json())
            .then((data) => setCategories(data));
      };
      fetchCategories();
   }, []);

   return (
      <section className="products">
         <div className="filter-sec">
            <button onClick={() => setshowFilter(!showFilter)}>
               FILTERS
               <span>
                  {showFilter ? <IoIosArrowDown fontSize={"20px"} /> : <IoIosArrowForward fontSize={"20px"} />}
               </span>
            </button>
            <div className={!showFilter ? "hidden" : ""}>
               <div className="filter-border">
                  <p>CATEGORIES</p>
                  <div className="filter-cnt">
                     <div className="filter-btn">
                        <input
                           type="radio"
                           name="category"
                           value={"all"}
                           checked={category == "all"}
                           onChange={() => toggleCategory("all")}
                        />
                        <label htmlFor="">All</label>
                     </div>
                     {categories.map((cat) => (
                        <div className="filter-btn" key={cat}>
                           <input
                              type="radio"
                              name="category"
                              checked={category == cat}
                              value={cat}
                              onChange={() => toggleCategory(cat)}
                           />
                           <label htmlFor="">{cat}</label>
                        </div>
                     ))}
                  </div>
               </div>
               {category !== "all" && brands.length > 0 && (
                  <div className="filter-border">
                     <p>Brands</p>
                     <div className="filter-cnt">
                        {brands.map((brand) => (
                           <div className="filter-btn">
                              <input
                                 checked={selectedBrands.includes(brand)}
                                 type="checkbox"
                                 value={brand}
                                 onChange={toggleBrands}
                              />
                              <label htmlFor="">{brand}</label>
                           </div>
                        ))}
                     </div>
                  </div>
               )}
            </div>
         </div>
         <div className="products-cnt">
            <div className="products-cnt-title">
               <Title text1={"ALL"} text2={"PRODUCTS"} />
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus ipsam a aut voluptate voluptatem
                  iusto debitis alias sunt veniam?
               </p>
            </div>
            <div className="products-sort">
               <select className="sort" value={sortType || "relevant"} onChange={(e) => setSortType(e.target.value)}>
                  <option value={"relevant"}>Sort By : Relevant</option>
                  <option value={"low-high"}>Sort By : Low To High</option>
                  <option value={"high-low"}>Sort By : High To Low</option>
               </select>
            </div>
            <div className="products-sec">
               {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Products;
