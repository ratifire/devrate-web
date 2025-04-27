import { Box, IconButton, Step, StepConnector, StepLabel, Stepper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useStepHandler from '@utils/hooks/useStepHandler.js';
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
  const { t } = useTranslation();
  const { step, handleNext, handlePrev } = useStepHandler();

  const currentStep = steps[step];

  const getStepContent = (stepIndex) => {
    return steps[stepIndex].component();
  };
  return (
    <>
      <Box sx={styles.wrapper}>
        <Typography key={step} sx={styles.title} variant={'h6'}>
          {t(currentStep.title)}
        </Typography>

        <Stepper alternativeLabel activeStep={step} connector={<StepConnector />} sx={styles.stepBorder}>
          {steps.map((step) => (
            <Step key={step.name} sx={styles.step}>
              <StepLabel StepIconComponent={CustomStepIcon} sx={styles.label} />
              <Typography textAlign={'center'} variant='subtitle2'>
                {t(step.title)}
              </Typography>
            </Step>
          ))}
        </Stepper>

        <Box>
          <Box sx={styles.wrapperStepContent}>{getStepContent(step)}</Box>
          <Box sx={styles.wrapperBottom}>
            <Box sx={styles.wrapperBtn}>
              <IconButton disabled={step === 0} sx={styles.btnIcon} onClick={handlePrev}>
                <ArrowBackIcon />
              </IconButton>
              <IconButton disabled={step === 3} sx={styles.btnIcon} onClick={handleNext}>
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
