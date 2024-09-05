import { styles } from './Sidebar.styles';
import PropTypes from 'prop-types';
import React from 'react';
import SidebarEvent from '../SidebarEvent/SidebarEvent';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers';
import { Settings } from 'luxon';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { Box } from '@mui/material';

Settings.defaultWeekSettings = {
  firstDay: 1, // Set the first day of the week
  minimalDays: 4, // minimum number of days required in the first week of the year for it to be considered as week 1
  weekend: [6, 7], // Set weekend days
};

export default function Sidebar({ currentEvents }) {
  console.log('Current events', currentEvents);
  return (
    <Box sx={styles.container}>
      <Box className='demo-app-sidebar-section'>
        <LocalizationProvider dateAdapter={AdapterLuxon}>
          <DateCalendar />
        </LocalizationProvider>
      </Box>
      <Box sx={styles.scrollContainer}>
        <Box sx={styles.sidebarSection} className='demo-app-sidebar-section'>
          {currentEvents.map((event) => (
            <SidebarEvent key={event.id} event={event} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  currentEvents: PropTypes.array,
};
