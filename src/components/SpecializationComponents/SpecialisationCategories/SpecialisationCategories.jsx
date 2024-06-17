import React from 'react';
import { styles } from './SpecialisationCategories.styles';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { ButtonDef } from '../../Buttons';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { useGetSpecialisationByUserIdQuery } from '../../../redux/specialisation/specialisationApiSlice';
import { setSelectedSpecialisation } from '../../../redux/specialisation/specialisationSlice';

const SpecialisationCategories = () => {
  const dispatch = useDispatch();
  const selectedSpecialisation = useSelector((state) => state.specialisation.selectedSpecialisation);
  console.log('Data from Redux Slice', selectedSpecialisation);
  const { t } = useTranslation();
  const { id } = useSelector((state) => state.auth.user.data);
  const { data: specialisations, isLoading } = useGetSpecialisationByUserIdQuery(id);
  console.log('Server data',specialisations);

  const handlerChangeSpecialisation = (specialisation) => {
    dispatch(setSelectedSpecialisation(specialisation));
    console.log('User clicked on Specialisation',specialisation );
  }

  const handlerAddSpecialisations = () => {
      if (specialisations.length >= 4) return
      console.log('Open Specialisation Modal to Add Specialisation');
  }

  const editSpecialisation = () => {
    console.log('Open Specialisation Modal to Edit Specialisation');
  }

  const handlerChangeMainSpecialisation = (selectedSpecialisation) => {
    console.log('Main Spec. would be changed to', selectedSpecialisation);
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.specialisation_left_box}>
        <Typography variant='h5' sx={styles.page_title}>{t('specialisation.specialisation_title')}</Typography>
           <ButtonDef
            variant='outlined'
            correctStyle={styles.make_main_btn}
            handlerClick={()=> handlerChangeMainSpecialisation(selectedSpecialisation)}
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
          {specialisations.map(({id, name, main}) => (
            <Box
              key={id}
              sx={styles.figure}
              className="figure"
              onClick={() => handlerChangeSpecialisation({id, name, main})}
            >
              <Box sx={styles.specialisation_title_star}>
                <Box sx={styles.specialisation_title}>
                  <Tooltip title={name.replace(/_/g, ' ')}>
                    <Typography variant='h6'>
                      {name.length >= 14 && main ? name.slice(0, 14).replace(/_/g, ' ') + '...' : name.slice(0, 18).replace(/_/g, ' ') + '...'}
                    </Typography>
                  </Tooltip>
                  <Typography variant='subtitle2'>Level Junior</Typography>
                </Box>
                {main && <StarIcon sx={styles.star}/>}
              </Box>
              <Box sx={styles.hardAndSoftSkills}>
                <Box sx={styles.softSkills}>
                  <Typography variant='caption3' sx={styles.skillsStatistic}>{t('specialisation.specialisation_softSkills').toUpperCase().split(' ').join('')}</Typography>
                  <Typography variant='body'>3/5</Typography>
                </Box>
                <Box sx={styles.hardSkills}>
                  <Typography variant='caption3' sx={styles.skillsStatistic}>{t('specialisation.specialisation_hardSkills').toUpperCase().split(' ').join('')}</Typography>
                  <Typography variant='body'>2/5</Typography>
                </Box>
                <IconButton sx={styles.editSpecialisation_btn} onClick={editSpecialisation}>
                  <EditIcon sx={styles.editSpecialisation} />
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