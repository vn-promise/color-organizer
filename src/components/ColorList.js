import PropTypes from "prop-types";
import Color from "./Color";
import "../stylesheets/ColorList.scss";

const ColorList = ({ colors = [], onRate = (f) => f, onRemove = (f) => f }) => (
  <div className="color-list">
    {colors.length == 0 ? (
      <p>No Colors listed. (Add a color)</p>
    ) : (
      colors.map((color, i) => (
        <Color
          key={color.id}
          {...color}
          onRate={(rating) => onRate(color.id, rating)}
          onRemove={() => onRemove(color.id)}
        />
      ))
    )}
  </div>
);

ColorList.displayName = "ColorList";
ColorList.propTypes = {
  colors: PropTypes.array,
  onRate: PropTypes.func,
  onRemove: PropTypes.func,
};

export default ColorList;
