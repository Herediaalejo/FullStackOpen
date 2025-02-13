const Statistics = ({ good, neutral, bad, all, average, posPercentage }) => {
  return (
    <ul>
      <li>good {good}</li>
      <li>neutral {neutral}</li>
      <li>bad {bad}</li>
      <li>all {all}</li>
      <li>average {average}</li>
      <li>positive {posPercentage}%</li>
    </ul>
  );
};

export default Statistics;
