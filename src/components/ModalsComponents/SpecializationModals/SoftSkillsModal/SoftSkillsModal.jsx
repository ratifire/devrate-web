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
  const {data: availableSkills, isLoading: isLoadingAvailableSkills, isError: isErrorAvailableSkills } = useGetAvailableSoftSkillsQuery();
  const [addSkillToMastery] = useAddSkillToMasteryMutation();
  const [deleteSkill] = useDeleteSkillByIdMutation();
  const { isLoading: isLoadingMastery, isError: isErrorMastery, masteryId } = useGetMastery();
  const { data: skills, isLoading: isLoadingSkills, isError: isErrorSkills } = useGetSoftSkillsByMasteryIdQuery({masteryId}, {skip: !masteryId});

  useEffect(() => {
    setAllSkills(skills);
  }, [isLoadingSkills]);

  const handleClose = () => dispatch(closeModal({ modalName: 'openSoftSkillsModal' }));

  const handleAddSkill = () => {
    const isSkillExist = allSkills.find((skill) => skill.name === softSkill);
    const id = uuidv4();

    if (!isSkillExist && softSkill) {
      setAllSkills((prev) => [...prev, { id, name: softSkill }]);
      setAddSkill((prev) => [...prev, { id, name: softSkill }]);
    }
  }

  const handleDeleteSkill = (softSkillId) => {
    const isSkillExist = skills.find((skill) => skill.id === softSkillId);

    if (isSkillExist) {
      setIdDeletedSkills((prev) => ([...prev, softSkillId]));
    }

    setAllSkills((prev) => prev.filter((skill) => skill.id !== softSkillId));
    setAddSkill((prev) => prev.filter((skill) => skill.id !== softSkillId));
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
            disabled={addSkill.length === 0 && idDeletedSkills.length === 0}
          />
      </form>
    </ModalLayoutProfile>
  );
};

export default SoftSkillsModal;
