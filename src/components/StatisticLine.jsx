import PropTypes from "prop-types";

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

StatisticLine.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

StatisticLine.displayName = "StatisticLine";
export default StatisticLine;
