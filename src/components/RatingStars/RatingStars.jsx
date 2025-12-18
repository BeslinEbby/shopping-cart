import React from "react";
import { IoStar, IoStarHalfOutline, IoStarOutline } from "react-icons/io5";
import "./RatingStars.css";

const RatingStars = ({ rating, max = 5 }) => {

   const starsCount = [];

   for (let i = 1; i <= max; i++) {
      starsCount.push(i);
   }

   return (
      <div className="rating">
         <div>
            {starsCount.map((star) => {
               const starNumber = star;

               if (rating >= starNumber) {
                  return <IoStar key={star}/>;
               }

               if (rating >= starNumber - 0.5) {
                  return <IoStarHalfOutline key={star} />;
               }

               return <IoStarOutline key={star}/>;
            })}
         </div>
         <span>{rating}</span>
      </div>
   );
};

export default RatingStars;
