import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { InfoOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import TimeAgo from '../../../UI/TimeAgo';
import styles from '../NotificationItem/NotificationItem.styles';
import { formatToLocalDate } from '../../../../utils/helpers/formatToLocalDate';

const InterviewScheduled = ({ createAt, payload }) => {
  const { t } = useTranslation();
  const { role, formattedDateTime } = JSON.parse(payload);

  const roleLower = role.toLowerCase();
  const date = formatToLocalDate(formattedDateTime);
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
