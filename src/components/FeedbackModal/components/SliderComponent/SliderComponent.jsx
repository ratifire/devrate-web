import PropTypes from 'prop-types'
import React from 'react'
import { StepSoftSkills, StepHardSkills } from '../../components';

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
