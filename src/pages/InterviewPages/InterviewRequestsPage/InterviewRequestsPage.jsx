import { Box, Container, Paper } from '@mui/material';
import { lazy, memo, Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import InterviewRequestSkeleton from '@components/UI/Skeleton/Pages/InterviewRequestSkeleton/InterviewRequestSkeleton.jsx';
import { emptyInterviewTabsPictures } from '@utils/constants/emptyTabsPictures.js';
import { useGetSpecializationByUserIdQuery } from '@redux/api/slices/specialization/specializationApiSlice.js';
import { useGetInterviewRequestByMasteryIdQuery } from '@redux/api/slices/interviewRequestApiSlice.js';
import EmptyInterviewTab from '../EmptyInterviewTab/index.js';
import { styles } from './InterviewRequestsPage.styles.js';

const InterviewRequest = lazy(() => import('../../../components/PageComponents/InterviewRequest'));

const MemoizedInterviewRequest = memo(InterviewRequest);

const InterviewRequestsPage = () => {
  const { id } = useSelector((state) => state.auth.user.data);
  const [mastery, setMastery] = useState(null);

  const { data: specializations } = useGetSpecializationByUserIdQuery(id, { skip: !id });

  const { data: userData } = useGetInterviewRequestByMasteryIdQuery(
    { masteryId: specializations?.find((item) => item.id === mastery)?.mainMasteryId || '' },
    { skip: !mastery || !specializations?.find((item) => item.id === mastery)?.mainMasteryId }
  );

  const hasSpecializations = Boolean(specializations?.length);
  const hasInterviewRequests = Boolean(userData?.length);

  if (!hasSpecializations) {
    return (
      <EmptyInterviewTab
        isSpecializations={false}
        svg={emptyInterviewTabsPictures.emptySpecialization.request}
        tab='Request'
      />
    );
  }

  if (hasSpecializations && !hasInterviewRequests) {
    return <EmptyInterviewTab isSpecializations svg={emptyInterviewTabsPictures.emptyReqestPic} tab='Request' />;
  }

  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Paper sx={styles.interviewRequest}>
          <Suspense fallback={<InterviewRequestSkeleton />}>
            <MemoizedInterviewRequest
              mastery={mastery}
              specializations={specializations}
              userData={userData}
              onMasteryChange={setMastery}
            />
          </Suspense>
        </Paper>
      </Box>
    </Container>
  );
};

export default InterviewRequestsPage;
