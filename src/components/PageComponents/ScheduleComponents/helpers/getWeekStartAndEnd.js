import { DateTime } from 'luxon';

const getWeekStartAndEnd = (year, weekNumber) => {
  const firstDayOfYear = DateTime.local(year).startOf('year');
  const firstDayOfWeek = firstDayOfYear.plus({ weeks: weekNumber - 1 }).startOf('week');
  const lastDayOfWeek = firstDayOfWeek.endOf('week');

  return {
    startOfWeek: firstDayOfWeek.toISODate(),
    endOfWeek: lastDayOfWeek.toISODate(),
  };
};

export default getWeekStartAndEnd;
