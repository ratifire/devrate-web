import { DateTime } from 'luxon';

const getStatusByTime = (startTime) => {
  const now = DateTime.now();
  const start = DateTime.fromISO(startTime).toUTC();
  const end = start.plus({ hours: 1 });

  if (now < start) {
    return 'UPCOMING';
  }

  if (now < end) {
    return 'IN PROCESS';
  }

  return 'AWAITING FEEDBACK';
};

export default getStatusByTime;
