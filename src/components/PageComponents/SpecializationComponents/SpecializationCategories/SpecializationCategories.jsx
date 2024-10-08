import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import { Box, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../../redux/modal/modalSlice';
import { setActiveMastery } from '../../../../redux/specialization/activeMasterySlice';
import {
  useDeleteSpecializationByIdMutation,
  useGetSpecializationByUserIdQuery,
  useLazyGetMainMasteryBySpecializationIdQuery,
  useUpdateSpecializationAsMainByIdMutation,
} from '../../../../redux/specialization/specializationApiSlice';
import { setActiveSpecialization, setMainSpecializations } from '../../../../redux/specialization/specializationSlice';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import CustomTooltip from '../../../UI/CustomTooltip';
import { ErrorComponent, LoaderComponent } from '../../../UI/Exceptions';
import DropdownMenu from '../../ProfileComponents/PersonalProfile/ExperienceSection/DropdownMenu';
import { styles } from './SpecializationCategories.styles';

const SpecializationCategories = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { id } = useSelector((state) => state.auth.user.data);
  const { activeSpecialization, mainSpecialization } = useSelector((state) => state.specialization);
  const [masteryData, setMasteryData] = useState({});
  const {
    data: specializations,
    isLoading: isLoadingGetSpecialization,
    isFetching,
    isError,
  } = useGetSpecializationByUserIdQuery(id, { skip: !id });
  const specializationsSorted = specializations?.toSorted((a, b) => (a.main === b.main ? 0 : a.main ? 1 : -1));
  const [getMainMasteryBySpecId, { isLoading: isLoadingGetMainMastery }] =
    useLazyGetMainMasteryBySpecializationIdQuery();
  const [updateSpecializationAsMainById, { isLoading: isLoadingUpdateSpecialization }] =
    useUpdateSpecializationAsMainByIdMutation();
  const [deleteSpecialization, { isLoading: isLoadingDeleteSpecialization }] = useDeleteSpecializationByIdMutation();
  const isLoading =
    isLoadingGetSpecialization ||
    isLoadingGetMainMastery ||
    isLoadingUpdateSpecialization ||
    isLoadingDeleteSpecialization ||
    isFetching;
  const [anchorEl, setAnchorEl] = useState({});

  useEffect(() => {
    if (!specializations || isLoading) {
      return;
    }

    dispatch(setMainSpecializations(specializations));

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
      dispatch(setActiveMastery(spec.mastery));

      if (activeSpecialization?.id !== specialization.id) {
        dispatch(setActiveSpecialization(spec));
      }
    }
  };

  const handlerAddSpecializations = () => {
    if (specializations?.length >= 4) return;
    dispatch(openModal({ modalName: 'openSpecialization', data: 'addSpecialization' }));
  };

  const handlerChangeMainSpecialization = async () => {
    if (specializations?.length === 0 || !activeSpecialization) return;
    await updateSpecializationAsMainById(
      { ...activeSpecialization, main: true },
      { skip: !activeSpecialization }
    ).unwrap();
    dispatch(setMainSpecializations(activeSpecialization));
  };

  const handlerDeleteSpecialization = async (id) => {
    const findMainSpecialization = specializations.find((spec) => spec.main);

    await deleteSpecialization(id).unwrap();
    dispatch(setActiveSpecialization(null));

    if (findMainSpecialization?.id === id) {
      dispatch(setActiveSpecialization(null));
      dispatch(setMainSpecializations(null));
    } else {
      dispatch(setActiveSpecialization(mainSpecialization));
    }

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
    return <LoaderComponent />;
  }

  if (isError) {
    return <ErrorComponent />;
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
          handlerClick={handlerChangeMainSpecialization}
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
