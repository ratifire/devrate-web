// import { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { openChat } from '@redux/slices/chat/chatSlice.js';
import { useGetPersonalUserQuery } from '@redux/api/slices/user/personal/personalApiSlice';
import { useGetAvatarUserQuery } from '@redux/api/slices/user/avatar/avatarApiSlice';
import UserAvatar from '@components/UI/UserAvatar';
// import Bookmark from '@components/UI/Bookmark';
import { ButtonDef } from '@components/FormsComponents/Buttons';
import { useMemo } from 'react';
import { styles } from './BaseUserInfo.styles';

const BaseUserInfo = ({ id }) => {
  const dispatch = useDispatch();
  const { data: personalData } = useGetPersonalUserQuery(id);
  const { t } = useTranslation();
  // const [isBookmarked, setIsBookmarked] = useState(false);
  const userData = personalData || {};
  const { firstName: userFirstName, lastName: userLastName, country, city, status } = userData;

  const displayData = useMemo(
    () => ({
      firstName: userFirstName ?? '',
      lastName: userLastName ?? '',
      country: country ?? '',
      city: city ?? '',
    }),
    [userFirstName, userLastName, country, city]
  );

  const { data } = useGetAvatarUserQuery(id);
  const userAvatar = data || {};
  const { userPicture } = userAvatar;
  // const handleToggleBookmark = (newValue) => {
  //   setIsBookmarked(newValue);
  // };

  const handleWriteMessage = () => {
    dispatch(
      openChat({ id, firstName: displayData.firstName, lastName: displayData.lastName, userPicture: userPicture })
    );
  };

  const handleBookInterview = () => {
    // eslint-disable-next-line no-console
    console.log('Book an interview');
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.wrapperAvatar}>
        {userFirstName && userLastName && (
          <UserAvatar
            correctStyle={styles.correctAvatar}
            radius='square'
            size='l'
            src={userPicture}
            userFirstName={displayData.firstName}
            userLastName={displayData.lastName}
            userName={`${displayData.firstName} ${displayData.lastName}`}
          />
        )}
      </Box>
      <Box sx={styles.wrapperText}>
        <Typography sx={styles.userName} variant='h5'>
          {`${displayData.firstName} ${displayData.lastName}`}
          {/*<Bookmark isBookmarked={isBookmarked} onToggle={handleToggleBookmark} />*/}
        </Typography>
        <Typography sx={styles.speciality} variant='subtitle1'>
          {status || ''}
        </Typography>
        {(displayData.city || displayData.country) && (
          <Typography sx={styles.city} variant='subtitle2'>
            <LocationOnIcon sx={styles.icon} />
            {displayData.city && `${displayData.city},`} {t(`countriesList.${displayData.country}`)}
          </Typography>
        )}
      </Box>

      <Box sx={styles.buttons}>
        <ButtonDef
          label={t('profile.baseUserInfo.writeMessage')}
          sx={styles.contained}
          type={'button'}
          variant='contained'
          onClick={handleWriteMessage}
        />
        <ButtonDef
          label={t('profile.baseUserInfo.bookInterview')}
          sx={styles.outlined}
          type={'button'}
          variant='outlined'
          onClick={handleBookInterview}
        />
      </Box>
    </Box>
  );
};

BaseUserInfo.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default BaseUserInfo;
