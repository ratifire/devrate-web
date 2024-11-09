import React, { lazy, Suspense } from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';
import { styles } from './SchedulePage.styles';
import ProfileHeader from '../../components/PageComponents/ProfileHeader';

const Schedule = lazy(() => import('../../components/PageComponents/ScheduleComponents'));

import ScheduleTemplate from '../../Templates/ScheduleTemplate';
import { useTranslation } from 'react-i18next';
import { ScheduleSkeleton } from '../../components/UI/Skeleton';

const SchedulePage = () => {
  const { t } = useTranslation();

  return (
    <ScheduleTemplate>
      <ProfileHeader />
      <Container maxWidth='xl' sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <Paper sx={styles.scheduleWrapper}>
            <Typography variant='h4' sx={styles.scheduleTitle}>
              {t('schedule.title')}
            </Typography>
            <Paper sx={styles.calendarWrapper}>
              <Suspense fallback={<ScheduleSkeleton/>}>
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
