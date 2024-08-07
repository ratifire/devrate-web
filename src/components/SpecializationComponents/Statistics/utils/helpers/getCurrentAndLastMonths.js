const getCurrentAndLastMonths = () => {
  const currentDate = new Date();
  const to = currentDate.toISOString().split('T')[0];

  const previousDate = new Date();
  previousDate.setMonth(previousDate.getMonth() - 10);
  const from = previousDate.toISOString().split('T')[0];

  return { to, from };
};

export default getCurrentAndLastMonths;
