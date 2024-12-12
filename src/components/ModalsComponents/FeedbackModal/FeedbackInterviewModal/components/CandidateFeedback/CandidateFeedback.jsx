import { Box, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonDef } from '../../../../../FormsComponents/Buttons';
import { ErrorComponent } from '../../../../../UI/Exceptions';
import { FIRST_STEP, LAST_STEP } from '../../constants';
import { formatDateTime } from '../../helpers';
import useFeedbackForm from '../../hooks';
import { InterviewerInfo, SliderComponent } from '../index';
import { InterviewStepper } from '../InterviewStepper';
import { styles } from './CandidateFeedback.styles';

const CandidateFeedback = () => {
  const [activeStep, setActiveStep] = useState(FIRST_STEP);
  const { t } = useTranslation();
  const { formik, isError, interviewStartTime, surname, name, status, isLoading } = useFeedbackForm();
  const { date, time } = useMemo(() => formatDateTime(interviewStartTime), [interviewStartTime]);

  const handleNextStep = () => setActiveStep(LAST_STEP);
  const handlePrevStep = () => setActiveStep(FIRST_STEP);

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <Box sx={styles.container}>
      <Typography variant='h6'>{t('modal.interview.title')}</Typography>
      <InterviewStepper activeStep={activeStep} />
      <InterviewerInfo date={date} name={`${name} ${surname}`} position={status} time={time} />
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.formBox}>
          <SliderComponent formik={formik} slide={activeStep} />
          <Box sx={styles.sendBox}>
            <ButtonDef
              disabled={activeStep === 1}
              label={t('modal.interview.btnBack')}
              sx={styles.btn}
              type={'button'}
              variant={'contained'}
              onClick={handlePrevStep}
            />
            {activeStep === FIRST_STEP && (
              <ButtonDef
                label={t('modal.interview.btnNext')}
                sx={styles.btn}
                type={'button'}
                variant={'contained'}
                onClick={handleNextStep}
              />
            )}
            {activeStep === LAST_STEP && (
              <ButtonDef
                disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
                label={t('modal.interview.btnSend')}
                loading={isLoading}
                sx={styles.btn}
                type={'submit'}
                variant={'contained'}
              />
            )}
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default CandidateFeedback;
