import React from "react";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { RiExchangeFundsFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import "./OurPolicy.css";

const OurPolicy = () => {
   return (
      <section className="ourpolicy">
         <div className="ourpolicy-cnt">
            <RiExchangeFundsFill fontSize={"36px"}/>
            <h5>Easy Exchange Policy</h5>
            <p>We offer easy hassle Exchange Policy</p>
         </div>
         <div className="ourpolicy-cnt">
            <IoShieldCheckmarkSharp fontSize={"36px"}/>
            <h5>7 days Return POlicy</h5>
            <p>We provide 7 days free replacement</p>
         </div>
         <div className="ourpolicy-cnt">
            <BiSupport fontSize={"36px"}/>
            <h5>Best Customer Support</h5>
            <p>We provide 24/7 Customer support</p>
         </div>
      </section>
   );
};

export default OurPolicy;
