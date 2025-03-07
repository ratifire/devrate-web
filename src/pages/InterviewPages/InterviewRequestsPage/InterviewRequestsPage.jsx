import { Box, Container, Paper } from '@mui/material';
import { lazy, memo, Suspense } from 'react';
import InterviewRequestSkeleton from '../../../components/UI/Skeleton/Pages/InterviewRequestSkeleton/InterviewRequestSkeleton.jsx';
import { styles } from './InterviewRequestsPage.styles.js';

const InterviewRequest = lazy(() => import('../../../components/PageComponents/InterviewRequest'));

const MemoizedInterviewRequest = memo(InterviewRequest);

const InterviewRequestsPage = () => {
  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Paper sx={styles.interviewRequest}>
          <Suspense fallback={<InterviewRequestSkeleton />}>
            <MemoizedInterviewRequest />
          </Suspense>
        </Paper>
      </Box>
    </Container>
  );
};

export default InterviewRequestsPage;
