import { AppBar, Box, Button, Divider, Popover } from '@mui/material';
import { NavLink } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { modalNames } from '../../../../utils/constants/modalNames';
import { feedbackInterviewRole } from '../../../../utils/constants/feedbackInterviewRole';
import links from '../../../../router/links.js';
import CircleIcon from '../../../../assets/icons/InterviewPageIcons/green-ellipse.svg';
import { useModalController } from '../../../../utils/hooks/useModalController';
import styles from './InterviewHeader.styles';

const InterviewHeader = () => {
  const { t } = useTranslation();
  const buttonRef = useRef(null);
  const [createButton, setCreateButton] = useState(null);
  const [popoverWidth, setPopoverWidth] = useState(0);
  const { openModal } = useModalController();
  const open = Boolean(createButton);
  const isActiveSchedule = location.pathname.includes(links.scheduledInterviews);

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
    openModal(modalNames.scheduleInterviewModal, { role: feedbackInterviewRole.INTERVIEWER });
    closeHandler();
  };

  const createIncomeInterviewRequest = () => {
    openModal(modalNames.scheduleInterviewModal, { role: feedbackInterviewRole.CANDIDATE });
    closeHandler();
  };

  return (
    <AppBar component='header' position={'static'} sx={styles.interviewHeader}>
      <Box sx={styles.interviewNavLinksBox}>
        <Box
          component={isActiveSchedule ? 'span' : NavLink}
          sx={styles.interviewNavLink}
          to={links.scheduledInterviews}
        >
          <Box alt='Circle' component='img' src={CircleIcon} sx={styles.greenEllipse} />{' '}
          {t('interviews.navigationLinks.scheduled')}
        </Box>
        <Box component={NavLink} sx={styles.interviewNavLink} to={links.passedInterviews}>
          {t('interviews.navigationLinks.passed')}
        </Box>
        <Box component={NavLink} sx={styles.interviewNavLink} to={links.interviewRequests}>
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
