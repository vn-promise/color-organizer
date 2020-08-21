import PropTypes from "prop-types";
import StarRating from "./StarRating";
import "../stylesheets/Color.scss";

const Color = ({
  title,
  color,
  rating = 0,
  onRate = (f) => f,
  onRemove = (f) => f,
}) => (
  <div className="color">
    <button className="color__button" onClick={() => onRemove()}>
      x
    </button>
    <h2 className="color__title">{title}</h2>
    <div className="color__background" style={{ backgroundColor: color }}></div>
    <StarRating starsSelected={rating} onRate={(rating) => onRate(rating)} />
  </div>
);

Color.displayName = "Color";
Color.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number,
  onRate: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Color;
