import { Box, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonDef } from '../../../../../FormsComponents/Buttons';
import { ErrorComponent } from '../../../../../UI/Exceptions';
import { formatDateTime } from '../../helpers';
import useFeedbackForm from '../../hooks';
import { InterviewerInfo, StepSoftSkills } from '../index';
import { styles } from './InterviewerFeedback.styles';

const InterviewerFeedback = () => {
  const { t } = useTranslation();
  const { interviewStartTime, name, status, surname, isError, formik, isLoading } = useFeedbackForm();

  const { date, time } = useMemo(() => formatDateTime(interviewStartTime), [interviewStartTime]);

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <Box sx={styles.container}>
      <Typography variant='h6'>{t('modal.interview.title')}</Typography>
      <InterviewerInfo date={date} name={`${name} ${surname}`} position={status} time={time} />
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.formBox}>
          <StepSoftSkills formik={formik} />
        </Box>
        <ButtonDef
          disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
          label={t('modal.interview.btnSend')}
          loading={isLoading}
          sx={styles.btn}
          type='submit'
          variant='contained'
        />
      </form>
    </Box>
  );
};

export default InterviewerFeedback;
