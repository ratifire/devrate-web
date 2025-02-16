import PropTypes from 'prop-types';
import { Box, Checkbox, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DateTime } from 'luxon';
import { styles } from './TimeSlot.styles.js';

const TimeSlot = ({ day, data, currentDate }) => {
  const { t } = useTranslation();
  const dateTime = DateTime.fromISO(data.date);

  const formattedTime = dateTime.toFormat('HH:mm');

  return (
    <Box sx={styles.timeSlot}>
      <Box sx={styles.timeDateContainer}>
        <Typography sx={styles.date}>{`${day} ${currentDate}`}</Typography>
        <Typography sx={styles.time}>{formattedTime}</Typography>
      </Box>

      <Box sx={styles.statusCheckboxContainer}>
        <Box sx={data.type === 'assigned' ? { ...styles.status, ...styles.completed } : styles.status}>
          <Typography sx={styles.statusText}>{t('Status: ')}</Typography>
          {t(`interviewRequest.timeSlot.status.${data.type}`)}
        </Box>
        <Checkbox sx={styles.checkBox} />
      </Box>
    </Box>
  );
};

TimeSlot.propTypes = {
  data: PropTypes.object.isRequired,
  currentDate: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
};

export default TimeSlot;
