import { formatDate } from '@fullcalendar/core';
import { Link as RouterLink } from 'react-router';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { Box, Button, IconButton, Paper, Typography, Link } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { useTranslation } from 'react-i18next';
import useDeleteEvent from '@utils/hooks/useDeleteEvent';
import useCheckTimeDifference from '@utils/hooks/schedule/useCheckTimeDifference';
import { enqueueSnackbar } from 'notistack';
import { useLazyGetInterviewMeetingUrlQuery } from '@redux/api/slices/interviews/scheduledInterviewsApiSlice.js';
import { getStatusByTime } from '@components/PageComponents/SingleScheduledInterview/helpers/index.js';
import { styles } from './Event.styles';

const Event = ({ event }) => {
  const { hostName, hostSurname, id, startTime, type, title, hostId, interviewId, role } = event;
  const { t } = useTranslation();
  const status = getStatusByTime(startTime);
  const [getMeetingUrl, { isLoading: isLoadingMeetingUrl }] = useLazyGetInterviewMeetingUrlQuery();
  const optionsDate = { day: '2-digit', month: '2-digit', year: 'numeric', separator: '/', localeMatcher: 'lookup' };
  const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: false };

  const formattedDate = useMemo(() => formatDate(startTime, optionsDate), [startTime]);
  const formattedTime = useMemo(() => formatDate(startTime, optionsTime), [startTime]);

  const [month, day, year] = formattedDate.split('/');
  const customFormattedDate = `${day}/${month}/${year}`;

  const { showCancelButton, disableLink } = useCheckTimeDifference(startTime);

  const deleteEvent = useDeleteEvent();

  const joinToInterview = async () => {
    try {
      const meetingUrl = await getMeetingUrl(interviewId).unwrap();
      const urlWithParams = new URL(meetingUrl);

      if (event.interviewId && event.role) {
        urlWithParams.searchParams.append('eventId', interviewId);
        urlWithParams.searchParams.append('role', role);
      }
      window.open(urlWithParams, '_blank');
    } catch (error) {
      if (error.status === 403) {
        enqueueSnackbar(t('singleScheduledInterview.scheduledMeeting.canceled.403'), { variant: 'error' });
      } else {
        enqueueSnackbar(t('singleScheduledInterview.scheduledMeeting.canceled.error'), { variant: 'error' });
      }
    }
  };

  const handleCancelInterview = async () => {
    await deleteEvent({
      eventId: id,
    });
  };

  return (
    <Paper sx={styles.sideBarEventContainer}>
      <Box sx={styles.titleDateTimeBox}>
        <Typography component='div' sx={styles.title} variant='h6'>
          {type}
        </Typography>
        <Typography component='div' sx={styles.dateAndTime} variant='body2'>
          {customFormattedDate} {formattedTime}
        </Typography>
      </Box>
      <Typography component='div' sx={styles.host} variant='body2'>
        {t('schedule.host')}:{' '}
        <Link component={RouterLink} sx={styles.host_link} to={`/profile/${hostId}`}>
          {hostName} {hostSurname}
        </Link>
      </Typography>
      <Typography component='div' sx={styles.hostTitle} variant='caption3'>
        {title}
      </Typography>
      <Box sx={styles.titleDateTimeBox}>
        <IconButton
          aria-label='Join to interview'
          disabled={status === 'UPCOMING' || disableLink || isLoadingMeetingUrl}
          onClick={joinToInterview}
        >
          <LinkIcon />
        </IconButton>
        {showCancelButton && (
          <Button sx={styles.cancelEventBtn} variant='text' onClick={() => handleCancelInterview(id)}>
            {t('schedule.cancelEventBtn')}
          </Button>
        )}
      </Box>
    </Paper>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    hostName: PropTypes.string.isRequired,
    hostSurname: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    roomUrl: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    hostId: PropTypes.number.isRequired,
    interviewId: PropTypes.number.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default Event;
