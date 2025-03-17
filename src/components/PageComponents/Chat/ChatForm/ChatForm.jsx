import { useEffect, useRef, useState } from 'react';
import { Box, IconButton, TextField, Typography, Link, Fade } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import SockJS from 'sockjs-client';
import CloseIcon from '@mui/icons-material/Close';
import { Client } from '@stomp/stompjs';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import UserAvatar from '@components/UI/UserAvatar';
import { selectCurrentUser } from '@redux/slices/auth/authSlice';
import Send from '@assets/icons/send.svg?react';
import { closeChat, openBadge } from '@redux/slices/chat/chatSlice';
import { useTranslation } from 'react-i18next';
import {
  useResizeTextarea,
  useScrollChat,
  useMoveChat,
  useResizeChat,
} from '@components/PageComponents/Chat/hooks/index.js';
import { chatApiSlice, useGetChatHistoryQuery } from '@redux/api/slices/chatApiSlice.js';
import { TAG_TYPES } from '@utils/constants/tagTypes.js';
import { DateTime } from 'luxon';
import { styles } from './ChatForm.styles';
import ChatMessage from './ChatMessage';

const chatAppearDelay = 100;
const pageSize = 13;

const ChatForm = () => {
  const { t } = useTranslation();
  const { chat, opponentUserInfo } = useSelector((state) => state.chat);
  const { id: opponentUserId, firstName, lastName, userPicture } = opponentUserInfo;
  const chatWrapperRef = useRef(null);
  const chatPositionRef = useRef(null);

  const [isConnected, setIsConnected] = useState(false);
  const [client, setClient] = useState(null);

  const { message, setMessage, textFieldRef, handleTextFieldChange } = useResizeTextarea(chatWrapperRef);
  const { showScrollButton, isScrolledUp, handleScrollToBottom } = useScrollChat(chatWrapperRef);
  const handleMouseDown = useMoveChat(chatPositionRef);
  const handleResizeMouseDown = useResizeChat(chatPositionRef);

  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeChat());

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const { data: info } = useSelector(selectCurrentUser);
  const { id: currentUserId } = info;
  const { data: dataChats, isLoading: isChatHistoryLoading } = useGetChatHistoryQuery(
    { opponentUserId, page: currentPage, size: pageSize },
    { skip: !opponentUserId }
  );

  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    setTimeout(handleScrollToBottom, chatAppearDelay + 100);
  }, [chat]);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    if (dataChats?.content) {
      const normalizedMessages = [...dataChats.content].reverse();

      if (currentPage === 0) {
        setChatMessages(normalizedMessages);
      } else {
        setChatMessages((prevMessages) => [...normalizedMessages, ...prevMessages]);
      }

      if (dataChats.last) {
        setTotalPages(currentPage);
      } else {
        setTotalPages(dataChats.totalPages);
      }

      setIsLoadingMore(false);
    }
  }, [dataChats]);

  useEffect(() => {
    const socket = new SockJS(`${import.meta.env.VITE_API_DEV_URL}/chat`);
    const newClient = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        setIsConnected(true);
        newClient.subscribe(`/topic/messages/${currentUserId}`, (message) => {
          const newMessage = JSON.parse(message.body);
          setChatMessages((prevMessages) => [...prevMessages, newMessage]);
          dispatch(chatApiSlice.util.invalidateTags([TAG_TYPES.ChatHistory]));
          if (newMessage.senderId !== currentUserId) dispatch(openBadge());
          if (!isScrolledUp) handleScrollToBottom();
        });
      },
    });
    setClient(newClient);
    newClient.activate();
    return () => {
      if (newClient.connected) newClient.deactivate();
    };
  }, [currentUserId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (
          entry.isIntersecting &&
          currentPage < totalPages &&
          totalPages > 1 &&
          !isLoadingMore &&
          !isChatHistoryLoading
        ) {
          setIsLoadingMore(true);
          setCurrentPage((prevPage) => prevPage + 1);
        }
      },
      {
        root: chatWrapperRef.current,
        rootMargin: '0px',
        threshold: 0.01,
      }
    );
    const idTimer = setTimeout(() => {
      if (loadMoreRef.current) {
        observer.observe(loadMoreRef.current);
      }
    }, chatAppearDelay + 150);
    return () => {
      clearTimeout(idTimer);
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [currentPage, totalPages, isLoadingMore, isChatHistoryLoading, dataChats?.last]);

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
    setTimeout(handleScrollToBottom, chatAppearDelay + 50);
    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitMessages(e);
    }
  };
  return (
    <Fade in={chat} timeout={chatAppearDelay}>
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
          <Box ref={chatWrapperRef} sx={styles.chatWrapper}>
            <Box ref={loadMoreRef} />
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
          <Box sx={styles.chatForm}>
            <TextField
              ref={textFieldRef}
              fullWidth
              multiline
              maxRows={5}
              minRows={1}
              placeholder={t('chat.enterMessages')}
              sx={styles.textArea}
              value={message}
              variant='outlined'
              onChange={handleTextFieldChange}
              onKeyDown={handleKeyDown}
            />
            <IconButton disabled={!message.trim()} sx={styles.btnSend} onClick={handleSubmitMessages}>
              <Send />
            </IconButton>
          </Box>
          <Box sx={styles.resizeHandle} onMouseDown={handleResizeMouseDown} />
        </Box>
      </Box>
    </Fade>
  );
};

export default ChatForm;
