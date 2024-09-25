import AddIcon from '@mui/icons-material/Add';
import { Box, IconButton, TextField, Typography } from '@mui/material';
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
import { ErrorComponent, LoaderComponent } from '../../../UI/Exceptions';

const HardSkillsModal = () => {
  const [state, setState] = useState({
    skill: '',
    helperText: '',
    error: false,
    idDeletedSkills: [],
    allSkills: [],
    addSkills: [],
  });
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openSkillsModal = useSelector((state) => state.modal.openSkillsModal);
  const { masteryId, isError: isErrorMastery, isFetching: isFetchingMastery } = useGetMastery();
  const {
    data: skills,
    isError: isErrorSkills,
    isFetching: isFetchingSkills,
  } = useGetHardSkillsByMasteryIdQuery({ masteryId }, { skip: !masteryId });
  const [addSkillToMastery, { isLoading: isLoadingAddSkill, isError: isErrorAddSkill }] = useAddSkillToMasteryMutation();
  const [deleteSkill, { isLoading: isLoadingDeleteSkill, isError: isErrorDeleteSkill }] = useDeleteSkillByIdMutation();

  const { skill, idDeletedSkills, allSkills, addSkills } = state;
  const isFindSkill = allSkills?.find((v) => v.name === skill.trim());
  const isLoading = isFetchingMastery || isFetchingSkills || isLoadingAddSkill || isLoadingDeleteSkill;
  const isError = isErrorMastery || isErrorSkills || isErrorAddSkill || isErrorDeleteSkill;

  const handleClose = () => dispatch(closeModal({ modalName: 'openSkillsModal' }));
  const updateState = (newState) => setState((prevState) => ({ ...prevState, ...newState }));

  useEffect(() => {
    updateState({ allSkills: skills });
  }, [isFetchingSkills]);

  const handleChange = (e) => {
    updateState({
      skill: e.target.value,
      error: false,
      errorText: '',
    })
  }

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

    if (!skillValue) {
      return updateState({ helperText: 'specialization.modal.skills.errorRequired', error: true });
    }

    if (skillValue.length > 100) {
      return updateState({ helperText: 'specialization.modal.skills.errorLength', error: true });
    }

    if (allSkills.length >= MAX_SKILLS) {
      return updateState({ helperText: 'specialization.modal.skills.errorQuantity', error: true });
    }

    if (isFindSkill) {
      return updateState({ helperText: 'specialization.modal.skills.errorDuplicate', error: true });
    }

    if (allSkills.length < MAX_SKILLS && !isFindSkill && skillValue) {
      if (!isSkillInDataBase) {
        updateState({
          addSkills: [...addSkills, { id, name: skillValue }],
          error: false,
          helperText: '',
        });
      }

      updateState({
        skill: '',
        error: false,
        helperText: '',
        allSkills: [...allSkills, { id, name: skillValue }],
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

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openSkillsModal}>
      {isError && <ErrorComponent />}
      {isLoading && <LoaderComponent />}
      {!isLoading && (
        <>
          <Typography variant='h6' sx={styles.title}>
            {t('specialization.modal.skills.title')}
          </Typography>
          <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
            <Box sx={[styles.input, hardSkillsStyles.box]}>
              <TextField
                variant='outlined'
                autoFocus={true}
                helperText={t(state.helperText)}
                error={state.error}
                value={skill}
                onChange={handleChange}
                label={t('specialization.modal.skills.placeholder')}
                fullWidth
              />
              <IconButton onClick={handleAddSkill} sx={styles.iconBtn}>
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
        </>
      )}
    </ModalLayoutProfile>
  );
};

export default HardSkillsModal;
