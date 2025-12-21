import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import ProductProvider from "./contexts/ProductContext";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Products from "./pages/products/Products";
import SearchProvider from "./contexts/SearchContext";
import SearchBar from "./components/searchBar/SearchBar";
import SelectedProduct from "./pages/selectedProduct/SelectedProduct";
import CartProvider from "./contexts/CartContext";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Orders from "./pages/orders/Orders";
import OrderProvider from "./contexts/OrderContext";

const App = () => {
   return (
      <div className="app">
         <SearchProvider>
            <CartProvider>
               <NavBar />
               <SearchBar />
               <OrderProvider>
                  <ProductProvider>
                     <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:productId" element={<SelectedProduct />} />
                        <Route path="/all" element={<Products />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/place-order" element={<PlaceOrder />} />
                        <Route path="/orders" element={<Orders />} />
                     </Routes>
                  </ProductProvider>
               </OrderProvider>
            </CartProvider>
         </SearchProvider>
         <Footer />
      </div>
   );
};

export default App;
