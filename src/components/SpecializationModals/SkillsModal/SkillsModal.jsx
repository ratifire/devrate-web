import React, { useEffect, useState } from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { closeModal } from '../../../redux/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Box, IconButton, Typography, Chip, TextField, CircularProgress } from '@mui/material';
import { styles } from './SkillsModal.styles';
import { ButtonDef } from '../../Buttons';
import { useTranslation } from 'react-i18next';
import { 
  useGetHardSkillsByMasteryIdQuery, 
  useGetSpecializationByUserIdQuery, 
  useGetMainMasteryBySpecializationIdQuery,
  useAddSkillToMasteryMutation,
  useDeleteSkillByIdMutation, 
} from '../../../redux/specialization/specializationApiSlice';

const MAX_SKILLS = 20;

const SkillsModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openSkillsModal = useSelector((state) => state.modal.openSkillsModal);
  const { id: userId } = useSelector((state) => state.auth.user.data);

  const handleClose = () => dispatch(closeModal({ modalName: 'openSkillsModal' }));

  const { data: specializations, isLoading: isLoadingSpecializations } = useGetSpecializationByUserIdQuery(userId);

  const specializationId = specializations?.[0]?.id;

  const { data: mainMastery, isLoading: isLoadingMainMastery } = useGetMainMasteryBySpecializationIdQuery(specializationId, { skip: !specializationId });

  const {
    data: skills = [],
    isLoading: isLoadingSkills,
    isError: isErrorSkills,
  } = useGetHardSkillsByMasteryIdQuery({ userId, masteryId: mainMastery?.id }, { skip: !mainMastery?.id });

  const [selectedSkill, setSelectedSkill] = useState('');
  const [errorSkill, setErrorSkill] = useState(false);
  const [helperTextSkill, setHelperTextSkill] = useState('');

  const [addSkillToMastery, { isLoading: isAddingSkill }] = useAddSkillToMasteryMutation(); 
  const [deleteSkillById, { isLoading: isDeletingSkill }] = useDeleteSkillByIdMutation(); 

  const formik = useFormik({
    initialValues: {
      skills: [],
    },
    onSubmit: () => {
      handleClose();
    },
  });

  useEffect(() => {
    if (skills.length > 0) {
      formik.setFieldValue('skills', skills);
    }
  }, [skills]);

  const handleSkillChange = (event) => {
    setSelectedSkill(event.target.value);
    setErrorSkill(false);
    setHelperTextSkill('');
  };

  const createSkill = async () => {
    if (formik.values.skills.length >= MAX_SKILLS) {
      setErrorSkill(true);
      setHelperTextSkill('You can not add more then 20 skills');
      return;
    }

    if (!selectedSkill) {
      setErrorSkill(true);
      setHelperTextSkill('profile.modal.userInfo.skills.selectSkill');
      return;
    }

    if (formik.values.skills.some((item) => item.name === selectedSkill)) {
      setErrorSkill(true);
      setHelperTextSkill('profile.modal.userInfo.skills.skillAdded');
      return;
    }

    const newSkill = {
      name: selectedSkill,
      type: 'HARD_SKILL',
    };

    try {
      await addSkillToMastery({ masteryId: mainMastery.id, skill: newSkill }).unwrap();
      formik.setFieldValue('skills', [...formik.values.skills, newSkill]);
      setSelectedSkill('');
      setErrorSkill(false);
      setHelperTextSkill('');
    } catch (error) {
      console.error('Failed to add skill:', error);
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

  if (isLoadingSpecializations || isLoadingMainMastery || isLoadingSkills) {
    return <CircularProgress />;
  }

  if (isErrorSkills) {
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
              helperText={helperTextSkill && t(helperTextSkill)}
              error={errorSkill}
              fullWidth
            />
            <IconButton sx={styles.iconBtn} onClick={createSkill} disabled={isAddingSkill || isDeletingSkill}>
              <AddIcon />
            </IconButton>
          </Box>
          <Box sx={styles.input100}>
            <Box sx={styles.wrapperSkills}>
              {formik.values.skills.map((skill) => (
                <Chip
                  key={skill.id}
                  label={<Typography variant='subtitle2'>{skill.name}</Typography>}
                  onDelete={() => skillDeleteHandler(skill.id)}
                  deleteIcon={<CloseIcon />}
                  sx={styles.skillItem}
                />
              ))}
            </Box>
          </Box>
          <ButtonDef 
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

export default SkillsModal;
