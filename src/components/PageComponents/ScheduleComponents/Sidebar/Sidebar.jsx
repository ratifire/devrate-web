import { Box } from '@mui/material';
import { useGetClosestEventByUserIdQuery } from '@redux/api/slices/schedule/scheduleApiSlice.js';
import { ErrorComponent } from '@components/UI/Exceptions/index.js';
import { SidebarSkeleton } from '@components/UI/Skeleton/Pages/ScheduleSkeleton/index';
import SidebarEvent from '@components/PageComponents/ScheduleComponents/ClosestEvents/SidebarEvent/SidebarEvent';
import SmallCalendar from '../SmallCalendar';
import { styles } from './Sidebar.styles';

const Sidebar = () => {
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
        <SmallCalendar />
      </Box>
      <Box sx={styles.scrollContainer}>
        <Box sx={styles.sidebarSection}>
          {closestEvent && closestEvent.map((event) => <SidebarEvent key={event.id} event={event} />)}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
