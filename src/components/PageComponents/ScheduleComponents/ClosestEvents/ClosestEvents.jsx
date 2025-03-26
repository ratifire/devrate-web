import { useGetClosestEventByUserIdQuery } from '@redux/api/slices/schedule/scheduleApiSlice.js';
import { Box } from '@mui/material';
import SidebarEvent from '@components/PageComponents/ScheduleComponents/ClosestEvents/SidebarEvent/index';
import { ErrorComponent } from '@components/UI/Exceptions/index';
import { ClosestEventSkeleton } from '@components/UI/Skeleton/index';
import { styles } from './ClosestEvents.styles';

const ClosestEvents = () => {
  const { data: closestEvent, isFetching, isError } = useGetClosestEventByUserIdQuery();

  if (isFetching) {
    return (
      <Box sx={styles.skeleton}>
        <ClosestEventSkeleton />
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
