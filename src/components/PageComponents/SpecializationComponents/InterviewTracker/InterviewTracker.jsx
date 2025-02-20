import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import Mood from '@mui/icons-material/Mood';
import { t } from 'i18next';
import { styles } from './InterviewTracker.style.js';

const InterviewTracker = () => {
  const { activeSpecialization, mainSpecialization, fullSpecializations } = useSelector(
    (state) => state.specialization
  );

  const mainSpec = activeSpecialization || mainSpecialization;

  const activeInterviews = fullSpecializations?.find((spec) => spec.id === mainSpec?.id);
  return (
    <>
      <Box sx={styles.interviewItemOutcome}>
        <Mood />
        <Typography sx={styles.interviewType} variant='body1'>
          {t('specialization.modal.interview.outcome')}
        </Typography>
        <Typography variant='body1'>{activeInterviews?.conductedInterviews}</Typography>
      </Box>
      <Box sx={styles.interviewItemIncome}>
        <Mood />
        <Typography sx={styles.interviewType} variant='body1'>
          {t('specialization.modal.interview.income')}
        </Typography>
        <Typography variant='body1'>{activeInterviews?.completedInterviews}</Typography>
      </Box>
    </>
  );
};

export default InterviewTracker;
