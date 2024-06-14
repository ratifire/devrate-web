import React, { useState } from 'react';
import { styles } from './SpecialisationCategories.styles';
import { Box, IconButton, Typography } from '@mui/material';
import { ButtonDef } from '../../Buttons';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';

const SpecialisationCategories = () => {
  //TODO ADD STORYBOOK for this COMPONENT

  const { t } = useTranslation();
  const [specialisations, setSpecialisation] = useState([]);

  const handleChangeSpecialisation = () => {
    console.log('Specialisation changed');
  }

  const handlerAddSpecialisations = () => {
      const index = specialisations.length + 1;
      if (index >= 5) return
      setSpecialisation((data) => [...data, index]);
      console.log('Open Specialisation Modal to Add Specialisation');
  }

  const editSpecialisation = () => {
    console.log('Open Specialisation Modal to Edit Specialisation');
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.specialisation_left_box}>
        <Typography variant='h5' sx={styles.page_title}>{t('specialisation.specialisation_title')}</Typography>
           <ButtonDef
            variant='outlined'
            correctStyle={styles.make_main_btn}
            handlerClick={handleChangeSpecialisation}
            type='button'
            label={t('specialisation.specialisation_btn_make_main')}
          />
      </Box>

      <Box sx={styles.specialisation_right_box}>
        {specialisations.length < 4 ? (
        <IconButton
          size="large"
          sx={styles.add_specialisation_btn}
          onClick={handlerAddSpecialisations}
        >
          <AddIcon />
        </IconButton>
        ): null }
        <Box sx={{ display: 'flex', gap: '24px', className: 'figure__wrapper'}}>
          {specialisations.map((_, index) => (
            <Box
              key={index}
              sx={styles.figure}
              className="figure"
            >
              <Box sx={styles.specialisation_title_star}>
                <Box sx={styles.specialisation_title}>
                  <Typography variant='h6'>Frontend Developer</Typography>
                  <Typography variant='subtitle2'>Level Junior</Typography>
                </Box>
                <StarIcon sx={styles.star}/>
              </Box>
              <Box sx={styles.hardAndSoftSkills}>
                <Box sx={styles.softSkills}>
                  <Typography variant='caption3' sx={styles.skillsStatistic}>{t('specialisation.specialisation_softSkills')}</Typography>
                  <Typography variant='body'>3/5</Typography>
                </Box>
                <Box sx={styles.hardSkills}>
                  <Typography variant='caption3' sx={styles.skillsStatistic}>{t('specialisation.specialisation_hardSkills')}</Typography>
                  <Typography variant='body'>2/5</Typography>
                </Box>
                <IconButton onClick={editSpecialisation}>
                  <EditIcon sx={styles.editSpecialisation_btn} />
                </IconButton>
              </Box>
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