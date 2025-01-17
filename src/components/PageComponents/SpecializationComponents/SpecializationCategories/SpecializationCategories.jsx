import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import { Box, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
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
import { ErrorComponent } from '../../../UI/Exceptions';
import DropdownMenu from '../../ProfileComponents/PersonalProfile/ExperienceSection/DropdownMenu';
import { CategoriesSkeleton } from '../../../UI/Skeleton';
import { modalNames } from '../../../../utils/constants/modalNames.js';
import { styles } from './SpecializationCategories.styles';

const SpecializationCategories = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useSelector((state) => state.auth.user.data);
  const { activeSpecialization, mainSpecialization } = useSelector((state) => state.specialization);
  const [masteryData, setMasteryData] = useState({});

  const {
    data: specializations,
    isFetching: isFetchingGetSpecialization,
    isError: isErrorGetSpecialization,
  } = useGetSpecializationByUserIdQuery(id, { skip: !id });
  const [getMainMasteryBySpecId, { isLoading: isLoadingGetMainMastery, isError: isErrorGetMainMastery }] =
    useLazyGetMainMasteryBySpecializationIdQuery();
  const [
    updateSpecializationAsMainById,
    { isLoading: isLoadingUpdateSpecialization, isError: isErrorUpdateSpecialization },
  ] = useUpdateSpecializationAsMainByIdMutation();
  const [deleteSpecialization, { isLoading: isLoadingDeleteSpecialization, isErrorDeleteSpecialization }] =
    useDeleteSpecializationByIdMutation();

  const isLoading =
    isFetchingGetSpecialization ||
    isLoadingGetMainMastery ||
    isLoadingUpdateSpecialization ||
    isLoadingDeleteSpecialization;
  const isError =
    isErrorGetSpecialization || isErrorGetMainMastery || isErrorUpdateSpecialization || isErrorDeleteSpecialization;
  const specializationsSorted = specializations?.toSorted((a, b) => (a.main === b.main ? 0 : a.main ? 1 : -1));

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
    dispatch(openModal({ modalType: modalNames.specializationModal }));
  };

  const handlerChangeMainSpecialization = async () => {
    try {
      if (specializations?.length === 0 || !activeSpecialization) return;
      await updateSpecializationAsMainById(
        { ...activeSpecialization, main: true },
        { skip: !activeSpecialization }
      ).unwrap();
      dispatch(setMainSpecializations(activeSpecialization));
      enqueueSnackbar(t('modalNotifyText.specialization.change.success', { name: activeSpecialization.name }), {
        variant: 'success',
      });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('modalNotifyText.specialization.change.error'), { variant: 'error' });
    }
  };
  const handlerDeleteSpecialization = async (id) => {
    const findMainSpecialization = specializations.find((spec) => spec.main);

    try {
      await deleteSpecialization(id).unwrap();
      enqueueSnackbar(t('modalNotifyText.specialization.delete.success', { name: activeSpecialization.name }), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      });
      dispatch(setActiveSpecialization(null));

      if (findMainSpecialization?.id === id) {
        dispatch(setActiveSpecialization(null));
        dispatch(setMainSpecializations(null));
      } else {
        dispatch(setActiveSpecialization(mainSpecialization));
      }
    } catch (err) {
      if (err.status === 409) {
        enqueueSnackbar(t('specialization.errorDeleteSpec'), { variant: 'error' });
      }
    } finally {
      handleCloseMenu(id);
    }
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

  const handleEditFeature = ({ id, name, mastery }) => {
    dispatch(openModal({ modalType: modalNames.specializationEditModal, data: { id, name, mastery } }));
    handleCloseMenu(id);
  };

  if (isLoading) {
    return <CategoriesSkeleton />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.specialization_left_box}>
        <Typography sx={styles.page_title} variant='h5'>
          {t('specialization.specialization_title')}
        </Typography>
        <ButtonDef
          disabled={specializations?.length === 0}
          label={t('specialization.specialization_btn_make_main')}
          sx={styles.make_main_btn}
          type='button'
          variant='outlined'
          onClick={handlerChangeMainSpecialization}
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
            className={`figure ${activeSpecialization?.id === id ? 'active' : ''}`}
            sx={styles.figure}
            onClick={() => handlerChangeSpecialization({ id, name, main, mastery: masteryData[id]?.level })}
          >
            <Box sx={styles.specialization_title_star}>
              <Box sx={styles.specialization_title}>
                <CustomTooltip customStyles={styles.specialization_name} title={name} variant='h6'>
                  {name}
                </CustomTooltip>
                <Typography variant='subtitle2'>Level {masteryData[id]?.level}</Typography>
              </Box>
              {main && <StarIcon sx={styles.star} />}
            </Box>
            <Box sx={styles.hardAndSoftSkills}>
              <Box sx={styles.softSkills}>
                <Typography sx={styles.skillsStatistic} variant='caption3'>
                  {t('specialization.specialization_softSkills')}
                </Typography>
                <Typography variant='body'>{masteryData[id]?.softSkillMark}</Typography>
              </Box>
              <Box sx={styles.hardSkills}>
                <Typography sx={styles.skillsStatistic} variant='caption3'>
                  {t('specialization.specialization_hardSkills')}
                </Typography>
                <Typography variant='body'>{masteryData[id]?.hardSkillMark}</Typography>
              </Box>
            </Box>
            <Box className='figure__deco' sx={styles.figure_deco}>
              <IconButton sx={styles.editSpecialization_btn} onClick={(event) => handleMenuOpen(event, id)}>
                <MoreVertIcon sx={styles.editSpecialization} />
              </IconButton>{' '}
              <DropdownMenu
                anchorEl={anchorEl[id]}
                handleCloseMenu={() => handleCloseMenu(id)}
                handleDeleteFeature={() => handlerDeleteSpecialization(id)}
                handleEditFeature={() => handleEditFeature({ id, name, mastery: masteryData[id]?.level })}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SpecializationCategories;
