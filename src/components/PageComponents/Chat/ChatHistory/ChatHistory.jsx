import { Box, Skeleton, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import UserAvatar from '@components/UI/UserAvatar';
import { selectCurrentUser } from '@redux/slices/auth/authSlice.js';
import { useGetAvatarUserQuery } from '@redux/api/slices/user/avatar/avatarApiSlice.js';
import FormInputSearch from '@components/FormsComponents/Inputs/FormInputSearch/index.js';
import { useGetChatsQuery } from '@redux/api/slices/chatApiSlice.js';
import { searchUser } from '../hooks';
import { styles } from './ChatHistory.styles.js';
import ChatHistoryItem from './ChatHistoryItem';

const ChatHistory = () => {
  const { t } = useTranslation();
  const { data: info } = useSelector(selectCurrentUser);
  const { id, firstName, lastName } = info;
  const { data: userAvatar } = useGetAvatarUserQuery(id);
  const userPicture = userAvatar?.userPicture || null;

  const { data: dataListChats, isLoading } = useGetChatsQuery();
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    if (dataListChats) {
      setDataFilter(dataListChats);
    }
  }, [dataListChats]);

  const handlerChangeSearch = ({ target: { value } }) => {
    if (dataListChats) {
      setDataFilter(searchUser(dataListChats, value));
    }
  };

  const renderChatList = () => {
    if (dataFilter && dataFilter.length > 0) {
      return dataFilter.map((item) => <ChatHistoryItem key={item.opponentUserId} data={item} />);
    }
    return (
      <Typography sx={{ textAlign: 'center', marginTop: 2 }} variant='body1'>
        {t('chat.enterMessages')}
      </Typography>
    );
  };

  if (isLoading) return <Skeleton height={523} variant='rounded' width={354} />;

  return (
    <Box sx={styles.container}>
      <Box sx={styles.wrapper}>
        <UserAvatar radius='circle' size='s' src={userPicture} userFirstName={firstName} userLastName={lastName} />
        <Typography sx={styles.name} variant='h6'>{`${firstName} ${lastName}`}</Typography>
        {/*<IconButton aria-label='Menu' sx={styles.btnIcon} type='button'>*/}
        {/*  <MoreVertIcon />*/}
        {/*</IconButton>*/}
      </Box>
      <Box sx={styles.search}>
        <FormInputSearch
          autoComplete='off'
          name='searchListChates'
          placeholder={t('chat.search')}
          sx={styles.input}
          type='text'
          onChange={handlerChangeSearch}
        />
      </Box>
      <Box sx={styles.wrapperList}>
        <Box sx={styles.list}>{renderChatList()}</Box>
      </Box>
    </Box>
  );
};

export default ChatHistory;
