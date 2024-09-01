import React from 'react';
import { Box, Rating, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styles } from './SkillsSection.style';
import { useGetPersonalUserQuery } from '../../../../redux/user/personal/personalApiSlice';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';

const SkillsSection = () => {
  const { data: info } = useSelector(selectCurrentUser);
  const id = info?.id;
  const { t } = useTranslation();

  const { data: personalData } = useGetPersonalUserQuery(id);
  const userData = personalData || {};
  const { hardSkillMark = 0, softSkillMark = 0, completedInterviews = 0, conductedInterviews = 0 } = userData;

  return (
    <Box sx={styles.skillsWrapper}>
      <Typography variant='h6' sx={styles.skillsTitle}>
        {t('profile.skills.skillsTitle')}
      </Typography>
      <Box sx={styles.hardSkills}>
        <Typography variant='h6' sx={styles.skillsText}>
          {t('profile.skills.hardSkills')}:
        </Typography>
        <Rating name='hard-skills-rating' readOnly value={hardSkillMark} sx={styles.skillsRating} />
        <Typography variant='subtitle2' sx={styles.skillsRating}>
          {hardSkillMark * 2}/10
        </Typography>
      </Box>
      <Box sx={styles.softSkills}>
        <Typography variant='subtitle1' sx={styles.skillsText}>
          {t('profile.skills.softSkills')}:
        </Typography>
        <Rating name='soft-skills-rating' readOnly value={softSkillMark} sx={styles.skillsRating} />
        <Typography variant='subtitle2' sx={styles.skillsRating}>
          {softSkillMark * 2}/10
        </Typography>
      </Box>
      <Box sx={styles.interviewHistory}>
        <Box sx={styles.doneInterviews}>
          <Typography variant='subtitle1' sx={styles.doneInterviewsQuantity}>
            {conductedInterviews}
          </Typography>
          <Typography variant='caption3'>{t('profile.skills.doneInterviews')}</Typography>
        </Box>
        <Box sx={styles.completedInterviews}>
          <Typography variant='subtitle1' sx={styles.completedInterviewsQuantity}>
            {completedInterviews}
          </Typography>
          <Typography variant='caption3'>{t('profile.skills.completedInterviews')}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SkillsSection;
