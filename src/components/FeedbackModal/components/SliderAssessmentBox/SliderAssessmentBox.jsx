import { styles } from './SliderAssessmentBox.styles';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const SliderAssessmentBox = ({ children }) => {
  return (
    <Box sx={styles.box}>
      {children}
    </Box>
  )
}

SliderAssessmentBox.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SliderAssessmentBox;
