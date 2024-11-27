import React from 'react';
import { Typography } from '@mui/material';
import { styles } from './TermsAndConditions.styles';

const TermsAndConditions = () => {
  return (
    <Typography sx={styles.title} variant='h4'>
      Terms and Conditions
    </Typography>
  );
};

export default TermsAndConditions;
