import { Link as RouterLink } from 'react-router';
import PropTypes from 'prop-types';
import { Box, Paper, Typography, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { formatDateAndTime } from '../../../../utils/helpers';
// import LimeCircleIcon from '../../../../assets/icons/InterviewPageIcons/lime-ellipse.svg';
import OrangeCircleIcon from '../../../../assets/icons/InterviewPageIcons/orange-ellipse.svg';
import { lvlMastery, lvlMasteryColor } from '../../../../utils/constants/masteryLvl.js';
import navigationLinks from '../../../../router/links.js';
import { styles } from './SideBarEvent.styles.js';

const SideBarEvent = ({ event, refHandler, passedInterview }) => {
  const { id, title, masteryLevel, date, role, hostId, hostFirstName, hostLastName, feedback } = event;
  const { t } = useTranslation();

  return (
    <Link
      component={RouterLink}
      sx={styles.interviewLink}
      to={`${passedInterview ? navigationLinks.passedInterviews : navigationLinks.scheduledInterviews}/${id}`}
    >
      <Paper key={id} ref={refHandler} sx={styles.sideBarEventContainer}>
        <Typography component='div' sx={styles.status} variant='subtitle2'>
          {/*//TODO in progress status still pending. To be discussed with back*/}
          {feedback?.length === 0 && (
            <>
              <Box alt='Circle' component='img' src={OrangeCircleIcon} sx={styles.ellipse} />
              {t('interviews.sideBar.event.statusAwaitingFeedback')}
            </>
          )}
          {/*<Box alt='Circle' component='img' src={LimeCircleIcon} sx={styles.ellipse} />{' '}*/}
          {/*{t('interviews.sideBar.event.statusInProcess')}*/}
        </Typography>
        <Box sx={styles.titleLevelBox}>
          <Typography component='div' sx={styles.title} variant='h6'>
            {title}
          </Typography>
          <Typography component='div' sx={{ color: lvlMasteryColor[masteryLevel] || 'inherit' }} variant='subtitle2'>
            {lvlMastery[masteryLevel]}
          </Typography>
        </Box>
        <Typography component='div' sx={styles.eventDate} variant='body2'>
          {formatDateAndTime(date)}
        </Typography>
        <Typography component='div' sx={styles.role} variant='body'>
          {t('interviews.sideBar.event.role')}: <span>{role}</span>
        </Typography>
        <Typography component='div' sx={styles.host} variant='body'>
          {t('interviews.sideBar.event.host')}:{' '}
          <Link component={RouterLink} sx={styles.hostLink} to={`${navigationLinks.profile}/${hostId}`}>
            {hostFirstName} {hostLastName}
          </Link>
        </Typography>
      </Paper>
    </Link>
  );
};

SideBarEvent.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    masteryLevel: PropTypes.string,
    date: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    hostId: PropTypes.number.isRequired,
    hostFirstName: PropTypes.string.isRequired,
    hostLastName: PropTypes.string.isRequired,
    feedback: PropTypes.string,
  }).isRequired,
  refHandler: PropTypes.func,
  passedInterview: PropTypes.bool,
};

export default SideBarEvent;
