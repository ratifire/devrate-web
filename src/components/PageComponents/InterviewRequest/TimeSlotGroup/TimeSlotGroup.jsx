import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import TimeSlot from '../TimeSlot';
import { styles } from './TimeSlotGroup.styles.js';

const TimeSlotsGroup = ({ timeSlots }) => {
  return (
    <Box sx={styles.timeSlotGroup}>
      {timeSlots.map((slot, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <TimeSlot key={index} date={slot.date} status={slot.status} time={slot.time} />
      ))}
    </Box>
  );
};

TimeSlotsGroup.propTypes = {
  timeSlots: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TimeSlotsGroup;
