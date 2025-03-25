import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DateCalendar } from '@mui/x-date-pickers';
import PropTypes from 'prop-types';
import { Settings } from 'luxon';
import DayPicker from './DayPicker';
import { styles } from './SmallCalendar.styles';

Settings.defaultWeekSettings = {
  firstDay: 1, // Set the first day of the week
  minimalDays: 4, // minimum number of days required in the first week of the year for it to be considered as week 1
  weekend: [6, 7], // Set weekend days
};

const SmallCalendar = ({ selectedDate, handleDateChange }) => {
  const [hoveredDay, setHoveredDay] = useState(null);

  // const handleDateChange = async (newDate) => {
  //   dispatch(setClosePopup());
  //   setSelectedDate(newDate);
  //   const weekNumber = DateTime.fromJSDate(newDate.toJSDate()).weekNumber;
  //   setSelectedWeek(weekNumber);
  //
  //   const chosenDay = DateTime.fromISO(newDate);
  //   const year = chosenDay.year;
  //
  //   const { startOfWeek, endOfWeek } = getWeekStartAndEnd(year, weekNumber);
  //   setFrom(startOfWeek);
  //   setTo(endOfWeek);
  //
  //   const { data: resp } = await triggerEvents({ from: startOfWeek, to: endOfWeek });
  //   const startTime = findEventTimeForChosenDay(newDate, resp);
  //   setEventStartTime(startTime);
  // };

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <DateCalendar
        showDaysOutsideCurrentMonth
        slotProps={{
          day: (ownerState) => ({
            selectedDay: selectedDate,
            hoveredDay,
            onPointerEnter: () => setHoveredDay(ownerState.day),
            onPointerLeave: () => setHoveredDay(null),
          }),
        }}
        slots={{ day: DayPicker }}
        sx={styles.switcher}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </LocalizationProvider>
  );
};

SmallCalendar.propTypes = {
  selectedDate: PropTypes.object,
  handleDateChange: PropTypes.func,
};

export default SmallCalendar;
