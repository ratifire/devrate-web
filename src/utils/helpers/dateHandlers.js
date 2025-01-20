import { DateTime } from 'luxon';

export const checkTimeDifference = (startTime, cancelButtonHandler, disableLinkHandler) => {
  const eventStartTime = new Date(startTime);

  const currentTime = new Date();
  const timeDifferenceInMinutes = (currentTime - eventStartTime) / (1000 * 60);

  if (timeDifferenceInMinutes >= 1) {
    cancelButtonHandler(false);
  }

  if (timeDifferenceInMinutes >= 60) {
    disableLinkHandler(true);
  }
};

export const formatToLocalDate = (dateString) => {
  const utcDate = DateTime.fromISO(dateString, { zone: 'UTC' });

  const localDate = utcDate.setZone('local');

  return localDate.toLocaleString(DateTime.DATETIME_MED);
};

export const generateYearsArray = () => {
  const availableYears = [];
  for (let i = 1950; i <= `${new Date().getFullYear()}`; i++) {
    availableYears.push(`${i}`);
  }
  return availableYears;
};

export const getUserUTC = () => {
  const localDate = DateTime.local();
  const offsetInHours = localDate.offset / 60;
  return `UTC${offsetInHours >= 0 ? '+' : ''}${offsetInHours}`;
};

export const getDatesInWeek = (date) => {
  const startOfWeek = date.startOf('week');
  const dates = [];

  for (let i = 0; i < 7; i++) {
    dates.push(startOfWeek.plus({ days: i }));
  }

  return dates;
};
