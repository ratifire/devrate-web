export const getDatesInWeek = (date) => {
  const startOfWeek = date.startOf('week');
  const dates = [];

  for (let i = 0; i < 7; i++) {
    dates.push(startOfWeek.plus({ days: i }));
  }

  return dates;
};
