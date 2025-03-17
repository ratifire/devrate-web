import { Box, Container, Paper } from '@mui/material';
import { lazy, memo, Suspense } from 'react';
import { useSelector } from 'react-redux';
import InterviewRequestSkeleton from '@components/UI/Skeleton/Pages/InterviewRequestSkeleton/InterviewRequestSkeleton.jsx';
import { emptyInterviewTabsPictures } from '@utils/constants/emptyTabsPictures.js';
import { useGetSpecializationByUserIdQuery } from '@redux/api/slices/specialization/specializationApiSlice.js';
import EmptyInterviewTab from '../EmptyInterviewTab/index.js';
import { styles } from './InterviewRequestsPage.styles.js';

const InterviewRequest = lazy(() => import('../../../components/PageComponents/InterviewRequest'));

const MemoizedInterviewRequest = memo(InterviewRequest);

const InterviewRequestsPage = () => {
  const { id } = useSelector((state) => state.auth.user.data);

  const { data: specializations } = useGetSpecializationByUserIdQuery(id, { skip: !id });
  const isSpecializations = Boolean(specializations?.length);

  return !isSpecializations ? (
    <EmptyInterviewTab
      isSpecializations={isSpecializations}
      svg={emptyInterviewTabsPictures.emptySpecialization.request}
      tab='Request'
    />
  ) : (
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
