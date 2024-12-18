import { useEffect, useRef, useState } from 'react';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import UserAvatar from '../../../UI/UserAvatar';
import { useGetAvatarUserQuery } from '../../../../redux/user/avatar/avatarApiSlice';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';
import Send from '../../../../assets/icons/send.svg?react';
import { array } from '../../../../utils/constants/testMessages';
import { closeChat } from '../../../../redux/chat/chatSlice';
import { styles } from './CharFrom.styles';
import ChatMessage from './ChatMessage';

const ChatForm = () => {
  const chatWrapperRef = useRef(null);
  const textFieldRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isUserAtBottom, setIsUserAtBottom] = useState(true);
  const [textFieldHeight, setTextFieldHeight] = useState(23); // Default minHeight
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeChat({ chatElement: 'chat' }));
  };
  const { data: info } = useSelector(selectCurrentUser);
  const { id, firstName, lastName } = info;
  const { data } = useGetAvatarUserQuery(id);
  const userAvatar = data || {};
  const { userPicture } = userAvatar;

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

  return (
    <Box sx={styles.container}>
      <Box sx={styles.wrapper}>
        <UserAvatar
          radius='circle'
          size='m'
          src={userPicture}
          userFirstName={firstName}
          userLastName={lastName}
          userName={`${firstName} ${lastName}`}
        />
        <Typography sx={styles.name} variant='h6'>{`${firstName} ${lastName}`}</Typography>
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
      <form>
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
    </Box>
  );
};

export default ChatForm;
