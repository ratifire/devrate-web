import React from 'react';
import { Box } from '@mui/material';
import WorkExperienceItem from '../WorkExperienceItem/WorkExperienceItem';

const WorkExperienceList = () => {
  return (
    <Box>
      {[1, 2, 3].map((el, index) => {
        return <WorkExperienceItem key={index} />;
      })}
    </Box>
  );
};
export default WorkExperienceList;
