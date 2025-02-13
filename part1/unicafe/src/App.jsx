import { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const allFeedbacks = good + neutral + bad;
  const average = allFeedbacks > 0 ? (good - bad) / allFeedbacks : 0;
  const posPercentage = allFeedbacks > 0 ? (good * 100) / allFeedbacks : 0;

  const addGoodFeedback = () => setGood(good + 1);
  const addNeutralFeedback = () => setNeutral(neutral + 1);
  const addBadFeedback = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={addGoodFeedback} text={"good"} />
      <Button handleClick={addNeutralFeedback} text={"neutral"} />
      <Button handleClick={addBadFeedback} text={"bad"} />
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={allFeedbacks}
        average={average}
        posPercentage={posPercentage}
      />
    </div>
  );
};

export default App;
