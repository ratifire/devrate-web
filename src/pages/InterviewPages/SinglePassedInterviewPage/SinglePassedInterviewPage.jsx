import { useParams } from 'react-router';
import { Box, Paper, Typography } from '@mui/material';
import { lazy, memo, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetPassedInterviewByIdQuery } from '../../../redux/interviews/passedInterviewsApiSlice.js';
import { useGetPersonalUserQuery } from '../../../redux/user/personal/personalApiSlice.js';
import { lvlMastery } from '../../../utils/constants/masteryLvl.js';
import {
  InterviewFeedbackSkeleton,
  InterviewInfoSkeleton,
  SkillsSkeleton,
  StatisticsSkeleton,
  UserCardSkeleton,
} from '../../../components/UI/Skeleton';
import { formatToLocalDateInterview } from '../../../utils/helpers/formatToLocalDateInterview.js';
import { styles } from './SingleIPassednterviewPage.styles.js';

const InterviewInfo = lazy(() => import('../../../components/PageComponents/InterviewsComponents/InterviewInfo'));
const InterviewHardSkills = lazy(
  () => import('../../../components/PageComponents/InterviewsComponents/InterviewHardSkills')
);
const InterviewSoftSkills = lazy(
  () => import('../../../components/PageComponents/InterviewsComponents/InterviewSoftSkills')
);
const Statistics = lazy(() => import('../../../components/PageComponents/InterviewsComponents/InterviewStatistics'));
const InterviewFeedback = lazy(
  () => import('../../../components/PageComponents/InterviewsComponents/InterviewFeedback')
);
const UserCard = lazy(async () => {
  const module = await import('../../../components/UI/Interview');
  return { default: module.UserCard };
});

const MemoizedInterviewInfo = memo(InterviewInfo);
const MemoizedInterviewHardSkills = memo(InterviewHardSkills);
const MemoizedInterviewSoftSkills = memo(InterviewSoftSkills);
const MemoizedStatistics = memo(Statistics);
const MemoizedInterviewFeedback = memo(InterviewFeedback);
const MemoizedUserCard = memo(UserCard);
const SinglePassedInterviewPage = () => {
  const { t } = useTranslation();
  const { interviewId } = useParams();
  const { data: interviewData } = useGetPassedInterviewByIdQuery({ interviewId });
  const attendeeId = interviewData?.attendeeId ?? '';

  const { data: userContacts } = useGetPersonalUserQuery(attendeeId);

  const {
    dateTime = new Date(),
    hardSkills = {},
    softSkills = {},
    feedback = '',
    attendeeMasteryLevel = '',
    attendeeSpecialization = '',
  } = interviewData ?? {};

  const getSkillsArray = (skillsArray) =>
    Object.entries(skillsArray).map(([name, averageMark]) => ({
      name,
      averageMark,
    }));
  const getAverageSkillsMark = (skillsArray) =>
    skillsArray.length > 0
      ? (hardSkillsArray.reduce((acc, skill) => acc + skill.averageMark, 0) / hardSkillsArray.length).toFixed(1)
      : '0';

  const hardSkillsArray = getSkillsArray(hardSkills);
  const softSkillsArray = getSkillsArray(softSkills);

  const averageHardSkillsMark = getAverageSkillsMark(hardSkillsArray);
  const averageSoftSkillsMark = getAverageSkillsMark(softSkillsArray);

  const { firstName = '', lastName = '' } = userContacts ?? {};
  const role = lvlMastery[attendeeMasteryLevel] + ' ' + attendeeSpecialization;
  const level = lvlMastery[attendeeMasteryLevel];

  return (
    <Box className='InterviewsPage' sx={styles.mainContent}>
      <Paper sx={styles.userInfo}>
        <Suspense fallback={<UserCardSkeleton />}>
          <MemoizedUserCard
            date={formatToLocalDateInterview(dateTime)}
            firstName={firstName}
            isViewBtn={false}
            label='label'
            lastName={lastName}
            lvl={level}
            role={role}
            src=''
          />
        </Suspense>
      </Paper>
      <Paper sx={styles.interviewersAssessment}>
        <Typography sx={styles.interviewersAssessmentTitle} variant='h6'>
          {t('interviews.passedInterviews.interviewersAssessmentTitle')}
        </Typography>
        <Box sx={styles.skillsWrapper}>
          <Paper sx={styles.hardSkills}>
            <Suspense fallback={<SkillsSkeleton />}>
              <MemoizedInterviewHardSkills averageHardSkillsMark={averageHardSkillsMark} hardSkills={hardSkillsArray} />
            </Suspense>
          </Paper>
          <Paper sx={styles.sortSkills}>
            <Suspense fallback={<SkillsSkeleton />}>
              <MemoizedInterviewSoftSkills averageSoftSkillsMark={averageSoftSkillsMark} softSkills={softSkillsArray} />
            </Suspense>
          </Paper>
        </Box>
      </Paper>
      <Paper sx={styles.interviewInfo}>
        <Suspense fallback={<InterviewInfoSkeleton />}>
          <MemoizedInterviewInfo />
        </Suspense>
      </Paper>
      <Paper sx={styles.statistics}>
        <Suspense fallback={<StatisticsSkeleton />}>
          <MemoizedStatistics hardSkillMark={averageHardSkillsMark} softSkillMark={averageSoftSkillsMark} />
        </Suspense>
      </Paper>
      <Paper sx={styles.interviewFeedback}>
        <Suspense fallback={<InterviewFeedbackSkeleton />}>
          <MemoizedInterviewFeedback feedbackText={interviewData && feedback} />
        </Suspense>
      </Paper>
    </Box>
  );
};

export default SinglePassedInterviewPage;
