import PropTypes from "prop-types";
import "../stylesheets/Star.scss";

const Start = ({ selected = false, onClick = (f) => f }) => (
  <div className={selected ? "star selected" : "star"} onClick={onClick}></div>
);

Start.displayName = "Star";
Start.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Start;
