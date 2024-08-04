const arithmeticAverageSkillValue = ({ data, firstValue, secondValue }) => {
  if (!data) return;

  const countValue = data.length * 2;

  const sumValue = data.reduce((acc, v) => {
    return (acc += v[firstValue] + v[secondValue]);
  }, 0);

  return (sumValue / countValue).toFixed(1);
};

export default arithmeticAverageSkillValue;
