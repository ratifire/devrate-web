import { Box, Container, Paper, Typography } from '@mui/material';
import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { ScheduleSkeleton } from '@components/UI/Skeleton';
import { styles } from './SchedulePage.styles';

const Schedule = lazy(() => import('@components/PageComponents/ScheduleComponents'));

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
            <Suspense fallback={<ScheduleSkeleton />}>
              <Schedule />
            </Suspense>
          </Paper>
        </Paper>
      </Box>
    </Container>
  );
};

export default SchedulePage;
