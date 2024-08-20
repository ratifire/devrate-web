import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextAreaInput } from '../../../Inputs';
import { SliderAssessment, SliderAssessmentBox } from '../../components';
import { styles } from './StepSoftSkills.styles';

const StepSoftSkills = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box sx={styles.container}>
        <TextAreaInput
          name='description'
          placeholder={t('modal.interview.placeholder')}
          type='text'
          label={t('modal.interview.label')}
          required
          variant='outlined'
          rows={3}
        />
      </Box>
      <Box>
        <Typography variant={'h6'}>Soft Skills</Typography>
        <SliderAssessmentBox>
          <SliderAssessment title={'Комунікативність'} />
          <SliderAssessment title={'Креативність'} />
          <SliderAssessment title={'Критичне мислення'} />
        </SliderAssessmentBox>
      </Box>
    </>
  );
};

export default StepSoftSkills;
