import { DateTime } from 'luxon';
import { datesConfig } from '../constants/datesConfig.js';

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

  return localDate.toFormat('yyyy.MM.dd HH:mm');
};

export const generateYearsArray = () => {
  const currentYear = new Date().getFullYear();
  const availableYears = [];

  for (let i = currentYear; i >= 1950; i--) {
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

export const formatDateAndTime = (dateString) => {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

export function convertMilliInYears(mSeconds) {
  const { MILLISECONDS_IN_YEAR } = datesConfig;
  return Math.floor(mSeconds / MILLISECONDS_IN_YEAR);
}

export const getLocaleFormattedDate = (date) => DateTime.fromISO(date).toFormat('d MMM', 'en');

export const formattedTime = (dateTime) => DateTime.fromISO(dateTime).toFormat('HH:mm');
