import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { styles } from './HardSkills.styles';
import EditIcon from '@mui/icons-material/Edit';
import SkillItem from './SkillItem';
import { useTranslation } from 'react-i18next';

const skills = [
  { name: 'Laravel', value: 5 },
  { name: 'Symphony', value: 9 },
  { name: 'Zend Framework', value: 3 },
  { name: 'PostgreSQL', value: 8 },
  { name: 'RESTful API', value: 8 },
  { name: 'GitHub/GitLab/Bitbucket', value: 7 },
  { name: 'Docker', value: 10 },
];

const HardSkills = () => {
  const averageMark = skills.reduce((acc, skill) => acc + skill.value, 0) / skills.length;
  const { t } = useTranslation();

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.title}>
        <Typography variant='h6'>{t('specialisation.hardSkills.title')}</Typography>
        <IconButton sx={styles.btnIcon} aria-label='Edit user information'>
          <EditIcon />
        </IconButton>
      </Box>

      <Box>
        {skills.map((skill, index) => (
          <SkillItem key={index} name={skill.name} value={skill.value} />
        ))}
      </Box>

      <Box sx={styles.markWrapper}>
        <Typography variant='h6'>{t('specialisation.hardSkills.averageMark')}</Typography>
        <Typography sx={styles.mark} variant='h6'>{`${averageMark.toFixed(1)}/10`}</Typography>
      </Box>
    </Box>
  );
};

export default HardSkills;
