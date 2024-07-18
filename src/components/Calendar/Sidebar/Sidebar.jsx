import { styles } from './Sidebar.styles';
import PropTypes from 'prop-types';
import React from 'react';
import SidebarEvent from '../SidebarEvent/SidebarEvent';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function Sidebar({ weekendsVisible, handleWeekendsToggle, currentEvents }) {
  return (
    <div style={styles.Sidebar}>
      <div className='demo-app-sidebar-section'>
        <h2>Instructions</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>


      </div>
      <div style={styles.SidebarSection} className='demo-app-sidebar-section'>
        <label>
          <input
            type='checkbox'
            checked={weekendsVisible}
            onChange={handleWeekendsToggle}
          ></input>
          toggle weekends
        </label>
      </div>
      <div style={styles.SidebarSection} className='demo-app-sidebar-section'>
        <h2>All Events ({currentEvents.length})</h2>
        <ul>
          {currentEvents.map((event) => (
            <SidebarEvent key={event.id} event={event} />
          ))}
        </ul>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  weekendsVisible: PropTypes.bool.isRequired,
  handleWeekendsToggle: PropTypes.func.isRequired,
  currentEvents: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string,
    allDay: PropTypes.bool
  })).isRequired
};