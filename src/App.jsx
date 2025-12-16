import React from "react";
import NavBar from "./components/navBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductProvider from "./contexts/ProductContext";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";

const App = () => {
   return (
      <div className="app">
         <NavBar />
         <ProductProvider>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
            </Routes>
         </ProductProvider>
         <Footer/>
      </div>
   );
};

export default App;
