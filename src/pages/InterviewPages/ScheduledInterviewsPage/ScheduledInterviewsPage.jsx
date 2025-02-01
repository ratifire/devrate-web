import { Box, Container, Paper } from '@mui/material';
import { lazy, memo, Suspense } from 'react';
import { Outlet } from 'react-router';
import InterviewsSkeleton from '../../../components/UI/Skeleton/Pages/InterviewsSkeleton';
import { styles } from './ScheduledInterviewsPage.styles.js';

const ScheduledSideBar = lazy(
  () => import('../../../components/PageComponents/InterviewsComponents/InterviewSideBar/ScheduleSideBar')
);

const MemoizedScheduledSideBar = memo(ScheduledSideBar);

const ScheduledInterviewsPage = () => {
  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Paper sx={styles.interviewSideBar}>
          <Suspense fallback={<InterviewsSkeleton />}>
            <MemoizedScheduledSideBar />
          </Suspense>
        </Paper>
        <Outlet />
      </Box>
    </Container>
  );
};

export default ScheduledInterviewsPage;
