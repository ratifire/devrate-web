import AddIcon from '@mui/icons-material/Add';
import { Box, CircularProgress, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ModalLayoutProfile from '../../../../layouts/ModalLayoutProfile';
import { closeModal } from '../../../../redux/modal/modalSlice';
import {
  useAddSkillToMasteryMutation,
  useDeleteSkillByIdMutation,
  useGetHardSkillsByMasteryIdQuery,
} from '../../../../redux/specialization/specializationApiSlice';
import { useGetMastery } from '../../../../utils/hooks/specialization';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { SkillChip } from '../../../UI/Specialization/SkillChip';
import { MAX_SKILLS } from '../constants';
import { styles } from '../styles/SkillsModal.styles';
import { styles as hardSkillsStyles } from './HardSkillsModal.styles';

const HardSkillsModal = () => {
  const [state, setState] = useState({
    skill: '',
    idDeletedSkills: [],
    allSkills: [],
    addSkills: [],
  });
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openSkillsModal = useSelector((state) => state.modal.openSkillsModal);
  const { masteryId, isError: isErrorMastery, isLoading: isLoadingMastery } = useGetMastery();
  const {
    data: skills,
    isError: isErrorSkills,
    isLoading: isLoadingSkills,
  } = useGetHardSkillsByMasteryIdQuery({ masteryId }, { skip: !masteryId });
  const [addSkillToMastery] = useAddSkillToMasteryMutation();
  const [deleteSkill] = useDeleteSkillByIdMutation();

  const { skill, idDeletedSkills, allSkills, addSkills } = state;
  const isFindSkill = allSkills?.find((v) => v.name === skill.trim());
  const isLoading = isLoadingMastery || isLoadingSkills;
  const isError = isErrorMastery || isErrorSkills;

  const handleClose = () => dispatch(closeModal({ modalName: 'openSkillsModal' }));
  const updateState = (newState) => setState((prevState) => ({ ...prevState, ...newState }));

  useEffect(() => {
    updateState({ allSkills: skills });
  }, [isLoadingSkills]);

  const handleDeleteSkill = (skillId) => {
    const isSkillExist = skills.find((skill) => skill.id === skillId);

    if (isSkillExist) {
      updateState({
        idDeletedSkills: [...idDeletedSkills, { id: skillId, name: isSkillExist.name }],
      });
    }

    updateState({
      allSkills: allSkills.filter((skill) => skill.id !== skillId),
      addSkills: addSkills.filter((skill) => skill.id !== skillId),
    });
  };

  const handleAddSkill = () => {
    const isSkillInDataBase = skills.find((v) => v.name === skill);
    const skillValue = skill.trim();
    const id = isSkillInDataBase?.id || uuidv4();

    if (allSkills.length < MAX_SKILLS && !isFindSkill && skillValue) {
      if (!isSkillInDataBase) {
        updateState({ addSkills: [...addSkills, { id, name: skillValue }] });
      }

      updateState({
        allSkills: [...allSkills, { id, name: skillValue }],
        skill: '',
        idDeletedSkills: idDeletedSkills.filter((v) => v.id !== id),
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (addSkills.length) {
      addSkills.forEach((skill) => {
        addSkillToMastery({ masteryId, skill: { name: skill.name, type: 'HARD_SKILL' } });
      });
    }

    if (idDeletedSkills.length) {
      idDeletedSkills.forEach((v) => {
        deleteSkill(v.id);
      });
    }

    handleClose();
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Typography variant='h6'>Something error...</Typography>;
  }

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openSkillsModal}>
      <Typography variant='h6' sx={styles.title}>
        {t('specialization.modal.skills.title')}
      </Typography>
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <Box sx={[styles.input, hardSkillsStyles.box]}>
          <TextField
            variant='outlined'
            autoFocus={true}
            value={skill}
            onChange={(e) => updateState({ skill: e.target.value })}
            label={t('specialization.modal.skills.placeholder')}
            fullWidth
          />
          <IconButton disabled={!skill.trim() || !!isFindSkill} onClick={handleAddSkill} sx={styles.iconBtn}>
            <AddIcon />
          </IconButton>
        </Box>
        <Box sx={styles.input}>
          <Box>
            {allSkills?.map((skill) => (
              <SkillChip onDelete={handleDeleteSkill} key={skill.id} skill={skill} />
            ))}
          </Box>
        </Box>
        <ButtonDef
          variant='contained'
          type='submit'
          label={t('profile.modal.btn')}
          correctStyle={styles.btn}
          disabled={addSkills.length === 0 && idDeletedSkills.length === 0}
        />
      </form>
    </ModalLayoutProfile>
  );
};

export default HardSkillsModal;
