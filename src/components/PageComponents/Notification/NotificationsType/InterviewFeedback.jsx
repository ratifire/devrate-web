import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import InfoIcon from '@mui/icons-material/Info';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import TimeAgo from '../../../UI/TimeAgo';
import styles from '../NotificationItem/NotificationItem.styles';
import { openFeedbackModal } from '../../../../redux/feedback/feedbackModalSlice';

const InterviewFeedback = ({ createAt, payload }) => {
  const { t } = useTranslation();
  const { feedbackId } = JSON.parse(payload);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openFeedbackModal(feedbackId));
  };

  return (
    <>
      <Box sx={styles.iconWrapper}>
        <InfoIcon />
      </Box>
      <Box sx={styles.textWrapper}>
        <Typography variant='body'>
          {t('notifications.interviewFeedback')} {feedbackId}
          <Typography sx={styles.btn} variant='body' onClick={handleClick}>
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
  payload: PropTypes.string.isRequired,
};
export default InterviewFeedback;
