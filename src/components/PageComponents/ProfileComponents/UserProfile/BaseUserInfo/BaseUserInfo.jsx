import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styles } from './BaseUserInfo.styles';
import { Box, Typography } from '@mui/material';
import { useGetPersonalUserQuery } from '../../../../../redux/user/personal/personalApiSlice';
import PropTypes from 'prop-types';
import UserAvatar from '../../../../UI/UserAvatar';
import { useGetAvatarUserQuery } from '../../../../../redux/user/avatar/avatarApiSlice';
import Bookmark from '../../../../UI/Bookmark';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { useTranslation } from 'react-i18next';

const BaseUserInfo = ({ id }) => {
  const { data: personalData } = useGetPersonalUserQuery(id);
  const { t } = useTranslation();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const userData = personalData || {};
  const {
    firstName: getFirstName,
    lastName: getLastName,
    country: getCountry,
    city: getCity,
    status: getStatus,
  } = userData;

  const { data } = useGetAvatarUserQuery(id);
  const userAvatar = data || {};
  const { userPicture } = userAvatar;

  const handleToggleBookmark = (newValue) => {
    setIsBookmarked(newValue);
  };

  const handleWriteMessage = () => {
    console.log('Write a message');
  };

  const handleBookInterview = () => {
    console.log('Book an interview');
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.wrapperAvatar}>
        {getFirstName && getLastName && (
          <UserAvatar
            userFirstName={getFirstName}
            userLastName={getLastName}
            userName={`${getFirstName} ${getLastName}`}
            src={userPicture}
            size='l'
            correctStyle={styles.correctAvatar}
          />
        )}
      </Box>
      <Box sx={styles.wrapperText}>
        <Typography variant='h5' sx={styles.userName}>
          {`${getFirstName} ${getLastName}`}
          <Bookmark isBookmarked={isBookmarked} onToggle={handleToggleBookmark} />
        </Typography>
        <Typography variant='subtitle1' sx={styles.speciality}>
          {getStatus || ''}
        </Typography>
        <Typography variant='subtitle2' sx={styles.city}>
          <LocationOnIcon sx={styles.icon} />
          {`${getCity ? getCity + ',' : ''} ${getCountry}`}
        </Typography>
      </Box>
      <Box sx={styles.buttons}>
        <ButtonDef
          correctStyle={styles.contained}
          type={'button'}
          variant='contained'
          handlerClick={handleWriteMessage}
          label={t('profile.baseUserInfo.messageBtn')}
        />
        <ButtonDef
          correctStyle={styles.outlined}
          type={'button'}
          variant='outlined'
          handlerClick={handleBookInterview}
          label={t('profile.baseUserInfo.interviewBtn')}
        />
      </Box>
    </Box>
  );
};

BaseUserInfo.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default BaseUserInfo;
