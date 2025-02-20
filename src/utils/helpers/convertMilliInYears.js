import { datesConfig } from '../constants/datesConfig.js';

export function convertMilliInYears(mSeconds) {
  const { MILLISECONDS_IN_YEAR } = datesConfig;
  return Math.floor(mSeconds / MILLISECONDS_IN_YEAR);
}
