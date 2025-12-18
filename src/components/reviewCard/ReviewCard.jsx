import RatingStars from "../RatingStars/RatingStars";
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
   const { comment, date, rating, reviewerName, reviewerEmail } = review;

   const formattedDate = new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
   });

   return (
      <div className="review-card">
         <div className="review-header">
            <div className="review-avatar">{reviewerName.charAt(0)}</div>

            <div>
               <h4 className="review-name">{reviewerName}</h4>
               <p className="review-email">{reviewerEmail}</p>
            </div>
         </div>

         <div className="review-rating">
            <RatingStars rating={rating}/>
         </div>

         <p className="review-comment">“{comment}”</p>

         <span className="review-date">{formattedDate}</span>
      </div>
   );
};

export default ReviewCard;
