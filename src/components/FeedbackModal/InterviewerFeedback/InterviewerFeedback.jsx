/* eslint-disable */

import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { useCloseModal } from '../hooks';
import { Box, IconButton, Step, StepButton, StepConnector, StepLabel, Stepper, Typography } from '@mui/material';
import { styles } from './InterviewerFeedback.styles';
import { ButtonDef } from '../../Buttons';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SliderComponent } from '../components/SliderComponent';
import { LAST_STEP, NUMBER_OF_STEPS } from '../constants';

const InterviewerFeedback = () => {
  const [activeStep, setActiveStep] = useState(1);
  const { handleCloseModal, isOpenModal } = useCloseModal({ modalName: 'openFeedbackRespondent' })
  const { t } = useTranslation();
  const buttonContent = activeStep === LAST_STEP ? t('modal.interview.btnSend') : t('modal.interview.btnNext');

  const handleNextStep = () => setActiveStep((prev) => prev + 2);
  const handlePrevStep = () => setActiveStep((prev) => prev - 2);
  const handleStep = (step) => {
    if (step === 2 || step === 3) {
      return setActiveStep(3)
    }

    setActiveStep(1)
  }

  const handleSubmit = () => {
    console.log('Submit modal');
  }

  return (
    <ModalLayoutProfile setOpen={handleCloseModal} open={true}>
      <Typography sx={styles.title} variant='subtitle1'>
        {t('modal.interview.title')}
      </Typography>
      <Stepper activeStep={activeStep} sx={styles.stepBorder} connector={<StepConnector />}>
        {NUMBER_OF_STEPS.map((label, index) => (
          <Step sx={styles.step} key={label}>
            <StepButton
              color='inherit'
              onClick={() => handleStep(label)}
              sx={styles.stepBtn}
              disabled={index === NUMBER_OF_STEPS.length} />
          </Step>
        ))}
      </Stepper>
      <SliderComponent slide={activeStep}/>
      <Box sx={styles.sendBox}>
        <ButtonDef
          label={buttonContent}
          correctStyle={styles.btnSend}
          handlerClick={activeStep === 1 ? handleNextStep : handleSubmit}
        />
        <Box>
          <IconButton disabled={activeStep === 1} onClick={handlePrevStep}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton disabled={activeStep === NUMBER_OF_STEPS.length} onClick={handleNextStep}>
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
    </ModalLayoutProfile>
  )
}

export default InterviewerFeedback;
