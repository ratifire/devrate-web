import { DateTime } from 'luxon';

const formatTimeToUtc = (dateString) => {
  const localDate = DateTime.fromISO(dateString).setZone('local');

  return localDate.toFormat("dd/MM/yyyy '(UTC'ZZ')'");
};

export default formatTimeToUtc;
