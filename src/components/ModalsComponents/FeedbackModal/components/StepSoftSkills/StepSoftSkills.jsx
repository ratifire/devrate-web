import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { TextAreaInput } from '../../../../FormsComponents/Inputs'
import { SliderAssessment, SliderAssessmentBox } from '../../components'
import { styles } from './StepSoftSkills.styles'

const StepSoftSkills = ({ formik }) => {
  const { t } = useTranslation();
  const { values } = formik;
  const { skills, comment } = values;

  return (
    <>
      <Box sx={styles.container}>
        <TextAreaInput
          name='comment'
          placeholder={t('modal.interview.placeholder')}
          type='text'
          label={t('modal.interview.label')}
          required
          variant='outlined'
          rows={2}
          handleChange={formik.handleChange}
          value={comment}
          handleBlur={formik.handleBlur}
          helperText={formik.touched.comment && formik.errors.comment}
          error={formik.touched.comment && Boolean(formik.errors.comment)}
        />
      </Box>
      <Box>
        <Typography variant='h6'>Soft Skills</Typography>
        <SliderAssessmentBox>
          {skills
            .filter(({type}) => type === 'SOFT_SKILL')
            .map(({id}) => (
              <SliderAssessment
                key={id}
                id={id}
                formik={formik}
              />))
          }
        </SliderAssessmentBox>
      </Box>
    </>
  );
};

StepSoftSkills.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default StepSoftSkills;
