import React, { useState } from 'react';
import { Box, Rating, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styles } from './SkillsSection.styles';

const SkillsSection = () => {
  const { t } = useTranslation();
  const [hardSkillsRating, setHardSkillsRating] = useState(5);
  const [softSkillsRating, setSoftSkillsRating] = useState(4);

  const handleHardSkillsChange = (newValue) => {
    setHardSkillsRating(newValue);
  };

  const handleSoftSkillsChange = (newValue) => {
    setSoftSkillsRating(newValue);
  };

  return (
    <Box sx={styles.skillsWrapper}>
      <Typography variant='h6' sx={styles.skillsTitle}>
        {t('profile.skills.skillsTitle')}
      </Typography>
      <Box sx={styles.hardSkills}>
        <Typography variant='h6' sx={styles.skillsText}>
          {t('profile.skills.hardSkills')}:
        </Typography>
        <Rating
          name='hard-skills-rating'
          value={hardSkillsRating}
          onChange={(event, newValue) => handleHardSkillsChange(newValue)}
          sx={{ marginRight: 10 }}
        />
        <Typography variant='subtitle2' sx={styles.skillsRating}>
          {hardSkillsRating * 2}/10
        </Typography>
      </Box>
      <Box sx={styles.softSkills}>
        <Typography variant='subtitle1' sx={styles.skillsText}>
          {t('profile.skills.softSkills')}:
        </Typography>
        <Rating
          name='soft-skills-rating'
          value={softSkillsRating}
          onChange={(event, newValue) => handleSoftSkillsChange(newValue)}
          sx={{ marginRight: 10 }}
        />
        <Typography variant='subtitle2' sx={styles.skillsRating}>
          {softSkillsRating * 2}/10
        </Typography>
      </Box>
      <Box sx={styles.interviewHistory}>
        <Box sx={styles.doneInterviews}>
          <Typography variant='subtitle1' sx={styles.doneInterviewsQuantity}>
            10
          </Typography>
          <Typography variant='caption3'>{t('profile.skills.doneInterviews')}</Typography>
        </Box>
        <Box sx={styles.completedInterviews}>
          <Typography variant='subtitle1' sx={styles.completedInterviewsQuantity}>
            24
          </Typography>
          <Typography variant='caption3'>{t('profile.skills.completedInterviews')}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default SkillsSection;
