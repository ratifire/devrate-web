import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { DateTime } from 'luxon';
import TimeSlot from '../TimeSlot';
import { styles } from './TimeSlotsGroup.styles.js';

const TimeSlotsGroup = ({ timeSlots, selectedSlots, onSelectSlot }) => {
  const { slots, date, dates } = timeSlots;
  const locale = 'ua';

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const getTitle = () => {
    let result = null;

    if (dates.length > 1) {
      const startDate = DateTime.fromFormat(dates[0], 'dd.MM.yyyy');
      const endDate = DateTime.fromFormat(dates.at(-1), 'dd.MM.yyyy');

      const start = {
        date: startDate.toFormat('dd.MM.yyyy'),
        dayTitle:
          locale === 'ua'
            ? capitalizeFirstLetter(startDate.setLocale(locale).toFormat('EEEE'))
            : startDate.setLocale(locale).toFormat('EEEE'), // Todo change locale according to redux state
      };

      const end = {
        date: endDate.toFormat('dd.MM.yyyy'),
        dayTitle:
          locale === 'ua'
            ? capitalizeFirstLetter(endDate.setLocale(locale).toFormat('EEEE'))
            : endDate.setLocale(locale).toFormat('EEEE'), // Todo change locale according to redux state
      };

      result = (
        <Typography sx={styles.dayTitle}>{`${start.date} ${start.dayTitle} - ${end.date} ${end.dayTitle}`}</Typography>
      );
    } else {
      const originalDate = DateTime.fromFormat(dates[0], 'dd.MM.yyyy');
      const dayTitle =
        locale === 'ua'
          ? capitalizeFirstLetter(originalDate.setLocale(locale).toFormat('EEEE'))
          : originalDate.setLocale(locale).toFormat('EEEE'); // Todo change locale according to redux state
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
