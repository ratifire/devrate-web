import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import InfoIcon from '@mui/icons-material/Info';
import { useTranslation } from 'react-i18next';
import TimeAgo from '../../../UI/TimeAgo';
import styles from '../NotificationItem/NotificationItem.styles';

const InterviewFeedback = ({ createAt }) => {
  const { t } = useTranslation();
  // const { interviewId } = JSON.parse(payload);

  return (
    <>
      <Box sx={styles.iconWrapper}>
        <InfoIcon />
      </Box>
      <Box sx={styles.textWrapper}>
        <Typography variant='body'>
          {t('notifications.interviewFeedback')}
          <Typography sx={[styles.btn, { opacity: 0.3, color: '#828283' }]} variant='body'>
            {t('notifications.feedbackBtn')}
          </Typography>
        </Typography>
        <Typography sx={styles.date} variant='body2'>
          <TimeAgo data={createAt} />
        </Typography>
      </Box>
    </>
  );
};

InterviewFeedback.propTypes = {
  createAt: PropTypes.string.isRequired,
  payload: PropTypes.string,
};
export default InterviewFeedback;
