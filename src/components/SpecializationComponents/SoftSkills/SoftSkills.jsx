import EditIcon from '@mui/icons-material/Edit';
import { Box, CircularProgress, IconButton, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../redux/modal/modalSlice';
import {
  useGetMasteriesBySpecializationIdQuery,
  useGetSoftSkillsQuery,
  useGetSpecializationByUserIdQuery,
} from '../../../redux/specialization/specializationApiSlice';
import Item from './Item';
import { styles } from './SoftSkills.styles';

const SoftSkills = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const activeMastery = useSelector((state) => state.activeMastery.activeMastery);

  const {
    data: specializations,
    isLoading: isLoadingSpecializations,
    isError: isErrorLoadingSpecializations,
  } = useGetSpecializationByUserIdQuery(userId, {
    skip: !userId,
  });

  const specializationId = specializations?.[0]?.id;

  const {
    data: masteries,
    isLoading: isLoadingMasteries,
    isError: isErrorMasteries,
  } = useGetMasteriesBySpecializationIdQuery(specializationId, { skip: !specializationId });

  const selectMastery = masteries?.find(
    (mastery) => mastery.level && mastery.level.toUpperCase() === activeMastery.toUpperCase()
  );

  const masteryId = selectMastery?.id;

  const {
    data: softSkills,
    isLoading: isLoadingSoftSkill,
    isError: isErrorSoftSkill,
  } = useGetSoftSkillsQuery(masteryId, { skip: !masteryId });

  const handleModalOpen = () => {
    dispatch(openModal({ modalName: 'openSoftSkillsModal' }));
  };

  const averageMarkNumber =
    softSkills?.length > 0
      ? (softSkills?.reduce((acc, skill) => acc + skill.averageMark, 0) / softSkills?.length).toFixed(1)
      : '0';

  const isLoading = isLoadingSpecializations || isLoadingSoftSkill || isLoadingMasteries;
  const isError = isErrorSoftSkill || isErrorLoadingSpecializations || isErrorMasteries;

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Typography variant='h6'>{t('specialisation.hardSkills.error')}</Typography>;
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.title}>
        <Typography variant='h6'>{t('specialization.softSkills.title')}</Typography>
        <IconButton sx={styles.btnIcon} aria-label='Edit user information' onClick={handleModalOpen}>
          <EditIcon />
        </IconButton>
      </Box>

      <Box>
        {softSkills?.map((skill, index) => (
          <Item key={index} name={skill.name} value={+Math.round(skill.averageMark).toFixed(1)} />
        ))}
      </Box>

      <Box sx={styles.markWrapper}>
        <Typography variant='h6'>{t('specialization.hardSkills.averageMark')}</Typography>
        <Typography sx={styles.mark} variant='h6'>{`${averageMarkNumber || '0'}/10`}</Typography>
      </Box>
    </Box>
  );
};

export default SoftSkills;
