/* eslint-disable */

import { styles } from './StepHardSkills.styles'
import { Box, Typography } from '@mui/material';
import { SliderAssessment } from '../SliderAssessment';
import React from 'react';

const StepHardSkills = () => {
  return (
    <Box>
      <Typography variant="h6">Hard Skills</Typography>
      <SliderAssessment
        title={'Laravel'}
      />
      <SliderAssessment
        title={'CodeIgniter, Yii, Zend Framework'}
      />
      <SliderAssessment
        title={'PostgreSQL'}
      />
      <SliderAssessment
        title={'RESTful API'}
      />
      <SliderAssessment
        title={'GitHub/GitLab/Bitbucket'}
      />
      <SliderAssessment
        title={'Налаштування середовища розробки: Do...'}
      />
      <SliderAssessment
        title={'GitHub/GitLab/Bitbucket'}
      />
    </Box>
  )
}

export default StepHardSkills;

