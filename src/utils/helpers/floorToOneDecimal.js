const floorToOneDecimal = (num) => {
  if (typeof num !== 'number' || isNaN(num)) return 0;
  return Math.floor(num * 10) / 10;
};

export default floorToOneDecimal;
