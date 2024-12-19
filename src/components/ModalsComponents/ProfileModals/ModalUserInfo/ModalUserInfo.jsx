import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, IconButton, Step, StepConnector, StepLabel, Stepper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { closeModal } from '../../../../redux/modal/modalSlice';
import ModalLayoutProfile from '../../../../layouts/ModalLayoutProfile';
import { styles } from './ModalUserInfo.styles';
import StepPersonal from './StepPersonal';
import StepContacts from './StepContacts';
import StepAvatar from './StepAvatar';
import StepLanguage from './StepLanguage';
import CustomStepIcon from './StepIconComponent';

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
    <ModalLayoutProfile open={openUserInfo} setOpen={handleClose}>
      <Box sx={styles.wrapper}>
        <Stepper activeStep={activeStep} connector={<StepConnector />} sx={styles.stepBorder}>
          {steps.map((label) => (
            <Step key={label} sx={styles.step}>
              <StepLabel StepIconComponent={CustomStepIcon} sx={styles.label} />
              {steps[activeStep] === label && (
                <Typography sx={styles.title} variant='subtitle1'>
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
              <IconButton disabled={activeStep === 0} sx={styles.btnIcon} onClick={handlePrev}>
                <ArrowBackIcon />
              </IconButton>
              <IconButton disabled={activeStep === 3} sx={styles.btnIcon} onClick={handleNext}>
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
