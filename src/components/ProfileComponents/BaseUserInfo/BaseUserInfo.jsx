import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import { styles } from './BaseUserInfo.styles';
import { Box, Button, IconButton, Typography } from '@mui/material';
import LinearProgressWithLabel from '../../LinearProgressWithLabel';
import UserAvatar from '../../UI/UserAvatar';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../redux/modal/modalSlice';
import { setStep } from '../../../redux/modal/modalStepSlice';

const BaseUserInfo = () => {
  const { firstName, lastName, country, city, status } = useSelector((state) => state.auth.user.data);

  const [progress] = React.useState(60);
  const dispatch = useDispatch();

  const handleOpenInfo = () => {
    dispatch(setStep(0));
    dispatch(openModal({ modalName: 'openUserInfo' }));
  };

  const handleOpenAvatar = () => {
    dispatch(setStep(2));
    dispatch(openModal({ modalName: 'openUserInfo' }));
  };
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.wrapperAvatar}>
        <Button type='button' onClick={handleOpenAvatar}>
          <UserAvatar userName={`${firstName} ${lastName}`} size='l' />
        </Button>
      </Box>
      <Box sx={styles.wrapperText}>
        <Typography variant='h5' sx={styles.userName}>
          {`${firstName} ${lastName}`}
        </Typography>
        <Typography variant='subtitle1' sx={styles.speciality}>
          {status || ''}
        </Typography>
        <Typography variant='subtitle2' sx={styles.city}>
          <LocationOnIcon sx={styles.icon} />
          {`${city ? city + ',' : ''} ${country}`}
        </Typography>
        <Box sx={styles.wrapperTextBtn}>
          <IconButton sx={styles.btnIcon} aria-label='Edit user information' onClick={handleOpenInfo}>
            <EditIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={styles.buttons}>
        <LinearProgressWithLabel value={progress} />
      </Box>
    </Box>
  );
};

export default BaseUserInfo;
