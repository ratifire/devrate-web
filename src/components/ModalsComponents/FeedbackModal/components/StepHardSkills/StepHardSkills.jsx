import { Box, Typography } from '@mui/material';
import React from 'react';
import { SliderAssessment, SliderAssessmentBox } from '../../components';
import PropTypes from 'prop-types';

const StepHardSkills = ({ formik }) => {
  const { values, } = formik;
  const { skills } = values;

  return (
    <Box>
      <Typography variant='h6'>Hard Skills</Typography>
      <SliderAssessmentBox size='large'>
        {skills
        .filter(({type}) => type === 'HARD_SKILL')
        .map(({id}) => (
          <SliderAssessment
            key={id}
            id={id}
            formik={formik}
          />))
        }
      </SliderAssessmentBox>
    </Box>
  );
};

StepHardSkills.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default StepHardSkills;
