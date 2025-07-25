import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import { Box, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import {
  useGetSpecializationByUserIdQuery,
  useLazyGetMainMasteryBySpecializationIdQuery,
  useUpdateSpecializationAsMainByIdMutation,
} from '@redux/api/slices/specialization/specializationApiSlice';
import { setActiveSpecialization, setMainSpecializations } from '@redux/slices/specialization/specializationSlice';
import CustomTooltip from '@components/UI/CustomTooltip';
import { ErrorComponent } from '@components/UI/Exceptions';
import DropdownMenu from '@components/PageComponents/ProfileComponents/PersonalProfile/ExperienceSection/DropdownMenu';
import { CategoriesSkeleton } from '@components/UI/Skeleton';
import { modalNames } from '@utils/constants/modalNames';
import { useModalController } from '@utils/hooks/useModalController.js';
import { setActiveMastery } from '@redux/slices/specialization/activeMasterySlice.js';
import InterviewTracker from '../InterviewTracker/index.js';
import { styles } from './SpecializationCategories.styles';

const SpecializationCategories = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState({});
  const { id } = useSelector((state) => state.auth.user.data);
  const { activeSpecialization, mainSpecialization } = useSelector((state) => state.specialization);
  const [masteryData, setMasteryData] = useState({});
  const activeSpec = activeSpecialization || mainSpecialization;

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

  const isLoading = isFetchingGetSpecialization || isLoadingGetMainMastery || isLoadingUpdateSpecialization;
  const isError = isErrorGetSpecialization || isErrorGetMainMastery || isErrorUpdateSpecialization;
  const specializationsSorted = specializations?.toSorted((a, b) => b.main - a.main);
  const { openModal } = useModalController();

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
    openModal(modalNames.specializationModal);
  };

  const handleMakeMainFeature = async (id) => {
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
    setAnchorEl((prev) => ({
      ...prev,
      [id]: null,
    }));
  };

  const handleOpenConfirmDeleteSpecializationModal = (id, specialization) => {
    openModal(modalNames.confirmDeleteSpecialization, { id, specialization });
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
  const handleEditFeature = ({ id, name, mastery }) => {
    openModal(modalNames.specializationEditModal, { id, name, mastery });
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
        <Box sx={styles.trackerWrapper}>
          <InterviewTracker />
        </Box>
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
            className={`figure ${activeSpec?.id === id ? 'active' : ''}`}
            sx={styles.figure}
            onClick={() => handlerChangeSpecialization({ id, name, main, mastery: masteryData[id]?.level })}
          >
            <Box sx={styles.specialization_title}>
              <CustomTooltip customStyles={styles.specialization_name} title={name} variant='h6'>
                {name}
              </CustomTooltip>
              <Typography variant='subtitle2'>
                {t('specialization.levelOfCategory', { level: masteryData[id]?.level })}
              </Typography>
            </Box>

            {main && <StarIcon sx={styles.star} />}

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

            <IconButton sx={styles.editSpecialization_btn} onClick={(event) => handleMenuOpen(event, id)}>
              <MoreVertIcon sx={styles.editSpecialization} />
            </IconButton>

            <DropdownMenu
              anchorEl={anchorEl[id]}
              handleCloseMenu={() => handleCloseMenu(id)}
              handleDeleteFeature={() => handleOpenConfirmDeleteSpecializationModal(id, name)}
              handleEditFeature={() => handleEditFeature({ id, name, mastery: masteryData[id]?.level })}
              handleMainFeature={() => handleMakeMainFeature(id)}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SpecializationCategories;
