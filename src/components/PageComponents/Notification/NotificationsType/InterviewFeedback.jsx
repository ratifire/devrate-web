import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import InfoIcon from '@mui/icons-material/Info';
import { useTranslation } from 'react-i18next';
import { useLazyGetSingleInterviewByIdQuery } from '@redux/api/slices/interviews/scheduledInterviewsApiSlice.js';
import { useNavigate } from 'react-router';
import navigationLinks from '@router/links';
import { enqueueSnackbar } from 'notistack';
import styles from '../NotificationItem/NotificationItem.styles';
import TimeAgo from '../../../UI/TimeAgo';

const InterviewFeedback = ({ createAt, payload }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { interviewId } = JSON.parse(payload);
  const [getSingleInterview, { isLoading }] = useLazyGetSingleInterviewByIdQuery();

  const handleClick = async () => {
    if (isLoading) return;

    try {
      const response = await getSingleInterview({ interviewId });
      if (response.error?.status === 404) {
        throw Error(t('notifications.feedbackSnackBarText'));
        // eslint-disable-next-line no-unreachable
        return;
      }
      const event = response.data;
      navigate(`${navigationLinks.scheduledInterviews}/${interviewId}`, { state: { event } });
    } catch (error) {
      enqueueSnackbar(`${error.message}`, {
        variant: 'warning',
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <>
      <Box sx={styles.iconWrapper}>
        <InfoIcon />
      </Box>
      <Box sx={styles.textWrapper}>
        <Typography variant='body'>
          {t('notifications.interviewFeedback')}
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
  payload: PropTypes.string,
};
export default InterviewFeedback;
