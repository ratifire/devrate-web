import React from 'react';
import { Box, Rating, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styles } from './SkillsSection.styles';
import { useGetPersonalUserQuery } from '../../../../../redux/user/personal/personalApiSlice';
import PropTypes from 'prop-types';

const SkillsSection = ({ id }) => {
  const { t } = useTranslation();

  const { data: personalData } = useGetPersonalUserQuery(id);
  const userData = personalData || {};
  const { hardSkillMark = 0, softSkillMark = 0, completedInterviews = 0, conductedInterviews = 0 } = userData;

  return (
    <Box sx={styles.skillsWrapper}>
      <Typography variant="h6" sx={styles.skillsTitle}>
        {t('profile.skills.skillsTitle')}
      </Typography>
      <Box sx={styles.hardSkills}>
        <Typography variant="h6" sx={styles.skillsText}>
          {t('profile.skills.hardSkills')}:
        </Typography>
        <Rating
          name="hard-skills-rating"
          value={hardSkillMark / 2}
          precision={0.5}
          readOnly
          sx={styles.skillsRatingValue}
        />
        <Typography variant="subtitle2" sx={styles.skillMark}>
          {hardSkillMark}/10
        </Typography>
      </Box>
      <Box sx={styles.softSkills}>
        <Typography variant="h6" sx={styles.skillsText}>
          {t('profile.skills.softSkills')}:
        </Typography>
        <Rating
          name="soft-skills-rating"
          value={softSkillMark / 2}
          precision={0.5}
          readOnly
          sx={styles.skillsRatingValue}
        />
        <Typography variant="subtitle2" sx={styles.skillMark}>
          {softSkillMark}/10
        </Typography>
      </Box>
      <Box sx={styles.interviewHistory}>
        <Box sx={[styles.skillsInterviewBtn, styles.doneInterviewsBtn]}>
          <Typography variant="subtitle1">
            {conductedInterviews}
          </Typography>
          <Typography variant="caption3">{t('profile.skills.doneInterviews')}</Typography>
        </Box>
        <Box sx={[styles.skillsInterviewBtn, styles.completedInterviewsBtn]}>
          <Typography variant="subtitle1">
            {completedInterviews}
          </Typography>
          <Typography variant="caption3">{t('profile.skills.completedInterviews')}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

SkillsSection.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default SkillsSection;
