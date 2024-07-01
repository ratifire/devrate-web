import React, { useEffect, useState } from 'react';
import { styles } from './SpecializationCategories.styles';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { ButtonDef } from '../../Buttons';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import {
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
  console.log('Data from Redux Slice', selectedSpecialization);

  const [masteryData, setMasteryData] = useState({});
  const { data: specializations, isLoading } = useGetSpecializationByUserIdQuery(id);
  const [ triggerGetMainMastery ] = useLazyGetMainMasteryBySpecializationIdQuery();
  const [ updateSpecializationAsMainById ] = useUpdateSpecializationAsMainByIdMutation();

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
    dispatch(setSelectedSpecialization(specialization));
    console.log('User clicked on Specialisation', specialization);
  }

  const handlerAddSpecializations = () => {
    dispatch(setSelectedSpecialization(null));
      if (specializations.length >= 4) return;
      dispatch(openModal({modalName: 'openSpecialization', data:  'addSpecialization'  }));
  }

  const handlerEditSpecialization = () => {
    console.log('Open Specialisation Modal to Edit Specialisation');
    dispatch(openModal({modalName: 'openSpecialization', data:  'editSpecialization' }));
  }

  const handlerChangeMainSpecialization = async (selectedSpecialization) => {
    if (specializations.length === 0) return;
    await updateSpecializationAsMainById({...selectedSpecialization, main: true}).unwrap();
    console.log('Main Spec. changed to', {selectedSpecialization, main: true});
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
        {specializations.length < 4 ? (
          <IconButton
            size="large"
            sx={styles.add_specialization_btn}
            onClick={handlerAddSpecializations}
          >
            <AddIcon />
          </IconButton>
        ) : null}
        {specializations.map(({ id, name, main }) => (
          <Box
            key={id}
            sx={styles.figure}
            className={`figure ${ selectedSpecialization?.id === id ? 'active' : ''}`}
            onClick={() => handlerChangeSpecialization({ id, name, main, mastery: masteryData[id].level })}
          >
            <Box sx={styles.specialization_title_star}>
              <Box sx={styles.specialization_title}>
                <Tooltip title={name.replace(/_/g, ' ')}>
                  <Typography variant="h6">
                    {name.length >= 14 && main ? name.slice(0, 14).replace(/_/g, ' ') + '...' : name.slice(0, 18).replace(/_/g, ' ') + '...'}
                  </Typography>
                </Tooltip>
                <Typography variant="subtitle2">{masteryData[id]?.level}</Typography>
              </Box>
              {main && <StarIcon sx={styles.star} />}
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