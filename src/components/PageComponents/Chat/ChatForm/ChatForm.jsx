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
import { array } from '../../../../utils/constants/testMessages';
import { closeChat } from '../../../../redux/chat/chatSlice';
import { useGetChatHistoryQuery } from '../../../../redux/services/chatApiSlice.js';
import { useMoveChat } from '../hooks';
import { styles } from './ChatForm.styles.js';
import ChatMessage from './ChatMessage';

const ChatForm = () => {
  const chatWrapperRef = useRef(null);

  const textFieldRef = useRef(null);
  const resizeStartPos = useRef({ width: 0, height: 0 });
  const isResizing = useRef(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isUserAtBottom, setIsUserAtBottom] = useState(true);

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeChat());
  };

  const [textFieldHeight, setTextFieldHeight] = useState(23);

  // logic chat
  const [isConnected, setIsConnected] = useState(false);
  const [client, setClient] = useState(null);
  const [message, setMessage] = useState('');

  const {
    chat,
    opponentUserInfo: { id, firstName, lastName, userPicture },
  } = useSelector((state) => state.chat);

  const { data: dataChats } = useGetChatHistoryQuery(id, { skip: !id });
  console.log(dataChats, 'dataChats', id, 'opponentUserId');
  // logic chat

  useEffect(() => {
    if (isUserAtBottom && chatWrapperRef.current) {
      chatWrapperRef.current.scrollTo({
        top: chatWrapperRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [array, isUserAtBottom]);

  const handleScroll = () => {
    if (chatWrapperRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatWrapperRef.current;

      const isAtBottom = scrollHeight - (scrollTop + clientHeight) <= 100;
      setShowScrollButton(!isAtBottom);
      setIsUserAtBottom(isAtBottom);
    }
  };

  const handleScrollToBottom = () => {
    if (chatWrapperRef.current) {
      chatWrapperRef.current.scrollTo({
        top: chatWrapperRef.current.scrollHeight,
        behavior: 'smooth',
      });
      setIsUserAtBottom(true);
    }
  };

  const handleTextFieldChange = (e) => {
    const height = e.target.scrollHeight;
    const maxHeight = 115;
    setMessage(e.target.value);
    if (height < maxHeight) {
      setTextFieldHeight(height);
    } else {
      setTextFieldHeight(maxHeight);
    }
  };

  useEffect(() => {
    if (textFieldRef.current && chatWrapperRef.current) {
      const textFieldExtraHeight = textFieldHeight - 23;
      const newHeight = 532 - textFieldExtraHeight;
      chatWrapperRef.current.style.maxHeight = `${newHeight}px`;
    }
  }, [textFieldHeight]);

  const { chatPositionRef, handleMouseDown } = useMoveChat();

  const handleResizeMouseDown = (e) => {
    isResizing.current = true;
    resizeStartPos.current = {
      width: chatPositionRef.current.offsetWidth,
      height: chatPositionRef.current.offsetHeight,
      x: e.clientX,
      y: e.clientY,
    };
    document.addEventListener('mousemove', handleResizeMouseMove);
    document.addEventListener('mouseup', handleResizeMouseUp);
  };

  const handleResizeMouseMove = (e) => {
    if (!isResizing.current) return;
    const dx = e.clientX - resizeStartPos.current.x;
    const newWidth = Math.min(580, Math.max(380, resizeStartPos.current.width + dx)); // Обмеження ширини
    chatPositionRef.current.style.width = `${newWidth}px`; // Зміна лише ширини
  };

  const handleResizeMouseUp = () => {
    isResizing.current = false;
    document.removeEventListener('mousemove', handleResizeMouseMove);
    document.removeEventListener('mouseup', handleResizeMouseUp);
  };

  useEffect(() => {
    if (chatPositionRef.current) {
      chatPositionRef.current.style.width = '480px';
    }
  }, []);
  // logic chat
  useEffect(() => {
    const socket = new SockJS('https://server.skillzzy.com/chat');
    const newClient = new Client({
      webSocketFactory: () => socket,
      // reconnectDelay: 5000, // Повторне підключення кожні 5 секунд у разі помилки
      onConnect: () => {
        setIsConnected(true);
        newClient.subscribe('/topic/messages/8881', (message) => {
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
        sender: id, // ID поточного користувача
        content: message.trim(),
        recipient: '8882', // ID отримувача
        topicName: '8882', // Тема
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
            <Link component={RouterLink} sx={styles.linkAvatar} to={`/profile/${id}`}>
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
            {array?.map((item) => (
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
          <Box sx={styles.resizeHandle} onMouseDown={handleResizeMouseDown} /> {/* [6] Додано елемент для ресайзу */}
        </Box>
      </Box>
    </Fade>
  );
};

export default memo(ChatForm);
