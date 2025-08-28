import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { InfoOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import styles from '../NotificationItem/NotificationItem.styles';

const InterviewRequestExpired = ({ formattedDate, payload }) => {
  const { t } = useTranslation();
  const { userFirstName } = JSON.parse(payload);
  return (
    <>
      <Box sx={styles.iconWrapper}>
        <InfoOutlined />
      </Box>
      <Box sx={styles.textWrapper}>
        <Typography variant='body'>{t('notifications.interviewRequestExpired', { userFirstName })}</Typography>
        <Typography sx={styles.date} variant='body2'>
          {formattedDate}
        </Typography>
      </Box>
    </>
  );
};

InterviewRequestExpired.propTypes = {
  formattedDate: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};
export default InterviewRequestExpired;
