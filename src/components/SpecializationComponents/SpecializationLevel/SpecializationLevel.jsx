import React from 'react';
import { Box, Typography } from '@mui/material';
// import { styles } from '../SpecializationLevel/SpecializationLevel.styles';
// import { useTranslation } from 'react-i18next';
import { ButtonDef } from '../../Buttons';
// import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const SpecializationLevel = () => { 
    // const { t } = useTranslation();
    
    return (
        
      <Box sx={{width: '480px', height:'201px', padding: '25px'}}>
        {/* <Typography >{t('home.hero.title')}</Typography> */}
        <Typography variant='h6' sx={{marginBottom: '10px'}} >Level</Typography>
        {/* <Typography variant='h6'> {t('home.hero.text')} </Typography> */}
        <Typography variant='subtitle2' sx={{marginBottom: '10px'}}> Improve your skills to move onto the next level of in-line specialization. </Typography>
        <Box sx={{ width: '170px' }}>
          <ButtonGroup sx={{width: '432px', height:'48px'}}
          variant="contained"
          aria-label="Basic button group"
          color='secondary'
          type='button'
          
          >
            <ButtonDef label={'Junior'}/>
            <ButtonDef label={'Middle'}/>
            <ButtonDef label={'Senior'}/>
      {/* <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button> */}
    </ButtonGroup>
            
        </Box>
      </Box>
   
    );
};

    export default SpecializationLevel;