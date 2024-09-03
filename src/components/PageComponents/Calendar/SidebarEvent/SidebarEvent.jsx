import { formatDate } from '@fullcalendar/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Box, Button, IconButton, Paper, Typography } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { styles } from './SidebarEvent.styles';
import { useTranslation } from 'react-i18next';

export default function SidebarEvent({ event }) {
  const { id, type, link, host, startTime } = event;
  // eslint-disable-next-line react/prop-types
  const { name, surname, status } = host;

  const { t } = useTranslation();

  const optionsDate = { day: '2-digit', month: '2-digit', year: 'numeric', separator: '/', localeMatcher: 'lookup' };
  const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: false };

  const formattedDate = formatDate(startTime, optionsDate);
  const formattedTime = formatDate(startTime, optionsTime);

  const [month, day, year] = formattedDate.split('/');
  const customFormattedDate = `${day}/${month}/${year}`;

  console.log('Current events', formattedDate, customFormattedDate, formattedTime);

  return (
    <Paper key={id} sx={styles.sideBarEventContainer}>
      <Box sx={styles.titleDateTimeBox}>
        <Typography sx={styles.title} variant='h6' component='div'>
          {/* eslint-disable-next-line react/prop-types */}
          {type.toLowerCase()}
        </Typography>
        <Typography sx={styles.dateAndTime} variant='body2' component='div'>
          {customFormattedDate} {formattedTime}
        </Typography>
      </Box>
      <Typography sx={styles.host} variant='body2' component='div'>
        {t('schedule.host')}:{' '}
        <span>
          {name} {surname}
        </span>
      </Typography>
      <Typography sx={styles.hostTitle} variant='caption3' component='div'>
        {status}
      </Typography>
      <Box sx={styles.titleDateTimeBox}>
        <IconButton component='a' href={link} target='_blank'>
          <LinkIcon />
        </IconButton>
        <Button variant='text' sx={styles.cancelEventBtn}>
          {t('schedule.cancelEventBtn')}
        </Button>
      </Box>
    </Paper>
  );
}

SidebarEvent.propTypes = {
  event: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      eventTypeId: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
      }).isRequired,
      participants: PropTypes.array.isRequired,
    })
  ).isRequired,
};
