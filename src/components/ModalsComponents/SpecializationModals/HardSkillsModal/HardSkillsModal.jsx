import AddIcon from '@mui/icons-material/Add';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
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
import MAX_SKILLS from '../../../../utils/constants/Specialization/maxSkills';
import { useGetMastery } from '../../../../utils/hooks/specialization';
import useMergeState from '../../../../utils/hooks/useMergeState';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { ErrorComponent, LoaderComponent } from '../../../UI/Exceptions';
import { SkillChip } from '../../../UI/Specialization/SkillChip';
import { styles } from '../styles/SkillsModal.styles';
import { styles as hardSkillsStyles } from './HardSkillsModal.styles';

const initialState = {
  skill: '',
  helperText: '',
  error: false,
  idDeletedSkills: [],
  allSkills: [],
  addSkills: [],
};

const HardSkillsModal = () => {
  const [state, updateState] = useMergeState(initialState);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openSkillsModal = useSelector((state) => state.modal.openSkillsModal);
  const { masteryId, isError: isErrorMastery, isFetching: isFetchingMastery } = useGetMastery();
  const {
    data: skills,
    isError: isErrorSkills,
    isFetching: isFetchingSkills,
  } = useGetHardSkillsByMasteryIdQuery({ masteryId }, { skip: !masteryId });
  const [addSkillToMastery, { isLoading: isLoadingAddSkill, isError: isErrorAddSkill }] =
    useAddSkillToMasteryMutation();
  const [deleteSkill, { isLoading: isLoadingDeleteSkill, isError: isErrorDeleteSkill }] = useDeleteSkillByIdMutation();

  const { skill, idDeletedSkills, allSkills, addSkills } = state;
  const isFindSkill = allSkills?.find((v) => v.name === skill.trim());
  const isLoading = isFetchingMastery || isFetchingSkills || isLoadingAddSkill || isLoadingDeleteSkill;
  const isError = isErrorMastery || isErrorSkills || isErrorAddSkill || isErrorDeleteSkill;
  const { error, helperText } = state;

  const handleClose = () => dispatch(closeModal({ modalName: 'openSkillsModal' }));

  useEffect(() => {
    updateState({ allSkills: skills });
  }, [isFetchingSkills]);

  const handleChange = (e) => {
    updateState({
      skill: e.target.value,
      error: false,
      errorText: '',
    });
  };

  const handleDeleteSkill = (skillId) => {
    const isSkillExist = skills.find((skill) => skill.id === skillId);

    if (isSkillExist) {
      updateState({
        error: false,
        errorText: '',
        idDeletedSkills: [...idDeletedSkills, { id: skillId, name: isSkillExist.name }],
      });
    }

    updateState({
      error: false,
      errorText: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addSkillPromises = addSkills.map((skill) =>
      addSkillToMastery({ masteryId, skill: { name: skill.name, type: 'HARD_SKILL' } })
    );

    const deleteSkillPromises = idDeletedSkills.map((v) => deleteSkill(v.id));

    await Promise.all([...addSkillPromises, ...deleteSkillPromises]);

    handleClose();
  };

  if (isLoading) {
    return (
      <ModalLayoutProfile open={openSkillsModal} setOpen={handleClose}>
        <LoaderComponent />
      </ModalLayoutProfile>
    );
  }

  if (isError) {
    return (
      <ModalLayoutProfile open={openSkillsModal} setOpen={handleClose}>
        <ErrorComponent />
      </ModalLayoutProfile>
    );
  }

  return (
    <ModalLayoutProfile open={openSkillsModal} setOpen={handleClose}>
      <Typography sx={styles.title} variant='h6'>
        {t('specialization.modal.skills.title')}
      </Typography>
      <form onKeyDown={handleKeyDown} onSubmit={handleSubmit}>
        <Box sx={[styles.input, hardSkillsStyles.box]}>
          <TextField
            autoFocus
            fullWidth
            error={error}
            helperText={t(helperText)}
            label={t('specialization.modal.skills.placeholder')}
            sx={hardSkillsStyles.input}
            value={skill}
            variant='outlined'
            onChange={handleChange}
          />
          <IconButton sx={styles.iconBtn} onClick={handleAddSkill}>
            <AddIcon />
          </IconButton>
        </Box>
        <Box sx={styles.input}>
          <Box>
            {allSkills?.map((skill) => (
              <SkillChip key={skill.id} skill={skill} onDelete={handleDeleteSkill} />
            ))}
          </Box>
        </Box>
        <ButtonDef
          correctStyle={styles.btn}
          disabled={addSkills.length === 0 && idDeletedSkills.length === 0}
          label={t('profile.modal.btn')}
          type='submit'
          variant='contained'
        />
      </form>
    </ModalLayoutProfile>
  );
};

export default HardSkillsModal;
