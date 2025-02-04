import { memo, useEffect, useRef, useState } from 'react';
import { Box, Fade, IconButton, TextField, Typography, Link } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { Link as RouterLink } from 'react-router';
import UserAvatar from '../../../UI/UserAvatar';
import Send from '../../../../assets/icons/send.svg?react';
// import { array } from '../../../../utils/constants/testMessages';
import { closeChat } from '../../../../redux/chat/chatSlice';
import { useGetChatHistoryQuery } from '../../../../redux/services/chatApiSlice.js';
import { useMoveChat, useResizeChat, useResizeTextarea, useScrollChat } from '../hooks';
import { selectCurrentUser } from '../../../../redux/auth/authSlice.js';
import { styles } from './ChatForm.styles.js';
import ChatMessage from './ChatMessage';

const ChatForm = () => {
  const chatWrapperRef = useRef(null);
  const chatPositionRef = useRef(null);

  const { showScrollButton, handleScroll, handleScrollToBottom } = useScrollChat(chatWrapperRef);
  const { message, setMessage, textFieldRef, handleTextFieldChange } = useResizeTextarea(chatWrapperRef);
  const handleMouseDown = useMoveChat(chatPositionRef);
  const handleResizeMouseDown = useResizeChat(chatPositionRef);

  const { data: info } = useSelector(selectCurrentUser);
  const { id: currentUserId } = info;

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeChat());
  };

  // logic chat
  const [isConnected, setIsConnected] = useState(false);
  const [client, setClient] = useState(null);

  const {
    chat,
    opponentUserInfo: { id: opponentUserId, firstName, lastName, userPicture },
  } = useSelector((state) => state.chat);

  const { data: dataChats } = useGetChatHistoryQuery(opponentUserId, { skip: !opponentUserId });

  console.log(dataChats?.content, 'dataChats', opponentUserId, 'opponentUserId');

  useEffect(() => {
    const socket = new SockJS('https://server.skillzzy.com/chat');
    const newClient = new Client({
      webSocketFactory: () => socket,
      // reconnectDelay: 5000, // Повторне підключення кожні 5 секунд у разі помилки
      onConnect: () => {
        setIsConnected(true);
        newClient.subscribe(`/topic/messages/${currentUserId}`, (message) => {
          JSON.parse(message.body);
        });
      },
    });

    setClient(newClient);
    newClient.activate();
    return () => {
      if (newClient.connected) {
        newClient.deactivate();
      }
    };
  }, []);

  const handleSubmitMessages = (e) => {
    e.preventDefault();
    if (!isConnected || !message.trim()) return;

    client.publish({
      destination: '/app/chat', // Кінцева точка на сервері
      body: JSON.stringify({
        senderId: currentUserId, // ID поточного користувача
        payload: message.trim(),
        receiverId: opponentUserId, // ID отримувача
        status: '',
        dateTime: '',
        readMessageId: '',
      }),
    });

    setMessage(''); // Очищення текстового поля після відправки
  };
  // logic chat
  return (
    <Fade in={chat}>
      <Box ref={chatPositionRef} sx={styles.position}>
        <Box sx={styles.container}>
          <Box sx={styles.wrapper}>
            <Link component={RouterLink} sx={styles.linkAvatar} to={`/profile/${opponentUserId}`}>
              <UserAvatar
                radius='circle'
                size='m'
                src={userPicture}
                userFirstName={firstName}
                userLastName={lastName}
              />
            </Link>
            <Box sx={styles.wrapperName} onMouseDown={handleMouseDown}>
              <Typography sx={styles.name} variant='h6'>{`${firstName} ${lastName}`}</Typography>
            </Box>
            <IconButton aria-label='Close Сhat' sx={styles.btnIcon} type='button' onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box ref={chatWrapperRef} sx={styles.chatWrapper} onScroll={handleScroll}>
            {dataChats?.content.map((item) => (
              <ChatMessage key={item.dateTime} data={item} />
            ))}
            {showScrollButton && (
              <IconButton aria-label='Scroll to bottom' sx={styles.btnIconScroll} onClick={handleScrollToBottom}>
                <KeyboardArrowDownIcon />
              </IconButton>
            )}
          </Box>
          <form onClick={handleSubmitMessages}>
            <Box sx={styles.chatForm}>
              <TextField
                ref={textFieldRef}
                fullWidth
                multiline
                maxRows={5}
                minRows={1}
                placeholder='Напишіть повідомлення'
                sx={styles.textArea}
                variant='outlined'
                onChange={handleTextFieldChange}
              />
              <IconButton sx={styles.btnSend}>
                <Send />
              </IconButton>
            </Box>
          </form>
          <Box sx={styles.resizeHandle} onMouseDown={handleResizeMouseDown} />
        </Box>
      </Box>
    </Fade>
  );
};

export default memo(ChatForm);
