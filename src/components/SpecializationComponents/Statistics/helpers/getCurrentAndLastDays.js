const getCurrentAndLastDays = () => {
  const today = new Date();
  const tenDaysAgo = new Date(today);
  tenDaysAgo.setDate(today.getDate() - 9);

  const formatDate = (date) => date.toISOString().split('T')[0];

  return { to: formatDate(today), from: formatDate(tenDaysAgo) };
};

export default getCurrentAndLastDays;
