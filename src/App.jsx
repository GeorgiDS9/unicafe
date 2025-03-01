import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => setGood(good + 1);
  const handleClickNeutral = () => setNeutral(neutral + 1);
  const handleClickBad = () => setBad(bad + 1);

  const all = good + neutral + bad;
  const average = (good * 1 + bad * -1) / (good + neutral + bad);
  const positive = `${(good / (good + neutral + bad)) * 100} %`;

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
  );
};

export default App;
