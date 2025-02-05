import { Link as RouterLink } from 'react-router';
import PropTypes from 'prop-types';
import { Box, Paper, Typography, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { formatDateAndTime } from '../../../../../utils/helpers/index.js';
// import LimeCircleIcon from '../../../../assets/icons/InterviewPageIcons/lime-ellipse.svg';
import { styles } from '../InterviewSideBarEvent.styles.js';
import { lvlMastery, lvlMasteryColor } from '../../../../../utils/constants/masteryLvl.js';

const ScheduledSideBarEvent = ({ event, ref }) => {
  const { id, specializationName, masteryLevel, startTime, role, hostId, hostFirstName, hostLastName } = event;
  const { t } = useTranslation();
  return (
    <Paper key={id} ref={ref} sx={styles.sideBarEventContainer}>
      <Typography component='div' sx={styles.status} variant='subtitle2'>
        {/*//TODO need to implement logic that would render needed part based on date and time*/}
        {/*<Box alt='Circle' component='img' src={LimeCircleIcon} sx={styles.ellipse} />{' '}*/}
        {/*{t('interviews.sideBar.event.statusInProcess')}*/}
      </Typography>
      <Box sx={styles.titleLevelBox}>
        <Typography component='div' sx={styles.title} variant='h6'>
          {specializationName}
        </Typography>
        <Typography component='div' sx={{ color: lvlMasteryColor[masteryLevel] || 'inherit' }} variant='subtitle2'>
          {lvlMastery[masteryLevel]}
        </Typography>
      </Box>
      <Typography component='div' sx={styles.eventDate} variant='body2'>
        {formatDateAndTime(startTime)}
      </Typography>
      <Typography component='div' sx={styles.role} variant='body2'>
        {t('interviews.sideBar.event.role')}: <span>{role}</span>
      </Typography>
      <Typography component='div' sx={styles.host} variant='body2'>
        {t('interviews.sideBar.event.host')}:{' '}
        <Link component={RouterLink} sx={styles.host_link} to={`/profile/${hostId}`}>
          {hostFirstName} {hostLastName}
        </Link>
      </Typography>
    </Paper>
  );
};

ScheduledSideBarEvent.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    specializationName: PropTypes.string.isRequired,
    masteryLevel: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    hostId: PropTypes.number.isRequired,
    hostFirstName: PropTypes.string.isRequired,
    hostLastName: PropTypes.string.isRequired,
  }).isRequired,
  ref: PropTypes.object,
};

export default ScheduledSideBarEvent;
