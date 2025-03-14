import { useTranslation } from 'react-i18next';
import { datesConfig } from '../constants/datesConfig.js';
const { MILLISECONDS_IN_YEAR, MILLISECONDS_IN_MONTH, MILLISECONDS_IN_WEEK, MILLISECONDS_IN_DAY, MILLISECONDS_IN_HOUR } =
  datesConfig;

export function ConvertMilliInYears(mSeconds) {
  const { t } = useTranslation();

  if (mSeconds >= MILLISECONDS_IN_YEAR)
    return `${Math.floor(mSeconds / MILLISECONDS_IN_YEAR)} ${t('interviews.passedInterviews.interviewInfoYearAgo')}`;
  if (mSeconds >= MILLISECONDS_IN_MONTH)
    return `${Math.floor(mSeconds / MILLISECONDS_IN_MONTH)} ${t('interviews.passedInterviews.interviewInfoMonthAgo')}`;
  if (mSeconds > MILLISECONDS_IN_WEEK)
    return `${Math.floor(mSeconds / MILLISECONDS_IN_WEEK)} ${t('interviews.passedInterviews.interviewInfoWeekAgo')}`;
  if (mSeconds >= MILLISECONDS_IN_DAY)
    return `${Math.floor(mSeconds / MILLISECONDS_IN_DAY)} ${t('interviews.passedInterviews.interviewInfoDayAgo')}`;
  if (mSeconds >= MILLISECONDS_IN_HOUR)
    return `${Math.floor(mSeconds / MILLISECONDS_IN_HOUR)} ${t('interviews.passedInterviews.interviewInfoHourAgo')}`;
  return t('interviews.passedInterviews.interviewInfoToday');
}
