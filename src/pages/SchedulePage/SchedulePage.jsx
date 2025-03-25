import { Box, Container, Paper, Typography } from '@mui/material';
import { lazy, Suspense, memo } from 'react';
import { useTranslation } from 'react-i18next';
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
              <Suspense fallback={<div>Loading...</div>}>
                <MemoizedSmallCalendar />
              </Suspense>
              <Suspense fallback={<div>Loading...</div>}>
                <MemoizedClosestEvents />
              </Suspense>
            </Box>
            <Suspense fallback={<div>Loading...</div>}>
              <MemoizedCalendar />
            </Suspense>
          </Paper>
        </Paper>
      </Box>
    </Container>
  );
};

export default SchedulePage;
