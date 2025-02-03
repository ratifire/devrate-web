import { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useGetPersonalUserQuery } from '../../../../../redux/user/personal/personalApiSlice';
import UserAvatar from '../../../../UI/UserAvatar';
import { useGetAvatarUserQuery } from '../../../../../redux/user/avatar/avatarApiSlice';
import Bookmark from '../../../../UI/Bookmark';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { openChat } from '../../../../../redux/chat/chatSlice';
import { styles } from './BaseUserInfo.styles';

const BaseUserInfo = ({ id }) => {
  const dispatch = useDispatch();
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
    dispatch(openChat({ opponentUserId: id }));
    console.log(id, 'id BaseUserInfo');
  };

  const handleBookInterview = () => {
    // eslint-disable-next-line no-console
    console.log('Book an interview');
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.wrapperAvatar}>
        {getFirstName && getLastName && (
          <UserAvatar
            correctStyle={styles.correctAvatar}
            radius='square'
            size='l'
            src={userPicture}
            userFirstName={getFirstName}
            userLastName={getLastName}
            userName={`${getFirstName} ${getLastName}`}
          />
        )}
      </Box>
      <Box sx={styles.wrapperText}>
        <Typography sx={styles.userName} variant='h5'>
          {`${getFirstName} ${getLastName}`}
          <Bookmark isBookmarked={isBookmarked} onToggle={handleToggleBookmark} />
        </Typography>
        <Typography sx={styles.speciality} variant='subtitle1'>
          {getStatus || ''}
        </Typography>
        <Typography sx={styles.city} variant='subtitle2'>
          <LocationOnIcon sx={styles.icon} />
          {`${getCity ? getCity + ',' : ''} ${getCountry}`}
        </Typography>
      </Box>
      <Box sx={styles.buttons}>
        <ButtonDef
          label={t('Write a message')}
          sx={styles.contained}
          type={'button'}
          variant='contained'
          onClick={handleWriteMessage}
        />
        <ButtonDef
          label={t('Book an interview')}
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
