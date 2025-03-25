import { useMemo, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DateCalendar } from '@mui/x-date-pickers';
import { DateTime, Settings } from 'luxon';
import { setClosePopup, setDate, setSelectedDate } from '@redux/slices/schedule/scheduleSlice.js';
import { getWeekStartAndEnd } from '@components/PageComponents/ScheduleComponents/helpers/index.js';
import { useDispatch, useSelector } from 'react-redux';
import DayPicker from './DayPicker';
import { styles } from './SmallCalendar.styles';

Settings.defaultWeekSettings = {
  firstDay: 1, // Set the first day of the week
  minimalDays: 4, // minimum number of days required in the first week of the year for it to be considered as week 1
  weekend: [6, 7], // Set weekend days
};

const SmallCalendar = () => {
  const [hoveredDay, setHoveredDay] = useState(null);
  const { selectedDate } = useSelector((state) => state.schedule);
  const dispatch = useDispatch();

  const restoreSelectedDate = useMemo(() => DateTime.fromISO(selectedDate), [selectedDate]);

  const handleDateChange = (newDate) => {
    dispatch(setClosePopup());
    dispatch(setSelectedDate(newDate.toISO()));
    const weekNumber = DateTime.fromJSDate(newDate.toJSDate()).weekNumber;

    const chosenDay = DateTime.fromISO(newDate);
    const year = chosenDay.year;

    const { startOfWeek, endOfWeek } = getWeekStartAndEnd(year, weekNumber);
    dispatch(setDate({ from: startOfWeek, to: endOfWeek }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <DateCalendar
        showDaysOutsideCurrentMonth
        defaultValue={restoreSelectedDate}
        slotProps={{
          day: (ownerState) => ({
            selectedDay: restoreSelectedDate,
            hoveredDay,
            onPointerEnter: () => setHoveredDay(ownerState.day),
            onPointerLeave: () => setHoveredDay(null),
          }),
        }}
        slots={{ day: DayPicker }}
        sx={styles.switcher}
        value={restoreSelectedDate}
        // value={restoreSelectedDate}
        onChange={handleDateChange}
      />
    </LocalizationProvider>
  );
};

export default SmallCalendar;
