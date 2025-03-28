import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { styles } from './InterviewerInfo.styles';

const InterviewerInfo = memo(({ name, position, date, time, role }) => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.container}>
      <Box sx={styles.box}>
        <Typography variant='subtitle2'>
          {t(`modal.interview.${role}`)}: {name}
        </Typography>
        <Typography variant='caption2'>{position}</Typography>
      </Box>
      <Box sx={styles.box}>
        <Box sx={styles.data}>
          <CalendarTodayIcon sx={styles.icon} />
          <Typography variant='caption1'>{date}</Typography>
        </Box>
        <Box sx={styles.data}>
          <AccessTimeIcon sx={styles.icon} />
          <Typography variant='caption1'>{time}</Typography>
        </Box>
      </Box>
    </Box>
  );
});

InterviewerInfo.displayName = 'InterviewerInfo';

InterviewerInfo.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default InterviewerInfo;
