import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from '../ScheduleInterview.styles';
import PropTypes from 'prop-types';

const RenderTimeSlots = ({ weekDates, tab, timeButtons }) => {
  const generateTimeButtons = (day) => {
    return timeButtons(day);
  };

  return weekDates.map((day) => {
    if (tab !== day.toFormat('EEE, d')) return null;

    return (
      <React.Fragment key={`tab-panel-${day.toISO()}`}>
        <Box sx={styles.texts}>
          <Typography variant="subtitle2">Choose a comfortable time</Typography>
          <Typography variant="body1">{weekDates[0]?.toFormat('z (ZZZZ)')}</Typography>
        </Box>
        <Box sx={styles.timeGrid}>{generateTimeButtons(day)}</Box>
      </React.Fragment>
    );
  });
};

RenderTimeSlots.propTypes = {
  weekDates: PropTypes.array.isRequired, // Corrected to array
  timeButtons: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired, // Corrected to string
};

export default RenderTimeSlots;
