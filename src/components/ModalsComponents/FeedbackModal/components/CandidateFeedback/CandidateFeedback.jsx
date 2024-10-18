import { Box, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { ErrorComponent } from '../../../../UI/Exceptions';
import { FIRST_STEP, LAST_STEP } from '../../constants';
import { formatDateTime } from '../../helpers';
import useFormikInit from '../../hooks';
import { InterviewerInfo, SliderComponent } from '../index';
import { InterviewStepper } from '../InterviewStepper';
import { styles } from './CandidateFeedback.styles';

const CandidateFeedback = () => {
  const [activeStep, setActiveStep] = useState(FIRST_STEP);
  const { t } = useTranslation();
  const { formik, isError, interviewStartTime, surname, name, status } = useFormikInit();
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
      <InterviewerInfo name={`${name} ${surname}`} position={status} date={date} time={time} />
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.formBox}>
          <SliderComponent formik={formik} slide={activeStep} />
          <Box sx={styles.sendBox}>
            <ButtonDef
              type={'button'}
              variant={'contained'}
              label={t('modal.interview.btnBack')}
              correctStyle={styles.btn}
              handlerClick={handlePrevStep}
              disabled={activeStep === 1}
            />
            {activeStep === FIRST_STEP && (
              <ButtonDef
                type={'button'}
                variant={'contained'}
                label={t('modal.interview.btnNext')}
                correctStyle={styles.btn}
                handlerClick={handleNextStep}
              />
            )}
            {activeStep === LAST_STEP && (
              <ButtonDef
                type={'submit'}
                variant={'contained'}
                label={t('modal.interview.btnSend')}
                disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
                correctStyle={styles.btn}
              />
            )}
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default CandidateFeedback;
