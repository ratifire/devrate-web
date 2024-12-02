import { Box, Divider, Slider, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from './SliderAssessment.styles';

const SliderAssessment = ({ formik, id }) => {
  const values = formik.values.skills;
  const index = values.findIndex((skill) => skill.id === id);
  const skillValue = values[index].value;
  const title = values[index].name;

  const rightBoxStyles = skillValue === 10 ? [styles.right, styles.rightActive] : styles.right;

  const handleSliderChange = (e, newValue) => {
    formik.setFieldValue(`skills[${index}].value`, newValue);
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Typography variant='body'>{title}</Typography>
        <Box sx={styles.box}>
          <Box sx={styles.left} />
          <Box sx={rightBoxStyles} />
          <Slider
            marks
            max={10}
            min={1}
            step={1}
            sx={styles.slider}
            value={skillValue}
            valueLabelDisplay='on'
            onChange={handleSliderChange}
          />
          <input name={title} type='hidden' value={skillValue} />
          <Typography sx={styles.grade} variant='body'>
            {skillValue}/10
          </Typography>
        </Box>
      </Box>
      <Divider sx={styles.divider} />
    </Box>
  );
};

SliderAssessment.propTypes = {
  formik: PropTypes.object,
  id: PropTypes.number,
};
export default SliderAssessment;
