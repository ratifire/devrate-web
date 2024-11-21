import { formatDate } from '@fullcalendar/core';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import { Box, Button, IconButton, Paper, Typography, Link } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { styles } from './SidebarEvent.styles';
import { useTranslation } from 'react-i18next';
import { useDeleteEventByIdMutation } from '../../../../redux/schedule/scheduleApiSlice';
import { useSelector } from 'react-redux';

const SidebarEvent = ({ event }) => {
  const { eventTypeId, type, link, host, startTime, participantDtos } = event;
  const { id: hostId, name, surname } = host;

  const { id: userId } = useSelector((state) => state.auth.user.data);
  const { t } = useTranslation();
  const [deleteEvent] = useDeleteEventByIdMutation();

  const optionsDate = { day: '2-digit', month: '2-digit', year: 'numeric', separator: '/', localeMatcher: 'lookup' };
  const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: false };

  const formattedDate = useMemo(() => formatDate(startTime, optionsDate), [startTime]);
  const formattedTime = useMemo(() => formatDate(startTime, optionsTime), [startTime]);

  const [month, day, year] = formattedDate.split('/');
  const customFormattedDate = `${day}/${month}/${year}`;

  const eventDeleteHandler = async (id) => {
    try {
      await deleteEvent({ userId, id }).unwrap();
    } catch (error) {
      console.error('Failed to delete event:', error);
    }
  };

  const [showCancelButton, setShowCancelButton] = useState(true);
  const [disableLink, setDisableLink] = useState(false);

  useEffect(() => {
    const eventStartTime = new Date(startTime);

    const checkTimeDifference = () => {
      const currentTime = new Date();
      const timeDifferenceInMinutes = (currentTime - eventStartTime) / (1000 * 60);

      if (timeDifferenceInMinutes >= 1) {
        setShowCancelButton(false);
      }

      if (timeDifferenceInMinutes >= 60) {
        setDisableLink(true);
      }
    };

    checkTimeDifference();

    const timer = setInterval(checkTimeDifference, 60000);

    return () => clearInterval(timer);
  }, [startTime]);

  return (
    <Paper key={eventTypeId} sx={styles.sideBarEventContainer}>
      <Box sx={styles.titleDateTimeBox}>
        <Typography sx={styles.title} variant='h6' component='div'>
          {type.toLowerCase()}
        </Typography>
        <Typography sx={styles.dateAndTime} variant='body2' component='div'>
          {customFormattedDate} {formattedTime}
        </Typography>
      </Box>
      <Typography sx={styles.host} variant='body2' component='div'>
        {t('schedule.host')}:{' '}
        <Link component={RouterLink} to={`/profile/${hostId}`} sx={styles.host_link}>
          {name} {surname}
        </Link>
      </Typography>
      <Typography sx={styles.participant} variant='body2' component='div'>
        {t('schedule.participant')}:{' '}
        <Link component={RouterLink} to={`/profile/${participantDtos[0].id}`} sx={styles.participant_link}>
          {participantDtos[0].name} {participantDtos[0].surname}
        </Link>
      </Typography>
      <Typography sx={styles.hostTitle} variant='caption3' component='div'>
        {participantDtos[0].status}
      </Typography>
      <Box sx={styles.titleDateTimeBox}>
        <IconButton component='a' href={link} target='_blank' disabled={disableLink}>
          <LinkIcon />
        </IconButton>
        {showCancelButton && (
          <Button variant='text' sx={styles.cancelEventBtn} onClick={() => eventDeleteHandler(eventTypeId)}>
            {t('schedule.cancelEventBtn')}
          </Button>
        )}
      </Box>
    </Paper>
  );
};

SidebarEvent.propTypes = {
  event: PropTypes.shape({
    eventTypeId: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    host: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }).isRequired,
    startTime: PropTypes.string.isRequired,
    participantDtos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default SidebarEvent;
