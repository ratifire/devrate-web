import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import LinearProgressWithLabel from '../../../../UI/LinearProgressWithLabel';
import UserAvatar from '../../../../UI/UserAvatar';
import { useGetPersonalUserQuery } from '../../../../../redux/user/personal/personalApiSlice';
import { selectCurrentUser } from '../../../../../redux/auth/authSlice';
import { useGetAvatarUserQuery } from '../../../../../redux/user/avatar/avatarApiSlice';
import { modalNames } from '../../../../../utils/constants/modalNames.js';
import { useModalController } from '../../../../../utils/hooks/useModalController.js';
import { styles } from './BaseUserInfo.styles';
import { useProfileProgress } from './useProfileProgress';

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
  const { openModal } = useModalController();

  const { data } = useGetAvatarUserQuery(id);
  const userAvatar = data || {};
  const { userPicture } = userAvatar;

  const progress = useProfileProgress(id);

  const handleOpenUserInfo = () => {
    openModal(modalNames.userInfoModal, 0);
  };

  const handleOpenAvatar = () => {
    openModal(modalNames.userInfoModal, 2);
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.wrapperAvatar}>
        <Button type='button' onClick={handleOpenAvatar}>
          <UserAvatar
            correctStyle={styles.avatar}
            radius='square'
            size='l'
            src={userPicture}
            userFirstName={getFirstName || firstName}
            userLastName={getLastName || lastName}
            userName={`${getFirstName || firstName} ${getLastName || lastName}`}
          />
        </Button>
      </Box>
      <Box sx={styles.wrapperText}>
        <Typography sx={styles.userName} variant='h5'>
          {`${getFirstName || firstName} ${getLastName || lastName}`}
        </Typography>
        <Typography sx={styles.speciality} variant='subtitle1'>
          {getStatus || ''}
        </Typography>
        <Typography sx={styles.city} variant='subtitle2'>
          <LocationOnIcon sx={styles.icon} />
          {`${getCity ? getCity + ',' : ''} ${getCountry || country}`}
        </Typography>
        <Box sx={styles.wrapperTextBtn}>
          <IconButton aria-label='Edit user information' sx={styles.btnIcon} onClick={handleOpenUserInfo}>
            <EditIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={styles.buttons}>
        <LinearProgressWithLabel orientation='vertical' size='m' value={progress} />
      </Box>
    </Box>
  );
};

export default BaseUserInfo;
