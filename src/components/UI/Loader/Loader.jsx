import { Box, CircularProgress } from '@mui/material';
import { styles } from './Loader.styles';
import React from 'react';

const Loader = () => {
  return (
    <Box sx={styles.box}>
      <CircularProgress />
    </Box>
  )
}

export default Loader;
