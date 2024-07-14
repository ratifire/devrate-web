// SkillsModal.js

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import AddIcon from '@mui/icons-material/Add';
import { closeModal } from '../../../redux/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Box, CircularProgress, IconButton, TextField, Typography } from '@mui/material';
import { styles } from './SkillsModal.styles';
import { ButtonDef } from '../../Buttons';
import { useTranslation } from 'react-i18next';
import useSkillsData from './useSkillsData';
import {
  useAddSkillToMasteryMutation,
  useDeleteSkillByIdMutation,
} from '../../../redux/specialization/specializationApiSlice';
import { SkillChip } from '../../SpecializationComponents/SkillChip/SkillChip';

const MAX_SKILLS = 20;

const MemoizedButtonDef = React.memo(ButtonDef);

const SkillsModal = ({ activeMastery, setActiveMastery }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openSkillsModal = useSelector((state) => state.modal.openSkillsModal);
  const { id: userId } = useSelector((state) => state.auth.user.data);

  const handleClose = () => dispatch(closeModal({ modalName: 'openSkillsModal' }));

  const { mainMastery, skills: fetchedSkills, isLoading, isError } = useSkillsData(userId, activeMastery);

  const [selectedSkill, setSelectedSkill] = useState('');
  const [showError, setShowError] = useState(false);

  const [addSkillToMastery, { isLoading: isAddingSkill }] = useAddSkillToMasteryMutation();
  const [deleteSkillById, { isLoading: isDeletingSkill }] = useDeleteSkillByIdMutation();

  const formik = useFormik({
    initialValues: { skills: [] },
    validate: values => {
      const errors = {};
      if (values.skills.length >= MAX_SKILLS) {
        errors.skill = 'profile.modal.userInfo.skills.maxSkills';
      }
      if (showError) {
        if (!selectedSkill) {
          errors.skill = 'profile.modal.userInfo.skills.selectSkill';
        }
        if (values.skills.some(item => item.name === selectedSkill)) {
          errors.skill = 'profile.modal.userInfo.skills.skillAdded';
        }
      }
      return errors;
    },
    onSubmit: handleClose,
  });

  useEffect(() => {
    console.log('Active Mastery in SkillsModal:', activeMastery);
    if (mainMastery) {
      setActiveMastery(mainMastery.id.toString()); // Update activeMastery in the parent component
    }
    if (fetchedSkills.length > 0) {
      formik.setFieldValue('skills', fetchedSkills);
    }
  }, [openSkillsModal, activeMastery, mainMastery, fetchedSkills, setActiveMastery]);

  const handleSkillChange = (event) => {
    setSelectedSkill(event.target.value);
    setShowError(false);
    formik.validateForm();
  };

  const validateSkill = async () => {
    setShowError(true);
    const errors = await formik.validateForm();
    return Object.keys(errors).length === 0;
  };

  const addNewSkill = async () => {
    const newSkill = {
      name: selectedSkill,
      type: 'HARD_SKILL',
    };

    try {
      await addSkillToMastery({ masteryId: activeMastery, skill: newSkill }).unwrap();
      formik.setFieldValue('skills', [...formik.values.skills, newSkill]);
      setSelectedSkill('');
      setShowError(false);
    } catch (error) {
      console.error('Failed to add skill:', error);
    }
  };

  const createSkill = async () => {
    const isValid = await validateSkill();
    if (isValid) {
      await addNewSkill();
    }
  };

  const skillDeleteHandler = async (skillToDeleteId) => {
    try {
      await deleteSkillById(skillToDeleteId).unwrap();
      formik.setFieldValue(
        'skills',
        formik.values.skills.filter((item) => item.id !== skillToDeleteId)
      );
    } catch (error) {
      console.error('Failed to delete skill:', error);
    }
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Typography variant='h6'>{t('specialisation.skillsModal.error')}</Typography>;
  }

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openSkillsModal}>
      <Box sx={styles.modalContent}>
        <Typography variant='h6' sx={styles.title}>
          {t('specialization.modal.skills.title')}
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={styles.input100}>
            <TextField
              variant='outlined'
              value={selectedSkill}
              onChange={handleSkillChange}
              label={t('specialization.modal.skills.placeholder')}
              helperText={formik.errors.skill && t(formik.errors.skill)}
              error={!!formik.errors.skill}
              fullWidth
            />
            <IconButton sx={styles.iconBtn} onClick={createSkill} disabled={isAddingSkill || isDeletingSkill}>
              <AddIcon />
            </IconButton>
          </Box>
          <Box sx={styles.input100}>
            <Box sx={styles.wrapperSkills}>
              {formik.values.skills.map((skill) => (
                <SkillChip key={skill.id} skill={skill} onDelete={skillDeleteHandler} />
              ))}
            </Box>
          </Box>
          <MemoizedButtonDef
            variant='contained'
            type='submit'
            label={t('profile.modal.btn')}
            correctStyle={styles.btn}
            disabled={formik.isSubmitting || isAddingSkill || isDeletingSkill}
          />
        </form>
      </Box>
    </ModalLayoutProfile>
  );
};

SkillsModal.propTypes = {
  activeMastery: PropTypes.string.isRequired,
  setActiveMastery: PropTypes.func.isRequired,
};

export default SkillsModal;
