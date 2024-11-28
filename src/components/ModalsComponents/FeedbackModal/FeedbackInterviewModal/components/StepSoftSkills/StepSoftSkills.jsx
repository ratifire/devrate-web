import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextAreaInput } from '../../../../../FormsComponents/Inputs';
import { SliderAssessment, SliderAssessmentBox } from '../index';
import { styles } from './StepSoftSkills.styles';

const StepSoftSkills = ({ formik }) => {
  const { t } = useTranslation();
  const { skills, comment } = formik.values;
  const softSkills = skills.filter(({ type }) => type === 'SOFT_SKILL');

  return (
    <>
      <Box sx={styles.container}>
        <TextAreaInput
          required
          error={formik.touched.comment && Boolean(formik.errors.comment)}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
          helperText={formik.touched.comment && formik.errors.comment}
          label={t('modal.interview.label')}
          name='comment'
          placeholder={t('modal.interview.placeholder')}
          rows={2}
          type='text'
          value={comment}
          variant='outlined'
        />
      </Box>
      <Box>
        <Typography variant='h6'>Soft Skills</Typography>
        <SliderAssessmentBox>
          {softSkills.map(({ id }) => (
            <SliderAssessment key={id} formik={formik} id={id} />
          ))}
        </SliderAssessmentBox>
      </Box>
    </>
  );
};

StepSoftSkills.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default StepSoftSkills;
