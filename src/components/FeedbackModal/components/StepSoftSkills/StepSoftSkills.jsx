/* eslint-disable */

import { styles } from './StepSoftSkills.styles';
import { TextAreaInput } from '../../../Inputs';
import { Typography } from '@mui/material';
import { SliderAssessment } from '../SliderAssessment';
import React from 'react';

const StepSoftSkills = () => {
  return (
    <>
      <TextAreaInput
        name='description'
        placeholder={'Будь ласка, залиште свій відгук'}
        type='text'
        label={'Відгук*'}
        required
        variant='outlined'
        rows={3}
      />
      <Typography variant="h6">Soft Skills</Typography>
      <SliderAssessment
        title={'Комунікативність'}
      />
      <SliderAssessment
        title={'Креативність'}
      />
      <SliderAssessment
        title={'Критичне мислення'}
      />
    </>
  )
}

export default StepSoftSkills;
