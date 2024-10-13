/* eslint-disable */
import { Box, Typography } from '@mui/material'
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next'
import { InterviewerInfo, SliderAssessment, SliderAssessmentBox } from '../index'
import { styles } from './InterviewerFeedback.styles'
import { TextAreaInput } from '../../../../FormsComponents/Inputs';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { formatDateTime } from '../../helpers';
import PropTypes from 'prop-types';

const InterviewerFeedback = ({data}) => {
  const { t } = useTranslation();
  const { interviewStartTime, participant: { id, name, status, surname }, skills } = data;
  const { date, time } = useMemo(() => formatDateTime(interviewStartTime), [interviewStartTime]);

  return (
      <Box sx={styles.container}>
        <Typography variant='h6'>{t('modal.interview.title')}</Typography>
        <InterviewerInfo
          name={`${name} ${surname}`}
          position={status}
          date={date}
          time={time}
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
              {skills.map(({ name, id }) => (
                <SliderAssessment key={id} title={name} />
              ))}
            </SliderAssessmentBox>
          </Box>
        </Box>
        <ButtonDef variant={'contained'} type={'submit'} label={t('modal.interview.btnSend')} correctStyle={styles.btn} />
      </Box>
  );
};

InterviewerFeedback.propTypes = {
  data: PropTypes.shape({
    interviewStartTime: PropTypes.string.isRequired,
    participant: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }).isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default InterviewerFeedback;
