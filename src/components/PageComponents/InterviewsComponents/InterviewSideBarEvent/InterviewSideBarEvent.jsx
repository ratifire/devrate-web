import { Link as RouterLink } from 'react-router';
import PropTypes from 'prop-types';
import { Box, Paper, Typography, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import getLevelColor from '../../../../utils/helpers/getLevelColor.js';
import { styles } from './InterviewSideBarEvent.styles';

const InterviewSideBarEvent = ({ event }) => {
  const { eventTypeId, eventTitle, level, date, role, host, hostId } = event;
  const { t } = useTranslation();

  return (
    <Paper key={eventTypeId} sx={styles.sideBarEventContainer}>
      <Box sx={styles.titleLevelBox}>
        <Typography component='div' sx={styles.title} variant='h6'>
          {eventTitle}
        </Typography>
        <Typography component='div' sx={{ color: getLevelColor(level) }} variant='subtitle2'>
          {level}
        </Typography>
      </Box>
      <Typography component='div' sx={styles.eventDate} variant='body2'>
        {date}
      </Typography>
      <Typography component='div' sx={styles.role} variant='body2'>
        {t('interviews.sideBar.event.role')}: {role}
      </Typography>
      <Typography component='div' sx={styles.host} variant='body2'>
        {t('interviews.sideBar.event.host')}:{' '}
        <Link component={RouterLink} sx={styles.host_link} to={`/profile/${hostId}`}>
          {host}
        </Link>
      </Typography>
    </Paper>
  );
};

InterviewSideBarEvent.propTypes = {
  event: PropTypes.shape({
    eventTypeId: PropTypes.number.isRequired,
    eventTitle: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    hostId: PropTypes.number.isRequired,
    host: PropTypes.string.isRequired,
  }).isRequired,
};

export default InterviewSideBarEvent;
