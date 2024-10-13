import { Box, Typography } from '@mui/material';
import React from 'react';
import { SliderAssessment, SliderAssessmentBox } from '../../components';
import PropTypes from 'prop-types';

const StepHardSkills = ({ skills }) => {
  return (
    <Box>
      <Typography variant='h6'>Hard Skills</Typography>
      <SliderAssessmentBox size='large'>
        {skills
        .filter(({type}) => type === 'HARD_SKILL')
        .map(({id, name}) => <SliderAssessment key={id} title={name}/>)
        }
      </SliderAssessmentBox>
    </Box>
  );
};

StepHardSkills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StepHardSkills;
