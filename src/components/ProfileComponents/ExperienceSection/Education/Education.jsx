import React from 'react';
import EducationList from './EducationList/EducationList';
import { Box } from '@mui/material';
import styles from './Education.styles.js';

const Education = () => {
  return (
    <Box sx={styles.container}>
      <EducationList />
    </Box>
  );
};
export default Education;
