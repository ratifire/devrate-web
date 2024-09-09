/* eslint-disable */
import React, { useEffect, useState } from 'react';
import ModalLayoutProfile from '../../../../layouts/ModalLayoutProfile';
import AddIcon from '@mui/icons-material/Add';
import { closeModal } from '../../../../redux/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Box, IconButton, Typography } from '@mui/material';
import { styles } from './SoftSkillsModal.styles';
import { useTranslation } from 'react-i18next';
import {
  useCreateSkillsBulkMutation, useDeleteSkillByIdMutation,
  useGetAvailableSoftSkillsQuery,
  useLazyGetSoftSkillsQuery,
} from '../../../../redux/specialization/specializationApiSlice';
import CountrySelect from '../../../FormsComponents/Inputs/CountrySelect';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { SkillChip } from '../../../PageComponents/SpecializationComponents/SkillChip/SkillChip';
import { useGetMastery } from '../../../SpecializationComponents/hooks';

const SoftSkillsModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [softSkill, setSoftSkill] = useState('');
  const openSkillsModal = useSelector((state) => state.modal.openSoftSkillsModal);

  const handleClose = () => dispatch(closeModal({ modalName: 'openSoftSkillsModal' }));

  const availableSoftSkills = useGetAvailableSoftSkillsQuery();
  const [createSkillsBulk] = useCreateSkillsBulkMutation();
  const [deleteSkill] = useDeleteSkillByIdMutation();
  const [getSoftSkills, loadedSoftSkills] = useLazyGetSoftSkillsQuery();
  const deleteClickHandler = (softSkillId) => {
    deleteSkill(softSkillId);
  }

  // Todo: Добавить обработку ошибок и загрузки
  const { isLoading: isLoadingMastery, isError: isErrorMastery, masteryId } = useGetMastery();

  // Todo: Удалить юзЭффект
  useEffect(() => {
    (async () => {
      getSoftSkills(masteryId);
    })();
  }, []);

  // Todo: хз что это
  const addBtnClickHandler = () => {
    if (!softSkill.trim().length) {
      return;
    }

    if (masteryId) {
      return;
    }

    createSkillsBulk({
      masteryId,
      skills: [softSkill].map((skill) => ({
        name: skill,
        type: 'SOFT_SKILL',
      }))
    });
  }

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openSkillsModal}>
      <Box sx={styles.modalContent}>
        <Typography variant='h6' sx={styles.title}>
          {t('specialization.modal.skills.title')}
        </Typography>

        <Box sx={styles.input100}>
          <CountrySelect label={t('modal.education.startYear')}
                         value={softSkill}
                         countries={availableSoftSkills.data || []}
                         variant="standard"
                         handleChange={({target}) => setSoftSkill(target.value)}
          />
          <IconButton sx={styles.iconBtn} onClick={addBtnClickHandler} >
            <AddIcon />
          </IconButton>
        </Box>
        <Box sx={styles.input100}>
          <Box sx={styles.wrapperSkills}>
            {loadedSoftSkills?.data?.map((skill) => (
              <SkillChip key={skill.name} skill={skill} onDelete={deleteClickHandler} />
            ))}
          </Box>
        </Box>
        <ButtonDef
          variant='contained'
          type='submit'
          label={t('profile.modal.btn')}
          handlerClick={handleClose}
          correctStyle={styles.btn}
        />
      </Box>
    </ModalLayoutProfile>
  );
};

export default SoftSkillsModal;
