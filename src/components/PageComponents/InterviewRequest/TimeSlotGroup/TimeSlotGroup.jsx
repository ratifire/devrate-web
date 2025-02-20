import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import TimeSlot from '../TimeSlot';
import { styles } from './TimeSlotGroup.styles.js';

const TimeSlotsGroup = ({ timeSlots, selectedSlots, onSelectSlot }) => {
  const { items, date, dayOfWeek } = timeSlots;

  return (
    <Box sx={styles.timeSlotGroup}>
      <Typography sx={styles.dayTitle}>{`${dayOfWeek} ${date}`}</Typography>
      <Box sx={styles.dayGroup}>
        {items?.map((item) => (
          <TimeSlot
            key={item.date}
            currentDate={date}
            data={item}
            day={dayOfWeek}
            isSelected={selectedSlots.includes(item.date)}
            onSelect={onSelectSlot}
          />
        ))}
      </Box>
    </Box>
  );
};

TimeSlotsGroup.propTypes = {
  timeSlots: PropTypes.object.isRequired,
  selectedSlots: PropTypes.array.isRequired,
  onSelectSlot: PropTypes.func.isRequired,
};

export default TimeSlotsGroup;
