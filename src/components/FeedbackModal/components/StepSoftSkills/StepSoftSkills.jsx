import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextAreaInput } from '../../../Inputs';
import { SliderAssessment } from '../SliderAssessment';
import { SliderAssessmentBox } from '../SliderAssessmentBox';
import { styles } from './StepSoftSkills.styles';

const StepSoftSkills = () => {
  const { t } = useTranslation();

  return (
    <>
      <TextAreaInput
        name='description'
        placeholder={t('modal.interview.placeholder')}
        type='text'
        label={t('modal.interview.label')}
        required
        variant='outlined'
        rows={3}
      />
      <Typography sx={styles.title} variant='h6'>
        Soft Skills
      </Typography>
      <SliderAssessmentBox>
        <SliderAssessment title={'Комунікативність'} />
        <SliderAssessment title={'Креативність'} />
        <SliderAssessment title={'Критичне мислення'} />
      </SliderAssessmentBox>
    </>
  );
};

export default StepSoftSkills;
