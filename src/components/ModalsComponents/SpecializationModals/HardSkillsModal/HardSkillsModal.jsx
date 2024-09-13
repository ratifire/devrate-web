import React, { useState, useCallback } from 'react';
import ModalLayoutProfile from '../../../../layouts/ModalLayoutProfile';
import AddIcon from '@mui/icons-material/Add';
import { closeModal } from '../../../../redux/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Box, CircularProgress, IconButton, TextField, Typography } from '@mui/material';
import { styles } from './HardSkillsModal.styles';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { useTranslation } from 'react-i18next';
import useHardSkillsData from './useHardSkillsData';
import {
  useAddSkillToMasteryMutation,
  useDeleteSkillByIdMutation,
} from '../../../../redux/specialization/specializationApiSlice';
import { SkillChip } from '../../../PageComponents/SpecializationComponents/SkillChip/SkillChip';
import { MAX_SKILLS } from '../constants';

const MemoizedButtonDef = React.memo(ButtonDef);

const HardSkillsModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openSkillsModal = useSelector((state) => state.modal.openSkillsModal);

  const handleClose = useCallback(() => dispatch(closeModal({ modalName: 'openSkillsModal' })), [dispatch]);

  const { skills: fetchedSkills, isLoading, isError, masteryId } = useHardSkillsData();

  const [selectedSkill, setSelectedSkill] = useState('');
  const [showError, setShowError] = useState(false);

  const [addSkillToMastery, { isLoading: isAddingSkill }] = useAddSkillToMasteryMutation();
  const [deleteSkillById, { isLoading: isDeletingSkill }] = useDeleteSkillByIdMutation();

  const formik = useFormik({
    initialValues: { skills: fetchedSkills },
    enableReinitialize: true,
    validate: (values) => {
      const errors = {};
      if (values.skills.length >= MAX_SKILLS) {
        errors.skill = 'profile.modal.userInfo.skills.maxSkills';
      }
      if (showError) {
        if (!selectedSkill) {
          errors.skill = 'profile.modal.userInfo.skills.selectSkill';
        }
        if (values.skills.some((item) => item.name === selectedSkill)) {
          errors.skill = 'profile.modal.userInfo.skills.skillAdded';
        }
      }
      return errors;
    },
    onSubmit: handleClose,
  });

  const handleSkillChange = useCallback(
    (event) => {
      setSelectedSkill(event.target.value);
      setShowError(false);
      formik.validateForm();
    },
    [formik]
  );

  const validateSkill = useCallback(async () => {
    setShowError(true);
    const errors = await formik.validateForm();
    return Object.keys(errors).length === 0;
  }, [formik]);

  const addNewSkill = useCallback(async () => {
    if (!masteryId) {
      console.error('MasteryId is not available');
      return;
    }

    const newSkill = {
      name: selectedSkill,
      type: 'HARD_SKILL',
    };

    try {
      const result = await addSkillToMastery({ masteryId, skill: newSkill }).unwrap();
      formik.setFieldValue('skills', [...formik.values.skills, result]);
      setSelectedSkill('');
      setShowError(false);
    } catch (error) {
      console.error('Failed to add skill:', error);
    }
  }, [selectedSkill, masteryId, addSkillToMastery, formik]);

  const createSkill = useCallback(async () => {
    const isValid = await validateSkill();
    if (isValid) {
      await addNewSkill();
    }
  }, [validateSkill, addNewSkill]);

  const skillDeleteHandler = useCallback(
    async (skillToDeleteId) => {
      try {
        await deleteSkillById(skillToDeleteId).unwrap();
        formik.setFieldValue(
          'skills',
          formik.values.skills.filter((item) => item.id !== skillToDeleteId)
        );
      } catch (error) {
        console.error('Failed to delete skill:', error);
      }
    },
    [deleteSkillById, formik]
  );

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

export default HardSkillsModal;
