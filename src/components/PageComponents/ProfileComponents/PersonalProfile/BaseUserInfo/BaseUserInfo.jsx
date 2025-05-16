import { useMemo } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@redux/slices/auth/authSlice.js';
import { useGetPersonalUserQuery } from '@redux/api/slices/user/personal/personalApiSlice';
import { useGetAvatarUserQuery } from '@redux/api/slices/user/avatar/avatarApiSlice';
import { modalNames } from '@utils/constants/modalNames.js';
import { useModalController } from '@utils/hooks/useModalController.js';
import LinearProgressWithLabel from '@components/UI/LinearProgressWithLabel';
import UserAvatar from '@components/UI/UserAvatar';
import { useProfileProgress } from '@utils/hooks/useProfileProgress';
import { useTranslation } from 'react-i18next';
import CustomTooltip from '@components/UI/CustomTooltip/index.js';
import { useTheme } from '@mui/material/styles';
import { styles } from './BaseUserInfo.styles';

const BaseUserInfo = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const currentUser = useSelector(selectCurrentUser) || {};
  const { id, firstName: authFirstName, lastName: authLastName, country: authCountry } = currentUser.data;

  const { data: personalData } = useGetPersonalUserQuery(id, { skip: !id });
  const { data: avatarData } = useGetAvatarUserQuery(id, { skip: !id });
  const { animatedProgress } = useProfileProgress(id);
  const isProgressCompleted = animatedProgress >= 100;

  const {
    firstName: personalFirstName,
    lastName: personalLastName,
    country: personalCountry,
    city,
    status,
  } = personalData || {};

  const displayData = useMemo(
    () => ({
      firstName: personalFirstName ?? authFirstName ?? '',
      lastName: personalLastName ?? authLastName ?? '',
      country: personalCountry ?? authCountry ?? '',
      city: city ?? '',
    }),
    [personalFirstName, personalLastName, personalCountry, authFirstName, authLastName, authCountry, city]
  );

  const { openModal } = useModalController();

  const { userPicture } = avatarData || {};

  const handleOpenModal =
    (step = 0) =>
    () =>
      openModal(modalNames.userInfoModal, null, step);

  if (!id) {
    return <div>No user found</div>;
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.wrapperAvatar(theme, isProgressCompleted)}>
        <Box
          aria-label={t('profile.baseUserInfo.editAvatar')}
          component='button'
          style={{ all: 'unset', cursor: 'pointer' }}
          onClick={handleOpenModal(2)}
        >
          <UserAvatar
            correctStyle={isProgressCompleted ? styles.avatarBig : styles.avatar}
            radius='square'
            size='l'
            src={userPicture}
            userFirstName={displayData.firstName}
            userLastName={displayData.lastName}
          />
        </Box>
      </Box>

      <Box sx={styles.wrapperText(isProgressCompleted)}>
        <Typography sx={styles.userName} variant='h5'>
          {`${displayData.firstName} ${displayData.lastName}`}
        </Typography>

        {status && (
          <Typography sx={styles.speciality} variant='subtitle1'>
            {status}
          </Typography>
        )}

        {(displayData.city || displayData.country) && (
          <Typography sx={styles.city} variant='subtitle2'>
            <LocationOnIcon sx={styles.icon} />
            {`${displayData.city ? `${displayData.city}, ` : ''}${displayData.country}`}
          </Typography>
        )}

        <Box sx={styles.wrapperTextBtn}>
          <CustomTooltip title={t('profile.baseUserInfo.editBtn')}>
            <IconButton
              aria-label={t('profile.baseUserInfo.editUserInfo')}
              sx={styles.btnIcon}
              onClick={handleOpenModal(0)}
            >
              <EditIcon />
            </IconButton>
          </CustomTooltip>
        </Box>
      </Box>

      {animatedProgress && !isProgressCompleted ? (
        <Box sx={styles.buttons}>
          <LinearProgressWithLabel orientation='vertical' size='m' value={animatedProgress} />
        </Box>
      ) : null}
    </Box>
  );
};

export default BaseUserInfo;
