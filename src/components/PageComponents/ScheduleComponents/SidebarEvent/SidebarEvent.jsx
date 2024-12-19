import { formatDate } from '@fullcalendar/core';
import { Link as RouterLink } from 'react-router';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { Box, Button, IconButton, Paper, Typography, Link } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useDeleteEvent } from '../../../../utils/hooks/useDeleteEvent';
import { styles } from './SidebarEvent.styles';

const SidebarEvent = ({ event }) => {
  const { eventTypeId, type, link, host, startTime, participantDtos } = event;
  const { id: hostId, name, surname } = host;

  const { id: userId } = useSelector((state) => state.auth.user.data);
  const { t } = useTranslation();

  const optionsDate = { day: '2-digit', month: '2-digit', year: 'numeric', separator: '/', localeMatcher: 'lookup' };
  const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: false };

  const formattedDate = useMemo(() => formatDate(startTime, optionsDate), [startTime]);
  const formattedTime = useMemo(() => formatDate(startTime, optionsTime), [startTime]);

  const [month, day, year] = formattedDate.split('/');
  const customFormattedDate = `${day}/${month}/${year}`;

  const deleteEvent = useDeleteEvent();

  const handleCancelInterview = async () => {
    await deleteEvent({
      userId,
      eventId: event?.eventTypeId,
      // eslint-disable-next-line no-console
      onError: (error) => console.error('EventPopup: Error deleting event', error),
      // eslint-disable-next-line no-console
      onFinally: () => console.log('EventPopup: Deletion process complete'),
    });
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
        <Typography component='div' sx={styles.title} variant='h6'>
          {type.toLowerCase()}
        </Typography>
        <Typography component='div' sx={styles.dateAndTime} variant='body2'>
          {customFormattedDate} {formattedTime}
        </Typography>
      </Box>
      <Typography component='div' sx={styles.host} variant='body2'>
        {t('schedule.host')}:{' '}
        <Link component={RouterLink} sx={styles.host_link} to={`/profile/${hostId}`}>
          {name} {surname}
        </Link>
      </Typography>
      <Typography component='div' sx={styles.participant} variant='body2'>
        {t('schedule.participant')}:{' '}
        <Link component={RouterLink} sx={styles.participant_link} to={`/profile/${participantDtos[0].id}`}>
          {participantDtos[0].name} {participantDtos[0].surname}
        </Link>
      </Typography>
      <Typography component='div' sx={styles.hostTitle} variant='caption3'>
        {participantDtos[0].status}
      </Typography>
      <Box sx={styles.titleDateTimeBox}>
        <IconButton component='a' disabled={disableLink} href={link} target='_blank'>
          <LinkIcon />
        </IconButton>
        {showCancelButton && (
          <Button sx={styles.cancelEventBtn} variant='text' onClick={() => handleCancelInterview(eventTypeId)}>
            {t('schedule.cancelEventBtn')}
          </Button>
        )}
      </Box>
    </Paper>
  );
};

SidebarEvent.propTypes = {
  setEventUpdated: PropTypes.func,
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
