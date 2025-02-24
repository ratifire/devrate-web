import { Box, IconButton, Typography } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
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
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);
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

  const handlerShowPopup = () => {
    setIsVisiblePopup(true);
  };

  const handlerHidePopup = () => {
    setIsVisiblePopup(false);
  };

  if (isFetching) {
    return <LevelSkeleton />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <Box sx={styles.contentWrapper}>
      <Box alignItems={'center'} display='flex' justifyContent={'space-between'} marginBottom='16px'>
        <Typography sx={styles.title} variant='h6'>
          {t('specialization.level.title')}
        </Typography>
        <Box sx={styles.popupContainer}>
          <IconButton aria-describedby='popup-description' onMouseOut={handlerHidePopup} onMouseOver={handlerShowPopup}>
            <InfoOutlinedIcon />
          </IconButton>
          {isVisiblePopup && (
            <Box id='popup-description' sx={styles.popupContent}>
              <Typography sx={styles.popupText} variant={'caption2'}>
                {t('specialization.level.description')}
              </Typography>
            </Box>
          )}
        </Box>
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
