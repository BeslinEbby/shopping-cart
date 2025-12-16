import React from "react";
import hero from "../../assets/hero.jpg";
import "./Hero.css";

const Hero = () => {
   return (
      <div className="hero">
         <img src={hero} alt="" />
         <div className="hero-cnt">
            <h2>LATEST ARRIVALS</h2>
            <p>You can find our all latest products from here</p>
            <button>Shop Now</button>
         </div>
      </div>
   );
};

export default Hero;
