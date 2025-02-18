import { useEffect, useRef, useState } from 'react';
import { Box, IconButton, TextField, Typography, Link, Fade } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { Link as RouterLink } from 'react-router';
import { DateTime } from 'luxon';
import UserAvatar from '../../../UI/UserAvatar';
import Send from '../../../../assets/icons/send.svg?react';
import { closeChat } from '../../../../redux/chat/chatSlice';
import { useGetChatHistoryQuery } from '../../../../redux/services/chatApiSlice.js';
import { useMoveChat, useResizeChat, useResizeTextarea, useScrollChat } from '../hooks';
import { selectCurrentUser } from '../../../../redux/auth/authSlice.js';
import { styles } from './ChatForm.styles.js';
import ChatMessage from './ChatMessage';

const ChatForm = () => {
  const { chat, opponentUserInfo } = useSelector((state) => state.chat);
  const { id: opponentUserId, firstName, lastName, userPicture } = opponentUserInfo;
  const chatWrapperRef = useRef(null);
  const chatPositionRef = useRef(null);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [client, setClient] = useState(null);

  // внутрішні хукі
  const { message, setMessage, textFieldRef, handleTextFieldChange } = useResizeTextarea(chatWrapperRef);
  const { showScrollButton, handleScrollToBottom } = useScrollChat(chatWrapperRef, opponentUserId);
  const handleMouseDown = useMoveChat(chatPositionRef);
  const handleResizeMouseDown = useResizeChat(chatPositionRef);

  // закриття чату
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeChat());

  const { data: info } = useSelector(selectCurrentUser);
  const { id: currentUserId } = info;
  const { data: dataChats } = useGetChatHistoryQuery(opponentUserId, { skip: !opponentUserId });

  const [chatMessages, setChatMessages] = useState(dataChats?.content || []);

  useEffect(() => {
    if (dataChats?.content) {
      const normalize = [...dataChats.content].reverse();
      setChatMessages(normalize);
    }
  }, [dataChats]);

  useEffect(() => {
    const socket = new SockJS('https://server.skillzzy.com/chat');
    const newClient = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        setIsConnected(true);
        newClient.subscribe(`/topic/messages/${currentUserId}`, (message) => {
          const newMessage = JSON.parse(message.body);
          setChatMessages((prevMessages) => [...prevMessages, newMessage]);
          if (!isScrolledUp && chatWrapperRef.current) {
            chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight;
          }
        });
      },
    });
    setClient(newClient);
    newClient.activate();
    return () => {
      if (newClient.connected) newClient.deactivate();
    };
  }, [currentUserId]);

  const handleSubmitMessages = (e) => {
    e.preventDefault();
    if (!isConnected || !message.trim()) return;

    client.publish({
      destination: '/app/chat',
      body: JSON.stringify({
        senderId: currentUserId,
        receiverId: opponentUserId,
        payload: message.trim(),
        status: '',
        dateTime: DateTime.utc().toISO(),
      }),
    });

    setMessage('');
    if (chatWrapperRef.current) chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight;
  };

  useEffect(() => {
    if (!isScrolledUp && chatWrapperRef.current) {
      chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight;
    }
  }, [chatMessages, isScrolledUp]);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const isNearBottom = scrollHeight - (scrollTop + clientHeight) < 50;

    if (!isNearBottom) {
      setIsScrolledUp(true);
    } else {
      setIsScrolledUp(false);
    }
  };

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
            <div>lorem</div>
            {chatMessages?.map((item) => (
              <Box key={item.dateTime}>
                <ChatMessage data={item} />
              </Box>
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
                value={message}
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

export default ChatForm;
