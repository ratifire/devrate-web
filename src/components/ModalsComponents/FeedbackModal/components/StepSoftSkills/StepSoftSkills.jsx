/* eslint-disable */
import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { SliderAssessment, SliderAssessmentBox } from '../../components'
import { styles } from './StepSoftSkills.styles'
import { TextAreaInput } from '../../../../FormsComponents/Inputs';
import PropTypes from 'prop-types';

const StepSoftSkills = ({ formik }) => {
  const { t } = useTranslation();
  const { values, } = formik;
  const { description, skills } = values;

  return (
    <>
      <Box sx={styles.container}>
        <TextAreaInput
          name='description'
          placeholder={t('modal.interview.placeholder')}
          type='text'
          label={t('modal.interview.label')}
          required
          value={description}
          handleChange={formik.handleChange}
          variant='outlined'
          rows={2}
        />
      </Box>
      <Box>
        <Typography variant='h6'>Soft Skills</Typography>
        <SliderAssessmentBox>
          {skills
            .filter(({type}) => type === 'SOFT_SKILL')
            .map(({id, name}, index) => (
              <SliderAssessment
                key={id}
                title={name}
                value={formik.values.skills[index].value}
                onChange={(newValue) => formik.setFieldValue(`skills[${index}].value`, newValue)}
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
