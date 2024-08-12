import { Box, Divider, Slider, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { styles } from './SliderAssessment.styles'

const SliderAssessment = ({ title }) => {
  return (
    <>
      <Box sx={styles.container}>
        <Typography sx={styles.title}>{title}</Typography>
        <Box sx={styles.box}>
          <Slider defaultValue={1} step={1} min={1} max={10} marks valueLabelDisplay='on' sx={styles.slider} />
          <Typography sx={styles.subtitle} variant='body2'>
            1/10
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
