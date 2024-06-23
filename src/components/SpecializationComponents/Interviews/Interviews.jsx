import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styles } from './Interviews.styles';
import { useTranslation } from 'react-i18next';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Mood from '@mui/icons-material/Mood';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modal/modalSlice';

const Interviews = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const scheduleClickHandler = () => {
    dispatch(openModal({modalName: 'scheduleInterview'}));
  }

  return (
    <Box sx={styles.contentWrapper}>
      <Box sx={styles.stats}>
        <Typography variant="h6">
          Frontend Developer
        </Typography>

        <Box sx={styles.interviewItemOutcome}>
          <Mood />
          <Typography variant="body1" sx={styles.interviewType}>
            {t('specialization.interview.outcome')}
          </Typography>
          <Typography variant="body1">
            10
          </Typography>
        </Box>
        <Box sx={styles.interviewItemIncome}>
          <Mood />
          <Typography variant="body1" sx={styles.interviewType}>
            {t('specialization.interview.income')}
          </Typography>
          <Typography variant="body1">
            5
          </Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        type="button"
        color="primary"
        sx={styles.buttonPrimary}
        onClick={scheduleClickHandler}
      >
        {t('specialization.interview.makeIncome')}
        <KeyboardArrowDown />
      </Button>
    </Box>
  );
};

export default Interviews;
