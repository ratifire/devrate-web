import { Box, Divider, Slider, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';
import { styles } from './SliderAssessment.styles';

const SliderAssessment = memo(({ title }) => {
    const [value, setValue] = useState(1)
    const rightBoxStyles = value === 10 ? [styles.right, styles.rightActive] : styles.right;

    const handleChange = ({ target }) => {
      setValue(target.value);
    }

    return (
      <Box sx={styles.wrapper}>
        <Box sx={styles.container}>
          <Typography variant='body'>{title}</Typography>
          <Box sx={styles.box}>
            <Box sx={styles.left}></Box>
            <Box sx={rightBoxStyles}></Box>
            <Slider
              value={value}
              onChange={handleChange}
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
  }
)

SliderAssessment.displayName = 'SliderAssessment';

SliderAssessment.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SliderAssessment;
