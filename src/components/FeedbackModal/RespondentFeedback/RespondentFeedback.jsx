/* eslint-disable */

import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { ButtonDef } from '../../Buttons';
import { TextAreaInput } from '../../Inputs';
import { SliderAssessment } from '../components';
import { SliderAssessmentBox } from '../components/SliderAssessmentBox';
import { useCloseModal } from '../hooks';
import { styles } from './RespondentFeedback.styles';

const RespondentFeedback = () => {
  const { t } = useTranslation();
  const { isOpenModal, handleCloseModal } = useCloseModal({ modalName: 'openFeedbackInterviewer' });

  return (
    <ModalLayoutProfile setOpen={handleCloseModal} open={true}>
      <Typography variant='subtitle1' sx={[styles.titleColor, styles.title]}>
        {t('modal.interview.title')}
      </Typography>
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
        <Typography sx={styles.titleColor} variant='h6'>
          Soft Skills
        </Typography>
        <SliderAssessmentBox>
          <SliderAssessment title={'Комунікативність'} />
          <SliderAssessment title={'Креативність'} />
          <SliderAssessment title={'Критичне мислення'} />
        </SliderAssessmentBox>
      </Box>
      <ButtonDef label={t('modal.interview.btnSend')} correctStyle={styles.btn} />
    </ModalLayoutProfile>
  );
};

export default RespondentFeedback;
