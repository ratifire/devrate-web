import React, { useEffect, useState } from 'react';
import { styles } from './SpecializationCategories.styles';
import { Box, IconButton, Typography, CircularProgress } from '@mui/material';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import {
  useDeleteSpecializationByIdMutation,
  useGetSpecializationByUserIdQuery,
  useLazyGetMainMasteryBySpecializationIdQuery,
  useUpdateSpecializationAsMainByIdMutation,
} from '../../../../redux/specialization/specializationApiSlice';
import {
  setMainSpecializations,
  setActiveSpecialization,
  setSelectedSpecialization,
} from '../../../../redux/specialization/specializationSlice';
import { openModal } from '../../../../redux/modal/modalSlice';
import DropdownMenu from '../../ProfileComponents/ExperienceSection/DropdownMenu/DropdownMenu';
import CustomTooltip from '../../../UI/CustomTooltip';
import { setActiveMastery } from '../../../../redux/specialization/activeMasterySlice';

const SpecializationCategories = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { id } = useSelector((state) => state.auth.user.data);
  const { activeSpecialization, mainSpecialization, selectedSpecialization } = useSelector((state) => state.specialization);
  const [masteryData, setMasteryData] = useState({});
  const { data: specializations, isLoading, isError } = useGetSpecializationByUserIdQuery(id);
  const specializationsSorted = specializations?.toSorted((a, b) => a.main === b.main ? 0 : a.main ? 1 : -1);
  const [getMainMasteryBySpecId] = useLazyGetMainMasteryBySpecializationIdQuery();
  const [updateSpecializationAsMainById] = useUpdateSpecializationAsMainByIdMutation();
  const [deleteSpecialization] = useDeleteSpecializationByIdMutation();

  const [anchorEl, setAnchorEl] = useState({});
  useEffect(() => {
    dispatch(setMainSpecializations(specializations))
  }, [specializations]);

  useEffect(() => {
    if (!specializations) {
      return;
    }

    specializations.forEach(async (specialization) => {
      const { data } = await getMainMasteryBySpecId(specialization.id);
      setMasteryData((prev) => ({
        ...prev,
        [specialization.id]: data,
      }));
    });
  }, [specializations, activeSpecialization]);

  const handlerChangeSpecialization = (specialization) => {
    if (masteryData[specialization.id]) {
      const spec = { ...specialization, mastery: masteryData[specialization.id].level };
      dispatch(setActiveSpecialization(spec));
      dispatch(setActiveMastery(spec.mastery));
      dispatch(setSelectedSpecialization(spec));
    }
  };

  const handlerAddSpecializations = () => {
    dispatch(setSelectedSpecialization(null));
    if (specializations?.length >= 4) return;
    dispatch(openModal({ modalName: 'openSpecialization', data: 'addSpecialization' }));
  };

  const handlerChangeMainSpecialization = async (selectedSpecialization) => {
    if (specializations?.length === 0 || selectedSpecialization === null) return;
    await updateSpecializationAsMainById({ ...selectedSpecialization, main: true }).unwrap();
    dispatch(setMainSpecializations(selectedSpecialization))
  };

  const handlerDeleteSpecialization = async (id) => {
    await deleteSpecialization(id).unwrap();
    dispatch(setSelectedSpecialization(null));
    dispatch(setActiveSpecialization(mainSpecialization))
    handleCloseMenu(id);
  };

  const handleCloseMenu = (id) => {
    setAnchorEl((prev) => ({
      ...prev,
      [id]: null,
    }));
  };

  const handleMenuOpen = (event, id) => {
    setAnchorEl((prev) => ({
      ...prev,
      [id]: event.currentTarget,
    }));
  };

  const handleEditFeature = (id) => {
    dispatch(openModal({ modalName: 'openSpecialization', data: 'editSpecialization' }));
    handleCloseMenu(id);
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Typography variant='h6'>Something error...</Typography>;
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.specialization_left_box}>
        <Typography variant='h5' sx={styles.page_title}>
          {t('specialization.specialization_title')}
        </Typography>
        <ButtonDef
          variant='outlined'
          disabled={specializations?.length === 0}
          correctStyle={styles.make_main_btn}
          handlerClick={() => handlerChangeMainSpecialization(selectedSpecialization)}
          type='button'
          label='specialization.specialization_btn_make_main'
        />
      </Box>

      <Box sx={styles.specialization_right_box}>
        {specializations?.length < 4 && (
          <IconButton size='large' sx={styles.add_specialization_btn} onClick={handlerAddSpecializations}>
            <AddIcon />
          </IconButton>
        )}
        {specializationsSorted?.map(({ id, name, main }) => (
          <Box
            key={id}
            sx={styles.figure}
            className={`figure ${activeSpecialization?.id === id ? 'active' : ''}`}
            onClick={() => handlerChangeSpecialization({ id, name, main, mastery: masteryData[id]?.level })}
          >
            <Box sx={styles.specialization_title_star}>
              <Box sx={styles.specialization_title}>
                <CustomTooltip title={name}>
                  <Typography variant='h6' sx={styles.specialization_name}>
                    {name}
                  </Typography>
                </CustomTooltip>
                <Typography variant='subtitle2'>Level {masteryData[id]?.level}</Typography>
              </Box>
              {main && <StarIcon sx={styles.star} />}
            </Box>
            <Box sx={styles.hardAndSoftSkills}>
              <Box sx={styles.softSkills}>
                <Typography variant='caption3' sx={styles.skillsStatistic}>
                  {t('specialization.specialization_softSkills')}
                </Typography>
                <Typography variant='body'>{masteryData[id]?.softSkillMark}</Typography>
              </Box>
              <Box sx={styles.hardSkills}>
                <Typography variant='caption3' sx={styles.skillsStatistic}>
                  {t('specialization.specialization_hardSkills')}
                </Typography>
                <Typography variant='body'>{masteryData[id]?.hardSkillMark}</Typography>
              </Box>
            </Box>
            <Box sx={styles.figure_deco} className='figure__deco'>
              <IconButton sx={styles.editSpecialization_btn} onClick={(event) => handleMenuOpen(event, id)}>
                <MoreVertIcon sx={styles.editSpecialization} />
              </IconButton>{' '}
              <DropdownMenu
                anchorEl={anchorEl[id]}
                handleCloseMenu={() => handleCloseMenu(id)}
                handleEditFeature={() => handleEditFeature(id)}
                handleDeleteFeature={() => handlerDeleteSpecialization(id)}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SpecializationCategories;
