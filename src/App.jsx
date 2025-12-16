import React from "react";
import NavBar from "./components/navBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductProvider from "./contexts/ProductContext";

const App = () => {
   return (
      <div className="app">
         <NavBar />
         <ProductProvider>
            <Routes>
               <Route path="/" element={<Home />} />
            </Routes>
         </ProductProvider>
      </div>
   );
};

export default App;
