import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { SliderAssessment, SliderAssessmentBox } from '../index';

const StepHardSkills = ({ formik }) => {
  const skills = formik.values.skills;
  const hardSkills = skills.filter(({ type }) => type === 'HARD_SKILL');

  return (
    <Box>
      <Typography variant='h6'>Hard Skills</Typography>
      <SliderAssessmentBox size='large'>
        {hardSkills.map(({ id }) => (
          <SliderAssessment key={id} formik={formik} id={id} />
        ))}
      </SliderAssessmentBox>
    </Box>
  );
};

StepHardSkills.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default StepHardSkills;
