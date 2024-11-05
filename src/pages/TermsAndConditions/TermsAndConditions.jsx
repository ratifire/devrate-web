import React from 'react';
import { styles } from './TermsAndConditions.styles';
import { Typography } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Typography variant='h4' sx={styles.title}>
      Terms and Conditions
    </Typography>
  );
};

export default TermsAndConditions;
