import { formatDate } from '@fullcalendar/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { styles } from './SidebarEvent.styles';

export default function SidebarEvent({ event }) {
  const optionsDate = { day: 'numeric', month: '2-digit', year: 'numeric', separator: '/', localeMatcher: 'lookup' };
  const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: false };

  const formattedDate = formatDate(event.start, optionsDate);
  const formattedTime = formatDate(event.start, optionsTime);

  const [month, day, year] = formattedDate.split('/');
  const customFormattedDate = `${day}/${month}/${year}`;

  return (
    <Paper key={event.id} sx={styles.sideBarEventWrapper}>
      <Box sx={styles.titleDateTimeBox}>
        <Typography sx={styles.title} variant='h6' component='div'>
          {event.title}
        </Typography>
        <Typography sx={styles.dateAndTime} variant='body2' component='div'>
          {`${customFormattedDate} ${formattedTime}`}
        </Typography>
      </Box>
    </Paper>
  );
}

SidebarEvent.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string,
    allDay: PropTypes.bool,
  }).isRequired,
};
