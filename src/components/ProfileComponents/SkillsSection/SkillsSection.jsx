import React from 'react';
import { Box, Rating, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styles } from './SkillsSection.styles';

const SkillsSection = () => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.skillsWrapper}>
      <Typography sx={styles.skillsTitle}>{t('profile.skills.skillsTitle')}</Typography>
      <Box sx={styles.hardSkills}>
        <Typography sx={styles.skillsText}>{t('profile.skills.hardSkills')}:</Typography>
        <Rating name='read-only' value={5} readOnly sx={{ marginRight: 10 }} />
        <Typography sx={styles.skillsRating}>10/10</Typography>
      </Box>
      <Box sx={styles.softSkills}>
        <Typography sx={styles.skillsText}>{t('profile.skills.softSkills')}:</Typography>
        <Rating name='read-only' value={4} readOnly sx={{ marginRight: 10 }} />
        <Typography sx={styles.skillsRating}>8/10</Typography>
      </Box>
      <Box sx={styles.interviewHistory}>
        <Box sx={styles.doneInterviews}>
          <Typography sx={styles.doneInterviewsQuantity}>10</Typography>
          <Typography>{t('profile.skills.doneInterviews')}</Typography>
        </Box>
        <Box sx={styles.completedInterviews}>
          <Typography sx={styles.completedInterviewsQuantity}>24</Typography>
          <Typography>{t('profile.skills.completedInterviews')}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default SkillsSection;
