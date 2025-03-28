import { formatDate } from '@fullcalendar/core';
import { Link as RouterLink } from 'react-router';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { Box, Button, IconButton, Paper, Typography, Link } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useDeleteEvent } from '@utils/hooks/useDeleteEvent';
import useCheckTimeDifference from '@utils/hooks/schedule/useCheckTimeDifference.js';
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

  const { showCancelButton, disableLink } = useCheckTimeDifference(startTime);

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
        {t('schedule.role')}:{' '}
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
