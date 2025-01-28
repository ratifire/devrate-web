import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, IconButton, Step, StepConnector, StepLabel, Stepper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useModalController } from '../../../../utils/hooks/useModalController.js';
import { styles } from './ModalUserInfo.styles';
import StepPersonal from './StepPersonal';
import StepContacts from './StepContacts';
import StepAvatar from './StepAvatar';
import StepLanguage from './StepLanguage';
import CustomStepIcon from './StepIconComponent';

const steps = [
  {
    name: 'personal',
    title: 'profile.modal.userInfo.personal.title',
    component: () => <StepPersonal />,
  },

  {
    name: 'contact',
    title: 'profile.modal.userInfo.contact.title',
    component: () => <StepContacts />,
  },

  {
    name: 'photo',
    title: 'profile.modal.userInfo.photo.title',
    component: () => <StepAvatar />,
  },

  {
    name: 'languages',
    title: 'profile.modal.userInfo.languages.title',
    component: () => <StepLanguage />,
  },
];

const ModalUserInfo = () => {
  const step = useSelector((state) => state.modalStep.step);
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(step);
  const title = steps.find((title, index) => index === activeStep);
  const { stepHadler } = useModalController();

  const handleNext = () => {
    setActiveStep((nextActiveStep) => {
      const updatedStep = nextActiveStep + 1;
      stepHadler(updatedStep);
      return updatedStep;
    });
  };

  const handlePrev = () => {
    setActiveStep((prevActiveStep) => {
      const updatedStep = prevActiveStep - 1;
      stepHadler(updatedStep);
      return updatedStep;
    });
  };

  const getStepContent = (stepIndex) => {
    return steps[stepIndex].component();
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
