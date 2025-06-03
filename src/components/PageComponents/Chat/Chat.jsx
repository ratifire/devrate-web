import { Badge, IconButton, Popover } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '@assets/icons/message.svg?react';
import { openList, closeList, closeBadge, setCurrentUser } from '@redux/slices/chat/chatSlice.js';
import { connectChat } from '@redux/slices/chat/chatMiddleware.js';
import { selectCurrentUser } from '@redux/slices/auth/authSlice.js';
import { styles } from './Chat.styles';
import ChatHistory from './ChatHistory';

const Chat = () => {
  const [bellButton, setBellButton] = useState(null);
  const { list, badge } = useSelector((state) => state.chat);
  const currentUser = useSelector(selectCurrentUser) || {};
  const { id } = currentUser.data;
  const dispatch = useDispatch();

  useEffect(() => {
    // Викликаємо підключення чату після монтування компонента
    dispatch(setCurrentUser(id));
    dispatch(connectChat());
  }, [dispatch, id]);

  const handleOpen = (event) => {
    event.preventDefault();
    setBellButton(event.currentTarget);
    dispatch(openList());
    dispatch(closeBadge());
  };

  const handleClose = () => {
    dispatch(closeList());
  };

  return (
    <>
      <IconButton sx={styles.btnIcon} onClick={handleOpen}>
        <Badge color='error' invisible={badge} overlap='circular' sx={styles.badge} variant='dot'>
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
        <ChatHistory />
      </Popover>
    </>
  );
};

export default Chat;
