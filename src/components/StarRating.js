import PropTypes from "prop-types";
import Star from "./Star";
import "../stylesheets/StarRating.scss";

const StarRating = ({
  starsSelected = 0,
  totalStars = 5,
  onRate = (f) => f,
}) => (
  <div className="star-rating-container">
    <div className="star-rating">
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={i < starsSelected}
          onClick={() => onRate(i + 1)}
        />
      ))}
    </div>
    <p className="star-text">
      {starsSelected} of {totalStars}
    </p>
  </div>
);
StarRating.displayName = "StarRating";
StarRating.propTypes = {
  starsSelected: PropTypes.number,
};

export default StarRating;
