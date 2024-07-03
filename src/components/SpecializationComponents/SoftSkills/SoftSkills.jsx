import React, { useEffect, useMemo } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { styles } from './SoftSkills.styles';
import EditIcon from '@mui/icons-material/Edit';
import Item from './Item';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { openModal } from '../../../redux/modal/modalSlice';
import { useGetSoftSkillsQuery } from '../../../redux/specialization/specializationApiSlice';

const SoftSkills = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const openSkillsModal = useSelector((state) => state.modal.openSkillsModal);

  const handleModalOpen = () => {
    dispatch(openModal({ modalName: 'openSkillsModal' }));
  };

  useEffect(() => {
    console.log('State after dispatching openModal:', openSkillsModal);
  }, [openSkillsModal]);

  const { data } = useGetSoftSkillsQuery({ userId: 6661, masteryId: 10001 });

  const averageMark = useMemo(() => Math.round(((data || []).reduce((acc, skill) => acc + skill.averageMark, 0) / (data || []).length) * 10) / 10, [data]);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.title}>
        <Typography variant='h6'>{t('specialization.softSkills.title')}</Typography>
        <IconButton sx={styles.btnIcon} aria-label='Edit user information' onClick={handleModalOpen}>
          <EditIcon />
        </IconButton>
      </Box>

      <Box>
        {(data || []).map((skill, index) => (
          <Item key={index} name={skill.name} value={Math.round(skill.averageMark).toFixed(1)} />
        ))}
      </Box>

      <Box sx={styles.markWrapper}>
        <Typography variant='h6'>{t('specialization.hardSkills.averageMark')}</Typography>
        <Typography sx={styles.mark} variant='h6'>{`${averageMark}/10`}</Typography>
      </Box>
    </Box>
  );
};

SoftSkills.propTypes = {
  userId: PropTypes.number.isRequired,
  masteryId: PropTypes.number.isRequired,
};

export default SoftSkills;
