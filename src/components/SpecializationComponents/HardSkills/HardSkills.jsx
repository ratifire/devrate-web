import React, { useEffect } from 'react';
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
  useGetMainMasteryBySpecializationIdQuery 
} from '../../../redux/specialization/specializationApiSlice';

const HardSkills = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const openSkillsModal = useSelector((state) => state.modal.openSkillsModal);
  const { id: userId } = useSelector((state) => state.auth.user.data);

  const handleModalOpen = () => {
    dispatch(openModal({ modalName: 'openSkillsModal' }));
  };

  useEffect(() => {
    console.log('State after dispatching openModal:', openSkillsModal);
  }, [openSkillsModal]);

  const { data: specializations, isLoading: isLoadingSpecializations } = useGetSpecializationByUserIdQuery(userId);

  const specializationId = specializations?.[0]?.id; // Adjust this based on the actual structure of specializations data
  console.log('Specializations ID:', specializationId);

  const { data: mainMastery, isLoading: isLoadingMainMastery } = useGetMainMasteryBySpecializationIdQuery(specializationId, { skip: !specializationId });

  useEffect(() => {
    if (mainMastery) {
      console.log('Main Mastery:', mainMastery);
    }
  }, [mainMastery]);

  const {
    data: skills = [],
    isLoading: isLoadingSkills,
    isError: isErrorSkills,
  } = useGetHardSkillsByMasteryIdQuery({ userId, masteryId: mainMastery?.id }, { skip: !mainMastery?.id });

  if (isLoadingSpecializations || isLoadingMainMastery || isLoadingSkills) {
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

      <Box>
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
