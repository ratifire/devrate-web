import { Box, Typography } from '@mui/material';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../../redux/auth/authSlice';
import { useCreateInterviewMutation } from '../../../../../redux/feedback/interviewApiSlice';
import { FeedbackModalSchema } from '../../../../../utils/valadationSchemas';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { TextAreaInput } from '../../../../FormsComponents/Inputs';
import { formatDateTime } from '../../helpers';
import { InterviewerInfo, SliderAssessment, SliderAssessmentBox } from '../index';
import { styles } from './InterviewerFeedback.styles';

const InterviewerFeedback = ({ data }) => {
  const { t } = useTranslation();
  const {
    interviewStartTime,
    participant: { name, status, surname },
    skills,
  } = data;
  const { feedbackId } = useSelector((state) => state.feedback);
  const {
    data: { id: userId },
  } = useSelector(selectCurrentUser);
  const { date, time } = useMemo(() => formatDateTime(interviewStartTime), [interviewStartTime]);
  const [createInterview] = useCreateInterviewMutation();

  const initialValues = {
    comment: '',
    skills: skills.map(({ id, name }) => ({ id, name, value: 1 })),
  };

  const onSubmit = async (values) => {
    const body = {
      interviewFeedbackDetailId: feedbackId,
      comment: values.comment,
      skills: values.skills.map(({ id, value }) => ({ id, mark: value })),
    };

    await createInterview({ reviewerId: userId, body });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: FeedbackModalSchema,
    onSubmit,
  });

  return (
    <Box sx={styles.container}>
      <Typography variant='h6'>{t('modal.interview.title')}</Typography>
      <InterviewerInfo name={`${name} ${surname}`} position={status} date={date} time={time} />
      <form onSubmit={formik.handleSubmit}>
        <Box>
          <TextAreaInput
            name='comment'
            placeholder={t('modal.interview.placeholder')}
            type='text'
            label={t('modal.interview.label')}
            required
            variant='outlined'
            rows={2}
            handleChange={formik.handleChange}
            value={formik.values.comment}
            handleBlur={formik.handleBlur}
            helperText={formik.touched.comment && formik.errors.comment}
            error={formik.touched.comment && Boolean(formik.errors.comment)}
          />
          <Box>
            <Typography variant='h6'>Soft Skills</Typography>
            <SliderAssessmentBox>
              {skills.map(({ id }) => (
                <SliderAssessment key={id} id={id} formik={formik} />
              ))}
            </SliderAssessmentBox>
          </Box>
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

InterviewerFeedback.propTypes = {
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

export default InterviewerFeedback;
