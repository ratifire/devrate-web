import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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

const HardSkills = ({ activeMastery, setActiveMastery }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const openSkillsModal = useSelector((state) => state.modal.openSkillsModal);
  const { id: userId } = useSelector((state) => state.auth.user.data);

  const [specializationId, setSpecializationId] = useState(null);
  const [masteryId, setMasteryId] = useState(null);

  const handleModalOpen = () => {
    dispatch(openModal({ modalName: 'openSkillsModal' }));
  };

  useEffect(() => {}, [openSkillsModal]);

  useEffect(() => {
    console.log('Specialization ID:', specializationId);
  }, [specializationId]);

  useEffect(() => {
    console.log('Mastery ID:', masteryId);
  }, [masteryId]);

  useEffect(() => {
    console.log('Active Mastery:', activeMastery);
  }, [activeMastery]);

  const { data: specializations, isLoading: isLoadingSpecializations } = useGetSpecializationByUserIdQuery(userId);

  useEffect(() => {
    console.log('Specializations:', specializations);
    if (specializations && specializations.length > 0) {
      setSpecializationId(specializations[0].id);
    }
  }, [specializations]);

  const { data: masteries, isLoading: isLoadingMasteries } = useGetMasteriesBySpecializationIdQuery(specializationId, { skip: !specializationId });

  useEffect(() => {
    console.log('Masteries:', masteries);
    if (masteries && masteries.length > 0) {
      const defaultMastery = masteries[0].level;
      if (!activeMastery) {
        setActiveMastery(defaultMastery);
      }
    }
  }, [masteries, activeMastery, setActiveMastery]);

  useEffect(() => {
    if (masteries && masteries.length > 0 && activeMastery) {
      const selectedMastery = masteries.find((mastery) => mastery.level && mastery.level.toUpperCase() === activeMastery.toUpperCase());
      console.log('Selected Mastery:', selectedMastery);
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

HardSkills.propTypes = {
  activeMastery: PropTypes.string.isRequired,
  setActiveMastery: PropTypes.func.isRequired,
};

export default HardSkills;
