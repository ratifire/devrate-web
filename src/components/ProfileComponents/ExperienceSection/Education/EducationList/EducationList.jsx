import React from 'react';
import { Box } from '@mui/material';
import EducationItem from '../EducationItem/EducationItem';

const EducationList = () => {
  return (
    <Box>
      {[1, 2, 3].map((el, index) => {
        return <EducationItem key={index} />;
      })}
    </Box>
  );
};
export default EducationList;
