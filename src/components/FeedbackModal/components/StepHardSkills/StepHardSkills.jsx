import { Box, Typography } from '@mui/material';
import React from 'react';
import { SliderAssessment, SliderAssessmentBox } from '../../components';

const StepHardSkills = () => {
  return (
    <Box>
      <Typography variant={'h6'}>Hard Skills</Typography>
      <SliderAssessmentBox>
        <SliderAssessment title={'Laravel'} />
        <SliderAssessment title={'CodeIgniter, Yii, Zend Framework'} />
        <SliderAssessment title={'PostgreSQL'} />
        <SliderAssessment title={'RESTful API'} />
        <SliderAssessment title={'GitHub/GitLab/Bitbucket'} />
        <SliderAssessment title={'Налаштування середовища розробки: Do...'} />
        <SliderAssessment title={'GitHub/GitLab/Bitbucket'} />
      </SliderAssessmentBox>
    </Box>
  );
};

export default StepHardSkills;
