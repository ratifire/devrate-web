/* eslint-disable */

import { styles } from './StepHardSkills.styles'
import { Box, Typography } from '@mui/material';
import { SliderAssessment } from '../SliderAssessment';
import React from 'react';
import { SliderAssessmentBox } from '../SliderAssessmentBox';

const StepHardSkills = () => {
  return (
    <Box sx={styles.box}>
      <Typography sx={styles.title} variant="h6">Hard Skills</Typography>
      <SliderAssessmentBox>
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
      </SliderAssessmentBox>
    </Box>
  )
}

export default StepHardSkills;

