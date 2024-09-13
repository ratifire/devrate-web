import EditIcon from '@mui/icons-material/Edit';
import { Box, CircularProgress, IconButton, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../redux/modal/modalSlice';
import { useUserSkillsAndMasteryData } from '../Statistics/utils';
import { styles } from './HardSkills.styles';
import HardSkillsItem from './HardSkillsItem';

const HardSkills = () => {
  const { t, skills, isError, isLoading, activeMastery } = useUserSkillsAndMasteryData();
  const dispatch = useDispatch();
  
  const handleModalOpen = () => {
    dispatch(openModal({ modalName: 'openSkillsModal', activeMastery }));
  };
  
  if (isLoading) {
    return <CircularProgress />;
  }
  console.log(skills);
  if (isError) {
    return <Typography variant="h6">{t('specialisation.hardSkills.error')}</Typography>;
  }

  const averageMark = skills.length > 0 ?
    (skills.reduce((acc, skill) => acc + skill.averageMark, 0) / skills.length).toFixed(1)
    : '0';

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.title}>
        <Typography variant="h6">{t('specialization.hardSkills.title')}</Typography>
        <IconButton sx={styles.btnIcon} aria-label="Edit user information" onClick={handleModalOpen}>
          <EditIcon />
        </IconButton>
      </Box>
      
      <Box sx={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <HardSkillsItem key={index} name={skill.name} value={Math.round(skill.averageMark * 10) / 10} />
        ))}
      </Box>
      
      <Box sx={styles.markWrapper}>
        <Typography variant="h6">{t('specialization.hardSkills.averageMark')}</Typography>
        <Typography sx={styles.mark} variant="h6">{`${averageMark}/10`}</Typography>
      </Box>
    </Box>
  );
};

export default HardSkills;
