import {
  EmptyStatisticsSkeleton,
  InterviewFeedbackSkeleton,
  InterviewInfoSkeleton,
  PreviewVideoPassedInterviewSkeleton,
  SinglePassedInterviewSkeleton,
  SkillsSkeleton,
  StatisticSkeleton,
  UserCardSkeleton,
} from '@components/UI/Skeleton';
import { Box, Typography } from '@mui/material';
import { useGetPassedInterviewByIdQuery } from '@redux/api/slices/interviews/passedInterviewsApiSlice';
import { lazy, memo, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { feedbackInterviewRole } from '@utils/constants/feedbackInterviewRole';
import {
  getAverageSkillsMark,
  getSkillsArray,
} from '@components/PageComponents/SinglePassedInterviewComponents/helpers';
import { styles } from './SinglePassedInterviewPage.styles';

const UserCardSinglePassedInterview = lazy(
  () => import('@components/PageComponents/SinglePassedInterviewComponents/UserCardSinglePassedInterview')
);

const EmptyStatisticsPassedInterview = lazy(
  () => import('@components/PageComponents/SinglePassedInterviewComponents/EmptyStatisticsPassedInterview')
);

const PreviewVideoPassedInterview = lazy(
  () => import('@components/PageComponents/SinglePassedInterviewComponents/PreviewVideoPassedInterview')
);

const StatisticPassedInterview = lazy(
  () => import('@components/PageComponents/SinglePassedInterviewComponents/StatisticPassedInterview')
);

const InterviewSoftSkillsSinglePassedInterview = lazy(
  () => import('@components/PageComponents/SinglePassedInterviewComponents/InterviewSoftSkillsSinglePassedInterview')
);

const InterviewHardSkillsSinglePassedInterview = lazy(
  () => import('@components/PageComponents/SinglePassedInterviewComponents/InterviewHardSkillsSinglePassedInterview')
);

const InterviewInfo = lazy(() => import('../../../components/PageComponents/InterviewsComponents/InterviewInfo'));

const InterviewFeedback = lazy(
  () => import('@components/PageComponents/SinglePassedInterviewComponents/PassedInterviewFeedback')
);

const MemoizedInterviewInfo = memo(InterviewInfo);
const MemoizedInterviewHardSkillsSinglePassedInterview = memo(InterviewHardSkillsSinglePassedInterview);
const MemoizedInterviewSoftSkillsSinglePassedInterview = memo(InterviewSoftSkillsSinglePassedInterview);
const MemoizedInterviewFeedback = memo(InterviewFeedback);
const MemoizedUserCardSinglePassedInterview = memo(UserCardSinglePassedInterview);
const MemoizedPreviewVideoPassedInterview = memo(PreviewVideoPassedInterview);
const MemoizedEmptyStatisticsPassedInterview = memo(EmptyStatisticsPassedInterview);

const SinglePassedInterviewPage = () => {
  const { t } = useTranslation();
  const { interviewId } = useParams();
  const { data: interviewData, isFetching: isFetchingPassedInterview } = useGetPassedInterviewByIdQuery(
    { interviewId },
    { skip: !interviewId }
  );

  const role = interviewData?.role;

  const { hardSkills = {}, softSkills = {} } = interviewData ?? {};

  const hardSkillsArray = getSkillsArray(hardSkills);
  const softSkillsArray = getSkillsArray(softSkills);

  const averageHardSkillsMark = getAverageSkillsMark(hardSkillsArray);
  const averageSoftSkillsMark = getAverageSkillsMark(softSkillsArray);

  const hasStatistics =
    (role === feedbackInterviewRole.CANDIDATE && averageHardSkillsMark > 0) || averageSoftSkillsMark > 0;

  if (isFetchingPassedInterview) {
    return <SinglePassedInterviewSkeleton />;
  }

  return (
    <Box className='InterviewsPage' sx={styles.mainContent}>
      <Box sx={styles.userInfo}>
        <Suspense fallback={<UserCardSkeleton />}>
          <MemoizedUserCardSinglePassedInterview />
        </Suspense>
      </Box>
      <Box sx={styles.interviewInfo}>
        <Suspense fallback={<InterviewInfoSkeleton />}>
          <MemoizedInterviewInfo />
        </Suspense>
      </Box>
      {hasStatistics || isFetchingPassedInterview ? (
        <>
          <Box sx={styles.interviewersAssessment}>
            <Typography sx={styles.title} variant='h6'>
              {t('interviews.passedInterviews.interviewersAssessmentTitle')}
            </Typography>
            <Box>
              <Box sx={styles.hardSkills}>
                {role === feedbackInterviewRole.CANDIDATE && (
                  <Suspense fallback={<SkillsSkeleton />}>
                    <MemoizedInterviewHardSkillsSinglePassedInterview />
                  </Suspense>
                )}
              </Box>
              <Box sx={styles.sortSkills}>
                <Suspense fallback={<SkillsSkeleton />}>
                  <MemoizedInterviewSoftSkillsSinglePassedInterview />
                </Suspense>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.statistics}>
            <Suspense fallback={<StatisticSkeleton />}>
              <StatisticPassedInterview />
            </Suspense>
          </Box>
          <Box sx={styles.interviewFeedback}>
            <Suspense fallback={<InterviewFeedbackSkeleton />}>
              <MemoizedInterviewFeedback />
            </Suspense>
          </Box>
          <Box sx={styles.interviewPreviewVideo}>
            <Suspense fallback={<PreviewVideoPassedInterviewSkeleton />}>
              <MemoizedPreviewVideoPassedInterview />
            </Suspense>
          </Box>
        </>
      ) : (
        <Box sx={styles.emptyStatistics}>
          <Suspense fallback={<EmptyStatisticsSkeleton />}>
            <MemoizedEmptyStatisticsPassedInterview />
          </Suspense>
        </Box>
      )}
    </Box>
  );
};

export default SinglePassedInterviewPage;
