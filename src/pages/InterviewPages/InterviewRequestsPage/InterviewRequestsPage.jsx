import InterviewRequestSkeleton from '@components/UI/Skeleton/Pages/InterviewRequestSkeleton/InterviewRequestSkeleton.jsx';
import { Box, Container, Paper } from '@mui/material';
import { useGetSpecializationByUserIdQuery } from '@redux/api/slices/specialization/specializationApiSlice.js';
import { emptyInterviewTabsPictures } from '@utils/constants/emptyTabsPictures.js';
import { lazy, memo, Suspense } from 'react';
import { useSelector } from 'react-redux';
import EmptyInterviewTab from '../EmptyInterviewTab/index.js';
import { styles } from './InterviewRequestsPage.styles.js';

const InterviewRequest = lazy(() => import('../../../components/PageComponents/InterviewRequest'));

const MemoizedInterviewRequest = memo(InterviewRequest);

const InterviewRequestsPage = () => {
  const { id } = useSelector((state) => state.auth.user.data);

  const { data: specializations } = useGetSpecializationByUserIdQuery(id, { skip: !id });

  const hasSpecializations = !!specializations?.length;

  if (!hasSpecializations) {
    return (
      <EmptyInterviewTab
        isSpecializations={false}
        svg={emptyInterviewTabsPictures.emptySpecialization.request}
        tab='Request'
      />
    );
  }

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
