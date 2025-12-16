import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-sec">
        <div className="footer-logo">
          <h4>dummy</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            enim doloribus ex similique nulla ipsa cumque fugit eaque quisquam
            ab perferendis, praesentium officia asperiores voluptatem voluptas
            maxime eos soluta rerum.
          </p>
        </div>
        <div className="footer-cnt">
          <p>COMPANY</p>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/products"}>Products</Link></li>
            <li><Link to={"/about"}>About Us</Link></li>
            <li><Link to={"#"}>Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-cnt">
          <p>Get in Touch</p>
          <ul>
            <li>+12345678</li>
            <li>contact@dummy.com</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <hr />
        <p>Copyright 2025@dummy.com - All Rights Claimed</p>
      </div>
    </footer>
  );
};

export default Footer;
