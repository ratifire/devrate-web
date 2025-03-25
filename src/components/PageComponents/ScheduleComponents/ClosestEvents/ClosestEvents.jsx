import { useGetClosestEventByUserIdQuery } from '@redux/api/slices/schedule/scheduleApiSlice.js';
import { Box } from '@mui/material';
import SidebarEvent from '@components/PageComponents/ScheduleComponents/ClosestEvents/SidebarEvent/index.js';
import { SidebarSkeleton } from '@components/UI/Skeleton/Pages/ScheduleSkeleton/index.js';
import { ErrorComponent } from '@components/UI/Exceptions/index.js';
import { styles } from './ClosestEvents.styles';

const ClosestEvents = () => {
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
    <Box sx={styles.scrollContainer}>
      <Box sx={styles.sidebarSection}>
        {closestEvent && closestEvent.map((event) => <SidebarEvent key={event.id} event={event} />)}
      </Box>
    </Box>
  );
};

export default ClosestEvents;
