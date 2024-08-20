import { Box } from '@mui/material';
import React from 'react';
import { SliderAssessment, SliderAssessmentBox, TitleFeedback } from '../../components';

const StepHardSkills = () => {
  return (
    <Box>
      <TitleFeedback title={'Hard Skills'} variant={'h4'}/>
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
