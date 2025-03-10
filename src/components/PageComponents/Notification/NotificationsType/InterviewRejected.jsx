import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { InfoOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import TimeAgo from '../../../UI/TimeAgo';
import styles from '../NotificationItem/NotificationItem.styles';
import { formatToLocalDate } from '../../../../utils/helpers/dateHandlers.js';

const InterviewRejected = ({ createAt, payload }) => {
  const { t } = useTranslation();
  const { rejectionUserFirstName, scheduleTime } = JSON.parse(payload);
  const date = formatToLocalDate(scheduleTime);
  return (
    <>
      <Box sx={styles.iconWrapper}>
        <InfoOutlined />
      </Box>
      <Box sx={styles.textWrapper}>
        <Typography variant='body'>{t('notifications.interviewRejected', { rejectionUserFirstName, date })}</Typography>
        <Typography sx={styles.date} variant='body2'>
          <TimeAgo data={createAt} />
        </Typography>
      </Box>
    </>
  );
};

InterviewRejected.propTypes = {
  createAt: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};
export default InterviewRejected;
