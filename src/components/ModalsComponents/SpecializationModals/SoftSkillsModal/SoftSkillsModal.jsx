import {v4 as uuidv4} from 'uuid';
import React, { useEffect, useState } from 'react';
import ModalLayoutProfile from '../../../../layouts/ModalLayoutProfile';
import AddIcon from '@mui/icons-material/Add';
import { closeModal } from '../../../../redux/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Box, CircularProgress, IconButton, Typography } from '@mui/material';
import { styles } from '../styles/SkillsModal.styles';
import { useTranslation } from 'react-i18next';
import {
  useAddSkillToMasteryMutation,
  useDeleteSkillByIdMutation,
  useGetAvailableSoftSkillsQuery,
  useGetSoftSkillsByMasteryIdQuery,
} from '../../../../redux/specialization/specializationApiSlice';
import CountrySelect from '../../../FormsComponents/Inputs/CountrySelect';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { SkillChip } from '../../../UI/Specialization/SkillChip';
import { useGetMastery } from '../../../../utils/hooks/specialization';

const SoftSkillsModal = () => {
  const [state, setState] = useState({
    skill: '',
    addSkill: [],
    allSkills: [],
    idDeletedSkills: [],
    availableSkills: [],
  });
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openSkillsModal = useSelector((state) => state.modal.openSoftSkillsModal);
  const { isLoading: isLoadingMastery, isError: isErrorMastery, masteryId } = useGetMastery();
  const { data: skills, isLoading: isLoadingSkills, isError: isErrorSkills } = useGetSoftSkillsByMasteryIdQuery({masteryId}, {skip: !masteryId});
  const [deleteSkill] = useDeleteSkillByIdMutation();
  const [addSkillToMastery] = useAddSkillToMasteryMutation();
  const {data, isLoading: isLoadingAvailableSkills, isError: isErrorAvailableSkills } = useGetAvailableSoftSkillsQuery();
  const {skill, addSkill, availableSkills, allSkills, idDeletedSkills} = state;

  const handleClose = () => dispatch(closeModal({ modalName: 'openSoftSkillsModal' }));
  const updateState= (newState) => setState((prevState) => ({ ...prevState, ...newState }));

  useEffect(() => {
    if (!isLoadingSkills || !isLoadingAvailableSkills || data) {
      const filteredSkills = data?.filter((v) => !skills?.some((skill) => skill.name === v)) || [];

      updateState({
        availableSkills: filteredSkills,
        allSkills: skills,
      });
    }
  }, [isLoadingSkills, isLoadingAvailableSkills, data]);

  const handleAddSkill = () => {
    const isSkillExist = allSkills.find((v) => v.name === skill);
    const isAddedSkill = skills.find((v) => v.name === skill);

    const id = isAddedSkill?.id || uuidv4();

    if (!isSkillExist && skill) {
      if (!isAddedSkill) {
        updateState({ addSkill: [...addSkill, { id, name: isAddedSkill?.name || skill }] });
      }

      updateState({
        skill: '',
        allSkills: [...allSkills, { id, name: isAddedSkill?.name || skill}],
        availableSkills: availableSkills.filter((availableSkill) => availableSkill !== skill),
        idDeletedSkills: idDeletedSkills.filter((v) => v.id !== id)
      })
    }
  }

  const handleDeleteSkill = (skillId) => {
    const isSkillExist = skills.find((v) => v.id === skillId);

    if (isSkillExist) {
      updateState({
        idDeletedSkills: [...idDeletedSkills, { id: skillId, name: isSkillExist.name }],
      })
    }

    updateState({
      availableSkills: [...availableSkills, allSkills.find((skill) => skill.id === skillId).name],
      allSkills: allSkills.filter((skill) => skill.id !== skillId),
      addSkill: addSkill.filter((skill) => skill.id !== skillId)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (idDeletedSkills.length) {
      idDeletedSkills.forEach((v) => {
        deleteSkill(v.id);
      });
    }

    if (addSkill.length) {
      addSkill.forEach((skill) => {
        addSkillToMastery({masteryId, skill: {name: skill.name, type: 'SOFT_SKILL'}});
      });
    }

    handleClose();
  }

  if (isLoadingMastery || isLoadingSkills || isLoadingAvailableSkills) {
    return <CircularProgress />;
  }

  if (isErrorMastery || isErrorSkills || isErrorAvailableSkills) {
    return <Typography variant='h6'>{t('specialisation.skillsModal.error')}</Typography>;
  }

  const labelInput = availableSkills.length ? 'specialization.modal.skills.title' : 'specialization.modal.skills.no_skills'

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openSkillsModal}>
      <Typography variant='h6' sx={styles.title}>
        {t('specialization.modal.skills.title')}
      </Typography>
      <form onSubmit={handleSubmit}>
          <Box sx={styles.input}>
            <CountrySelect label={t(labelInput)}
                           value={skill}
                           countries={availableSkills}
                           disabled={availableSkills?.length === 0}
                           variant="standard"
                           name='softSkill'
                           handleChange={({target}) => updateState({skill: target.value})}
            />
            <IconButton disabled={!skill} sx={styles.iconBtn} onClick={handleAddSkill} >
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
