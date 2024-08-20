import { Box, Divider, Slider, Typography } from '@mui/material';
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { styles } from './SliderAssessment.styles'

const SliderAssessment = ({ title }) => {
  const [sliderValue, setSliderValue] = useState(1);
  const rightBoxStyles = sliderValue === 10 ? [styles.right, styles.rightActive] : styles.right;
  const handleSliderChange = (e) => setSliderValue(e.target.value);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Typography variant={'body'}>{title}</Typography>
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
          <Typography sx={styles.grade} variant={'body'}>{sliderValue}/10</Typography>
        </Box>
      </Box>
      <Divider sx={styles.divider} />
    </Box>
  );
};

SliderAssessment.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SliderAssessment;
