import React from 'react';
import { styles } from './SpecialisationCategories.styles';
import { Box, IconButton, Typography } from '@mui/material';
import { ButtonDef } from '../../Buttons';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';

const SpecialisationCategories = () => {
  const { t } = useTranslation();

  const handleChangeSpecialisation = () => {
    console.log('Specialisation changed');
  }
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.specialisation_left_box}>
        <Typography variant='h5' sx={styles.specialisation_title}>{t('specialisation.specialisation_title')}</Typography>
           <ButtonDef
            variant='outlined'
            correctStyle={styles.make_main_btn}
            handlerClick={handleChangeSpecialisation}
            type='button'
            label={t('specialisation.specialisation_btn_make_main')}
          />
      </Box>
      <Box sx={styles.specialisation_right_box}>
        <IconButton size="large" sx={styles.add_specialisation_btn}>
          <AddIcon />
        </IconButton>

        <Box sx={{ display: 'flex', gap: '24px', className: 'figure__wrapper' }}>
          {[1, 2, 3].map((_, index) => (
            <Box
              key={index}
              sx={styles.figure}
              className="figure"
            ><div>some</div>
              <Box
                sx={styles.figure_deco}
                className="figure__deco"
              ></Box>
            </Box>
          ))}
        </Box>


      </Box>
    </Box>
  );
};

export default SpecialisationCategories;