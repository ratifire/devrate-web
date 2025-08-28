import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { InfoOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { formatToLocalDate } from '@utils/helpers/dateHandlers.js';
import styles from '../NotificationItem/NotificationItem.styles';

const InterviewScheduled = ({ formattedDate, payload }) => {
  const { t } = useTranslation();
  const { role, scheduledDateTime } = JSON.parse(payload);

  const roleLower = role.toLowerCase();
  const date = formatToLocalDate(scheduledDateTime);
  return (
    <>
      <Box sx={styles.iconWrapper}>
        <InfoOutlined />
      </Box>
      <Box sx={styles.textWrapper}>
        <Typography variant='body'>
          {t('notifications.interviewScheduled', {
            roleLower,
            date,
          })}
        </Typography>
        <Typography sx={styles.date} variant='body2'>
          {formattedDate}
        </Typography>
      </Box>
    </>
  );
};

InterviewScheduled.propTypes = {
  formattedDate: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};
export default InterviewScheduled;
