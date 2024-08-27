import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styles } from './BaseUserInfo.styles';
import { Box, Typography } from '@mui/material';
// import UserAvatar from '../../UI/UserAvatar';
import { useGetPersonalUserQuery } from '../../../../redux/user/personal/personalApiSlice';
// import { useGetAvatarUserQuery } from '../../../../redux/user/avatar/avatarApiSlice';
import PropTypes from 'prop-types';

const BaseUserInfo = ({ id }) => {
  const { data: personalData } = useGetPersonalUserQuery(id);
  const userData = personalData || {};
  const {
    firstName: getFirstName,
    lastName: getLastName,
    country: getCountry,
    city: getCity,
    status: getStatus,
  } = userData;

  // const { data } = useGetAvatarUserQuery(id);
  // const userAvatar = data || {};
  // const { userPicture } = userAvatar;

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.wrapperAvatar}>
        {/*<UserAvatar*/}
        {/*  userFirstName={getFirstName}*/}
        {/*  userLastName={getLastName}*/}
        {/*  userName={`${getFirstName} ${getLastName}`}*/}
        {/*  src={userPicture}*/}
        {/*  size='l'*/}
        {/*/>*/}
      </Box>
      <Box sx={styles.wrapperText}>
        <Typography variant='h5' sx={styles.userName}>
          {`${getFirstName} ${getLastName}`}
        </Typography>
        <Typography variant='subtitle1' sx={styles.speciality}>
          {getStatus || ''}
        </Typography>
        <Typography variant='subtitle2' sx={styles.city}>
          <LocationOnIcon sx={styles.icon} />
          {`${getCity ? getCity + ',' : ''} ${getCountry}`}
        </Typography>
      </Box>
      <Box sx={styles.buttons}></Box>
    </Box>
  );
};
BaseUserInfo.propTypes = {
  id: PropTypes.number.isRequired,
};
export default BaseUserInfo;
