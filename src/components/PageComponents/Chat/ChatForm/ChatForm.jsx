import { useEffect, useRef, useState } from 'react';
import { Box, Fade, IconButton, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import UserAvatar from '../../../UI/UserAvatar';
import { useGetAvatarUserQuery } from '../../../../redux/user/avatar/avatarApiSlice';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';
import Send from '../../../../assets/icons/send.svg?react';
import { array } from '../../../../utils/constants/testMessages';
import { closeChat } from '../../../../redux/chat/chatSlice';
import { styles } from './ChatForm.styles.js';
import ChatMessage from './ChatMessage';

const ChatForm = () => {
  const chatWrapperRef = useRef(null);
  const chatPositionRef = useRef(null);
  const initialMousePos = useRef({ x: 0, y: 0 });
  const chatStartPos = useRef({ top: 0, left: 0 });
  const textFieldRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isUserAtBottom, setIsUserAtBottom] = useState(true);
  const { chat } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeChat({ chatElement: 'chat' }));
  };
  const { data: info } = useSelector(selectCurrentUser);
  const { id, firstName, lastName } = info;
  const { data } = useGetAvatarUserQuery(id);
  const userAvatar = data || {};
  const { userPicture } = userAvatar;
  const isDragging = useRef(false);
  const [textFieldHeight, setTextFieldHeight] = useState(23);
  const [isConnected, setIsConnected] = useState(false);
  const [client, setClient] = useState(null);
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

  const handleMouseDown = (e) => {
    isDragging.current = true;
    initialMousePos.current = { x: e.clientX, y: e.clientY };
    const { top, left } = chatPositionRef.current.getBoundingClientRect();
    chatStartPos.current = { top, left };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const dx = e.clientX - initialMousePos.current.x;
    const dy = e.clientY - initialMousePos.current.y;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const chatRect = chatPositionRef.current.getBoundingClientRect();

    let newLeft = chatStartPos.current.left + dx;
    let newTop = chatStartPos.current.top + dy;

    newLeft = Math.max(0, Math.min(newLeft, viewportWidth - chatRect.width));
    newTop = Math.max(0, Math.min(newTop, viewportHeight - chatRect.height));

    chatPositionRef.current.style.left = `${newLeft}px`;
    chatPositionRef.current.style.top = `${newTop}px`;
  };
  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const resizeStartPos = useRef({ width: 0, height: 0 });
  const isResizing = useRef(false);

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

  const [message, setMessage] = useState(''); // Для збереження тексту
  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/chat');
    // const socket = new WebSocket('ws://localhost:8080/chat');
    const newClient = new Client({
      webSocketFactory: () => socket, // Використовуйте SockJS
      // reconnectDelay: 5000, // Повторне підключення кожні 5 секунд у разі помилки
      onConnect: () => {
        // console.log('Connected to WebSocket');
        setIsConnected(true);
        newClient.subscribe('/topic/messages/8882', (message) => {
          // console.log('Received message:', JSON.parse(message.body));
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
    if (!isConnected || !message.trim()) {
      // console.warn('STOMP client is not connected or message is empty');
      return;
    }

    client.publish({
      destination: '/app/chat', // Кінцева точка на сервері
      body: JSON.stringify({
        sender: id, // ID поточного користувача
        content: message.trim(),
        recipient: 'recipient-id', // ID отримувача
        topicName: '8882', // Тема
      }),
    });

    setMessage(''); // Очищення текстового поля після відправки
  };

  return (
    <Fade in={chat}>
      <Box ref={chatPositionRef} sx={styles.position}>
        <Box sx={styles.container}>
          <Box sx={styles.wrapper}>
            <UserAvatar radius='circle' size='m' src={userPicture} userFirstName={firstName} userLastName={lastName} />
            <Box sx={styles.wrapperName} onMouseDown={handleMouseDown}>
              <Typography sx={styles.name} variant='h6'>{`${firstName} ${lastName}`}</Typography>
            </Box>
            <IconButton aria-label='Close Сhat' sx={styles.btnIcon} type='button' onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box ref={chatWrapperRef} sx={styles.chatWrapper} onScroll={handleScroll}>
            {array?.map((item) => (
              <ChatMessage key={item.id} read={item.read} text={item.text} time={item.time} variant={item.type} />
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

export default ChatForm;
