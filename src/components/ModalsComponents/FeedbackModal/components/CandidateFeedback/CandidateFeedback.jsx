/* eslint-disable */
import { Box, Step, StepConnector, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { InterviewerInfo, SliderComponent } from '../index';
import { LAST_STEP, NUMBER_OF_STEPS } from '../../constants';
import { styles } from './CandidateFeedback.styles';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import CustomStepIcon from '../../../ProfileModals/ModalUserInfo/StepIconComponent';

const CandidateFeedback = ({ data }) => {
  const [activeStep, setActiveStep] = useState(1);
  const { t } = useTranslation();
  const buttonContent = activeStep === LAST_STEP ? t('modal.interview.btnSend') : t('modal.interview.btnNext');

  const handleNextStep = () => setActiveStep((prev) => prev + 2);
  const handlePrevStep = () => setActiveStep((prev) => prev - 2);

  const handleSubmit = () => {
    console.log('Submit modal');
  };

  console.log(data);

  return (
      <Box sx={styles.container}>
        <Typography variant='h6'>{t('modal.interview.title')}</Typography>
        <Stepper activeStep={activeStep} sx={styles.stepBorder} connector={<StepConnector />}>
          {NUMBER_OF_STEPS.map((label) => (
            <Step sx={styles.step} key={label}>
              <StepLabel StepIconComponent={CustomStepIcon} sx={styles.label}></StepLabel>
            </Step>
          ))}
        </Stepper>
        <InterviewerInfo
          name='Олена Бондаренко'
          position='Senior Full stack Developer'
          data='03/06/2024'
          time='15:30'
        />
        <SliderComponent slide={activeStep} />
        <Box sx={styles.sendBox}>
          <ButtonDef
            type={'submit'}
            variant={'contained'}
            label={t('modal.interview.btnBack')}
            correctStyle={styles.btn}
            handlerClick={handlePrevStep}
            disabled={activeStep === 1}
          />
          <ButtonDef
            type={'submit'}
            variant={'contained'}
            label={buttonContent}
            correctStyle={styles.btn}
            handlerClick={activeStep === 1 ? handleNextStep : handleSubmit}
          />
        </Box>
      </Box>
  );
};

export default CandidateFeedback;
