import { Badge, IconButton, Popover } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../../assets/icons/message.svg?react';
import { closeChat, openChat } from '../../../redux/chat/chatSlice.js';
import { styles } from './Chat.styles';
import ChatListUsers from './ChatListUsers';

const Chat = () => {
  const [bellButton, setBellButton] = useState(null);
  const { list } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const handleOpen = (event) => {
    event.preventDefault();
    setBellButton(event.currentTarget);
    dispatch(openChat({ chatElement: 'list' }));
  };
  const handleClose = () => {
    dispatch(closeChat({ chatElement: 'list' }));
  };
  return (
    <>
      <IconButton sx={styles.btnIcon} onClick={handleOpen}>
        <Badge invisible color='error' overlap='circular' sx={styles.badge} variant='dot'>
          <Message />
        </Badge>
      </IconButton>
      <Popover
        anchorEl={bellButton}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={list}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={handleClose}
      >
        <ChatListUsers />
      </Popover>
    </>
  );
};

export default Chat;
