/* eslint-disable */

import { Box, Divider, Slider, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React, { useState } from 'react';
import { styles } from './SliderAssessment.styles'

const SliderAssessment = ({ title }) => {
  const [sliderValue, setSliderValue] = useState(1);
  const rightBoxStyles = sliderValue === 10 ? [styles.right, styles.rightActive] : styles.right;
  const handleSliderChange = (e) => setSliderValue(e.target.value);

  return (
    <>
      <Box sx={styles.container}>
        <Typography sx={styles.title}>{title}</Typography>
        <Box sx={styles.box}>
          <Box sx={styles.left}></Box>
          <Box sx={rightBoxStyles}></Box>
          <Slider
            value={sliderValue}
            onChange={handleSliderChange}
            step={1}
            min={1}
            max={10}
            marks
            valueLabelDisplay='on'
            sx={styles.slider}
          />
          <Typography sx={styles.subtitle} variant='body2'>
            {sliderValue}/10
          </Typography>
        </Box>
      </Box>
      <Divider sx={styles.divider} />
    </>
  );
};

SliderAssessment.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SliderAssessment;