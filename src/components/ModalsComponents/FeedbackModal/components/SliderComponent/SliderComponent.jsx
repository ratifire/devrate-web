import PropTypes from 'prop-types'
import React from 'react'
import { StepHardSkills, StepSoftSkills } from '../../components'

const SliderComponent = ({ slide, skills }) => {
  const SliderElement =
    {
      1: StepSoftSkills,
      3: StepHardSkills,
    }[slide] ?? StepSoftSkills;

  return <SliderElement skills={skills} />;
};

SliderComponent.propTypes = {
  slide: PropTypes.number.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SliderComponent;
