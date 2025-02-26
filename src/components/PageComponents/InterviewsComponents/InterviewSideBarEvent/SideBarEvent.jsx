import { Link as RouterLink, useNavigate, useParams } from 'react-router';
import PropTypes from 'prop-types';
import { Box, Paper, Typography, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { formatDateAndTime } from '../../../../utils/helpers';
import { lvlMastery } from '../../../../utils/constants/masteryLvl';
import navigationLinks from '../../../../router/links';
import { styles } from './SideBarEvent.styles';

const SideBarEvent = ({ event, refHandler, passedInterview }) => {
  const { id, title, masteryLevel, date, role, hostId, hostFirstName, hostLastName } = event;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { interviewId } = useParams();

  const handleClick = (e) => {
    if (e.target.tagName !== 'A') {
      navigate(`${passedInterview ? navigationLinks.passedInterviews : navigationLinks.scheduledInterviews}/${id}`, {
        state: { event },
      });
    }
  };

  return (
    <Box sx={styles.interviewLink} onClick={handleClick}>
      <Paper key={id} ref={refHandler} sx={+interviewId === id ? styles.border : styles.sideBarEventContainer}>
        <Typography component='div' sx={styles.status} variant='subtitle2'>
          {/*//TODO should be implemented based on sockets or as a temporary solution via setTimeout. TBC with TL. */}
          {/*<>*/}
          {/*  <Box alt='Circle' component='img' src={OrangeCircleIcon} sx={styles.ellipse} />*/}
          {/*  {t('interviews.sideBar.event.statusAwaitingFeedback')}*/}
          {/*</>*/}
          {/*<Box alt='Circle' component='img' src={LimeCircleIcon} sx={styles.ellipse} />{' '}*/}
          {/*{t('interviews.sideBar.event.statusInProcess')}*/}
        </Typography>
        <Box sx={styles.titleLevelBox}>
          <Typography component='div' sx={styles.title} variant='h6'>
            {title}
          </Typography>
          <Typography component='div' sx={styles[lvlMastery[masteryLevel]]} variant='subtitle2'>
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
    </Box>
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
  }).isRequired,
  refHandler: PropTypes.func,
  passedInterview: PropTypes.bool,
  handlePaperClick: PropTypes.func,
  selectedPaperId: PropTypes.number,
};

export default SideBarEvent;
