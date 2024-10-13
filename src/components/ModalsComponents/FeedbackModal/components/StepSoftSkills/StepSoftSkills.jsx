import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { SliderAssessment, SliderAssessmentBox } from '../../components'
import { styles } from './StepSoftSkills.styles'
import { TextAreaInput } from '../../../../FormsComponents/Inputs';
import PropTypes from 'prop-types';

const StepSoftSkills = ({ skills }) => {
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
        <Typography variant='h6'>Soft Skills</Typography>
        <SliderAssessmentBox>
          {skills
            .filter(({type}) => type === 'SOFT_SKILL')
            .map(({id, name}) => <SliderAssessment key={id} title={name}/>)
          }
        </SliderAssessmentBox>
      </Box>
    </>
  );
};

StepSoftSkills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StepSoftSkills;
