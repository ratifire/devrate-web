import { DateTime } from 'luxon';

const formatTimeWithOffset = (dateString) => {
  const date = DateTime.fromISO(dateString).setZone('local');

  const timeNow = date.toFormat('HH:mm');
  const timePlusOneHour = date.plus({ hours: 1 }).toFormat('HH:mm');

  return `${timeNow} / ${timePlusOneHour}`;
};

export default formatTimeWithOffset;
