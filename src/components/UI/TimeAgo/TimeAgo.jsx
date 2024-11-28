import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import { useTranslation } from 'react-i18next';

const TimeAgo = ({ data }) => {
  const { t } = useTranslation();
  const date = DateTime.fromISO(data);
  const now = DateTime.now();

  const diffInHours = now.diff(date, 'hours').hours;

  const timeAgo =
    diffInHours >= 1 ? `${Math.floor(diffInHours)} ${t('notifications.hourAgo')}` : t('notifications.lessThanHourAgo');
  return <>{timeAgo}</>;
};
TimeAgo.propTypes = {
  data: PropTypes.string.isRequired,
};
export default TimeAgo;
