import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { InfoOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { formatToLocalDate } from '@utils/helpers/dateHandlers.js';
import styles from '../NotificationItem/NotificationItem.styles';

const InterviewRejected = ({ formattedDate, payload }) => {
  const { t } = useTranslation();
  const { rejectionName, scheduledDateTime } = JSON.parse(payload);
  const date = formatToLocalDate(scheduledDateTime);
  return (
    <>
      <Box sx={styles.iconWrapper}>
        <InfoOutlined />
      </Box>
      <Box sx={styles.textWrapper}>
        <Typography variant='body'>{t('notifications.interviewRejected', { rejectionName, date })}</Typography>
        <Typography sx={styles.date} variant='body2'>
          {formattedDate}
        </Typography>
      </Box>
    </>
  );
};

InterviewRejected.propTypes = {
  formattedDate: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};
export default InterviewRejected;
