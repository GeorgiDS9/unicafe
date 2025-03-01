import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const [feedback, setFeedback] = useState(false);

  /* Statistics:
  - good votes count as +1
  - bad votes count as -1
  neutral votes are 0 and don't affect the numerator
  */
  const all = good + neutral + bad;
  const average = (good * 1 + bad * -1) / (good + neutral + bad);
  const positive = `${(good / (good + neutral + bad)) * 100} %`;

  useEffect(() => {
    if (good > 0 || neutral > 0 || bad > 0) {
      setFeedback(true);
    }
  }, [good, neutral, bad]);

  return (
    <div>
      <h1>statistics</h1>
      {feedback ? (
        <>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

Statistics.displayName = "Statistics";
export default Statistics;
