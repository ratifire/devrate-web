import EditIcon from '@mui/icons-material/Edit';
import { Box, CircularProgress, IconButton, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../redux/modal/modalSlice';
import { useGetSoftSkillsQuery } from '../../../../redux/specialization/specializationApiSlice';
import { useGetMastery } from '../../../SpecializationComponents/hooks';
import SoftSkillsItem from './SoftSkillsItem';
import { styles } from './SoftSkills.styles';

const SoftSkills = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isLoading: isLoadingMastery, isError: isErrorMastery, masteryId } = useGetMastery();

  const {
    data: softSkills,
    isLoading: isLoadingSoftSkill,
    isError: isErrorSoftSkill,
  } = useGetSoftSkillsQuery(masteryId, { skip: !masteryId });

  const handleModalOpen = () => {
    dispatch(openModal({ modalName: 'openSoftSkillsModal' }));
  };

  const isLoading = isLoadingMastery || isLoadingSoftSkill;
  const isError = isErrorMastery || isErrorSoftSkill;

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Typography variant='h6'>{t('specialisation.hardSkills.error')}</Typography>;
  }

  const averageMark = softSkills?.length > 0 ?
    (softSkills.reduce((acc, skill) => acc + skill.averageMark, 0) / softSkills.length).toFixed(1)
    : '0';

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
          <SoftSkillsItem key={index} name={skill.name} value={+Math.round(skill.averageMark).toFixed(1)} />
        ))}
      </Box>

      <Box sx={styles.markWrapper}>
        <Typography variant='h6'>{t('specialization.hardSkills.averageMark')}</Typography>
        <Typography sx={styles.mark} variant='h6'>{`${averageMark || '0'}/10`}</Typography>
      </Box>
    </Box>
  );
};

export default SoftSkills;
