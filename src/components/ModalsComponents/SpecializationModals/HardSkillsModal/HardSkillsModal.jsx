/* eslint-disable */

import {v4 as uuidv4} from 'uuid';
import React, { useCallback, useEffect, useState } from 'react';
import ModalLayoutProfile from '../../../../layouts/ModalLayoutProfile';
import AddIcon from '@mui/icons-material/Add';
import { closeModal } from '../../../../redux/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Box, CircularProgress, IconButton, TextField, Typography } from '@mui/material';
import { styles } from '../styles/SkillsModal.styles';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { useTranslation } from 'react-i18next';
import { MAX_SKILLS } from '../constants';
import { styles as hardSkillsStyles } from './HardSkillsModal.styles';
import { SkillChip } from '../../../UI/Specialization/SkillChip';
import {
  useAddSkillToMasteryMutation, useDeleteSkillByIdMutation,
  useGetHardSkillsByMasteryIdQuery,
} from '../../../../redux/specialization/specializationApiSlice';
import { useGetMastery } from '../../../SpecializationComponents/hooks';

const HardSkillsModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openSkillsModal = useSelector((state) => state.modal.openSkillsModal);
  const [skill, setSkill] = useState('');
  const [idDeletedSkills, setIdDeletedSkills] = useState([]);
  const [allSkills, setAllSkills] = useState([]);
  const [addSkills, setAddSkills] = useState([]);
  const { masteryId, isError: isErrorMastery, isLoading: isLoadingMastery } = useGetMastery();
  const {data: skills, isError: isErrorSkills, isLoading: isLoadingSkills} = useGetHardSkillsByMasteryIdQuery({masteryId}, {skip: !masteryId});
  const [addSkillToMastery] = useAddSkillToMasteryMutation();
  const [deleteSkill] = useDeleteSkillByIdMutation();
  const isFindSkill = allSkills?.find((v) => v.name === skill.trim());

  // console.log('allSkills', allSkills);
  // console.log('addSkills', addSkills);
  useEffect(() => {
    setAllSkills(skills);
  }, [isLoadingSkills]);

  const handleClose = useCallback(() => dispatch(closeModal({ modalName: 'openSkillsModal' })), [dispatch]);

  const handleDeleteSkill = (softSkillId) => {
    const isSkillExist = skills.find((skill) => skill.id === softSkillId);

    if (isSkillExist) {
      setIdDeletedSkills((prev) => ([...prev, softSkillId]));
    }

    setAllSkills((prev) => prev.filter((skill) => skill.id !== softSkillId));
    setAddSkills((prev) => prev.filter((skill) => skill.id !== softSkillId));
  }

  const handleAddSkill = () => {
    const isSkillExist = allSkills.find((v) => v.name === skill);
    const skillValue = skill.trim();
    const id = uuidv4();

    if (allSkills.length < MAX_SKILLS && !isSkillExist && skillValue) {
      setAddSkills((prev) => ([...prev, { id, name: skillValue }]));
      setAllSkills((prev) => ([...prev, { id, name: skillValue }]));
      setSkill('');
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setSkill('');
      handleAddSkill();
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (addSkills.length) {
      addSkills.forEach((skill) => {
        addSkillToMastery({masteryId, skill: {name: skill.name, type: 'HARD_SKILL'}});
      });
    }

    if (idDeletedSkills.length) {
      idDeletedSkills.forEach((id) => {
        deleteSkill(id);
      });
    }

    handleClose();
  }

  if (isLoadingMastery || isLoadingSkills) {
    return <CircularProgress />;
  }

  if (isErrorMastery || isErrorSkills) {
    return <Typography variant='h6'>{t('specialisation.skillsModal.error')}</Typography>;
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
              onChange={(e) => setSkill(e.target.value)}
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
