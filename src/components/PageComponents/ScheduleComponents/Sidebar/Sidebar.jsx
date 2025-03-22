import PropTypes from 'prop-types';
import { Settings } from 'luxon';
import { Box } from '@mui/material';
import { useGetClosestEventByUserIdQuery } from '@redux/api/slices/schedule/scheduleApiSlice.js';
import { ErrorComponent } from '@components/UI/Exceptions/index.js';
import { SidebarSkeleton } from '@components/UI/Skeleton/Pages/ScheduleSkeleton/index';
import SidebarEvent from '../SidebarEvent/SidebarEvent';
import { styles } from './Sidebar.styles';
import SmallCalendar from './SmallCalendar';

Settings.defaultWeekSettings = {
  firstDay: 1, // Set the first day of the week
  minimalDays: 4, // minimum number of days required in the first week of the year for it to be considered as week 1
  weekend: [6, 7], // Set weekend days
};

const Sidebar = ({ selectedDate, handleDateChange }) => {
  const { data: closestEvent, isFetching, isError } = useGetClosestEventByUserIdQuery();

  if (isFetching) {
    return (
      <Box sx={styles.skeleton}>
        <SidebarSkeleton />
      </Box>
    );
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <Box sx={styles.container}>
      <Box>
        <SmallCalendar handleDateChange={handleDateChange} selectedDate={selectedDate} />
      </Box>
      <Box sx={styles.scrollContainer}>
        <Box sx={styles.sidebarSection}>
          {closestEvent && closestEvent.map((event) => <SidebarEvent key={event.id} event={event} />)}
        </Box>
      </Box>
    </Box>
  );
};

Sidebar.propTypes = {
  selectedDate: PropTypes.object,
  handleDateChange: PropTypes.func,
};

export default Sidebar;
