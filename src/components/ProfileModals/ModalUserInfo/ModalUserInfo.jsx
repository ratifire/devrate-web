import React, { useState } from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';
import { Box, IconButton, Step, StepButton, Stepper, Typography } from '@mui/material';
import { styles } from './ModalUserInfo.styles';
import { useTranslation } from 'react-i18next';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StepPersonal from './StepPersonal';
import StepContacts from './StepContacts';
import StepAvatar from './StepAvatar';
import StepLanguage from './StepLanguage';

const steps = [
  'profile.modal.userInfo.personal.title',
  'profile.modal.userInfo.contact.title',
  'profile.modal.userInfo.photo.title',
  'profile.modal.userInfo.languages.title',
];

const ModalUserInfo = () => {
  const dispatch = useDispatch();
  const openUserInfo = useSelector((state) => state.modal.openUserInfo);
  const handleClose = () => dispatch(closeModal({ modalName: 'openUserInfo' }));
  const step = useSelector((state) => state.modalStep.step);
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(step);

  const handleNext = () => {
    setActiveStep((nextActiveStep) => nextActiveStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <StepPersonal />;
      case 1:
        return <StepContacts />;
      case 2:
        return <StepAvatar />;
      case 3:
        return <StepLanguage />;
    }
  };
  return (
    <ModalLayoutProfile setOpen={handleClose} open={openUserInfo}>
      <Box sx={styles.wrapper}>
        <Stepper nonLinear activeStep={activeStep} sx={styles.stepBorder}>
          {steps.map((label, index) => (
            <Step key={label} sx={styles.step}>
              <StepButton color='inherit' onClick={handleStep(index)} sx={styles.stepBtn} />
              {steps[activeStep] === label && (
                <Typography variant='subtitle1' sx={styles.title}>
                  {t(label)}
                </Typography>
              )}
            </Step>
          ))}
        </Stepper>
        <Box>
          <Box sx={styles.wrapperStepContent}>{getStepContent(activeStep)}</Box>
          <Box sx={styles.wrapperBottom}>
            <Box sx={styles.wrapperBtn}>
              <IconButton disabled={activeStep === 0} onClick={handlePrev} sx={styles.btnIcon}>
                <ArrowBackIcon />
              </IconButton>
              <IconButton disabled={activeStep === 3} onClick={handleNext} sx={styles.btnIcon}>
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </ModalLayoutProfile>
  );
};

export default ModalUserInfo;
