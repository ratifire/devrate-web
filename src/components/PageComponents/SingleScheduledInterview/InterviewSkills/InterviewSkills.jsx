import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import InfoIcon from '../../../../assets/icons/InterviewPageIcons/info.svg?react';
import { selectCurrentUser } from '../../../../redux/auth/authSlice.js';
import { styles } from './InterviewSkills.styles';
import { SkillsParticipant } from './components';

const HardSkills = [
  {
    id: 1,
    name: 'React',
    leftGrade: 5,
    rightGrade: 8,
  },
  {
    id: 2,
    name: 'Redux',
    leftGrade: 2,
    rightGrade: 5,
  },
  {
    id: 3,
    name: 'TypeScript',
    leftGrade: 3,
    rightGrade: 6,
  },
];

const SoftSkills = [
  {
    id: 1,
    name: 'Communication',
    leftGrade: 5,
    rightGrade: 8,
  },
  {
    id: 2,
    name: 'Teamwork',
    leftGrade: 2,
    rightGrade: 5,
  },
  {
    id: 3,
    name: 'Problem-solving',
    leftGrade: 3,
    rightGrade: 6,
  },
];

const InterviewSkills = () => {
  const { t } = useTranslation();
  const {
    data: { firstName, lastName },
  } = useSelector(selectCurrentUser);

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
      <SkillsParticipant category={'Soft Skills'} data={SoftSkills} />
      <SkillsParticipant category={'Hard Skills'} data={HardSkills} />
    </Box>
  );
};

export default InterviewSkills;
