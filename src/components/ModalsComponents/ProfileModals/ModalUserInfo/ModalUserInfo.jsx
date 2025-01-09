import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, IconButton, Step, StepConnector, StepLabel, Stepper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useSearchParams } from 'react-router';
import { closeModal } from '../../../../redux/modal/modalSlice';
import ModalLayoutProfile from '../../../../layouts/ModalLayoutProfile';
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
  const dispatch = useDispatch();
  const openUserInfo = useSelector((state) => state.modal.openUserInfo);
  // const handleClose = () => dispatch(closeModal({ modalName: 'openUserInfo' }));
  const step = useSelector((state) => state.modalStep.step);
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeStep, setActiveStep] = useState(step);
  const [tab] = useState();

  const handleClose = () => {
    dispatch(closeModal({ modalName: 'openUserInfo' }));
    searchParams.delete('modal');
    searchParams.delete('step');
    setSearchParams(searchParams);
  };

  const handleNext = () => {
    setActiveStep((nextActiveStep) => {
      const updatedStep = nextActiveStep + 1;
      searchParams.set('step', updatedStep);
      setSearchParams(searchParams);
      return updatedStep;
    });
  };

  const handlePrev = () => {
    setActiveStep((prevActiveStep) => {
      const updatedStep = prevActiveStep - 1;
      searchParams.set('step', updatedStep);
      setSearchParams(searchParams);
      return updatedStep;
    });
  };

  useEffect(() => {
    if (openUserInfo) {
      searchParams.delete('tab');
      searchParams.set('modal', 'userInfo');
      searchParams.set('step', activeStep);
      setSearchParams(searchParams);
    } else {
      searchParams.set('tab', tab);
      setSearchParams(searchParams);
    }
  }, [openUserInfo, activeStep, searchParams, setSearchParams]);

  const getStepContent = (stepIndex) => {
    return steps[stepIndex].component();
  };
  return (
    <ModalLayoutProfile open={openUserInfo} setOpen={handleClose}>
      <Box sx={styles.wrapper}>
        <Stepper activeStep={activeStep} connector={<StepConnector />} sx={styles.stepBorder}>
          {steps.map(({ title }) => (
            <Step key={title} sx={styles.step}>
              <StepLabel StepIconComponent={CustomStepIcon} sx={styles.label} />
              {steps[activeStep] === title && (
                <Typography sx={styles.title} variant='subtitle1'>
                  {t(title)}
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
