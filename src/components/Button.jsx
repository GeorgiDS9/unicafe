import PropTypes from "prop-types";

const Button = ({ onClick, value }) => {
  return <button onClick={onClick}>{value}</button>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Button.displayName = "Button";
export default Button;
