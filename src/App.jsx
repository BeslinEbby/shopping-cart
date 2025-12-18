import React from "react";
import NavBar from "./components/navBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductProvider from "./contexts/ProductContext";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Products from "./pages/products/Products";
import SearchProvider from "./contexts/SearchContext";
import SearchBar from "./components/searchBar/SearchBar";

const App = () => {
   return (
      <div className="app">
         <SearchProvider>
            <NavBar />
            <SearchBar/>
            <ProductProvider>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/all" element={<Products />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
               </Routes>
            </ProductProvider>
         </SearchProvider>
         <Footer />
      </div>
   );
};

export default App;
