import { Box, Container, Paper } from '@mui/material';
import { Suspense } from 'react';
import InterviewRequest from '../../../components/PageComponents/InterviewRequest';
import InterviewRequestSkeleton from '../../../components/UI/Skeleton/Pages/InterviewRequestSkeleton/InterviewRequestSkeleton.jsx';
import { styles } from './InterviewRequestsPage.styles.js';

const InterviewRequestsPage = () => {
  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Paper sx={styles.interviewRequest}>
          <Suspense fallback={<InterviewRequestSkeleton />}>
            <InterviewRequest />
          </Suspense>
        </Paper>
      </Box>
    </Container>
  );
};

export default InterviewRequestsPage;
