import { Badge, IconButton, Popover } from '@mui/material';
import { useState } from 'react';
import Message from '../../../assets/icons/message.svg?react';
import { styles } from './Chat.styles';
import ChatListUsers from './ChatListUsers';

const Chat = () => {
  const [bellButton, setBellButton] = useState(null);
  const open = Boolean(bellButton);
  const handleOpen = (event) => {
    event.preventDefault();
    setBellButton(event.currentTarget);
  };
  const handleClose = () => {
    setBellButton(null);
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
        open={open}
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
