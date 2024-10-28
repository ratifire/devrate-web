import AddIcon from '@mui/icons-material/Add';
import { Box, IconButton, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ModalLayoutProfile from '../../../../layouts/ModalLayoutProfile';
import { closeModal } from '../../../../redux/modal/modalSlice';
import {
  useAddSkillToMasteryMutation,
  useDeleteSkillByIdMutation,
  useGetAvailableSoftSkillsQuery,
  useGetSoftSkillsByMasteryIdQuery,
} from '../../../../redux/specialization/specializationApiSlice';
import { useGetMastery } from '../../../../utils/hooks/specialization';
import useMergeState from '../../../../utils/hooks/useMergeState';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { FormSelect } from '../../../FormsComponents/Inputs';
import { ErrorComponent, LoaderComponent } from '../../../UI/Exceptions';
import { SkillChip } from '../../../UI/Specialization/SkillChip';
import { styles } from '../styles/SkillsModal.styles';

const initialState = {
  skill: '',
  helperText: '',
  error: false,
  addSkill: [],
  allSkills: [],
  idDeletedSkills: [],
  availableSkills: [],
};

const SoftSkillsModal = () => {
  const [state, updateState] = useMergeState(initialState);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openSkillsModal = useSelector((state) => state.modal.openSoftSkillsModal);
  const { isFetching: isFetchingMastery, isError: isErrorMastery, masteryId } = useGetMastery();
  const {
    data: skills,
    isFetching: isFetchingSkills,
    isError: isErrorSkills,
  } = useGetSoftSkillsByMasteryIdQuery({ masteryId }, { skip: !masteryId });
  const [deleteSkill, { isLoading: isLoadingDeleteSkill }] = useDeleteSkillByIdMutation();
  const [addSkillToMastery, { isLoading: isLoadingAddSkill }] = useAddSkillToMasteryMutation();
  const {
    data,
    isFetching: isFetchingAvailableSkills,
    isError: isErrorAvailableSkills,
  } = useGetAvailableSoftSkillsQuery();

  const { skill, addSkill, availableSkills, allSkills, idDeletedSkills } = state;
  const isLoading =
    isFetchingMastery || isFetchingSkills || isFetchingAvailableSkills || isLoadingDeleteSkill || isLoadingAddSkill;
  const isError = isErrorMastery || isErrorSkills || isErrorAvailableSkills;
  const { error, helperText } = state;

  const handleClose = () => dispatch(closeModal({ modalName: 'openSoftSkillsModal' }));

  useEffect(() => {
    if (!isFetchingSkills || !isFetchingAvailableSkills || data) {
      const filteredSkills = data?.filter((v) => !skills?.some((skill) => skill.name === v)) || [];

      updateState({
        availableSkills: filteredSkills,
        allSkills: skills,
      });
    }
  }, [isFetchingSkills, isFetchingAvailableSkills, data]);

  const handleChange = (e) => {
    updateState({
      skill: e.target.value,
      error: false,
      errorText: '',
    });
  };

  const handleAddSkill = () => {
    const isSkillExist = allSkills.find((v) => v.name === skill);
    const isAddedSkill = skills.find((v) => v.name === skill);

    if (!availableSkills.length) {
      return updateState({ helperText: 'specialization.modal.skills.errorNotAvailable', error: true });
    }

    if (!skill) {
      return updateState({ helperText: 'specialization.modal.skills.errorRequired', error: true });
    }

    const id = isAddedSkill?.id || uuidv4();

    if (!isSkillExist && skill) {
      if (!isAddedSkill) {
        updateState({ addSkill: [...addSkill, { id, name: isAddedSkill?.name || skill }] });
      }

      updateState({
        skill: '',
        allSkills: [...allSkills, { id, name: isAddedSkill?.name || skill }],
        availableSkills: availableSkills.filter((availableSkill) => availableSkill !== skill),
        idDeletedSkills: idDeletedSkills.filter((v) => v.id !== id),
      });
    }
  };

  const handleDeleteSkill = (skillId) => {
    const isSkillExist = skills.find((v) => v.id === skillId);

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
      availableSkills: [...availableSkills, allSkills.find((skill) => skill.id === skillId).name],
      allSkills: allSkills.filter((skill) => skill.id !== skillId),
      addSkill: addSkill.filter((skill) => skill.id !== skillId),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const deleteSkillPromises = idDeletedSkills.map((v) => deleteSkill(v.id));

    const addSkillPromises = addSkill.map((skill) =>
      addSkillToMastery({ masteryId, skill: { name: skill.name, type: 'SOFT_SKILL' } })
    );

    await Promise.all([...addSkillPromises, ...deleteSkillPromises]);

    handleClose();
  };

  const labelInput = availableSkills.length
    ? 'specialization.modal.skills.title'
    : 'specialization.modal.skills.no_skills';

  if (isLoading) {
    return (
      <ModalLayoutProfile setOpen={handleClose} open={openSkillsModal}>
        <LoaderComponent />
      </ModalLayoutProfile>
    );
  }

  if (isError) {
    return (
      <ModalLayoutProfile setOpen={handleClose} open={openSkillsModal}>
        <ErrorComponent />
      </ModalLayoutProfile>
    );
  }

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openSkillsModal}>
      <Typography variant='h6' sx={styles.title}>
        {t('specialization.modal.skills.title')}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={styles.input}>
          <FormSelect
            label={t(labelInput)}
            value={skill}
            countries={availableSkills}
            helperText={t(helperText)}
            error={error}
            disabled={availableSkills?.length === 0}
            variant='outlined'
            name='softSkill'
            handleChange={handleChange}
          />
          <IconButton sx={styles.iconBtn} onClick={handleAddSkill}>
            <AddIcon />
          </IconButton>
        </Box>
        <Box sx={styles.input}>
          <Box>
            {allSkills?.map((skill) => (
              <SkillChip key={skill.name} skill={skill} onDelete={handleDeleteSkill} />
            ))}
          </Box>
        </Box>
        <ButtonDef
          variant='contained'
          type='submit'
          label={t('profile.modal.btn')}
          correctStyle={styles.btn}
          disabled={addSkill.length === 0 && idDeletedSkills.length === 0}
        />
      </form>
    </ModalLayoutProfile>
  );
};

export default SoftSkillsModal;
