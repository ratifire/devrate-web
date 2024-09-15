/* eslint-disable */
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
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [softSkill, setSoftSkill] = useState('');
  const openSkillsModal = useSelector((state) => state.modal.openSoftSkillsModal);
  const [idDeletedSkills, setIdDeletedSkills] = useState([]);
  const [addSkill, setAddSkill] = useState([]);
  const [allSkills, setAllSkills] = useState([]);
  const handleClose = () => dispatch(closeModal({ modalName: 'openSoftSkillsModal' }));

  const {data: availableSkills, isLoading: isLoadingAvailableSkills, isError: isErrorAvailableSkills } = useGetAvailableSoftSkillsQuery();

  const [addSkillToMastery] = useAddSkillToMasteryMutation();
  const [deleteSkill] = useDeleteSkillByIdMutation();

  const handleDeleteSkill = (softSkillId) => {
    setAllSkills((prev) => prev.filter((skill) => skill.id !== softSkillId));
    setIdDeletedSkills((prev) => ([...prev, softSkillId]));
  }

  const { isLoading: isLoadingMastery, isError: isErrorMastery, masteryId } = useGetMastery();
  const { data: skills, isLoading: isLoadingSkills, isError: isErrorSkills } = useGetSoftSkillsByMasteryIdQuery({masteryId}, {skip: !masteryId});

  useEffect(() => {
    setAllSkills(skills);
  }, [isLoadingSkills]);

  const handleAddSkill = () => {
    const isSkillExist = allSkills.find((skill) => skill.name === softSkill);

    if (!isSkillExist && softSkill) {
      setAllSkills((prev) => [...prev, { id: uuidv4(), name: softSkill, type: 'SOFT_SKILL' }]);
      setAddSkill((prev) => [...prev, { name: softSkill, type: 'SOFT_SKILL' }]);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (idDeletedSkills.length) {
      idDeletedSkills.forEach((id) => {
        deleteSkill(id);
      });
    }

    if (addSkill.length) {
      addSkill.forEach((skill) => {
        addSkillToMastery({masteryId, skill});
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

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openSkillsModal}>
      <Typography variant='h6' sx={styles.title}>
        {t('specialization.softSkills.title')}
      </Typography>
      <form onSubmit={handleSubmit}>
          <Box sx={styles.input}>
            <CountrySelect label={t('specialization.modal.skills.title')}
                           value={softSkill}
                           countries={availableSkills || []}
                           variant="standard"
                           handleChange={({target}) => setSoftSkill(target.value)}
            />
            <IconButton sx={styles.iconBtn} onClick={handleAddSkill} >
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
          />
      </form>
    </ModalLayoutProfile>
  );
};

export default SoftSkillsModal;
