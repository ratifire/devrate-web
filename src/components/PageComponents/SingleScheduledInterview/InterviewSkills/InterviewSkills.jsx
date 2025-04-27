import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useLocation } from 'react-router';
import { selectCurrentUser } from '@redux/slices/auth/authSlice';
import { useGetAllSkillsForMasteryIdQuery } from '@redux/api/slices/interviews/singleScheduledInterviewApiSlice.js';
import { ErrorComponent } from '@components/UI/Exceptions';
import { InterviewSkillsSkeleton } from '@components/UI/Skeleton';
import InfoTooltip from '@components/UI/InfoTooltip/index.js';
import prepareSkillsDataInterviewSkills from '../helpers/prepareSkillsDataInterviewSkills';
import { styles } from './InterviewSkills.styles';
import { SkillsParticipant } from './components';

const InterviewSkills = () => {
  const { t } = useTranslation();
  const {
    data: { firstName, lastName },
  } = useSelector(selectCurrentUser);
  const location = useLocation();
  const { hostFirstName, hostLastName, hostMasteryId, masteryId } = location.state.event;

  const {
    data: allSkillsHost,
    isFetching: isFetchingAllSkillsHost,
    isError: isErrorAllSkillsHost,
  } = useGetAllSkillsForMasteryIdQuery({ masteryId: hostMasteryId });
  const {
    data: allSkillsUser,
    isFetching: isFetchingAllSkills,
    isError: isErrorAllSkills,
  } = useGetAllSkillsForMasteryIdQuery({ masteryId });

  const data = useMemo(
    () => prepareSkillsDataInterviewSkills({ hostSkills: allSkillsHost, userSkills: allSkillsUser }),
    [allSkillsHost, allSkillsUser]
  );

  if (isErrorAllSkillsHost || isErrorAllSkills) {
    return <ErrorComponent />;
  }

  if (isFetchingAllSkillsHost || isFetchingAllSkills) {
    return <InterviewSkillsSkeleton />;
  }

  const { softSkills, hardSkills } = data;
  const hostFullName = `${hostFirstName} ${hostLastName}`;
  const userFullName = `${firstName} ${lastName}`;

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.boxTitle}>
        <Typography component='h6' variant='h6'>
          {t('singleScheduledInterview.interviewSkills.skills')}
        </Typography>
        <InfoTooltip title='singleScheduledInterview.interviewSkills.tooltipInfo' />
      </Box>
      <Box sx={styles.boxParticipants}>
        <Box sx={styles.boxParticipant}>
          <Box sx={styles.userCircle} />
          <Typography component='p' variant='subtitle2'>
            {userFullName}
          </Typography>
        </Box>
        <Box sx={styles.boxParticipant}>
          <Box sx={styles.hostCircle} />
          <Typography component='p' variant='subtitle2'>
            {hostFullName}
          </Typography>
        </Box>
      </Box>
      <SkillsParticipant
        data={softSkills}
        matching={t('singleScheduledInterview.interviewSkills.matchingSoftSkills')}
        other={t('singleScheduledInterview.interviewSkills.otherSoftSkills')}
      />
      <SkillsParticipant
        data={hardSkills}
        matching={t('singleScheduledInterview.interviewSkills.matchingHardSkills')}
        other={t('singleScheduledInterview.interviewSkills.otherHardSkills')}
      />
    </Box>
  );
};

export default InterviewSkills;
