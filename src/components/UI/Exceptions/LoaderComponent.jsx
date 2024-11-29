import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { styles } from './Exceptions.styles';

const LoaderComponent = () => {
  return (
    <Box sx={styles.box}>
      <CircularProgress />
    </Box>
  );
};

export default LoaderComponent;
