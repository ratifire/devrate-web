/* eslint-disable */

import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { useCloseModal } from '../hooks';
import { Box, Typography } from '@mui/material';
import { styles } from './RespondentFeedback.styles';
import { TextAreaInput } from '../../Inputs';
import { ButtonDef } from '../../Buttons';
import { useTranslation } from 'react-i18next';
import { SliderAssessment } from '../components';
import { SliderAssessmentBox } from '../components/SliderAssessmentBox';

const RespondentFeedback = () => {
  const { t } = useTranslation();
  const { isOpenModal, handleCloseModal } = useCloseModal({ modalName: 'openFeedbackInterviewer' })

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
        <Typography sx={styles.titleColor} variant="h6">Soft Skills</Typography>
        <SliderAssessmentBox>
          <SliderAssessment
            title={'Комунікативність'}
          />
          <SliderAssessment
            title={'Креативність'}
          />
          <SliderAssessment
            title={'Критичне мислення'}
          />
        </SliderAssessmentBox>
      </Box>
      <ButtonDef
        label={t('modal.interview.btnSend')}
        correctStyle={styles.btn}
      />
    </ModalLayoutProfile>
  )
}

export default RespondentFeedback;
