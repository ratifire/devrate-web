import { useEffect, useRef } from 'react';
import { Box, IconButton, TextField, Typography, Link, Fade } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link as RouterLink } from 'react-router';
import { DateTime } from 'luxon';
import UserAvatar from '../../../UI/UserAvatar';
import Send from '../../../../assets/icons/send.svg?react';
import { addMessage, closeChat } from '../../../../redux/chat/chatSlice';
import { useGetChatHistoryQuery } from '../../../../redux/services/chatApiSlice.js';
import { useMoveChat, useResizeChat, useResizeTextarea, useScrollChat } from '../hooks';
import { selectCurrentUser } from '../../../../redux/auth/authSlice.js';
import { styles } from './ChatForm.styles.js';
import ChatMessage from './ChatMessage';

const ChatForm = () => {
  const { chat, opponentUserInfo, messages } = useSelector((state) => state.chat);
  const { id: opponentUserId, firstName, lastName, userPicture } = opponentUserInfo;
  const chatWrapperRef = useRef(null);
  const chatPositionRef = useRef(null);

  const { message, setMessage, textFieldRef, handleTextFieldChange } = useResizeTextarea(chatWrapperRef);
  const { showScrollButton, isScrolledUp, handleScrollToBottom } = useScrollChat(chatWrapperRef);
  const handleMouseDown = useMoveChat(chatPositionRef);
  const handleResizeMouseDown = useResizeChat(chatPositionRef);

  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeChat());

  const { data: info } = useSelector(selectCurrentUser);
  const { id: currentUserId } = info;
  const { data: dataChats } = useGetChatHistoryQuery(opponentUserId, { skip: !opponentUserId });

  useEffect(() => {
    if (dataChats?.content) {
      const normalize = [...dataChats.content].reverse();
      normalize.forEach((item) => dispatch(addMessage(item)));
    }
  }, [dataChats, dispatch]);

  const handleSubmitMessages = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    dispatch({
      type: 'chat/sendMessage',
      payload: {
        senderId: currentUserId,
        receiverId: opponentUserId,
        payload: message.trim(),
        status: '',
        dateTime: DateTime.utc().toISO(),
      },
    });

    setMessage('');
    if (chatWrapperRef.current) chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitMessages(e);
    }
  };
  useEffect(() => {
    if (!isScrolledUp && chatWrapperRef.current) {
      chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight;
    }
  }, [messages, isScrolledUp]);

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
          <Box ref={chatWrapperRef} sx={styles.chatWrapper}>
            <div>lorem</div>
            {messages?.map((item) => (
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
              placeholder='Напишіть повідомлення'
              sx={styles.textArea}
              value={message}
              variant='outlined'
              onChange={handleTextFieldChange}
              onKeyDown={handleKeyDown}
            />
            <IconButton sx={styles.btnSend} onClick={handleSubmitMessages}>
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
