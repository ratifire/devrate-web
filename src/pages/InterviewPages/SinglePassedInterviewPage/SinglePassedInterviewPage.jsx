import { ErrorComponent } from '@components/UI/Exceptions/index.js';
import {
  InterviewFeedbackSkeleton,
  InterviewInfoSkeleton,
  SkillsSkeleton,
  StatisticSkeleton,
  UserCardSkeleton,
} from '@components/UI/Skeleton';
import { Box, Paper, Typography } from '@mui/material';
import { useGetPassedInterviewByIdQuery } from '@redux/api/slices/interviews/passedInterviewsApiSlice.js';
import { useGetAvatarUserQuery } from '@redux/api/slices/user/avatar/avatarApiSlice.js';
import { useGetPersonalUserQuery } from '@redux/api/slices/user/personal/personalApiSlice.js';
import { lvlMastery } from '@utils/constants/masteryLvl.js';
import { DARK_THEME } from '@utils/constants/Theme/theme.js';
import { formatToLocalDateInterview } from '@utils/helpers/formatToLocalDateInterview.js';
import { lazy, memo, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import EmptySkills from '../../../components/UI/Specialization/EmptySkills';

import EmptyRequestPicDark from '../../../assets/pictures/emptyInterviewTabsPictures/requestInterview/requestDark.svg?react';
import EmptyRequestPicLight from '../../../assets/pictures/emptyInterviewTabsPictures/requestInterview/requestLight.svg?react';
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

const InterviewPreviewVideo = lazy(
  () => import('../../../components/PageComponents/InterviewsComponents/InterviewPreviewVideo')
);

const MemoizedInterviewInfo = memo(InterviewInfo);
const MemoizedInterviewHardSkills = memo(InterviewHardSkills);
const MemoizedInterviewSoftSkills = memo(InterviewSoftSkills);
const MemoizedStatistics = memo(Statistics);
const MemoizedInterviewFeedback = memo(InterviewFeedback);
const MemoizedUserCard = memo(UserCard);
const MemoizedInterviewPreviewVideo = memo(InterviewPreviewVideo);

const SinglePassedInterviewPage = () => {
  const { t } = useTranslation();
  const { interviewId } = useParams();
  const { mode } = useSelector((state) => state.theme);
  const { data: interviewData, isFetching: isFetchingPassedInterview } = useGetPassedInterviewByIdQuery(
    { interviewId },
    { skip: !interviewId }
  );
  const handlePlayPressed = useCallback(() => {
    // console.log('Play pressed');
  }, []);
  const attendeeId = interviewData?.attendeeId ?? '';
  const interviewerId = interviewData?.userId ?? '';
  const role = interviewData?.role; // 'CANDIDATE' или 'INTERVIEWER'

  const { data: userContacts, isFetching: isFetchingContacts } = useGetPersonalUserQuery(attendeeId, {
    skip: !attendeeId,
  });

  const { data: candidateContacts } = useGetPersonalUserQuery(interviewerId, {
    skip: !interviewerId,
  });

  const {
    data: avatar,
    isFetching: isFetchingAvatar,
    isError: isErrorAvatar,
  } = useGetAvatarUserQuery(attendeeId, { skip: !attendeeId });

  const { data: interviewerAvatar, isError: isErrorInterviewerAvatar } = useGetAvatarUserQuery(interviewerId, {
    skip: !interviewerId,
  });

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
      ? parseFloat((skillsArray.reduce((acc, skill) => acc + skill.averageMark, 0) / skillsArray.length).toFixed(1))
      : 0;

  const hardSkillsArray = getSkillsArray(hardSkills);
  const softSkillsArray = getSkillsArray(softSkills);

  const averageHardSkillsMark = getAverageSkillsMark(hardSkillsArray);
  const averageSoftSkillsMark = getAverageSkillsMark(softSkillsArray);

  const { firstName = '', lastName = '' } = userContacts ?? {};
  const { firstName: candidateFirstName = '', lastName: candidateLastName = '' } = candidateContacts ?? {};
  const userRole = lvlMastery[attendeeMasteryLevel] + ' ' + attendeeSpecialization;
  const level = lvlMastery[attendeeMasteryLevel];

  const EmptyInterviewSvg = mode === DARK_THEME ? EmptyRequestPicDark : EmptyRequestPicLight;

  const hasStatistics = (role === 'CANDIDATE' && averageHardSkillsMark > 0) || averageSoftSkillsMark > 0;

  const isFetchingUserCard = isFetchingContacts || isFetchingAvatar || isFetchingPassedInterview;

  if (isErrorAvatar || isErrorInterviewerAvatar) {
    return <ErrorComponent />;
  }

  return (
    <Box className='InterviewsPage' sx={styles.mainContent}>
      <Paper sx={styles.userInfo}>
        {isFetchingUserCard ? (
          <UserCardSkeleton />
        ) : (
          <Suspense fallback={<UserCardSkeleton />}>
            <MemoizedUserCard
              date={formatToLocalDateInterview(dateTime)}
              firstName={firstName}
              id={attendeeId}
              isViewBtn={false}
              label='label'
              lastName={lastName}
              lvl={level}
              role={userRole}
              src={avatar?.userPicture}
            />
          </Suspense>
        )}
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
              {role === 'CANDIDATE' && (
                <Paper sx={styles.hardSkills}>
                  <Suspense fallback={<SkillsSkeleton />}>
                    {hardSkillsArray.length > 0 || isFetchingPassedInterview ? (
                      <MemoizedInterviewHardSkills
                        averageHardSkillsMark={averageHardSkillsMark}
                        hardSkills={hardSkillsArray}
                      />
                    ) : (
                      <EmptySkills title='Hard skills' />
                    )}
                  </Suspense>
                </Paper>
              )}

              <Paper sx={styles.sortSkills}>
                <Suspense fallback={<SkillsSkeleton />}>
                  {softSkillsArray.length > 0 || isFetchingPassedInterview ? (
                    <MemoizedInterviewSoftSkills
                      averageSoftSkillsMark={averageSoftSkillsMark}
                      softSkills={softSkillsArray}
                    />
                  ) : (
                    <EmptySkills title='Soft skills' />
                  )}
                </Suspense>
              </Paper>
            </Box>
          </Paper>

          <Paper sx={styles.statistics}>
            {isFetchingPassedInterview ? (
              <StatisticSkeleton />
            ) : (
              <Suspense fallback={<StatisticSkeleton />}>
                <MemoizedStatistics
                  hardSkillMark={role === 'CANDIDATE' ? averageHardSkillsMark : 0}
                  softSkillMark={averageSoftSkillsMark}
                />
              </Suspense>
            )}
          </Paper>

          {(feedback || isFetchingPassedInterview) && (
            <Paper sx={styles.interviewFeedback}>
              {isFetchingPassedInterview ? (
                <InterviewFeedbackSkeleton />
              ) : (
                <Suspense fallback={<InterviewFeedbackSkeleton />}>
                  <MemoizedInterviewFeedback feedbackText={feedback} />
                </Suspense>
              )}
            </Paper>
          )}

          <Paper sx={styles.interviewPreviewVideo}>
            <Box sx={styles.container}>
              <Box sx={styles.header}>
                <Typography sx={styles.title}>
                  {t('interviews.passedInterviews.interviewPreviewVideo.headerTitle')}
                </Typography>
              </Box>
              <MemoizedInterviewPreviewVideo
                shouldShowVisibilityControl
                candidateFirstName={candidateFirstName}
                candidateLastName={candidateLastName}
                candidateSrc={interviewerAvatar?.userPicture}
                interviewLevel={level}
                interviewerFirstName={firstName}
                interviewerLastName={lastName}
                interviewerSrc={avatar?.userPicture}
                role={role}
                specialization={attendeeSpecialization}
                onPlayPressed={handlePlayPressed}
              />
            </Box>
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
