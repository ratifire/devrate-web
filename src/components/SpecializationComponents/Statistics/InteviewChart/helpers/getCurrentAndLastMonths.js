const getCurrentAndLastMonths = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.toISOString().split('T')[0];

  const previousDate = new Date();
  previousDate.setMonth(previousDate.getMonth() - 10);
  const previousMonth = previousDate.toISOString().split('T')[0];

  return { currentMonth, previousMonth };
};

export default getCurrentAndLastMonths;
