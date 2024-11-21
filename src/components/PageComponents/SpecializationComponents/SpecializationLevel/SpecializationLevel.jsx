import { Box, Typography } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveMastery } from '../../../../redux/specialization/activeMasterySlice';
import { useGetMainMasteryBySpecializationIdQuery } from '../../../../redux/specialization/specializationApiSlice';
import { useGetSpecializationId } from '../../../../utils/hooks/specialization';
import ButtonDef from '../../../FormsComponents/Buttons/ButtonDef';
import { ErrorComponent } from '../../../UI/Exceptions';
import { styles } from './SpecializationLevel.styles';
import LevelSkeleton from '../../../UI/Skeleton/Pages/specializationSkeleton/LevelSkeleton';

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
    return <LevelSkeleton/>;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <Box sx={styles.contentWrapper}>
      <Typography variant='h6' sx={styles.title}>
        {t('specialization.level.title')}
      </Typography>
      <Typography variant='subtitle2' sx={styles.description}>
        {t('specialization.level.description')}
      </Typography>
      <Box>
        <ButtonGroup
          sx={styles.buttonGroup}
          variant='contained'
          aria-label='Specialization level button group'
          color='secondary'
          disabled={isDisabled}
        >
          {['JUNIOR', 'MIDDLE', 'SENIOR'].map((label) => (
            <ButtonDef
              correctStyle={styles.button}
              type='submit'
              key={label}
              label={label}
              handlerClick={() => handleClick(label)}
              disabled={activeMastery === label}
              variant={activeMastery === label ? 'contained' : 'outlined'}
              withTranslation={true}
            />
          ))}
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default SpecializationLevel;
