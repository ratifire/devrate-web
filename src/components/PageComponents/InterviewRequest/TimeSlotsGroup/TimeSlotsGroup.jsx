import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { DateTime } from 'luxon';
import i18n from '../../../../utils/i18n.js';
import TimeSlot from '../TimeSlot';
import { styles } from './TimeSlotsGroup.styles.js';

const TimeSlotsGroup = ({ timeSlots, selectedSlots, onSelectSlot }) => {
  const { slots, date, dates } = timeSlots;
  const currentLocale = i18n.language; // Get current language from i18n

  const getTitle = () => {
    let result = null;
    if (dates.length > 1) {
      const startDate = DateTime.fromFormat(dates[0], 'dd.MM.yyyy');
      const endDate = DateTime.fromFormat(dates.at(-1), 'dd.MM.yyyy');

      const start = {
        date: startDate.toFormat('dd.MM.yyyy'),
        dayTitle: startDate.setLocale(currentLocale).toFormat('EEEE'), // Todo change locale according to redux state
      };

      const end = {
        date: endDate.toFormat('dd.MM.yyyy'),
        dayTitle: endDate.setLocale(currentLocale).toFormat('EEEE'), // Todo change locale according to redux state
      };

      result = (
        <Typography sx={styles.dayTitle}>{`${start.date} ${start.dayTitle} - ${end.date} ${end.dayTitle}`}</Typography>
      );
    } else {
      const originalDate = DateTime.fromFormat(dates[0], 'dd.MM.yyyy');
      const dayTitle = originalDate.setLocale(currentLocale).toFormat('EEEE'); // Todo change locale according to redux state
      const date = originalDate.toFormat('dd.MM.yyyy');

      result = <Typography sx={styles.dayTitle}>{`${date} ${dayTitle}`}</Typography>;
    }

    return result;
  };

  return (
    <Box sx={styles.timeSlotGroup}>
      {getTitle()}
      <Box sx={styles.dayGroup}>
        {slots?.map((slot) => (
          <TimeSlot
            key={slot.date}
            currentDate={date}
            data={slot}
            isSelected={selectedSlots.some((selected) => selected.date === slot.date)}
            onSelect={() => onSelectSlot({ date: slot.date, status: slot.type })}
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
