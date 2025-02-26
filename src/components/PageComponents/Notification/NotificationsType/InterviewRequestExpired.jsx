import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { InfoOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import TimeAgo from '@components/UI/TimeAgo';
import styles from '../NotificationItem/NotificationItem.styles';

const InterviewRequestExpired = ({ createAt, payload }) => {
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
          <TimeAgo data={createAt} />
        </Typography>
      </Box>
    </>
  );
};

InterviewRequestExpired.propTypes = {
  createAt: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};
export default InterviewRequestExpired;
