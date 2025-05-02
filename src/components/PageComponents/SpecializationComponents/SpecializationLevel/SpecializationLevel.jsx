import { Box, Typography } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveMastery } from '@redux/slices/specialization/activeMasterySlice';
import { useGetMainMasteryBySpecializationIdQuery } from '@redux/api/slices/specialization/specializationApiSlice';
import { useGetSpecializationId } from '@utils/hooks/specialization';
import { ErrorComponent } from '@components/UI/Exceptions';
import LevelSkeleton from '@components/UI/Skeleton/Pages/specializationSkeleton/LevelSkeleton';
import ButtonDef from '@components/FormsComponents/Buttons/ButtonDef';
import InfoTooltip from '@components/UI/InfoTooltip/index.js';
import { styles } from './SpecializationLevel.styles';

const SpecializationLevel = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const activeMastery = useSelector((state) => state.activeMastery.activeMastery);
  const { activeSpecialization, mainSpecialization } = useSelector((state) => state.specialization);
  const specializationId = useGetSpecializationId();
  const { data, isFetching, isError } = useGetMainMasteryBySpecializationIdQuery(specializationId, {
    skip: !specializationId,
  });

  const mastery = specializationId ? data : '';
  const isDisabled = !activeSpecialization && !mainSpecialization;
  useEffect(() => {
    if (mastery) {
      dispatch(setActiveMastery(mastery?.level));
    } else {
      dispatch(setActiveMastery(''));
    }
  }, [mastery]);

  const handleClick = (label) => {
    dispatch(setActiveMastery(label));
  };

  if (isFetching) {
    return <LevelSkeleton />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <Box sx={styles.contentWrapper}>
      <Box sx={styles.descriptionBox}>
        <Typography sx={styles.title} variant='h6'>
          {t('specialization.level.title')}
        </Typography>
        <InfoTooltip title='specialization.level.description' />
      </Box>
      <Box>
        <ButtonGroup
          aria-label='Specialization level button group'
          color='secondary'
          disabled={isDisabled}
          sx={styles.buttonGroup}
          variant='contained'
        >
          {['JUNIOR', 'MIDDLE', 'SENIOR'].map((label) => (
            <ButtonDef
              key={label}
              disabled={activeMastery === label}
              label={label}
              sx={styles.button}
              type='submit'
              variant={activeMastery === label ? 'contained' : 'outlined'}
              onClick={() => handleClick(label)}
            />
          ))}
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default SpecializationLevel;
