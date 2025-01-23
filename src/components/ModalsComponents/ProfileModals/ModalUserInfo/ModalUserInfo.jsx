import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, IconButton, Step, StepConnector, StepLabel, Stepper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
  const step = useSelector((state) => state.modalStep.step);
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(step);

  const title = steps.find((title, index) => index === activeStep);

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
    <>
      <Box sx={styles.wrapper}>
        <Typography key={activeStep} sx={styles.title} variant={'h6'}>
          {t(title)}
        </Typography>

        <Stepper alternativeLabel activeStep={activeStep} connector={<StepConnector />} sx={styles.stepBorder}>
          {steps.map((label) => (
            <Step key={label} sx={styles.step}>
              <StepLabel StepIconComponent={CustomStepIcon} sx={styles.label} />
              <Typography textAlign={'center'} variant='subtitle2'>
                {t(label)}
              </Typography>
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
    </>
  );
};

export default ModalUserInfo;
