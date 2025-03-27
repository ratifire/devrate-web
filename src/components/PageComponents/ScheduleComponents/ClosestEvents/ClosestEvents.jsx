import { useGetClosestEventByUserIdQuery } from '@redux/api/slices/schedule/scheduleApiSlice';
import { Box } from '@mui/material';
import Event from 'components/PageComponents/ScheduleComponents/ClosestEvents/Event';
import { ErrorComponent } from '@components/UI/Exceptions';
import { ClosestEventSkeleton } from '@components/UI/Skeleton';
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
        {closestEvent && closestEvent.map((event) => <Event key={event.id} event={event} />)}
      </Box>
    </Box>
  );
};

export default ClosestEvents;
