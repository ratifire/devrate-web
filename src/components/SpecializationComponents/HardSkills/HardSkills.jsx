import React, { useEffect } from 'react';
import { Box, Typography, IconButton, CircularProgress  } from '@mui/material';
import { styles } from './HardSkills.styles';
import EditIcon from '@mui/icons-material/Edit';
import SkillItem from './SkillItem';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { openModal } from '../../../redux/modal/modalSlice';
import { useGetHardSkillsByMasteryIdQuery } from '../../../redux/specialization/specializationApiSlice';


const HardSkills = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const openAddSpecialization = useSelector((state) => state.modal.openAddSpecialization);

  const handleModalOpen = () => {
    dispatch(openModal({ modalName: 'openAddSpecialization' }));  };

  useEffect(() => {
    console.log("State after dispatching openModal:", openAddSpecialization);
  }, [openAddSpecialization]);

  const {
    data: skills = [],
    isLoading,
    isError,
  } = useGetHardSkillsByMasteryIdQuery({ userId, masteryId });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Typography variant='h6'>{t('specialisation.hardSkills.error')}</Typography>;
  }

  const averageMark = Math.round(
    skills.reduce((acc, skill) => acc + skill.averageMark, 0) / skills.length
  );

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.title}>
        <Typography variant='h6'>{t('specialisation.hardSkills.title')}</Typography>
        <IconButton sx={styles.btnIcon} aria-label='Edit user information' onClick={handleModalOpen}>
          <EditIcon />
        </IconButton>
      </Box>

      <Box>
        {skills.map((skill, index) => (
          <SkillItem key={index} name={skill.name} value={Math.round(skill.averageMark).toFixed(1)} />
        ))}
      </Box>

      <Box sx={styles.markWrapper}>
        <Typography variant='h6'>{t('specialisation.hardSkills.averageMark')}</Typography>
        <Typography sx={styles.mark} variant='h6'>{`${averageMark}/10`}</Typography>
      </Box>
    </Box>
  );
};

HardSkills.propTypes = {
  userId: PropTypes.number.isRequired,
  masteryId: PropTypes.number.isRequired,
};

export default HardSkills;
