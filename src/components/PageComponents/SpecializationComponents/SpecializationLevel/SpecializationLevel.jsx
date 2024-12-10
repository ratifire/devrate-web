import { Box, Typography } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveMastery } from '../../../../redux/specialization/activeMasterySlice';
import { useGetMainMasteryBySpecializationIdQuery } from '../../../../redux/specialization/specializationApiSlice';
import { useGetSpecializationId } from '../../../../utils/hooks/specialization';
import ButtonDef from '../../../FormsComponents/Buttons/ButtonDef';
import { ErrorComponent } from '../../../UI/Exceptions';
import LevelSkeleton from '../../../UI/Skeleton/Pages/specializationSkeleton/LevelSkeleton';
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
      <Typography sx={styles.title} variant='h6'>
        {t('specialization.level.title')}
      </Typography>
      <Typography sx={styles.description} variant='subtitle2'>
        {t('specialization.level.description')}
      </Typography>
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
              withTranslation
              correctStyle={styles.button}
              disabled={activeMastery === label}
              handlerClick={() => handleClick(label)}
              label={label}
              type='submit'
              variant={activeMastery === label ? 'contained' : 'outlined'}
            />
          ))}
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default SpecializationLevel;
