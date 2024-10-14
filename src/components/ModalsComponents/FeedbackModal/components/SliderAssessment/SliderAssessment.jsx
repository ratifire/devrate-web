/* eslint-disable */
import { Box, Divider, Slider, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { styles } from './SliderAssessment.styles';

const SliderAssessment = ({ title, value, onChange }) => {
  const rightBoxStyles = value === 10 ? [styles.right, styles.rightActive] : styles.right;

  const handleSliderChange = (e, newValue) => {
    onChange(newValue);
  };

  console.log('render');

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Typography variant='body'>{title}</Typography>
        <Box sx={styles.box}>
          <Box sx={styles.left}></Box>
          <Box sx={rightBoxStyles}></Box>
          <Slider
            value={value}
            onChange={handleSliderChange}
            step={1}
            min={1}
            max={10}
            marks
            valueLabelDisplay='on'
            sx={styles.slider}
          />
          <input name={title} type='hidden' value={value} />
          <Typography sx={styles.grade} variant='body'>
            {value}/10
          </Typography>
        </Box>
      </Box>
      <Divider sx={styles.divider} />
    </Box>
  );
};

SliderAssessment.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default SliderAssessment;
