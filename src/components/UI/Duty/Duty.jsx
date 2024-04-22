import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { styles } from './Duty.styles';

const Duty = ({ duty }) => {
  return (
    <Box sx={styles.dutyContainer}>
      <Typography sx={styles.dutyText}>{duty}</Typography>
    </Box>
  );
};

Duty.propTypes = {
  duty: PropTypes.string,
};
export default Duty;
