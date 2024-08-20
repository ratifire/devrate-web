/* eslint-disable */
import { Box, Step, StepButton, StepConnector, Stepper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile'
import { ButtonDef } from '../../Buttons'
import InterviewerInfo from '../components/InterviewerInfo/InterviewerInfo'
import { SliderComponent } from '../components/SliderComponent'
import { LAST_STEP, NUMBER_OF_STEPS } from '../constants'
import { useCloseModal } from '../hooks'
import { styles } from './InterviewerFeedback.styles'
import { TitleFeedback } from '../components/Titles';

const InterviewerFeedback = () => {
  const [activeStep, setActiveStep] = useState(1);
  const { handleCloseModal, isOpenModal } = useCloseModal({ modalName: 'openFeedbackRespondent' });
  const { t } = useTranslation();
  const buttonContent = activeStep === LAST_STEP ? t('modal.interview.btnSend') : t('modal.interview.btnNext');

  const handleNextStep = () => setActiveStep((prev) => prev + 2);
  const handlePrevStep = () => setActiveStep((prev) => prev - 2);

  const handleSubmit = () => {
    console.log('Submit modal');
  };

  return (
    <ModalLayoutProfile setOpen={handleCloseModal} open={true}>
      <Box sx={styles.container}>
        <TitleFeedback title={t('modal.interview.title')} variant='h3' />
        <Stepper activeStep={activeStep} sx={styles.stepBorder} connector={<StepConnector />}>
          {NUMBER_OF_STEPS.map((label, index) => (
            <Step sx={styles.step} key={label}>
              <StepButton
                color='inherit'
                sx={styles.stepBtn}
                disabled={index === NUMBER_OF_STEPS.length}
              />
            </Step>
          ))}
        </Stepper>
        <InterviewerInfo
          name={'Олена Бондаренко'}
          position={'Senior Full stack Developer'}
          data={'03/06/2024'}
          time={'15:30'}
        />
        <SliderComponent slide={activeStep} />
        <Box sx={styles.sendBox}>
          <ButtonDef
            label={t('modal.interview.btnBack')}
            correctStyle={styles.btn}
            handlerClick={handlePrevStep}
            disabled={activeStep === 1}
          />
          <ButtonDef
            label={buttonContent}
            correctStyle={styles.btn}
            handlerClick={activeStep === 1 ? handleNextStep : handleSubmit}
          />
        </Box>
      </Box>
    </ModalLayoutProfile>
  );
};

export default InterviewerFeedback;
