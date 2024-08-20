/* eslint-disable */
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { ButtonDef } from '../../Buttons';
import { TextAreaInput } from '../../Inputs';
import { SliderAssessment, InterviewerInfo, SliderAssessmentBox, TitleFeedback } from '../components';
import { useCloseModal } from '../hooks';
import { styles } from './RespondentFeedback.styles';
import React from 'react';

const RespondentFeedback = () => {
  const { t } = useTranslation();
  const { isOpenModal, handleCloseModal } = useCloseModal({ modalName: 'openFeedbackInterviewer' });

  return (
    <ModalLayoutProfile setOpen={handleCloseModal} open={true}>
      <Box sx={styles.container}>
        <TitleFeedback title={t('modal.interview.title')} variant={'h3'}/>
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
            <TitleFeedback title={'Soft Skills'} variant={'h4'}/>
            <SliderAssessmentBox>
              <SliderAssessment title={'Комунікативність'} />
              <SliderAssessment title={'Креативність'} />
              <SliderAssessment title={'Критичне мислення'} />
            </SliderAssessmentBox>
          </Box>
        </Box>
        <ButtonDef label={t('modal.interview.btnSend')} correctStyle={styles.btn} />
      </Box>
    </ModalLayoutProfile>
  );
};

export default RespondentFeedback;
