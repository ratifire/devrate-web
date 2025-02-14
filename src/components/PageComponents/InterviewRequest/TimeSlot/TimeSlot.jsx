import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { FormCheckbox } from '../../../FormsComponents/Inputs/index.js';
import { styles } from './TimeSlot.styles.js';
const TimeSlot = ({ time, status, date }) => {
  return (
    <Box sx={styles.timeSlot}>
      <Box sx={styles.timeStatusContainer}>
        <Box sx={styles.time}>{time}</Box>
        <Box sx={styles.date}>{date}</Box>
      </Box>

      <Box sx={styles.dateCheckboxContainer}>
        <Box sx={status === 'Scheduled' ? { ...styles.status, ...styles.completed } : styles.status}>{status}</Box>
        <FormCheckbox />
      </Box>
    </Box>
  );
};

TimeSlot.propTypes = {
  time: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['Pending', 'Scheduled']).isRequired,
  date: PropTypes.string.isRequired,
};

export default TimeSlot;
