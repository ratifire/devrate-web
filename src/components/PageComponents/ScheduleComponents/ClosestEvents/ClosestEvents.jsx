import { useGetClosestEventByUserIdQuery } from '@redux/api/slices/schedule/scheduleApiSlice';
import { Box } from '@mui/material';
import { ErrorComponent } from '@components/UI/Exceptions';
import { ClosestEventSkeleton } from '@components/UI/Skeleton';
import Event from '@components/PageComponents/ScheduleComponents/ClosestEvents/Event';
import useGetHeightElement from '@utils/hooks/useGetHeightElement';
import { useTheme } from '@mui/material/styles';
import { useRef } from 'react';
import { useScrollPadding } from '@utils/helpers/useScrollPadding';
import { styles } from './ClosestEvents.styles';

const ClosestEvents = () => {
  const { data: closestEvent, isFetching, isError } = useGetClosestEventByUserIdQuery();
  const height = useGetHeightElement('.calendar > div');
  const containerRef = useRef(null);
  const theme = useTheme();

  useScrollPadding(containerRef, '9px', closestEvent);

  if (isFetching) {
    return <ClosestEventSkeleton />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <Box ref={containerRef} sx={styles.scrollContainer(theme, height)}>
      {closestEvent && closestEvent.map((event) => <Event key={event.id} event={event} />)}
    </Box>
  );
};

export default ClosestEvents;
