import { AppBar, Box, Button, Divider, Popover } from '@mui/material';
import { NavLink } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch } from 'react-redux';
import { openModal } from '@redux/slices/modal/modalSlice.js';
import { modalNames } from '@utils/constants/modalNames.js';
import { feedbackInterviewRole } from '@utils/constants/feedbackInterviewRole.js';
import links from '@router/links.js';
import CircleIcon from '@assets/icons/InterviewPageIcons/green-ellipse.svg';
import styles from './InterviewHeader.styles.js';

const InterviewHeader = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const buttonRef = useRef(null);
  const [createButton, setCreateButton] = useState(null);
  const [popoverWidth, setPopoverWidth] = useState(0);
  const open = Boolean(createButton);

  useEffect(() => {
    if (buttonRef.current) {
      setPopoverWidth(buttonRef.current.offsetWidth);
    }
  }, []);

  const scheduleClickHandler = (event) => {
    setCreateButton(event.currentTarget);
    buttonRef.current.setAttribute('data-active', 'true');
  };

  const closeHandler = () => {
    setCreateButton(null);
    buttonRef.current.setAttribute('data-active', 'false');
  };

  const createInterviewRequest = async () => {
    dispatch(
      openModal({ modalType: modalNames.scheduleInterviewModal, data: { role: feedbackInterviewRole.INTERVIEWER } })
    );
    closeHandler();
  };

  const createIncomeInterviewRequest = () => {
    dispatch(
      openModal({ modalType: modalNames.scheduleInterviewModal, data: { role: feedbackInterviewRole.CANDIDATE } })
    );
    closeHandler();
  };

  return (
    <AppBar component='header' position={'static'} sx={styles.interviewHeader}>
      <Box sx={styles.interviewNavLinksBox}>
        <Box activeclassname='active' component={NavLink} sx={styles.interviewNavLink} to={links.scheduledInterviews}>
          <Box alt='Circle' component='img' src={CircleIcon} sx={styles.greenEllipse} />{' '}
          {t('interviews.navigationLinks.scheduled')}
        </Box>
        <Box activeclassname='active' component={NavLink} sx={styles.interviewNavLink} to={links.passedInterviews}>
          {t('interviews.navigationLinks.passed')}
        </Box>
        <Box activeclassname='active' component={NavLink} sx={styles.interviewNavLink} to={links.interviewRequests}>
          {t('interviews.navigationLinks.requests')}
        </Box>
      </Box>

      <Button
        ref={buttonRef}
        color='primary'
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
    </AppBar>
  );
};
export default InterviewHeader;
