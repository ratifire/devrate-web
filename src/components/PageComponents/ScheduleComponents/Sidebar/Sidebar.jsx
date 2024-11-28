import PropTypes from 'prop-types';
import React from 'react';
import { Settings } from 'luxon';
import { Box } from '@mui/material';
import SidebarEvent from '../SidebarEvent/SidebarEvent';
import { styles } from './Sidebar.styles';
import SmallCalendar from './SmallCalendar';

Settings.defaultWeekSettings = {
  firstDay: 1, // Set the first day of the week
  minimalDays: 4, // minimum number of days required in the first week of the year for it to be considered as week 1
  weekend: [6, 7], // Set weekend days
};

const Sidebar = ({ currentEvents, selectedDate, handleDateChange }) => {
  return (
    <Box sx={styles.container}>
      <Box>
        <SmallCalendar handleDateChange={handleDateChange} selectedDate={selectedDate} />
      </Box>
      <Box sx={styles.scrollContainer}>
        <Box sx={styles.sidebarSection}>
          {currentEvents && currentEvents.map((event) => <SidebarEvent key={event.id} event={event} />)}
        </Box>
      </Box>
    </Box>
  );
};

Sidebar.propTypes = {
  currentEvents: PropTypes.array,
  selectedDate: PropTypes.object,
  handleDateChange: PropTypes.func,
};

export default Sidebar;
