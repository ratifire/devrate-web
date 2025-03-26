import { Box, Container, Paper, Typography } from '@mui/material';
import { lazy, Suspense, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CalendarSkeleton, ClosestEventSkeleton, SmallCalendarSkeleton } from '@components/UI/Skeleton/index.js';
import { styles } from './SchedulePage.styles';

const SmallCalendar = lazy(() =>
  import('@components/PageComponents/ScheduleComponents').then((module) => ({ default: module.SmallCalendar }))
);
const Calendar = lazy(() =>
  import('@components/PageComponents/ScheduleComponents').then((module) => ({ default: module.Calendar }))
);
const ClosestEvents = lazy(() =>
  import('@components/PageComponents/ScheduleComponents').then((module) => ({ default: module.ClosestEvents }))
);

const MemoizedSmallCalendar = memo(SmallCalendar);
const MemoizedClosestEvents = memo(ClosestEvents);
const MemoizedCalendar = memo(Calendar);

const SchedulePage = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Paper sx={styles.scheduleWrapper}>
          <Typography sx={styles.scheduleTitle} variant='h4'>
            {t('schedule.title')}
          </Typography>
          <Paper sx={styles.calendarWrapper}>
            <Box sx={styles.sidebar}>
              <Suspense fallback={<SmallCalendarSkeleton />}>
                <MemoizedSmallCalendar />
              </Suspense>
              <Suspense fallback={<ClosestEventSkeleton />}>
                <MemoizedClosestEvents />
              </Suspense>
            </Box>
            <Suspense fallback={<CalendarSkeleton />}>
              <MemoizedCalendar />
            </Suspense>
          </Paper>
        </Paper>
      </Box>
    </Container>
  );
};

export default SchedulePage;
