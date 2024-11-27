import { DateTime } from 'luxon';

const getUserUTC = () => {
  const localDate = DateTime.local();
  const offsetInHours = localDate.offset / 60;
  return `UTC${offsetInHours >= 0 ? '+' : ''}${offsetInHours}`;
};

export default getUserUTC;
