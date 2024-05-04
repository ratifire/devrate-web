import React from 'react';
import { Box } from '@mui/material';
import styles from './WorkExperience.styles';
import WorkExperienceItem from './WorkExperienceItem/WorkExperienceItem';

const WorkExperience = () => {
  return (
    <Box sx={styles.container}>
      <Box>
        {[1, 2, 3].map((el, index) => {
          return <WorkExperienceItem key={index} />;
        })}
      </Box>
    </Box>
  );
};
export default WorkExperience;
