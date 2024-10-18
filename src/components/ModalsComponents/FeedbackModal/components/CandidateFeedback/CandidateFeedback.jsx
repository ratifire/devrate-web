import { Box, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../../redux/auth/authSlice';
import { useCreateInterviewMutation, useGetInterviewByIdQuery } from '../../../../../redux/feedback/interviewApiSlice';
import { FeedbackModalSchema } from '../../../../../utils/valadationSchemas';
import { FIRST_STEP, LAST_STEP } from '../../constants';
import { formatDateTime } from '../../helpers';
import { InterviewerInfo, SliderComponent } from '../index';
import { styles } from './CandidateFeedback.styles';
import { InterviewStepper } from '../InterviewStepper';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { closeFeedbackModal } from '../../../../../redux/feedback/feedbackModalSlice';
import { ErrorComponent } from '../../../../UI/Exceptions';

const CandidateFeedback = () => {
  const { feedbackId } = useSelector((state) => state.feedback);
  const { data } = useGetInterviewByIdQuery({ id: feedbackId }, { skip: !feedbackId });
  const [activeStep, setActiveStep] = useState(FIRST_STEP);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const {
    interviewStartTime,
    participant: { name, status, surname },
    skills,
  } = data;
  const { data: { id: userId } } = useSelector(selectCurrentUser);
  const [createInterview, { isError }] = useCreateInterviewMutation();
  const { date, time } = useMemo(() => formatDateTime(interviewStartTime), [interviewStartTime]);

  const handleNextStep = () => setActiveStep(LAST_STEP);
  const handlePrevStep = () => setActiveStep(FIRST_STEP);

  const initialValues = {
    comment: '',
    skills: skills.map(({ id, name, type }) => ({ id, name, type, value: 1 })),
  };

  const onSubmit = async (values) => {
    const body = {
      interviewFeedbackDetailId: feedbackId,
      comment: values.comment,
      skills: values.skills.map(({ id, value }) => ({ id, mark: value })),
    };

    const result = await createInterview({ reviewerId: userId, body });

    if (!result.error) {
      dispatch(closeFeedbackModal());
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: FeedbackModalSchema,
    onSubmit
  });

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <Box sx={styles.container}>
      <Typography variant='h6'>{t('modal.interview.title')}</Typography>
      <InterviewStepper activeStep={activeStep}/>
      <InterviewerInfo name={`${name} ${surname}`} position={status} date={date} time={time} />
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

export default CandidateFeedback;
