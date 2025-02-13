import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import InfoIcon from '../../../../assets/icons/InterviewPageIcons/info.svg?react';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';
import { useGetAllSkillsForMasteryIdQuery } from '../../../../redux/singleScheduledInterview/singleScheduledInterviewApiSlice';
import { ErrorComponent } from '../../../UI/Exceptions';
import { InterviewSkillsSkeleton } from '../../../UI/Skeleton';
import prepareSkillsDataInterviewSkills from '../helpers/prepareSkillsDataInterviewSkills';
import { styles } from './InterviewSkills.styles';
import { SkillsParticipant } from './components';

const InterviewSkills = () => {
  const { t } = useTranslation();
  const {
    data: { firstName, lastName },
  } = useSelector(selectCurrentUser);
  const {
    data: allSkillsHost,
    isFetching: isFetchingAllSkillsHost,
    isError: isErrorAllSkillsHost,
  } = useGetAllSkillsForMasteryIdQuery({ masteryId: 10009 });
  const {
    data: allSkills,
    isFetching: isFetchingAllSkills,
    isError: isErrorAllSkills,
  } = useGetAllSkillsForMasteryIdQuery({ masteryId: 10001 });

  const { hardSkills, softSkills } = prepareSkillsDataInterviewSkills({
    hostSkills: allSkillsHost,
    userSkills: allSkills,
  });

  if (isErrorAllSkillsHost || isErrorAllSkills) {
    return <ErrorComponent />;
  }

  if (isFetchingAllSkillsHost || isFetchingAllSkills) {
    return <InterviewSkillsSkeleton />;
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.boxTitle}>
        <Typography component='h6' variant='h6'>
          {t('singleScheduledInterview.interviewSkills.skills')}
        </Typography>
        <InfoIcon />
      </Box>
      <Box sx={styles.boxParticipants}>
        <Box sx={styles.boxParticipant}>
          <Box sx={styles.leftCircle} />
          <Typography component='p' variant='subtitle2'>
            {firstName} {lastName}
          </Typography>
        </Box>
        <Box sx={styles.boxParticipant}>
          <Box sx={styles.rightCircle} />
          <Typography component='p' variant='subtitle2'>
            Олена Король
          </Typography>
        </Box>
      </Box>
      <SkillsParticipant category={'Soft Skills'} data={softSkills} />
      <SkillsParticipant category={'Hard Skills'} data={hardSkills} />
    </Box>
  );
};

export default InterviewSkills;
