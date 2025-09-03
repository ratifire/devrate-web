import {
  InterviewFeedbackSkeleton,
  InterviewInfoSkeleton,
  SkillsSkeleton,
  StatisticSkeleton,
  UserCardSkeleton,
} from '@components/UI/Skeleton';
import { Box, Paper, Typography } from '@mui/material';
import { useGetPassedInterviewByIdQuery } from '@redux/api/slices/interviews/passedInterviewsApiSlice.js';
import { DARK_THEME } from '@utils/constants/Theme/theme.js';
import { lazy, memo, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { feedbackInterviewRole } from '@utils/constants/feedbackInterviewRole.js';
import EmptyRequestPicDark from '../../../assets/pictures/emptyInterviewTabsPictures/requestInterview/requestDark.svg?react';
import EmptyRequestPicLight from '../../../assets/pictures/emptyInterviewTabsPictures/requestInterview/requestLight.svg?react';
import { styles } from './SingleIPassednterviewPage.styles.js';

const UserCardSinglePassedInterview = lazy(
  () => import('@components/PageComponents/SinglePassedInterviewComponents/UserCardSinglePassedInterview')
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

const SinglePassedInterviewPage = () => {
  const { t } = useTranslation();
  const { mode } = useSelector((state) => state.theme);
  const { interviewId } = useParams();
  const { data: interviewData, isFetching: isFetchingPassedInterview } = useGetPassedInterviewByIdQuery(
    { interviewId },
    { skip: !interviewId }
  );

  const role = interviewData?.role;

  const { hardSkills = {}, softSkills = {} } = interviewData ?? {};

  const getSkillsArray = (skillsArray) =>
    Object.entries(skillsArray).map(([name, averageMark]) => ({
      name,
      averageMark,
    }));

  const getAverageSkillsMark = (skillsArray) =>
    skillsArray.length > 0
      ? parseFloat((skillsArray.reduce((acc, skill) => acc + skill.averageMark, 0) / skillsArray.length).toFixed(1))
      : 0;

  const hardSkillsArray = getSkillsArray(hardSkills);
  const softSkillsArray = getSkillsArray(softSkills);

  const averageHardSkillsMark = getAverageSkillsMark(hardSkillsArray);
  const averageSoftSkillsMark = getAverageSkillsMark(softSkillsArray);

  const EmptyInterviewSvg = mode === DARK_THEME ? EmptyRequestPicDark : EmptyRequestPicLight;

  const hasStatistics =
    (role === feedbackInterviewRole.CANDIDATE && averageHardSkillsMark > 0) || averageSoftSkillsMark > 0;

  return (
    <Box className='InterviewsPage' sx={styles.mainContent}>
      <Paper sx={styles.userInfo}>
        <Suspense fallback={<UserCardSkeleton />}>
          <MemoizedUserCardSinglePassedInterview />
        </Suspense>
      </Paper>
      <Paper sx={styles.interviewInfo}>
        <Suspense fallback={<InterviewInfoSkeleton />}>
          <MemoizedInterviewInfo />
        </Suspense>
      </Paper>
      {hasStatistics || isFetchingPassedInterview ? (
        <>
          <Paper sx={styles.interviewersAssessment}>
            <Typography sx={styles.interviewersAssessmentTitle} variant='h6'>
              {t('interviews.passedInterviews.interviewersAssessmentTitle')}
            </Typography>
            <Box sx={styles.skillsWrapper}>
              <Paper sx={styles.hardSkills}>
                {role === feedbackInterviewRole.CANDIDATE && (
                  <Suspense fallback={<SkillsSkeleton />}>
                    <MemoizedInterviewHardSkillsSinglePassedInterview />
                  </Suspense>
                )}
              </Paper>
              <Paper sx={styles.sortSkills}>
                <Suspense fallback={<SkillsSkeleton />}>
                  <MemoizedInterviewSoftSkillsSinglePassedInterview />
                </Suspense>
              </Paper>
            </Box>
          </Paper>
          <Paper sx={styles.statistics}>
            <Suspense fallback={<StatisticSkeleton />}>
              <StatisticPassedInterview />
            </Suspense>
          </Paper>
          <Paper sx={styles.interviewFeedback}>
            <Suspense fallback={<InterviewFeedbackSkeleton />}>
              <MemoizedInterviewFeedback />
            </Suspense>
          </Paper>
          <Paper sx={styles.interviewPreviewVideo}>
            <Suspense fallback={'loading'}>
              <MemoizedPreviewVideoPassedInterview />
            </Suspense>
          </Paper>
        </>
      ) : (
        <Paper sx={styles.emptyStatistics}>
          <Suspense fallback={<InterviewFeedbackSkeleton />}>
            <Typography className='emptyTitle' sx={styles.interviewersAssessmentTitle} variant='h6'>
              {t('interviews.passedInterviews.interviewersAssessmentTitle')}
            </Typography>
            <Box sx={styles.mascotStatsBox}>
              <EmptyInterviewSvg />
            </Box>
            <Typography sx={styles.emptyStatsText} variant='subtitle2'>
              {t('interviews.emptyInterviewTabs.emptyStatistics')}
            </Typography>
          </Suspense>
        </Paper>
      )}
    </Box>
  );
};

export default SinglePassedInterviewPage;
