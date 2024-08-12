import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton, CircularProgress } from '@mui/material';
import { styles } from './HardSkills.styles';
import EditIcon from '@mui/icons-material/Edit';
import SkillItem from './SkillItem';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../redux/modal/modalSlice';
import {
  useGetHardSkillsByMasteryIdQuery,
  useGetSpecializationByUserIdQuery,
  useGetMasteriesBySpecializationIdQuery,
} from '../../../redux/specialization/specializationApiSlice';

const HardSkills = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const activeMastery = useSelector((state) => state.activeMastery.activeMastery);

  const [specializationId, setSpecializationId] = useState(null);
  const [masteryId, setMasteryId] = useState(null);

  const handleModalOpen = () => {
    dispatch(openModal({ modalName: 'openSkillsModal', activeMastery }));
  };

  const { data: specializations, isLoading: isLoadingSpecializations } = useGetSpecializationByUserIdQuery(userId);

  useEffect(() => {
    if (specializations && specializations.length > 0) {
      setSpecializationId(specializations[0].id);
    }
  }, [specializations]);

  const { data: masteries, isLoading: isLoadingMasteries } = useGetMasteriesBySpecializationIdQuery(specializationId, { skip: !specializationId });

  useEffect(() => {
    if (masteries && masteries.length > 0 && activeMastery) {
      const selectedMastery = masteries.find((mastery) => mastery.level && mastery.level.toUpperCase() === activeMastery.toUpperCase());
      setMasteryId(selectedMastery?.id || null);
    }
  }, [masteries, activeMastery]);

  const {
    data: skills = [],
    isLoading: isLoadingSkills,
    isError: isErrorSkills,
  } = useGetHardSkillsByMasteryIdQuery({ userId, masteryId }, { skip: !masteryId });

  if (isLoadingSpecializations || isLoadingMasteries || isLoadingSkills) {
    return <CircularProgress />;
  }

  if (isErrorSkills) {
    return <Typography variant='h6'>{t('specialisation.hardSkills.error')}</Typography>;
  }

  const averageMark = (skills.reduce((acc, skill) => acc + skill.averageMark, 0) / skills.length).toFixed(1);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.title}>
        <Typography variant='h6'>{t('specialization.hardSkills.title')}</Typography>
        <IconButton sx={styles.btnIcon} aria-label='Edit user information' onClick={handleModalOpen}>
          <EditIcon />
        </IconButton>
      </Box>

      <Box sx={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <SkillItem key={index} name={skill.name} value={Math.round(skill.averageMark * 10) / 10} />
        ))}
      </Box>

      <Box sx={styles.markWrapper}>
        <Typography variant='h6'>{t('specialization.hardSkills.averageMark')}</Typography>
        <Typography sx={styles.mark} variant='h6'>{`${averageMark}/10`}</Typography>
      </Box>
    </Box>
  );
};

export default HardSkills;
