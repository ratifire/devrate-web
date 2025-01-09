import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Mood from '@mui/icons-material/Mood';
import { Box, Button, Divider, Popover, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
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
  };

  const createInterviewRequest = async () => {
    dispatch(openModal({ modalType: 'scheduleInterviewModal', data: { role: 'INTERVIEWER' } }));
    closeHandler();
  };

  const createIncomeInterviewRequest = () => {
    dispatch(openModal({ modalType: 'scheduleInterviewModal', data: { role: 'CANDIDATE' } }));
    closeHandler();
  };

  return (
    <Box sx={styles.contentWrapper}>
      <Box sx={styles.stats}>
        <Typography sx={styles.title} variant='h6'>
          {mainSpec?.name}
        </Typography>

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
      </Box>
      <Button
        ref={buttonRef}
        color='primary'
        disabled={isDisabled}
        sx={styles.buttonPrimary}
        type='button'
        variant='contained'
        onClick={scheduleClickHandler}
      >
        {t('specialization.modal.interview.makeIncome')}
        <KeyboardArrowDown />
      </Button>
      <Popover
        disableScrollLock
        anchorEl={createButton}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        slotProps={{
          root: {
            style: { width: popoverWidth },
          },
        }}
        sx={styles.popover}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={closeHandler}
      >
        <Box sx={styles.popoverWrapper}>
          <Button color='primary' sx={styles.menuButton} type='button' variant='text' onClick={createInterviewRequest}>
            {t('specialization.modal.interview.makeOutcome')}
          </Button>
          <Divider sx={styles.divider} />
          <Button
            color='primary'
            sx={styles.menuButton}
            type='button'
            variant='text'
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
