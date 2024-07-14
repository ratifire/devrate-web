import React, { useMemo, useState } from 'react';
import { Box, Button, Popover, Typography } from '@mui/material';
import { styles } from './Interviews.styles';
import { useTranslation } from 'react-i18next';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Mood from '@mui/icons-material/Mood';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../redux/modal/modalSlice';
import { selectCurrentUser } from '../../../redux/auth/authSlice';
import { useGetSpecializationByUserIdQuery } from '../../../redux/specialization/specializationApiSlice';

const Interviews = () => {
  const user = useSelector(selectCurrentUser);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data: specializations} = useGetSpecializationByUserIdQuery(user.data.id);
  const [createButton, setCreateButton] = useState(null);
  const open = Boolean(createButton);

  const mainSpec = useMemo(() => {
    return specializations?.find(sp => sp.main);
  }, [specializations]);

  const scheduleClickHandler = (event) => {
    setCreateButton(event.currentTarget);
  }

  const createInterviewRequest = () => {
    dispatch(openModal({modalName: 'scheduleInterview'}));
  }

  const createIncomeInterviewRequest = () => {
    dispatch(openModal({modalName: 'scheduleInterview'}));
  }

  const closeHandler = () => setCreateButton(null);

  return (
    <Box sx={styles.contentWrapper}>
      <Box sx={styles.stats}>
        <Typography variant="h6">
          {mainSpec?.name}
        </Typography>

        <Box sx={styles.interviewItemOutcome}>
          <Mood />
          <Typography variant="body1" sx={styles.interviewType}>
            {t('specialization.modal.interview.outcome')}
          </Typography>
          <Typography variant="body1">
            {user.data.conductedInterviews}
          </Typography>
        </Box>
        <Box sx={styles.interviewItemIncome}>
          <Mood />
          <Typography variant="body1" sx={styles.interviewType}>
            {t('specialization.modal.interview.income')}
          </Typography>
          <Typography variant="body1">
            {user.data.completedInterviews}
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
        {t('specialization.modal.interview.makeIncome')}
        <KeyboardArrowDown />
      </Button>
      <Popover
        open={open}
        anchorEl={createButton}
        onClose={closeHandler}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={styles.popoverWrapper}>
          <Button
            variant="contained"
            type="button"
            color="primary"
            sx={styles.buttonPrimary}
            onClick={createInterviewRequest}
          >
            {t('specialization.modal.interview.makeOutcome')}
          </Button>
          <Button
            variant="outlined"
            type="button"
            color="primary"
            sx={styles.buttonPrimary}
            onClick={createIncomeInterviewRequest}
          >
            {t('specialization.modal.interview.makeIncome')}
          </Button>
        </Box>
      </Popover>
    </Box>
  );
};

export default Interviews;
