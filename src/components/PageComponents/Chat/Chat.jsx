import React, { useState } from 'react';
import { Badge, IconButton, Popover } from '@mui/material';
import { ReactComponent as Message } from '../../../assets/icons/message.svg';
import { styles } from './Chat.styles';
import ChatForm from './ChatForm';

const Chat = () => {
  const [bellButton, setBellButton] = useState(null);

  const bellButtonClickHandler = (event) => {
    event.preventDefault();
    setBellButton(event.currentTarget);
  };

  const notificationsListClose = () => {
    setBellButton(null);
  };

  const open = Boolean(bellButton);
  const elem = <ChatForm />;

  return (
    <>
      <IconButton sx={styles.btnIcon} onClick={bellButtonClickHandler}>
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
        onClose={notificationsListClose}
      >
        {elem}
      </Popover>
    </>
  );
};

export default Chat;
