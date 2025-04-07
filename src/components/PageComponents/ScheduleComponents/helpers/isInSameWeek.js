import { DateTime } from 'luxon';

const isInSameWeek = (dayA, dayB) => {
  if (dayB == null) {
    return false;
  }
  const dayALuxon = DateTime.fromJSDate(dayA.toJSDate());
  const dayBLuxon = DateTime.fromJSDate(dayB.toJSDate());
  return dayALuxon.weekNumber === dayBLuxon.weekNumber && dayALuxon.weekday !== 8;
};

export default isInSameWeek;
