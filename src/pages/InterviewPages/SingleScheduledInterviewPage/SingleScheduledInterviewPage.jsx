import { lazy, memo, Suspense } from 'react';
import { Box, Container, Paper } from '@mui/material';
import {
  UserCardScheduledInterviewSkeleton,
  ScheduledMeetingSkeleton,
  StatisticSkeleton,
  ParticipantEvaluationsSkeleton,
  InterviewSkillsSkeleton,
} from '../../../components/UI/Skeleton';
import { styles } from './SingleScheduledInterviewPage.styles';

const UserCardScheduledInterview = lazy(
  () => import('../../../components/PageComponents/SingleScheduledInterview/UserCardScheduledInterview')
);
const ParticipantEvaluations = lazy(
  () => import('../../../components/PageComponents/SingleScheduledInterview/ParticipantEvaluations')
);
const Statistic = lazy(() => import('../../../components/PageComponents/SingleScheduledInterview/Statistic'));
const ScheduledMeeting = lazy(
  () => import('../../../components/PageComponents/SingleScheduledInterview/ScheduledMeeting')
);
const InterviewSkills = lazy(
  () => import('../../../components/PageComponents/SingleScheduledInterview/InterviewSkills')
);

const MemoizedUserCardScheduledInterview = memo(UserCardScheduledInterview);
const MemoizedParticipantEvaluations = memo(ParticipantEvaluations);
const MemoizedStatistic = memo(Statistic);
const MemoizedScheduledMeeting = memo(ScheduledMeeting);
const MemoizedInterviewSkills = memo(InterviewSkills);

const SingleScheduledInterviewPage = () => {
  return (
    <Container sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Paper sx={styles.userCardScheduledInterview}>
          <Suspense fallback={<UserCardScheduledInterviewSkeleton />}>
            <MemoizedUserCardScheduledInterview />
          </Suspense>
        </Paper>
        <Paper sx={styles.scheduledMeeting}>
          <Suspense fallback={<ScheduledMeetingSkeleton />}>
            <MemoizedScheduledMeeting />
          </Suspense>
        </Paper>
        <Paper sx={styles.statistic}>
          <Suspense fallback={<StatisticSkeleton />}>
            <MemoizedStatistic />
          </Suspense>
        </Paper>
        <Paper sx={styles.participantEvaluations}>
          <Suspense fallback={<ParticipantEvaluationsSkeleton />}>
            <MemoizedParticipantEvaluations />
          </Suspense>
        </Paper>
        <Paper sx={styles.interviewSkills}>
          <Suspense fallback={<InterviewSkillsSkeleton />}>
            <MemoizedInterviewSkills />
          </Suspense>
        </Paper>
      </Box>
    </Container>
  );
};

export default SingleScheduledInterviewPage;
