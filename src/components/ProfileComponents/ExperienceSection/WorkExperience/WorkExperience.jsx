import React from 'react';
import WorkExperienceList from './WorkExperienceList/WorkExperienceList';
import { Box } from '@mui/material';
import styles from './WorkExperience.styles';

const WorkExperience = () => {
  return (
    <Box style={styles.container}>
      <WorkExperienceList />
    </Box>
  );
};
export default WorkExperience;
