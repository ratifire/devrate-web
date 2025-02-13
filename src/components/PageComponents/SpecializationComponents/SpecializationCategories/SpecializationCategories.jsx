import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import { Box, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../../redux/modal/modalSlice';
import { setActiveMastery } from '../../../../redux/specialization/activeMasterySlice';
import {
  useGetSpecializationByUserIdQuery,
  useLazyGetMainMasteryBySpecializationIdQuery,
  useUpdateSpecializationAsMainByIdMutation,
} from '../../../../redux/specialization/specializationApiSlice';
import { setActiveSpecialization, setMainSpecializations } from '../../../../redux/specialization/specializationSlice';
import CustomTooltip from '../../../UI/CustomTooltip';
import { ErrorComponent } from '../../../UI/Exceptions';
import DropdownMenu from '../../ProfileComponents/PersonalProfile/ExperienceSection/DropdownMenu';
import { CategoriesSkeleton } from '../../../UI/Skeleton';
import { modalNames } from '../../../../utils/constants/modalNames';
import InterviewTracker from '../InterviewTracker/index.js';
import { styles } from './SpecializationCategories.styles';

const SpecializationCategories = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState({});
  const [isDefault, setIsDefault] = useState(true);
  const { id } = useSelector((state) => state.auth.user.data);
  const { activeSpecialization } = useSelector((state) => state.specialization);
  const [masteryData, setMasteryData] = useState({});

  const {
    data: specializations,
    isFetching: isFetchingGetSpecialization,
    isError: isErrorGetSpecialization,
  } = useGetSpecializationByUserIdQuery(id, { skip: !id });
  const [getMainMasteryBySpecId, { isLoading: isLoadingGetMainMastery, isError: isErrorGetMainMastery }] =
    useLazyGetMainMasteryBySpecializationIdQuery();
  const { isLoading: isLoadingUpdateSpecialization, isError: isErrorUpdateSpecialization } =
    useUpdateSpecializationAsMainByIdMutation();

  const isLoading = isFetchingGetSpecialization || isLoadingGetMainMastery || isLoadingUpdateSpecialization;
  const isError = isErrorGetSpecialization || isErrorGetMainMastery || isErrorUpdateSpecialization;
  const specializationsSorted = specializations?.toSorted((a, b) => (a.main === b.main ? 0 : a.main ? 1 : 0));

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
      if (specialization.main) dispatch(setActiveMastery(data?.level));
    });
  }, [specializations, activeSpecialization]);

  const handlerChangeSpecialization = (specialization) => {
    setIsDefault(false);
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

  const handleOpenConfirmDeleteSpecializationModal = (id, specialization) => {
    dispatch(openModal({ modalType: modalNames.confirmDeleteSpecialization, data: { id, specialization } }));
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
            className={`figure ${isDefault && main ? 'active' : activeSpecialization?.id === id ? 'active' : ''}`}
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
                handleDeleteFeature={() => handleOpenConfirmDeleteSpecializationModal(id, name)}
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
