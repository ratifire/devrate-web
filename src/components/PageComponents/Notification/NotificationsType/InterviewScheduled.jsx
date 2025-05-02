import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { InfoOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import TimeAgo from '@components/UI/TimeAgo';
import { formatToLocalDate } from '@utils/helpers/dateHandlers.js';
import styles from '../NotificationItem/NotificationItem.styles';

const InterviewScheduled = ({ createAt, payload }) => {
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
          <TimeAgo data={createAt} />
        </Typography>
      </Box>
    </>
  );
};

InterviewScheduled.propTypes = {
  createAt: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};
export default InterviewScheduled;
