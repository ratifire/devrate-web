import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from './SpecializationLevel.styles';
import { useTranslation } from 'react-i18next';
import ButtonGroup from '@mui/material/ButtonGroup';
import ButtonDef from '../../Buttons/ButtonDef';

const SpecializationLevel = () => {
  const { t } = useTranslation();
  const [activeButton, setActiveButton] = useState('Junior');

  const handleButtonClick = (label) => {
    setActiveButton(label);
  };

  return (
    <Box sx={styles.contentWrapper}>
      <Typography variant='h6' sx={styles.title}>
        {t('specialisation.level.title')}
      </Typography>
      <Typography variant='subtitle2' sx={styles.description}>
        {t('specialisation.level.description')}
      </Typography>
      <Box>
        <ButtonGroup
          sx={styles.buttonGroup}
          variant='contained'
          aria-label='Specialization level button group'
          color='secondary'
        >
          {['Junior', 'Middle', 'Senior'].map((label) => (
            <ButtonDef sx={styles.button}
              key={label}
              label={label}
              handlerClick={() => handleButtonClick(label)}
              disabled={false}
              variant={activeButton === label ? 'contained' : 'outlined'}
            />
          ))}
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default SpecializationLevel;