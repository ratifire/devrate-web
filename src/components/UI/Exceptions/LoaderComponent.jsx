import { Box, CircularProgress } from '@mui/material';
import { styles } from './Exceptions.styles';
import React from 'react';

const LoaderComponent = () => {
  return (
    <Box sx={styles.box}>
      <CircularProgress />
    </Box>
  )
}

export default LoaderComponent;
