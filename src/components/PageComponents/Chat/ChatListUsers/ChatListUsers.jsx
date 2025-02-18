import { Box, IconButton, Skeleton, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTranslation } from 'react-i18next';
import UserAvatar from '../../../UI/UserAvatar';
import { selectCurrentUser } from '../../../../redux/auth/authSlice.js';
import { useGetAvatarUserQuery } from '../../../../redux/user/avatar/avatarApiSlice.js';
import FormInputSearch from '../../../FormsComponents/Inputs/FormInputSearch/index.js';
import { useGetChatsQuery } from '../../../../redux/services/chatApiSlice.js';
import { styles } from './ChatListUsers.styles.js';
import ChatUser from './ChatUser';

const ChatListUsers = () => {
  const { t } = useTranslation();
  const { data: info } = useSelector(selectCurrentUser);
  const { id, firstName, lastName } = info;
  const { data } = useGetAvatarUserQuery(id);
  const userAvatar = data || {};
  const { userPicture } = userAvatar;

  const { data: dataListChats, isLoading } = useGetChatsQuery();

  if (isLoading) return <Skeleton height={523} variant='rounded' width={354} />;

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
        <FormInputSearch
          autoComplete='off'
          name='searchListChates'
          placeholder={t('chat.search')}
          sx={styles.input}
          type='text'
        />
      </Box>
      <Box sx={styles.wrapperList}>
        <Box sx={styles.list}>
          {dataListChats && dataListChats.length > 0 ? (
            dataListChats.map((item) => <ChatUser key={item.opponentUserId} data={item} />)
          ) : (
            <Typography sx={{ textAlign: 'center', marginTop: 2 }} variant='body1'>
              {t('chat.enterMessages')}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default ChatListUsers;
