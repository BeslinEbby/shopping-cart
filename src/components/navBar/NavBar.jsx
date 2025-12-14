import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import './NavBar.css'

const NavBar = () => {

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
           <NavLink to={"/collection"}>
              <p>COLLECTION</p>
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
                 <p>0</p>
              </Link>
           </div>
        </div>
     </header>
  );
}

export default NavBar