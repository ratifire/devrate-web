import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Mood from '@mui/icons-material/Mood';
import { Box, Button, Divider, Popover, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../../redux/modal/modalSlice';
import { styles } from './Interviews.styles';

const Interviews = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const buttonRef = useRef(null);
  const [popoverWidth, setPopoverWidth] = useState(0);
  const [createButton, setCreateButton] = useState(null);
  const open = Boolean(createButton);

  const { activeSpecialization, mainSpecialization, fullSpecializations } = useSelector(
    (state) => state.specialization
  );

  const isDisabled = !activeSpecialization && !mainSpecialization;

  useEffect(() => {
    if (buttonRef.current) {
      setPopoverWidth(buttonRef.current.offsetWidth);
    }
  }, []);

  const mainSpec = activeSpecialization || mainSpecialization;

  const activeInterviews = fullSpecializations?.find((spec) => spec.id === mainSpec?.id);

  const scheduleClickHandler = (event) => {
    setCreateButton(event.currentTarget);
    buttonRef.current.setAttribute('data-active', 'true');
  };

  const closeHandler = () => {
    setCreateButton(null);
    buttonRef.current.setAttribute('data-active', 'false');
  }

  const createInterviewRequest = () => {
    dispatch(openModal({ modalName: 'scheduleInterview', data: { role: 'INTERVIEWER' } }));
    closeHandler();
  };

  const createIncomeInterviewRequest = () => {
    dispatch(openModal({ modalName: 'scheduleInterview', data: { role: 'CANDIDATE' } }));
    closeHandler();
  };

  return (
    <Box sx={styles.contentWrapper}>
      <Box sx={styles.stats}>
        <Typography variant='h6'>{mainSpec?.name}</Typography>

        <Box sx={styles.interviewItemOutcome}>
          <Mood />
          <Typography variant='body1' sx={styles.interviewType}>
            {t('specialization.modal.interview.outcome')}
          </Typography>
          <Typography variant='body1'>{activeInterviews?.conductedInterviews}</Typography>
        </Box>
        <Box sx={styles.interviewItemIncome}>
          <Mood />
          <Typography variant='body1' sx={styles.interviewType}>
            {t('specialization.modal.interview.income')}
          </Typography>
          <Typography variant='body1'>{activeInterviews?.completedInterviews}</Typography>
        </Box>
      </Box>
      <Button
        ref={buttonRef}
        variant='contained'
        type='button'
        color='primary'
        sx={styles.buttonPrimary}
        onClick={scheduleClickHandler}
        disabled={isDisabled}
      >
        {t('specialization.modal.interview.makeIncome')}
        <KeyboardArrowDown />
      </Button>
      <Popover
        sx={styles.popover}
        slotProps={{
          root: {
            style: { width: popoverWidth },
          },
        }}
        open={open}
        anchorEl={createButton}
        onClose={closeHandler}
        disableScrollLock={true}
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
          <Button variant='text' type='button' color='primary' sx={styles.menuButton} onClick={createInterviewRequest}>
            {t('specialization.modal.interview.makeOutcome')}
          </Button>
          <Divider sx={styles.divider} />
          <Button
            variant='text'
            type='button'
            color='primary'
            sx={styles.menuButton}
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
