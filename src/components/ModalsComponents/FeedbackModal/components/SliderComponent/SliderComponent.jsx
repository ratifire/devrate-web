import PropTypes from 'prop-types'
import React from 'react'
import { StepHardSkills, StepSoftSkills } from '../../components'

const SliderComponent = ({ slide, formik }) => {
  const SliderElement =
    {
      1: StepSoftSkills,
      3: StepHardSkills,
    }[slide] ?? StepSoftSkills;

  return <SliderElement formik={formik} />;
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
  formik: PropTypes.object.isRequired,
};

export default SliderComponent;
