import { DateTime } from 'luxon';
import { btnStatus } from '../ScheduledMeeting/constants';

const getStatusByTime = (startTime) => {
  const now = DateTime.now().toUTC();
  const start = DateTime.fromISO(startTime).toUTC();
  const end = start.plus({ hours: 1 });

  if (now < start) {
    return btnStatus['UPCOMING'];
  }

  if (now < end) {
    return btnStatus['IN PROCESS'];
  }

  return btnStatus['AWAITING FEEDBACK'];
};

export default getStatusByTime;
