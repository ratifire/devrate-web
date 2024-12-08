import { DateTime } from 'luxon';

export const formatToLocalDate = (dateString) => {
  const utcDate = DateTime.fromISO(dateString, { zone: 'UTC' });

  const localDate = utcDate.setZone('local');

  return localDate.toLocaleString(DateTime.DATETIME_MED);
};
