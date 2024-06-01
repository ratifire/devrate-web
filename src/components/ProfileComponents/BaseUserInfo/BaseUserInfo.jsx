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
import { useGetPersonalUserQuery } from '../../../redux/user/personal/personalApiSlice';
import { selectCurrentUser } from '../../../redux/auth/authSlice';

const BaseUserInfo = () => {
  const { data: info } = useSelector(selectCurrentUser);
  const { id, firstName, lastName, country } = info;

  const { data: personalData } = useGetPersonalUserQuery(id);
  const userData = personalData || {};
  const {
    firstName: getFirstName,
    lastName: getLastName,
    country: getCountry,
    city: getCity,
    status: getStatus,
  } = userData;

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
          <UserAvatar userName={`${getFirstName || firstName} ${getLastName || lastName}`} size='l' />
        </Button>
      </Box>
      <Box sx={styles.wrapperText}>
        <Typography variant='h5' sx={styles.userName}>
          {`${getFirstName || firstName} ${getLastName || lastName}`}
        </Typography>
        <Typography variant='subtitle1' sx={styles.speciality}>
          {getStatus || ''}
        </Typography>
        <Typography variant='subtitle2' sx={styles.city}>
          <LocationOnIcon sx={styles.icon} />
          {`${getCity ? getCity + ',' : ''} ${getCountry || country}`}
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
