import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DateCalendar } from '@mui/x-date-pickers';
import PropTypes from 'prop-types';
import DayPicker from './DayPicker';

const SmallCalendar = ({ selectedDate, handleDateChange }) => {
  const [hoveredDay, setHoveredDay] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <DateCalendar
        showDaysOutsideCurrentMonth
        value={selectedDate}
        onChange={handleDateChange}
        slots={{ day: DayPicker }}
        slotProps={{
          day: (ownerState) => ({
            selectedDay: selectedDate,
            hoveredDay,
            onPointerEnter: () => setHoveredDay(ownerState.day),
            onPointerLeave: () => setHoveredDay(null),
          }),
        }}
      />
    </LocalizationProvider>
  );
};

SmallCalendar.propTypes = {
  selectedDate: PropTypes.object,
  handleDateChange: PropTypes.func,
};

export default SmallCalendar;
