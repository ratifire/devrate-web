/* eslint-disable */
import { Box, Step, StepConnector, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { InterviewerInfo, SliderComponent } from '../index';
import { FIRST_STEP, LAST_STEP, NUMBER_OF_STEPS } from '../../constants';
import { styles } from './CandidateFeedback.styles';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import CustomStepIcon from '../../../ProfileModals/ModalUserInfo/StepIconComponent';
import { formatDateTime } from '../../helpers';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { FeedbackModalSchema } from '../../../../../utils/valadationSchemas';

const CandidateFeedback = ({ data }) => {
  const [activeStep, setActiveStep] = useState(1);
  const { t } = useTranslation();
  const { interviewStartTime, participant: { id, name, status, surname }, skills } = data;
  const { date, time } = useMemo(() => formatDateTime(interviewStartTime), [interviewStartTime]);
  const handleNextStep = () => setActiveStep((prev) => prev + 2);
  const handlePrevStep = () => setActiveStep((prev) => prev - 2);

  const initialValues = {
    description: '',
    skills: skills.map(({ id, name, type }) => ({ id, name, type, value: 1 })),
  };

  const onSubmit = (values) => {
    console.log('Submit', values);
  }

  const formik = useFormik({
    initialValues,
    validationSchema: FeedbackModalSchema,
    onSubmit
  })

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
          name={`${name} ${surname}`}
          position={status}
          date={date}
          time={time}
        />
        <form onSubmit={formik.handleSubmit}>
          <Box sx={styles.formBox}>
            <SliderComponent formik={formik} skills={skills} slide={activeStep} />
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

CandidateFeedback.propTypes = {
  data: PropTypes.shape({
    interviewStartTime: PropTypes.string.isRequired,
    participant: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }).isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default CandidateFeedback;
