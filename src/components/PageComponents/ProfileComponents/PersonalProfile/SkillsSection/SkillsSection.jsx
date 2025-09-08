import { Box, Rating, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@redux/slices/auth/authSlice.js';
import { useGetPersonalUserQuery } from '@redux/api/slices/user/personal/personalApiSlice';
import floorToOneDecimal from '@utils/helpers/floorToOneDecimal';
import { styles } from './SkillsSection.styles';

const SkillsSection = () => {
  const { data: info } = useSelector(selectCurrentUser);
  const { id } = info;
  const { t } = useTranslation();

  const { data: personalData } = useGetPersonalUserQuery(id);
  const userData = personalData || {};
  const { hardSkillMark = 0, softSkillMark = 0, completedInterviews = 0, conductedInterviews = 0 } = userData;

  const hardSkillMarkFloored = floorToOneDecimal(hardSkillMark);
  const softSkillMarkFloored = floorToOneDecimal(softSkillMark);

  return (
    <Box sx={styles.skillsWrapper}>
      <Typography sx={styles.skillsTitle} variant='h6'>
        {t('profile.skills.skillsTitle')}
      </Typography>
      <Box sx={styles.hardSkills}>
        <Typography sx={styles.skillsText} variant='h6'>
          {t('profile.skills.hardSkills')}:
        </Typography>

        <Rating
          readOnly
          name='hard-skills-rating'
          precision={0.5}
          sx={styles.skillsRatingValue}
          value={hardSkillMark / 2}
        />

        <Typography sx={styles.skillMark} variant='subtitle2'>
          {hardSkillMarkFloored}/10
        </Typography>
      </Box>
      <Box sx={styles.softSkills}>
        <Typography sx={styles.skillsText} variant='h6'>
          {t('profile.skills.softSkills')}:
        </Typography>
        <Rating
          readOnly
          name='soft-skills-rating'
          precision={0.5}
          sx={styles.skillsRatingValue}
          value={softSkillMark / 2}
        />
        <Typography sx={styles.skillMark} variant='subtitle2'>
          {softSkillMarkFloored}/10
        </Typography>
      </Box>
      <Box sx={styles.interviewHistory}>
        <Box sx={[styles.skillsInterviewBtn, styles.doneInterviewsBtn]}>
          <Typography variant='subtitle1'>{completedInterviews}</Typography>
          <Typography variant='caption3'>{t('profile.skills.doneInterviews')}</Typography>
        </Box>
        <Box sx={[styles.skillsInterviewBtn, styles.completedInterviewsBtn]}>
          <Typography variant='subtitle1'>{conductedInterviews}</Typography>
          <Typography variant='caption3'>{t('profile.skills.completedInterviews')}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SkillsSection;
