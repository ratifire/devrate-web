import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import InfoIcon from '@mui/icons-material/Info';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useLazyGetSingleInterviewByIdQuery } from '@redux/api/slices/interviews/scheduledInterviewsApiSlice.js';
import { useNavigate } from 'react-router';
import navigationLinks from '@router/links';
import { enqueueSnackbar } from 'notistack';
import { closePopup } from '@redux/slices/notification/popupSlice.js';
import styles from '../NotificationItem/NotificationItem.styles';
import TimeAgo from '../../../UI/TimeAgo';

const InterviewFeedback = ({ createAt, payload }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { interviewId } = JSON.parse(payload);
  const [getSingleInterview] = useLazyGetSingleInterviewByIdQuery();

  const handleClick = async () => {
    try {
      const event = await getSingleInterview({ interviewId }).unwrap();

      navigate(`${navigationLinks.scheduledInterviews}/${interviewId}`, { state: { event } });
      dispatch(closePopup());
    } catch (error) {
      if (error.status === 404) {
        enqueueSnackbar(t('notifications.feedbackSnackBarText'), {
          variant: 'warning',
          autoHideDuration: 3000,
        });
        return;
      }
      enqueueSnackbar(t('notifications.somethingWrong'), {
        variant: 'error',
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
