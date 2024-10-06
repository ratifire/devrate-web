/* eslint-disable */
import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { InterviewerInfo, SliderAssessment, SliderAssessmentBox } from '../components'
import { useCloseModal } from '../hooks'
import { styles } from './RespondentFeedback.styles'
import { TextAreaInput } from '../../../FormsComponents/Inputs';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import ModalLayoutProfile from '../../../../layouts/ModalLayoutProfile';

const RespondentFeedback = () => {
  const { t } = useTranslation();
  const { isOpenModal, handleCloseModal } = useCloseModal({ modalName: 'openFeedbackInterviewer' });

  return (
    <ModalLayoutProfile setOpen={handleCloseModal} open={true}>
      <Box sx={styles.container}>
        <Typography variant='h6'>{t('modal.interview.title')}</Typography>
        <InterviewerInfo
          name={'Олена Бондаренко'}
          position={'Senior Full stack Developer'}
          data={'03/06/2024'}
          time={'15:30'}
        />
        <Box>
          <TextAreaInput
            name='description'
            placeholder={t('modal.interview.placeholder')}
            type='text'
            label={t('modal.interview.label')}
            required
            variant='outlined'
            rows={3}
          />
          <Box>
            <Typography variant='h6'>Soft Skills</Typography>
            <SliderAssessmentBox>
              <SliderAssessment title='Комунікативність' />
              <SliderAssessment title='Креативність' />
              <SliderAssessment title='Критичне мислення' />
            </SliderAssessmentBox>
          </Box>
        </Box>
        <ButtonDef variant={'contained'} type={'submit'} label={t('modal.interview.btnSend')} correctStyle={styles.btn} />
      </Box>
    </ModalLayoutProfile>
  );
};

export default RespondentFeedback;
