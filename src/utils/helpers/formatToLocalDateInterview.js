import { DateTime } from 'luxon';

export const formatToLocalDateInterview = (dateString) => {
  const utcDate = DateTime.fromISO(dateString, { zone: 'UTC' });

  return utcDate.setZone('local').toFormat('dd/MM/yyyy HH:mm');
};
