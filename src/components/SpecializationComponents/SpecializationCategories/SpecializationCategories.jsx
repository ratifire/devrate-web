import React, { useEffect, useState } from 'react';
import { styles } from './SpecializationCategories.styles';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { ButtonDef } from '../../Buttons';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import {
  useDeleteSpecializationByIdMutation,
  useGetSpecializationByUserIdQuery,
  useLazyGetMainMasteryBySpecializationIdQuery,
  useUpdateSpecializationAsMainByIdMutation,
} from '../../../redux/specialization/specializationApiSlice';
import { setSelectedSpecialization } from '../../../redux/specialization/specializationSlice';
import { openModal } from '../../../redux/modal/modalSlice';

const SpecializationCategories = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { id } = useSelector((state) => state.auth.user.data);
  const selectedSpecialization = useSelector((state) => state.specialisation.selectedSpecialization);
  console.log('Selected Specialization || Data from Redux Slice', selectedSpecialization);

  const [masteryData, setMasteryData] = useState({});
  const { data: specializations, isLoading } = useGetSpecializationByUserIdQuery(id);
  const [ triggerGetMainMastery ] = useLazyGetMainMasteryBySpecializationIdQuery();
  const [ updateSpecializationAsMainById ] = useUpdateSpecializationAsMainByIdMutation();
  const [ deleteSpecialization ] = useDeleteSpecializationByIdMutation();

  useEffect(() => {
    if (specializations && specializations.length > 0) {
      specializations.forEach(async (specialization) => {
        const { data } = await triggerGetMainMastery(specialization.id);
        setMasteryData((prev) => ({
          ...prev,
          [specialization.id]: data,
        }));
      });
    }
  }, [specializations, triggerGetMainMastery]);

  const handlerChangeSpecialization = (specialization) => {
    const spec = { ...specialization, mastery: specialization.mastery.slice(0,1) + specialization.mastery.slice(1).toLowerCase() }
    dispatch(setSelectedSpecialization(spec));
  }

  const handlerAddSpecializations = () => {
    dispatch(setSelectedSpecialization(null));
      if (specializations?.length >= 4) return;
      dispatch(openModal({modalName: 'openSpecialization', data:  'addSpecialization'  }));
  }

  const handlerEditSpecialization = () => {
    dispatch(openModal({modalName: 'openSpecialization', data:  'editSpecialization' }));
  }

  const handlerChangeMainSpecialization = async (selectedSpecialization) => {
    if (specializations?.length === 0) return;
    await updateSpecializationAsMainById({...selectedSpecialization, main: true}).unwrap();
  }

  const handlerDeleteSpecialization = async (id) => {
    await deleteSpecialization(id).unwrap();
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.specialization_left_box}>
        <Typography variant="h5" sx={styles.page_title}>{t('specialization.specialization_title')}</Typography>
        <ButtonDef
          variant="outlined"
          correctStyle={styles.make_main_btn}
          handlerClick={() => handlerChangeMainSpecialization(selectedSpecialization)}
          type="button"
          label={t('specialization.specialization_btn_make_main')}
        />
      </Box>

      <Box sx={styles.specialization_right_box}>
        {specializations?.length < 4 ? (
          <IconButton
            size="large"
            sx={styles.add_specialization_btn}
            onClick={handlerAddSpecializations}
          >
            <AddIcon />
          </IconButton>
        ) : null}
        {specializations?.map(({ id, name, main }) => (
          <Box
            key={id}
            sx={styles.figure}
            className={`figure ${ selectedSpecialization?.id === id ? 'active' : ''}`}
            onClick={() => handlerChangeSpecialization({ id, name, main, mastery: masteryData[id].level })}
          >
            <Box sx={styles.specialization_title_star}>
              <Box sx={styles.specialization_title}>
                <Tooltip title={name}>
                  <Typography variant="h6">
                    {name.length >= 14 || name.length >= 14 && main ? name.slice(0, 14) + ' ...' : name.slice(0, 18)}
                  </Typography>
                </Tooltip>
                <Typography variant="subtitle2">Level {masteryData[id]?.level.slice(0,1) + masteryData[id]?.level.slice(1).toLowerCase()}</Typography>
              </Box>
              {main
                ? <StarIcon sx={styles.star} />
                :
                <IconButton sx={styles.deleteBtn} onClick={() => handlerDeleteSpecialization(id)}>
                  <ClearIcon />
                </IconButton>}

            </Box>
            <Box sx={styles.hardAndSoftSkills}>
              <Box sx={styles.softSkills}>
                <Typography variant="caption3"
                            sx={styles.skillsStatistic}>{t('specialization.specialization_softSkills').toUpperCase().split(' ').join('')}</Typography>
                <Typography variant="body">{masteryData[id]?.softSkillMark}</Typography>
              </Box>
              <Box sx={styles.hardSkills}>
                <Typography variant="caption3"
                            sx={styles.skillsStatistic}>{t('specialization.specialization_hardSkills').toUpperCase().split(' ').join('')}</Typography>
                <Typography variant="body">{masteryData[id]?.hardSkillMark}</Typography>
              </Box>
            </Box>
            <Box
              sx={styles.figure_deco}
              className="figure__deco"
            >
              <IconButton sx={styles.editSpecialization_btn} onClick={handlerEditSpecialization}>
                <EditIcon sx={styles.editSpecialization} />
              </IconButton>
            </Box>
          </Box>
          ))}
        </Box>
      </Box>
  );
};

export default SpecializationCategories;