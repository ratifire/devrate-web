import React, { useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { styles } from './SoftSkills.styles';
import EditIcon from '@mui/icons-material/Edit';
import Item from './Item';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../redux/modal/modalSlice';
import {
  useLazyGetMainMasteryBySpecializationIdQuery,
  useLazyGetMainSpecializationQuery,
  useLazyGetSoftSkillsQuery,
} from '../../../redux/specialization/specializationApiSlice';
import { selectCurrentUser } from '../../../redux/auth/authSlice';

const SoftSkills = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  // const openSkillsModal = useSelector((state) => state.modal.openSkillsModal);
  const currentUser = useSelector(selectCurrentUser);
  const [getMainSpecialization] = useLazyGetMainSpecializationQuery();
  const [getMainMastery, mainMastery] = useLazyGetMainMasteryBySpecializationIdQuery();
  const [getSoftSkills, softSkills] = useLazyGetSoftSkillsQuery();

  useEffect(() => {
    (async () => {
      const mainSpec = await getMainSpecialization(currentUser.data.id);
      if (!mainSpec.data) {
        return;
      }

      const mainMastery = await getMainMastery(mainSpec.data.id);
      getSoftSkills(mainMastery.data.id);
    })();
  }, []);

  const handleModalOpen = () => {
    dispatch(openModal({ modalName: 'openSoftSkillsModal' }));
  };

  const averageMarkNumber = mainMastery?.data?.softSkillMark.toFixed(1);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.title}>
        <Typography variant="h6">{t('specialization.softSkills.title')}</Typography>
        <IconButton sx={styles.btnIcon} aria-label="Edit user information" onClick={handleModalOpen}>
          <EditIcon />
        </IconButton>
      </Box>

      <Box>
        {(softSkills?.data || []).map((skill, index) => (
          <Item key={index} name={skill.name} value={+Math.round(skill.averageMark).toFixed(1)} />
        ))}
      </Box>

      <Box sx={styles.markWrapper}>
        <Typography variant="h6">{t('specialization.hardSkills.averageMark')}</Typography>
        <Typography sx={styles.mark} variant="h6">{`${averageMarkNumber || '0'}/10`}</Typography>
      </Box>
    </Box>
  );
};

export default SoftSkills;
