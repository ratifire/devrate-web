import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { styles } from './SpecializationLevel.styles';
import { useTranslation } from 'react-i18next';
import ButtonGroup from '@mui/material/ButtonGroup';
import ButtonDef from '../../Buttons/ButtonDef';

const SpecializationLevel = ({ activeMastery, setActiveMastery }) => {
  const { t } = useTranslation();

  const handleButtonClick = (label) => {
    console.log(`Button clicked: ${label}`);
    setActiveMastery(label);
  };

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
        >
          {['JUNIOR', 'MIDDLE', 'SENIOR'].map((label) => (
            <ButtonDef
              sx={styles.button}
              key={label}
              label={label}
              handlerClick={() => handleButtonClick(label)}
              disabled={false}
              variant={activeMastery === label ? 'contained' : 'outlined'}
            />
          ))}
        </ButtonGroup>
      </Box>
    </Box>
  );
};

SpecializationLevel.propTypes = {
  activeMastery: PropTypes.string.isRequired,
  setActiveMastery: PropTypes.func.isRequired,
};

export default SpecializationLevel;
