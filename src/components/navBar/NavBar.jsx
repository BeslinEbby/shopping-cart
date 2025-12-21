import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { SearchContext } from "../../contexts/SearchContext";
import { CartContext } from "../../contexts/CartContext";
import "./NavBar.css";

const NavBar = () => {
   const [visibleSideBar, setVisibleSideBar] = useState(false);
   const [visibleSearch, setVisibleSearch] = useState(false);

   const { setShowSearchBar } = useContext(SearchContext);
   const { getCartCount } = useContext(CartContext);

   const location = useLocation();

   useEffect(() => {
      if (location.pathname == "/all") {
         setVisibleSearch(true);
      } else {
         setVisibleSearch(false);
      }
   }, [location]);

   return (
      <header className="navbar">
         <div className="nav-logo">
            <Link to={"/"}>dummy</Link>
         </div>
         <ul className="nav-links">
            <NavLink to={"/"}>
               <p>HOME</p>
               <hr />
            </NavLink>
            <NavLink to={"/all"}>
               <p>PRODUCTS</p>
               <hr />
            </NavLink>
            <NavLink to={"/about"}>
               <p>ABOUT</p>
               <hr />
            </NavLink>
            <NavLink to={"/contact"}>
               <p>CONTACT </p>
               <hr />
            </NavLink>
         </ul>
         <div className="nav-right">
            {visibleSearch && <FiSearch onClick={() => setShowSearchBar(true)} fontSize={"22px"} />}
            <div className="nav-profile">
               <button>
                  <FaRegUser fontSize={"20px"} />
               </button>
               <div className="profile-drop-down">
                  <div className="drop-down-cnt">
                     <Link to={"/profile"}>My Profile</Link>
                     <Link to={"/orders"}>Orders</Link>
                     <Link to={"/login"}>LogIn</Link>
                  </div>
               </div>
            </div>
            <div className="nav-cart">
               <Link to={"/cart"}>
                  <FiShoppingCart fontSize={"20px"} />
                  <p>{getCartCount()}</p>
               </Link>
            </div>
            <div className="nav-menu" onClick={() => setVisibleSideBar(true)}>
               <GiHamburgerMenu fontSize={"20px"} />
            </div>
         </div>
         {visibleSideBar && (
            <div className="sidebar">
               <div className="back-btn">
                  <button onClick={() => setVisibleSideBar(false)}>
                     <IoMdClose fontSize={"20px"} />
                  </button>
               </div>
               <div className="sidebar-cnt">
                  <NavLink onClick={() => setVisibleSideBar(false)} to={"/"}>
                     <p>HOME</p>
                  </NavLink>
                  <NavLink onClick={() => setVisibleSideBar(false)} to={"/collection"}>
                     <p>PRODUCTS</p>
                  </NavLink>
                  <NavLink onClick={() => setVisibleSideBar(false)} to={"/about"}>
                     <p>ABOUT</p>
                  </NavLink>
                  <NavLink onClick={() => setVisibleSideBar(false)} to={"/contact"}>
                     <p>CONTACT </p>
                  </NavLink>
               </div>
            </div>
         )}
      </header>
   );
};

export default NavBar;
