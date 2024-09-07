import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from './SpecializationLevel.styles';
import { useTranslation } from 'react-i18next';
import ButtonGroup from '@mui/material/ButtonGroup';
import ButtonDef from '../../../FormsComponents/Buttons/ButtonDef';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveMastery } from '../../../../redux/specialization/activeMasterySlice';

const SpecializationLevel = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const activeMastery = useSelector((state) => state.activeMastery.activeMastery);
  
  const handleButtonClick = (label) => {
    console.log(`Button clicked: ${label}`);
    dispatch(setActiveMastery(label));
  };
  
  return (
    <Box sx={styles.contentWrapper}>
      <Typography variant="h6" sx={styles.title}>
        {t('specialization.level.title')}
      </Typography>
      <Typography variant="subtitle2" sx={styles.description}>
        {t('specialization.level.description')}
      </Typography>
      <Box>
        <ButtonGroup
          sx={styles.buttonGroup}
          variant="contained"
          aria-label="Specialization level button group"
          color="secondary"
        >
          {['JUNIOR', 'MIDDLE', 'SENIOR'].map((label) => (
            <ButtonDef
              correctStyle={styles.button}
              type='submit'
              key={label}
              label={label}
              handlerClick={() => handleButtonClick(label)}
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