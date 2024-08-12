import PropTypes from 'prop-types';
import { StepSoftSkills } from '../StepSoftSkills';
import { StepHardSkills } from '../StepHardSkills';
import React from 'react';

const SliderComponent = ({ slide }) => {
  const SliderElement = {
    1: StepSoftSkills,
    3: StepHardSkills,
  }[slide] ?? StepSoftSkills

  return <SliderElement/>
}

SliderComponent.propTypes = {
  slide: PropTypes.number.isRequired,
}

export default SliderComponent
