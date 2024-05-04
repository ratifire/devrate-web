import React from 'react';
import { Box } from '@mui/material';
import styles from './Education.styles.js';
import EducationItem from './EducationItem/EducationItem';

const Education = () => {
  return (
    <Box sx={styles.container}>
      <Box>
        {[1, 2, 3].map((el, index) => {
          return <EducationItem key={index} />;
        })}
      </Box>{' '}
    </Box>
  );
};
export default Education;
