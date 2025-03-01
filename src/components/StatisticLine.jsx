import PropTypes from "prop-types";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

StatisticLine.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

StatisticLine.displayName = "StatisticLine";
export default StatisticLine;
