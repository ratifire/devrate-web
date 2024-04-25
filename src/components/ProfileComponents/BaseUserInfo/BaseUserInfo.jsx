import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import { styles } from './BaseUserInfo.styles';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LinearProgressWithLabel from '../../LinearProgressWithLabel';
import UserAvatar from '../../UI/UserAvatar';

const BaseUserInfo = () => {
  // const handleOpen = 1;
  const { t } = useTranslation();
  const [progress] = React.useState(60);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.wrapperAvatar}>
        <Button type='button'>
          <UserAvatar nameUser={'Олена Бондаренко'} />
        </Button>
      </Box>
      <Box sx={styles.wrapperText}>
        <Typography variant='h1' sx={styles.userName}>
          Олена Бондаренко
        </Typography>
        <Typography variant='h2' sx={styles.speciality}>
          PHP developer
        </Typography>
        <Typography sx={styles.city}>
          <LocationOnIcon sx={styles.icon} />
          Одеса, Україна
        </Typography>
        <Typography sx={styles.online}>
          <AccessTimeIcon sx={styles.icon} />
          {t('profile.baseUserInfo.online')}
        </Typography>
        <Box sx={styles.wrapperTextBtn}>
          <IconButton sx={styles.btnIcon} aria-label='Edit user information'>
            <EditIcon />
          </IconButton>
        </Box>
      </Box>
      {/*<Box sx={styles.buttons}>*/}
      {/*  <ButtonDef*/}
      {/*    variant='contained'*/}
      {/*    correctStyle={styles.btn}*/}
      {/*    handlerClick={handleOpen}*/}
      {/*    type='button'*/}
      {/*    label='profile.baseUserInfo.btn'*/}
      {/*  />*/}
      {/*  <IconButton sx={styles.btnIcon} aria-label='add to mark'>*/}
      {/*    <BookmarkIcon />*/}
      {/*  </IconButton>*/}
      {/*</Box>*/}
      <Box sx={styles.buttons}>
        <LinearProgressWithLabel value={progress} />
      </Box>
    </Box>
  );
};
export default BaseUserInfo;
