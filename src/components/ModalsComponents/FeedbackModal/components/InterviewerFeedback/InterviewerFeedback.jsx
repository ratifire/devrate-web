import { Box, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../../redux/auth/authSlice';
import { closeFeedbackModal } from '../../../../../redux/feedback/feedbackModalSlice';
import { useCreateInterviewMutation, useGetInterviewByIdQuery } from '../../../../../redux/feedback/interviewApiSlice';
import { FeedbackModalSchema } from '../../../../../utils/valadationSchemas';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { ErrorComponent } from '../../../../UI/Exceptions';
import { formatDateTime } from '../../helpers';
import { InterviewerInfo, StepSoftSkills } from '../index';
import { styles } from './InterviewerFeedback.styles';

const InterviewerFeedback = () => {
  const { feedbackId } = useSelector((state) => state.feedback);
  const { data } = useGetInterviewByIdQuery({ id: feedbackId }, { skip: !feedbackId });
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const {
    interviewStartTime,
    participant: { name, status, surname },
    skills,
  } = data;

  const {
    data: { id: userId },
  } = useSelector(selectCurrentUser);
  const [createInterview, { isError }] = useCreateInterviewMutation();
  const { date, time } = useMemo(() => formatDateTime(interviewStartTime), [interviewStartTime]);

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
    onSubmit,
  });

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <Box sx={styles.container}>
      <Typography variant='h6'>{t('modal.interview.title')}</Typography>
      <InterviewerInfo name={`${name} ${surname}`} position={status} date={date} time={time} />
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.formBox}>
          <StepSoftSkills formik={formik} />
        </Box>
        <ButtonDef
          variant='contained'
          type='submit'
          label={t('modal.interview.btnSend')}
          disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
          correctStyle={styles.btn}
        />
      </form>
    </Box>
  );
};

export default InterviewerFeedback;
