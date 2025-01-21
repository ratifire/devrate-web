import { Box, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTranslation } from 'react-i18next';
import UserAvatar from '../../../UI/UserAvatar';
import { selectCurrentUser } from '../../../../redux/auth/authSlice.js';
import { useGetAvatarUserQuery } from '../../../../redux/user/avatar/avatarApiSlice.js';
import Loupe from '../../../../assets/icons/loupe.svg?react';
import { styles } from './ChatListUsers.styles.js';
import ChatUser from './ChatUser';

const ChatListUsers = () => {
  const { t } = useTranslation();
  const { data: info } = useSelector(selectCurrentUser);
  const { id, firstName, lastName } = info;
  const { data } = useGetAvatarUserQuery(id);
  const userAvatar = data || {};
  const { userPicture } = userAvatar;

  const listUsers = [
    {
      id: 1,
      userId: 1231,
      firstName: 'Name',
      lastName: 'Surname',
      time: '23113',
      lastMessages: 'Привіт а ти робиш дуже гарний фронт',
      userPicture: null,
    },
    {
      id: 2,
      userId: 1211,
      firstName: 'Name',
      lastName: 'Surname',
      time: '23113',
      lastMessages: 'Привіт а ти робиш дуже гарний фронт',
      userPicture: null,
    },
    {
      id: 3,
      userId: 2231,
      firstName: 'Name',
      lastName: 'Surname',
      time: '23113',
      lastMessages: 'Привіт а ти робиш дуже гарний фронт',
      userPicture: null,
    },
    {
      id: 4,
      userId: 3211,
      firstName: 'Name',
      lastName: 'Surname',
      time: '23113',
      lastMessages: 'Привіт а ти робиш дуже гарний фронт',
      userPicture: null,
    },
    {
      id: 5,
      userId: 5231,
      firstName: 'NameNameNameName ',
      lastName: 'Surname',
      time: '23113',
      lastMessages: 'Привіт а ти робиш дуже гарний фронт',
      userPicture: null,
    },
    {
      id: 6,
      userId: 6211,
      firstName: 'Name',
      lastName: 'Surname',
      time: '23113',
      lastMessages: 'Привіт а ти робиш дуже гарний фронт',
      userPicture: null,
    },
    {
      id: 7,
      userId: 7231,
      firstName: 'Name',
      lastName: 'Surname',
      time: '23113',
      lastMessages: 'Привіт а ти робиш дуже гарний фронт',
      userPicture: null,
    },
    {
      id: 8,
      userId: 8211,
      firstName: 'Name',
      lastName: 'Surname',
      time: '23113',
      lastMessages: 'Привіт а ти робиш дуже гарний фронт',
      userPicture: null,
    },
    {
      id: 9,
      userId: 9231,
      firstName: 'Name',
      lastName: 'Surname',
      time: '23113',
      lastMessages: 'Привіт а ти робиш дуже гарний фронт',
      userPicture: null,
    },
    {
      id: 10,
      userId: 3311,
      firstName: 'Name',
      lastName: 'Surname',
      time: '23113',
      lastMessages: 'Привіт а ти робиш дуже гарний фронт',
      userPicture: null,
    },
  ];

  return (
    <Box sx={styles.container}>
      <Box sx={styles.wrapper}>
        <UserAvatar radius='circle' size='s' src={userPicture} userFirstName={firstName} userLastName={lastName} />
        <Typography sx={styles.name} variant='h6'>{`${firstName} ${lastName}`}</Typography>
        <IconButton aria-label='Menu' sx={styles.btnIcon} type='button'>
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Box sx={styles.search}>
        <OutlinedInput
          autoComplete='off'
          endAdornment={
            <InputAdornment position='end'>
              <IconButton edge='end'>
                <Loupe />
              </IconButton>
            </InputAdornment>
          }
          name='searchListChates'
          placeholder={t('header.search')}
          sx={styles.input}
          type='text'
        />
      </Box>
      <Box sx={styles.wrapperList}>
        <Box sx={styles.list}>
          {listUsers?.map((user) => (
            <ChatUser key={user.id} data={user} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default ChatListUsers;
