import { Link as RouterLink } from 'react-router';
import PropTypes from 'prop-types';
import { Box, Paper, Typography, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { formatDateAndTime } from '../../../../../utils/helpers/index.js';
// import OrangeCircleIcon from '../../../../../assets/icons/InterviewPageIcons/orange-ellipse.svg';
import { styles } from './../InterviewSideBarEvent.styles.js';

const PassedSideBarEvent = ({ event, ref }) => {
  const { id, attendeeSpecialization, dateTime, role, attendeeId, attendeeFirstName, attendeeLastName } = event;
  const { t } = useTranslation();
  return (
    <Paper key={id} ref={ref} sx={styles.sideBarEventContainer}>
      <Typography component='div' sx={styles.status} variant='subtitle2'>
        {/*//TODO need to implement logic that would render needed part based on date and time*/}
        {/*<Box alt='Circle' component='img' src={OrangeCircleIcon} sx={styles.ellipse} />{' '}*/}
        {/*{t('interviews.sideBar.event.statusAwaitingFeedback')}*/}
      </Typography>
      <Box sx={styles.titleLevelBox}>
        <Typography component='div' sx={styles.title} variant='h6'>
          {attendeeSpecialization}
        </Typography>
      </Box>
      <Typography component='div' sx={styles.eventDate} variant='body2'>
        {formatDateAndTime(dateTime)}
      </Typography>
      <Typography component='div' sx={styles.role} variant='body2'>
        {t('interviews.sideBar.event.role')}: <span>{role}</span>
      </Typography>
      <Typography component='div' sx={styles.host} variant='body2'>
        {t('interviews.sideBar.event.host')}:{' '}
        <Link component={RouterLink} sx={styles.host_link} to={`/profile/${attendeeId}`}>
          {attendeeFirstName} {attendeeLastName}
        </Link>
      </Typography>
    </Paper>
  );
};

PassedSideBarEvent.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    attendeeSpecialization: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    attendeeId: PropTypes.number.isRequired,
    attendeeFirstName: PropTypes.string.isRequired,
    attendeeLastName: PropTypes.string.isRequired,
  }).isRequired,
  ref: PropTypes.object,
};

export default PassedSideBarEvent;
