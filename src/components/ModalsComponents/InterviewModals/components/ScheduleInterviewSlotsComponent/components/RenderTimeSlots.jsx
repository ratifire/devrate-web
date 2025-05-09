import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { styles } from './styles.js';

const RenderTimeSlots = ({ weekDates, tab, timeButtons }) => {
  const { t } = useTranslation();
  const generateTimeButtons = (day) => {
    return timeButtons(day);
  };
  const zoneName = weekDates[0]?.zoneName;
  const city = zoneName?.split('/')[1] || '';
  const utcOffset = weekDates[0]?.toFormat('ZZ');
  return weekDates.map((day) => {
    if (tab !== day.toFormat('EEE, d')) return null;

    return (
      <React.Fragment key={`tab-panel-${day.toISO()}`}>
        <Box sx={styles.texts}>
          <Typography variant='subtitle2'>{t('interviews.scheduleInterviewModal.chooseTimeslot')}</Typography>
          <Typography variant='body'>{`${city} (UTC ${utcOffset})`}</Typography>
        </Box>
        <Box sx={styles.timeGrid}>{generateTimeButtons(day)}</Box>
      </React.Fragment>
    );
  });
};

RenderTimeSlots.propTypes = {
  weekDates: PropTypes.array.isRequired,
  timeButtons: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired,
};

export default RenderTimeSlots;
