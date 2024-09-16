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
import { useGetMastery } from '../../../SpecializationComponents/hooks';
import { SkillChip } from '../../../UI/Specialization/SkillChip';

const SoftSkillsModal = () => {
  const [skill, setSkill] = useState('');
  const [addSkill, setAddSkill] = useState([]);
  const [allSkills, setAllSkills] = useState([]);
  const [idDeletedSkills, setIdDeletedSkills] = useState([]);
  const [availableSkills, setAvailableSkills] = useState([]);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openSkillsModal = useSelector((state) => state.modal.openSoftSkillsModal);
  const { isLoading: isLoadingMastery, isError: isErrorMastery, masteryId } = useGetMastery();
  const { data: skills, isLoading: isLoadingSkills, isError: isErrorSkills } = useGetSoftSkillsByMasteryIdQuery({masteryId}, {skip: !masteryId});
  const [deleteSkill] = useDeleteSkillByIdMutation();
  const [addSkillToMastery] = useAddSkillToMasteryMutation();
  const {data, isLoading: isLoadingAvailableSkills, isError: isErrorAvailableSkills } = useGetAvailableSoftSkillsQuery();

  useEffect(() => {
    if (!isLoadingSkills || !isLoadingAvailableSkills || data) {
      const filteredSkills = data.filter((v) => !skills?.some((skill) => skill.name === v)) || [];

      setAvailableSkills(filteredSkills);
      setAllSkills(skills);
    }
  }, [isLoadingSkills, isLoadingAvailableSkills, data]);

  const handleClose = () => dispatch(closeModal({ modalName: 'openSoftSkillsModal' }));

  const handleAddSkill = () => {
    const isSkillExist = allSkills.find((v) => v.name === skill);
    const isAddedSkill = skills.find((v) => v.name === skill);

    const id = uuidv4();

    if (!isSkillExist && skill) {
      if (!isAddedSkill) {
        setAddSkill((prev) => [...prev, { id: isAddedSkill?.id || id, name: isAddedSkill?.name || skill }]);
      }

      setAllSkills((prev) => [...prev, { id: isAddedSkill?.id || id, name: isAddedSkill?.name || skill }]);
      setAvailableSkills((prev) => prev.filter((availableSkill) => availableSkill !== skill));
      setIdDeletedSkills((prev) => prev.filter((id) => id !== id));
      setSkill('')
    }
  }

  const handleDeleteSkill = (skillId) => {
    const isSkillExist = skills.find((skill) => skill.id === skillId);

    if (isSkillExist) {
      setIdDeletedSkills((prev) => ([...prev, { id: skillId, name: isSkillExist.name }]));
    }

    setAvailableSkills((prev) => [...prev, allSkills.find((skill) => skill.id === skillId).name]);
    setAllSkills((prev) => prev.filter((skill) => skill.id !== skillId));
    setAddSkill((prev) => prev.filter((skill) => skill.id !== skillId));
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
                           handleChange={({target}) => setSkill(target.value)}
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
