import { Box, Skeleton } from '@mui/material';
import { styles } from '@pages/InterviewPages/SinglePassedInterviewPage/SinglePassedInterviewPage.styles';
import {
  InterviewFeedbackSkeleton,
  InterviewInfoSkeleton,
  PreviewVideoPassedInterviewSkeleton,
  SkillsSkeleton,
  StatisticSkeleton,
  UserCardSkeleton,
} from '@components/UI/Skeleton';

const SinglePassedInterviewSkeleton = () => {
  return (
    <Box className='InterviewsPage' sx={styles.mainContent}>
      <Box sx={styles.userInfo}>
        <UserCardSkeleton />
      </Box>
      <Box sx={styles.interviewInfo}>
        <InterviewInfoSkeleton />
      </Box>
      <Box sx={styles.interviewersAssessment}>
        <Skeleton height={32} sx={styles.title} variant={'rounded'} />
        <Box sx={styles.skillsWrapper}>
          <Box sx={styles.hardSkills}>
            <SkillsSkeleton />
          </Box>
          <Box sx={styles.sortSkills}>
            <SkillsSkeleton />
          </Box>
        </Box>
      </Box>
      <Box sx={styles.statistics}>
        <StatisticSkeleton />
      </Box>
      <Box sx={styles.interviewFeedback}>
        <InterviewFeedbackSkeleton />
      </Box>
      <Box sx={styles.interviewPreviewVideo}>
        <PreviewVideoPassedInterviewSkeleton />
      </Box>
    </Box>
  );
};

export default SinglePassedInterviewSkeleton;
