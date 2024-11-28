import { Box, Container, Paper, Typography } from '@mui/material';
import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import ScheduleTemplate from '../../Templates/ScheduleTemplate';
import ProfileHeader from '../../components/PageComponents/ProfileHeader';
import { ScheduleSkeleton } from '../../components/UI/Skeleton';
import { styles } from './SchedulePage.styles';

const Schedule = lazy(() => import('../../components/PageComponents/ScheduleComponents'));

const SchedulePage = () => {
  const { t } = useTranslation();

  return (
    <ScheduleTemplate>
      <ProfileHeader />
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
    </ScheduleTemplate>
  );
};

export default SchedulePage;
