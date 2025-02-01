import { Box, Container, Paper } from '@mui/material';
import { lazy, memo, Suspense } from 'react';
import { Outlet } from 'react-router';
import InterviewsSkeleton from '../../../components/UI/Skeleton/Pages/InterviewsSkeleton';
import { styles } from './PassedInterviewsPage.styles';

const PassedSideBar = lazy(
  () => import('../../../components/PageComponents/InterviewsComponents/InterviewSideBar/PassedSideBar')
);

const MemoizedPassedSideBar = memo(PassedSideBar);

const PassedInterviewsPage = () => {
  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Paper sx={styles.interviewSideBar}>
          <Suspense fallback={<InterviewsSkeleton />}>
            <MemoizedPassedSideBar />
          </Suspense>
        </Paper>
        <Outlet />
      </Box>
    </Container>
  );
};

export default PassedInterviewsPage;
