import { styles } from './Sidebar.styles';
import PropTypes from 'prop-types';
import React from 'react';
import SidebarEvent from '../SidebarEvent/SidebarEvent';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers';
import { Settings } from 'luxon';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';

Settings.defaultWeekSettings = {
  firstDay: 1, // Set the first day of the week
  minimalDays: 4, // minimum number of days required in the first week of the year for it to be considered as week 1
  weekend: [6, 7], // Set weekend days
};

// export default function Sidebar({ weekendsVisible, handleWeekendsToggle, currentEvents }) {
export default function Sidebar({ currentEvents }) {
  return (
    <div style={styles.Sidebar}>
      <div className='demo-app-sidebar-section'>
        <LocalizationProvider dateAdapter={AdapterLuxon}>
          <DateCalendar />
        </LocalizationProvider>
      </div>
      {/*<div style={styles.SidebarSection} className='demo-app-sidebar-section'>*/}
      {/*  <label>*/}
      {/*    <input type='checkbox' checked={weekendsVisible} onChange={handleWeekendsToggle}></input>*/}
      {/*    toggle weekends*/}
      {/*  </label>*/}
      {/*</div>*/}
      <div style={styles.SidebarSection} className='demo-app-sidebar-section'>
        <h2>All Events ({currentEvents.length})</h2>
        {currentEvents.map((event) => (
          <SidebarEvent key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  weekendsVisible: PropTypes.bool.isRequired,
  handleWeekendsToggle: PropTypes.func.isRequired,
  currentEvents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      start: PropTypes.string.isRequired,
      end: PropTypes.string,
      allDay: PropTypes.bool,
    })
  ).isRequired,
};
