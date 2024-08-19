import PropTypes from 'prop-types'
import React from 'react'
import { StepHardSkills } from '../StepHardSkills'
import { StepSoftSkills } from '../StepSoftSkills'

const SliderComponent = ({ slide }) => {
  const SliderElement =
    {
      1: StepSoftSkills,
      3: StepHardSkills,
    }[slide] ?? StepSoftSkills;

  return <SliderElement />;
};

SliderComponent.propTypes = {
  slide: PropTypes.number.isRequired,
};

export default SliderComponent;
